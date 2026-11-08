import { supabase } from './supabaseClient';

// Helper to get or create a persistent session ID for the visitor
const getSessionId = () => {
  try {
    let sid = sessionStorage.getItem('gh_session_id');
    if (!sid) {
      sid = 'sid_' + Math.random().toString(36).substring(2, 11) + '_' + Date.now();
      sessionStorage.setItem('gh_session_id', sid);
    }
    return sid;
  } catch (err) {
    return 'fallback_sid_' + Date.now();
  }
};

/**
 * Track an anonymous page view in Supabase
 */
export async function trackPageView(pagePath) {
  try {
    const sessionId = getSessionId();
    await supabase.from('site_events').insert([
      {
        event_type: 'page_view',
        page_path: pagePath,
        session_id: sessionId,
        metadata: {
          referrer: document.referrer || 'direct',
          viewport: `${window.innerWidth}x${window.innerHeight}`
        }
      }
    ]);
  } catch (err) {
    console.warn('Analytics tracking error:', err);
  }
}

/**
 * Track user interaction clicks (e.g. phone call clicks, modal opens)
 */
export async function trackInteraction(eventType, metadata = {}) {
  try {
    const sessionId = getSessionId();
    await supabase.from('site_events').insert([
      {
        event_type: eventType,
        page_path: window.location.hash.replace('#', '') || 'home',
        session_id: sessionId,
        metadata
      }
    ]);
  } catch (err) {
    console.warn('Interaction tracking error:', err);
  }
}

/**
 * Log a submitted quote request lead into both quote_leads and site_events
 */
export async function logQuoteLead(leadData) {
  try {
    const sessionId = getSessionId();

    // 1. Insert into quote_leads table
    const { data, error } = await supabase.from('quote_leads').insert([
      {
        name: leadData.name,
        email: leadData.email,
        phone: leadData.phone || '',
        zip_code: leadData.zipCode || '29072',
        service_type: leadData.serviceType,
        property_size: leadData.propertySize,
        frequency: leadData.frequency,
        estimate_range: leadData.estimateRange || '',
        estimate_min: Number(leadData.estimateMin) || 0,
        estimate_max: Number(leadData.estimateMax) || 0,
        bundle_cleaning: Boolean(leadData.bundleCleaning),
        status: 'new'
      }
    ]).select();

    // 2. Insert corresponding conversion event in site_events
    await supabase.from('site_events').insert([
      {
        event_type: 'quote_submit',
        page_path: window.location.hash.replace('#', '') || 'quote-card',
        session_id: sessionId,
        metadata: {
          serviceType: leadData.serviceType,
          estimateRange: leadData.estimateRange,
          estimateMin: leadData.estimateMin,
          estimateMax: leadData.estimateMax,
          bundleCleaning: leadData.bundleCleaning
        }
      }
    ]);

    return { success: !error, data };
  } catch (err) {
    console.error('Error logging quote lead:', err);
    return { success: false, error: err };
  }
}

/**
 * Fetch performance metrics for the Admin Dashboard
 */
export async function fetchDashboardData(days = 30) {
  try {
    const sinceDate = new Date();
    sinceDate.setDate(sinceDate.getDate() - days);
    const isoString = sinceDate.toISOString();

    // Parallel fetch events and leads from Supabase
    const [eventsRes, leadsRes] = await Promise.all([
      supabase
        .from('site_events')
        .select('*')
        .gte('created_at', isoString)
        .order('created_at', { ascending: true }),
      supabase
        .from('quote_leads')
        .select('*')
        .gte('created_at', isoString)
        .order('created_at', { ascending: false })
    ]);

    const events = eventsRes.data || [];
    const leads = leadsRes.data || [];

    // Aggregate unique visitors & page views
    const pageViews = events.filter(e => e.event_type === 'page_view');
    const uniqueSessions = new Set(events.map(e => e.session_id)).size;
    const phoneClicks = events.filter(e => e.event_type === 'phone_click').length;

    // Pipeline value calculations from real leads
    const totalPipelineValue = leads.reduce((sum, lead) => {
      const avg = ((Number(lead.estimate_min) || 0) + (Number(lead.estimate_max) || 0)) / 2;
      return sum + avg;
    }, 0);

    const conversionRate = uniqueSessions > 0
      ? ((leads.length / uniqueSessions) * 100).toFixed(1)
      : '0.0';

    // Group traffic & leads by day for chart
    const dailyMap = {};
    for (let i = days - 1; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      const dateKey = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
      dailyMap[dateKey] = { date: dateKey, visitors: 0, pageViews: 0, leads: 0 };
    }

    events.forEach(e => {
      const d = new Date(e.created_at);
      const dateKey = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
      if (dailyMap[dateKey]) {
        if (e.event_type === 'page_view') dailyMap[dateKey].pageViews++;
        dailyMap[dateKey].visitors++;
      }
    });

    leads.forEach(l => {
      const d = new Date(l.created_at);
      const dateKey = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
      if (dailyMap[dateKey]) {
        dailyMap[dateKey].leads++;
      }
    });

    // Breakdown by service
    const serviceBreakdown = {};
    leads.forEach(l => {
      const s = l.service_type || 'unspecified';
      serviceBreakdown[s] = (serviceBreakdown[s] || 0) + 1;
    });

    return {
      success: true,
      metrics: {
        totalVisitors: uniqueSessions,
        totalPageViews: pageViews.length,
        totalLeads: leads.length,
        phoneClicks,
        conversionRate,
        pipelineValue: Math.round(totalPipelineValue)
      },
      chartData: Object.values(dailyMap),
      serviceBreakdown,
      leads
    };
  } catch (err) {
    console.error('Error fetching dashboard data:', err);
    return {
      success: false,
      error: err,
      metrics: {
        totalVisitors: 0,
        totalPageViews: 0,
        totalLeads: 0,
        phoneClicks: 0,
        conversionRate: '0.0',
        pipelineValue: 0
      },
      chartData: [],
      serviceBreakdown: {},
      leads: []
    };
  }
}

/**
 * Update lead status (e.g. 'new', 'contacted', 'booked', 'archived')
 */
export async function updateLeadStatus(leadId, newStatus) {
  try {
    const { error } = await supabase
      .from('quote_leads')
      .update({ status: newStatus })
      .eq('id', leadId);
    return !error;
  } catch (err) {
    console.error('Error updating lead status:', err);
    return false;
  }
}
