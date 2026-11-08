import React, { useState, useEffect } from 'react';
import { 
  Users, 
  TrendingUp, 
  DollarSign, 
  PhoneCall, 
  Calendar, 
  Download, 
  RefreshCw, 
  CheckCircle2, 
  Clock, 
  Lock, 
  ArrowLeft,
  Mail,
  MapPin,
  Sparkles,
  Layers,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { fetchDashboardData, updateLeadStatus } from '../utils/analytics';
import { companyConfig } from '../data/companyConfig';

export default function AdminDashboardPage({ onNavigate }) {
  // Authentication PIN state (stored in sessionStorage)
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => sessionStorage.getItem('gh_admin_auth') === 'true'
  );
  const [pinInput, setPinInput] = useState('');
  const [pinError, setPinError] = useState(false);

  // Dashboard Data State
  const [timeRange, setTimeRange] = useState(30); // 7, 30, 90 days
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({
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
  });
  const [leadFilter, setLeadFilter] = useState('all'); // all, new, contacted, booked
  const [updatingLeadId, setUpdatingLeadId] = useState(null);

  const loadData = async (days = timeRange) => {
    setLoading(true);
    const result = await fetchDashboardData(days);
    if (result.success) {
      setData(result);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (isAuthenticated) {
      loadData(timeRange);
    }
  }, [isAuthenticated, timeRange]);

  const handlePinSubmit = (e) => {
    e.preventDefault();
    // Default Owner PIN is 1234
    if (pinInput === '1234') {
      sessionStorage.setItem('gh_admin_auth', 'true');
      setIsAuthenticated(true);
      setPinError(false);
    } else {
      setPinError(true);
      setPinInput('');
    }
  };

  const handleStatusChange = async (leadId, newStatus) => {
    setUpdatingLeadId(leadId);
    const success = await updateLeadStatus(leadId, newStatus);
    if (success) {
      setData(prev => ({
        ...prev,
        leads: prev.leads.map(lead => 
          lead.id === leadId ? { ...lead, status: newStatus } : lead
        )
      }));
    }
    setUpdatingLeadId(null);
  };

  const exportToCSV = () => {
    if (!data.leads.length) return;
    const headers = ['Date', 'Name', 'Email', 'Phone', 'Zip Code', 'Service', 'Property Size', 'Frequency', 'Estimate', 'Status'];
    const rows = data.leads.map(l => [
      new Date(l.created_at).toLocaleDateString(),
      `"${l.name || ''}"`,
      `"${l.email || ''}"`,
      `"${l.phone || ''}"`,
      `"${l.zip_code || ''}"`,
      `"${l.service_type || ''}"`,
      `"${l.property_size || ''}"`,
      `"${l.frequency || ''}"`,
      `"${l.estimate_range || ''}"`,
      `"${l.status || 'new'}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `groundhelp-leads-${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // If locked, render sleek PIN entry screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#0e1711] flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-[#16241a] border border-[#2b4432] rounded-3xl p-8 shadow-2xl text-center">
          <div className="w-14 h-14 bg-[#8ce03f]/15 rounded-2xl flex items-center justify-center mx-auto mb-5 text-[#8ce03f]">
            <Lock className="w-7 h-7" />
          </div>
          <h2 className="text-2xl font-bold text-white tracking-tight">GroundHelp Owner Portal</h2>
          <p className="text-xs text-slate-400 mt-1.5 mb-6">
            Enter your 4-digit PIN to access live site performance & quote pipeline.
          </p>

          <form onSubmit={handlePinSubmit} className="space-y-4">
            <input
              type="password"
              maxLength={6}
              autoFocus
              placeholder="Enter PIN (Default: 1234)"
              value={pinInput}
              onChange={(e) => setPinInput(e.target.value)}
              className="w-full text-center tracking-widest text-xl font-bold bg-[#0f1a12] border border-[#263e2c] text-white rounded-xl py-3 focus:outline-none focus:ring-2 focus:ring-[#8ce03f]"
            />
            {pinError && (
              <p className="text-xs font-semibold text-rose-400">Incorrect PIN. Try 1234.</p>
            )}

            <button
              type="submit"
              className="w-full bg-[#8ce03f] hover:bg-[#7ecc34] text-[#141f17] font-bold py-3 rounded-xl text-sm transition-all shadow-md"
            >
              Unlock Dashboard
            </button>
          </form>

          <button
            onClick={() => onNavigate('home')}
            className="mt-6 text-xs text-slate-400 hover:text-white flex items-center justify-center mx-auto space-x-1"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to public website</span>
          </button>
        </div>
      </div>
    );
  }

  // Filter leads table
  const filteredLeads = data.leads.filter(l => {
    if (leadFilter === 'all') return true;
    return (l.status || 'new') === leadFilter;
  });

  // Calculate highest chart value for proportional SVG bars
  const maxChartValue = Math.max(
    ...data.chartData.map(d => Math.max(d.visitors, d.leads * 5)),
    10
  );

  return (
    <div className="min-h-screen bg-[#0e1711] text-white py-8 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-6">

        {/* Top Header Bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-[#213827]">
          <div className="flex items-center space-x-3">
            <button
              onClick={() => onNavigate('home')}
              className="p-2.5 rounded-xl bg-[#18281d] hover:bg-[#203627] text-slate-300 transition-colors"
              title="Back to site"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <div className="flex items-center space-x-2">
                <h1 className="text-2xl font-black tracking-tight text-white">Performance Dashboard</h1>
                <span className="flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Supabase Live</span>
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                Real-time traffic, conversion rates, and instant quote pipeline for Lexington, SC
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            {/* Time range switcher */}
            <div className="bg-[#16241a] p-1 rounded-xl border border-[#27402d] flex text-xs">
              {[7, 30, 90].map((days) => (
                <button
                  key={days}
                  onClick={() => setTimeRange(days)}
                  className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
                    timeRange === days
                      ? 'bg-[#8ce03f] text-[#141f17]'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Last {days}d
                </button>
              ))}
            </div>

            <button
              onClick={() => loadData(timeRange)}
              disabled={loading}
              className="p-2 rounded-xl bg-[#18281d] hover:bg-[#203627] text-slate-300 transition-colors flex items-center space-x-1.5 text-xs font-semibold px-3"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin text-[#8ce03f]' : ''}`} />
              <span className="hidden sm:inline">Refresh</span>
            </button>

            <button
              onClick={exportToCSV}
              disabled={!data.leads.length}
              className="px-3.5 py-2 rounded-xl bg-[#203525] hover:bg-[#2a4531] text-[#8ce03f] border border-[#33563c] text-xs font-bold flex items-center space-x-1.5 transition-colors disabled:opacity-50"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export CSV</span>
            </button>
          </div>
        </div>

        {/* Topline KPI Cards (Shopify Style) */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4">
          {/* Card 1: Visitors */}
          <div className="bg-[#152319] border border-[#253e2b] rounded-2xl p-4 sm:p-5 shadow-sm">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs font-semibold uppercase tracking-wider">Site Visitors</span>
              <Users className="w-4 h-4 text-[#8ce03f]" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white">
              {data.metrics.totalVisitors.toLocaleString()}
            </div>
            <p className="text-[11px] text-slate-400 mt-1">
              {data.metrics.totalPageViews} total page views
            </p>
          </div>

          {/* Card 2: Quote Leads */}
          <div className="bg-[#152319] border border-[#253e2b] rounded-2xl p-4 sm:p-5 shadow-sm">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs font-semibold uppercase tracking-wider">Quote Leads</span>
              <Sparkles className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">
              {data.metrics.totalLeads}
            </div>
            <p className="text-[11px] text-slate-400 mt-1">
              Captured via Instant Quote
            </p>
          </div>

          {/* Card 3: Conversion Rate */}
          <div className="bg-[#152319] border border-[#253e2b] rounded-2xl p-4 sm:p-5 shadow-sm">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs font-semibold uppercase tracking-wider">Conversion Rate</span>
              <TrendingUp className="w-4 h-4 text-cyan-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white">
              {data.metrics.conversionRate}%
            </div>
            <p className="text-[11px] text-slate-400 mt-1">
              Visitor to quote conversion
            </p>
          </div>

          {/* Card 4: Est. Pipeline Value */}
          <div className="bg-[#152319] border border-[#253e2b] rounded-2xl p-4 sm:p-5 shadow-sm">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs font-semibold uppercase tracking-wider">Est. Pipeline</span>
              <DollarSign className="w-4 h-4 text-amber-300" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-300">
              ${data.metrics.pipelineValue.toLocaleString()}
            </div>
            <p className="text-[11px] text-slate-400 mt-1">
              Calculated ballpark total
            </p>
          </div>

          {/* Card 5: Phone Call Clicks */}
          <div className="bg-[#152319] border border-[#253e2b] rounded-2xl p-4 sm:p-5 shadow-sm col-span-2 lg:col-span-1">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs font-semibold uppercase tracking-wider">Call Taps</span>
              <PhoneCall className="w-4 h-4 text-violet-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white">
              {data.metrics.phoneClicks}
            </div>
            <p className="text-[11px] text-slate-400 mt-1">
              Direct {companyConfig.phone} clicks
            </p>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* Activity Over Time (SVG Bar Trend) */}
          <div className="lg:col-span-8 bg-[#142017] border border-[#233829] rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                  Traffic & Quote Activity Trend
                </h3>
                <p className="text-xs text-slate-400">Daily visitor sessions vs. quote submissions</p>
              </div>
              <div className="flex items-center space-x-3 text-xs">
                <span className="flex items-center space-x-1.5 text-slate-300">
                  <span className="w-2.5 h-2.5 rounded-sm bg-[#8ce03f]"></span>
                  <span>Visitors</span>
                </span>
                <span className="flex items-center space-x-1.5 text-slate-300">
                  <span className="w-2.5 h-2.5 rounded-sm bg-cyan-400"></span>
                  <span>Quotes</span>
                </span>
              </div>
            </div>

            {/* SVG Interactive Trend Visualizer */}
            {data.chartData.length > 0 ? (
              <div className="h-48 w-full flex items-end gap-1 sm:gap-2 pt-6">
                {data.chartData.map((d, idx) => {
                  const visitorHeight = Math.max((d.visitors / maxChartValue) * 100, 4);
                  const leadHeight = Math.max((d.leads / (maxChartValue / 4 || 1)) * 100, d.leads > 0 ? 12 : 0);

                  return (
                    <div key={idx} className="flex-1 flex flex-col items-center h-full justify-end group relative">
                      {/* Tooltip on hover */}
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-full mb-2 bg-[#09100b] border border-[#2b4431] text-[10px] rounded-lg p-2 pointer-events-none whitespace-nowrap z-20 shadow-xl">
                        <div className="font-bold text-white">{d.date}</div>
                        <div className="text-[#8ce03f]">{d.visitors} visitors</div>
                        <div className="text-cyan-400">{d.leads} quotes submitted</div>
                      </div>

                      <div className="w-full flex items-end justify-center space-x-0.5 h-full">
                        {/* Visitor bar */}
                        <div 
                          style={{ height: `${visitorHeight}%` }}
                          className="w-full max-w-[12px] bg-[#8ce03f]/70 group-hover:bg-[#8ce03f] rounded-t-sm transition-all"
                        ></div>
                        {/* Quote bar */}
                        {d.leads > 0 && (
                          <div 
                            style={{ height: `${leadHeight}%` }}
                            className="w-full max-w-[8px] bg-cyan-400 group-hover:bg-cyan-300 rounded-t-sm transition-all"
                          ></div>
                        )}
                      </div>

                      {/* Date label on every 5th or 7th day */}
                      {(idx % Math.ceil(data.chartData.length / 6) === 0 || idx === data.chartData.length - 1) && (
                        <span className="text-[9px] text-slate-500 mt-2 font-mono">{d.date.split(' ')[1]}</span>
                      )}
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="h-48 flex items-center justify-center text-xs text-slate-500">
                Awaiting first site visits to render chart...
              </div>
            )}
          </div>

          {/* Service Demand Breakdown */}
          <div className="lg:col-span-4 bg-[#142017] border border-[#233829] rounded-2xl p-6 shadow-sm">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-1">
              Service Demand Share
            </h3>
            <p className="text-xs text-slate-400 mb-5">Breakdown of requested services</p>

            <div className="space-y-4">
              {[
                { key: 'lawn-maintenance', label: 'Routine Lawn Care', color: 'bg-[#8ce03f]' },
                { key: 'landscape-seasonal', label: 'Landscape & Mulch', color: 'bg-emerald-400' },
                { key: 'exterior-cleaning', label: 'Exterior Soft Wash', color: 'bg-cyan-400' },
                { key: 'christmas-lights', label: 'Christmas Lights', color: 'bg-amber-300' },
                { key: 'ground-help-clean', label: 'Clean (Waitlist)', color: 'bg-violet-400' },
                { key: 'commercial-hoa', label: 'Commercial & HOA', color: 'bg-indigo-400' }
              ].map(item => {
                const count = data.serviceBreakdown[item.key] || 0;
                const percent = data.metrics.totalLeads > 0 
                  ? Math.round((count / data.metrics.totalLeads) * 100) 
                  : 0;

                return (
                  <div key={item.key} className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-300 font-medium">{item.label}</span>
                      <span className="text-slate-400 font-mono">{count} ({percent}%)</span>
                    </div>
                    <div className="w-full bg-[#1b2b20] h-2 rounded-full overflow-hidden">
                      <div 
                        style={{ width: `${percent}%` }}
                        className={`h-full ${item.color} rounded-full transition-all duration-500`}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Live Leads Table / Mini-CRM */}
        <div className="bg-[#142017] border border-[#233829] rounded-2xl p-6 shadow-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-[#213726]">
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="text-base font-bold text-white">Live Quote Leads</h3>
                <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-[#8ce03f]/20 text-[#8ce03f]">
                  {data.leads.length} Total
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                Every instant quote submitted on the website appears here in real-time.
              </p>
            </div>

            {/* Filter status buttons */}
            <div className="flex space-x-1 bg-[#192a1f] p-1 rounded-xl text-xs">
              {['all', 'new', 'contacted', 'booked'].map((status) => (
                <button
                  key={status}
                  onClick={() => setLeadFilter(status)}
                  className={`px-3 py-1 rounded-lg capitalize font-medium transition-all ${
                    leadFilter === status
                      ? 'bg-[#8ce03f] text-[#141f17] font-bold shadow'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>

          {/* Leads List */}
          {filteredLeads.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-[#223928] text-slate-400 uppercase tracking-wider font-semibold">
                    <th className="pb-3 pr-4">Customer</th>
                    <th className="pb-3 px-4">Service & Lot</th>
                    <th className="pb-3 px-4">Contact</th>
                    <th className="pb-3 px-4">Estimate</th>
                    <th className="pb-3 px-4">Date</th>
                    <th className="pb-3 pl-4">Lead Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1e3324]">
                  {filteredLeads.map((lead) => (
                    <tr key={lead.id} className="hover:bg-[#18281d] transition-colors">
                      {/* Customer Name & Zip */}
                      <td className="py-3.5 pr-4">
                        <div className="font-bold text-white text-sm">{lead.name}</div>
                        <div className="text-slate-400 flex items-center mt-0.5">
                          <MapPin className="w-3 h-3 mr-1 text-[#8ce03f]" />
                          <span>{lead.zip_code || '29072'} (Lexington)</span>
                        </div>
                      </td>

                      {/* Service & Property */}
                      <td className="py-3.5 px-4">
                        <div className="text-slate-200 font-medium capitalize">
                          {lead.service_type?.replace('-', ' ') || 'Lawn Maintenance'}
                        </div>
                        <div className="text-slate-400 capitalize">
                          {lead.property_size} Lot • {lead.frequency}
                        </div>
                        {lead.bundle_cleaning && (
                          <span className="inline-block mt-1 px-1.5 py-0.2 rounded text-[10px] bg-violet-500/20 text-violet-300 font-semibold border border-violet-500/30">
                            + Clean Waitlist
                          </span>
                        )}
                      </td>

                      {/* Contact */}
                      <td className="py-3.5 px-4 space-y-1">
                        <a 
                          href={`mailto:${lead.email}`} 
                          className="flex items-center text-slate-300 hover:text-[#8ce03f] transition-colors"
                        >
                          <Mail className="w-3 h-3 mr-1.5 text-slate-400" />
                          <span>{lead.email}</span>
                        </a>
                        {lead.phone && (
                          <a 
                            href={`tel:${lead.phone}`} 
                            className="flex items-center text-slate-300 hover:text-[#8ce03f] transition-colors"
                          >
                            <PhoneCall className="w-3 h-3 mr-1.5 text-slate-400" />
                            <span>{lead.phone}</span>
                          </a>
                        )}
                      </td>

                      {/* Ballpark Estimate */}
                      <td className="py-3.5 px-4 font-mono font-bold text-amber-300">
                        {lead.estimate_range || `$${lead.estimate_min} - $${lead.estimate_max}`}
                      </td>

                      {/* Date */}
                      <td className="py-3.5 px-4 text-slate-400 whitespace-nowrap">
                        {new Date(lead.created_at).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </td>

                      {/* Status Selector */}
                      <td className="py-3.5 pl-4">
                        <select
                          value={lead.status || 'new'}
                          disabled={updatingLeadId === lead.id}
                          onChange={(e) => handleStatusChange(lead.id, e.target.value)}
                          className={`text-xs font-bold rounded-lg px-2.5 py-1.5 border focus:outline-none transition-colors cursor-pointer ${
                            (lead.status || 'new') === 'new'
                              ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                              : (lead.status || 'new') === 'contacted'
                              ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40'
                              : (lead.status || 'new') === 'booked'
                              ? 'bg-[#8ce03f]/20 text-[#8ce03f] border-[#8ce03f]/40'
                              : 'bg-slate-700 text-slate-300 border-slate-600'
                          }`}
                        >
                          <option value="new" className="bg-[#142017] text-white">New Lead</option>
                          <option value="contacted" className="bg-[#142017] text-white">Contacted</option>
                          <option value="booked" className="bg-[#142017] text-white">Booked / Won</option>
                          <option value="archived" className="bg-[#142017] text-white">Archived</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center py-12 px-4 rounded-xl bg-[#0f1912] border border-[#1f3324] space-y-2">
              <CheckCircle2 className="w-8 h-8 text-[#8ce03f] mx-auto opacity-70" />
              <div className="text-sm font-bold text-white">No Leads Recorded Yet</div>
              <p className="text-xs text-slate-400 max-w-sm mx-auto">
                Once visitors submit the Instant Quote calculator on the website, their details and ballpark prices will stream directly here.
              </p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
