import { useState } from "react";
import {
  DropletIcon,
  Users,
  ClipboardList,
  HeartPulse,
  Bell,
  Menu,
  X,
  LogOut,
  Home,
  Settings,
  ChevronUp,
  ChevronDown,
  Search,
} from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

// ── Data ──────────────────────────────────────────────────────────────────────
const areaData = [
  { month: "Jan", donations: 40, requests: 24 },
  { month: "Feb", donations: 55, requests: 38 },
  { month: "Mar", donations: 47, requests: 30 },
  { month: "Apr", donations: 70, requests: 55 },
  { month: "May", donations: 65, requests: 48 },
  { month: "Jun", donations: 90, requests: 70 },
  { month: "Jul", donations: 110, requests: 85 },
];

const bloodData = [
  { name: "O+", value: 28, color: "#f87171" },
  { name: "A+", value: 22, color: "#fb923c" },
  { name: "B+", value: 18, color: "#facc15" },
  { name: "AB+", value: 10, color: "#4ade80" },
  { name: "O-", value: 10, color: "#60a5fa" },
  { name: "A-", value: 7, color: "#c084fc" },
  { name: "B-", value: 3, color: "#f472b6" },
  { name: "AB-", value: 2, color: "#94a3b8" },
];

const recentRequests = [
  {
    id: 1,
    name: "Rahim Uddin",
    blood: "O+",
    hospital: "Dhaka Medical",
    urgency: "Critical",
    time: "5 min ago",
  },
  {
    id: 2,
    name: "Fatema Begum",
    blood: "A-",
    hospital: "Square Hospital",
    urgency: "High",
    time: "22 min ago",
  },
  {
    id: 3,
    name: "Karim Hossain",
    blood: "B+",
    hospital: "BIRDEM",
    urgency: "Normal",
    time: "1 hr ago",
  },
  {
    id: 4,
    name: "Nusrat Jahan",
    blood: "AB+",
    hospital: "Popular Medical",
    urgency: "High",
    time: "2 hr ago",
  },
  {
    id: 5,
    name: "Saiful Islam",
    blood: "O-",
    hospital: "Ibn Sina",
    urgency: "Critical",
    time: "3 hr ago",
  },
];

const topDonors = [
  { name: "Arif Khan", blood: "O-", donations: 12, badge: "🏆" },
  { name: "Mitu Akter", blood: "A+", donations: 9, badge: "🥈" },
  { name: "Rafiq Mia", blood: "B+", donations: 7, badge: "🥉" },
  { name: "Shila Parvin", blood: "AB+", donations: 5, badge: "⭐" },
];

const urgencyStyle = {
  Critical: "bg-red-100 text-red-600 border border-red-200",
  High: "bg-orange-100 text-orange-600 border border-orange-200",
  Normal: "bg-green-100 text-green-600 border border-green-200",
};

// ── Sub-components ─────────────────────────────────────────────────────────────
const StatCard = ({ icon: Icon, label, value, delta, positive, color }) => (
  <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow">
    <div
      className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${color}`}
    >
      <Icon size={22} className="text-white" />
    </div>
    <div className="flex-1 min-w-0">
      <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">
        {label}
      </p>
      <p className="text-2xl font-bold text-gray-800 leading-tight">{value}</p>
    </div>
    <div
      className={`flex items-center gap-0.5 text-xs font-semibold ${positive ? "text-green-500" : "text-red-400"}`}
    >
      {positive ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
      {delta}
    </div>
  </div>
);

// ── Main Dashboard ─────────────────────────────────────────────────────────────
const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activePage, setActivePage] = useState("Dashboard");

  const navItems = [
    { label: "Dashboard", icon: Home },
    { label: "Requests", icon: ClipboardList },
    { label: "Donors", icon: Users },
    { label: "Blood Stock", icon: DropletIcon },
    { label: "Settings", icon: Settings },
  ];

  return (
    <div
      style={{ fontFamily: "'DM Sans', sans-serif" }}
      className="flex h-screen bg-gray-50 overflow-hidden"
    >
      {/* ── Sidebar ── */}
      <aside
        className={`
        fixed inset-y-0 left-0 z-40 w-60 bg-gray-900 flex flex-col transition-transform duration-300
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        lg:static lg:translate-x-0 lg:flex
      `}
      >
        {/* Logo */}
        <div className="flex items-center gap-3 px-6 py-5 border-b border-gray-800">
          <div className="w-9 h-9 rounded-xl bg-red-500 flex items-center justify-center text-lg shadow-lg">
            🩸
          </div>
          <span className="text-white font-bold text-lg tracking-tight">
            BloodDrops
          </span>
          <button
            className="ml-auto lg:hidden text-gray-400 hover:text-white"
            onClick={() => setSidebarOpen(false)}
          >
            <X size={18} />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          {navItems.map(({ label, icon: Icon }) => (
            <button
              key={label}
              onClick={() => {
                setActivePage(label);
                setSidebarOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                activePage === label
                  ? "bg-red-500 text-white shadow-md"
                  : "text-gray-400 hover:bg-gray-800 hover:text-white"
              }`}
            >
              <Icon size={18} />
              {label}
            </button>
          ))}
        </nav>

        {/* User */}
        <div className="px-4 py-4 border-t border-gray-800 flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-red-400 flex items-center justify-center text-white font-bold text-sm shrink-0">
            A
          </div>
          <div className="min-w-0">
            <p className="text-white text-sm font-semibold truncate">
              Admin User
            </p>
            <p className="text-gray-500 text-xs truncate">
              admin@blooddrops.com
            </p>
          </div>
          <button className="ml-auto text-gray-500 hover:text-red-400 transition-colors shrink-0">
            <LogOut size={16} />
          </button>
        </div>
      </aside>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* ── Main ── */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Topbar */}
        <header className="bg-white border-b border-gray-100 px-4 md:px-6 py-4 flex items-center gap-4 shrink-0">
          <button
            className="lg:hidden text-gray-500 hover:text-gray-800"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu size={22} />
          </button>
          <div>
            <h1 className="text-lg font-bold text-gray-800 leading-tight">
              {activePage}
            </h1>
            <p className="text-xs text-gray-400 hidden sm:block">
              Welcome back, Admin 👋
            </p>
          </div>
          <div className="ml-auto flex items-center gap-3">
            {/* Search */}
            <div className="hidden md:flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl px-3 py-2">
              <Search size={15} className="text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent text-sm outline-none text-gray-600 w-36 placeholder:text-gray-400"
              />
            </div>
            {/* Notification */}
            <button className="relative w-9 h-9 flex items-center justify-center rounded-xl bg-gray-50 border border-gray-200 hover:bg-red-50 hover:border-red-200 transition-colors">
              <Bell size={17} className="text-gray-500" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
            </button>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto px-4 md:px-6 py-6 space-y-6">
          {/* Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            <StatCard
              icon={ClipboardList}
              label="Total Requests"
              value="2,597"
              delta="12%"
              positive={false}
              color="bg-red-400"
            />
            <StatCard
              icon={HeartPulse}
              label="Total Donations"
              value="3,587"
              delta="8%"
              positive={true}
              color="bg-orange-400"
            />
            <StatCard
              icon={Users}
              label="Registered Donors"
              value="313"
              delta="5%"
              positive={true}
              color="bg-blue-400"
            />
            <StatCard
              icon={DropletIcon}
              label="Units in Stock"
              value="1,042"
              delta="3%"
              positive={true}
              color="bg-green-400"
            />
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Area Chart */}
            <div className="lg:col-span-2 bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-bold text-gray-800">
                    Donations vs Requests
                  </h3>
                  <p className="text-xs text-gray-400">Last 7 months</p>
                </div>
                <span className="text-xs bg-red-50 text-red-400 px-3 py-1 rounded-full font-medium border border-red-100">
                  2025
                </span>
              </div>
              <ResponsiveContainer width="100%" height={220}>
                <AreaChart data={areaData}>
                  <defs>
                    <linearGradient id="colorDon" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#f87171" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#f87171" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorReq" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#fb923c" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#fb923c" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
                  <XAxis
                    dataKey="month"
                    tick={{ fontSize: 12, fill: "#9ca3af" }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    tick={{ fontSize: 12, fill: "#9ca3af" }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip
                    contentStyle={{
                      borderRadius: "12px",
                      border: "1px solid #f3f4f6",
                      fontSize: 12,
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="donations"
                    stroke="#f87171"
                    strokeWidth={2}
                    fill="url(#colorDon)"
                    name="Donations"
                  />
                  <Area
                    type="monotone"
                    dataKey="requests"
                    stroke="#fb923c"
                    strokeWidth={2}
                    fill="url(#colorReq)"
                    name="Requests"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Pie Chart */}
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
              <div className="mb-4">
                <h3 className="font-bold text-gray-800">Blood Stock</h3>
                <p className="text-xs text-gray-400">By blood type</p>
              </div>
              <ResponsiveContainer width="100%" height={220}>
                <PieChart>
                  <Pie
                    data={bloodData}
                    cx="50%"
                    cy="50%"
                    innerRadius={55}
                    outerRadius={85}
                    paddingAngle={3}
                    dataKey="value"
                  >
                    {bloodData.map((entry, i) => (
                      <Cell key={i} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      borderRadius: "12px",
                      border: "1px solid #f3f4f6",
                      fontSize: 12,
                    }}
                  />
                  <Legend
                    iconType="circle"
                    iconSize={8}
                    wrapperStyle={{ fontSize: 11 }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Recent Requests */}
            <div className="lg:col-span-2 bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-bold text-gray-800">Recent Requests</h3>
                  <p className="text-xs text-gray-400">Latest blood requests</p>
                </div>
                <button className="text-xs text-red-400 font-semibold hover:underline">
                  View all
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm min-w-[480px]">
                  <thead>
                    <tr className="text-gray-400 text-xs uppercase tracking-wide border-b border-gray-100">
                      <th className="text-left pb-3 font-medium">Patient</th>
                      <th className="text-left pb-3 font-medium">Blood</th>
                      <th className="text-left pb-3 font-medium hidden sm:table-cell">
                        Hospital
                      </th>
                      <th className="text-left pb-3 font-medium">Urgency</th>
                      <th className="text-left pb-3 font-medium hidden md:table-cell">
                        Time
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {recentRequests.map(
                      ({ id, name, blood, hospital, urgency, time }) => (
                        <tr
                          key={id}
                          className="hover:bg-gray-50 transition-colors"
                        >
                          <td className="py-3 font-medium text-gray-700">
                            {name}
                          </td>
                          <td className="py-3">
                            <span className="w-8 h-8 rounded-full bg-red-400 text-white text-xs font-bold flex items-center justify-center shadow-sm">
                              {blood}
                            </span>
                          </td>
                          <td className="py-3 text-gray-500 hidden sm:table-cell">
                            {hospital}
                          </td>
                          <td className="py-3">
                            <span
                              className={`text-xs px-2 py-1 rounded-full font-semibold ${urgencyStyle[urgency]}`}
                            >
                              {urgency}
                            </span>
                          </td>
                          <td className="py-3 text-gray-400 text-xs hidden md:table-cell">
                            {time}
                          </td>
                        </tr>
                      ),
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Top Donors */}
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-bold text-gray-800">Top Donors</h3>
                  <p className="text-xs text-gray-400">
                    Most active this month
                  </p>
                </div>
                <button className="text-xs text-red-400 font-semibold hover:underline">
                  See all
                </button>
              </div>
              <div className="space-y-3">
                {topDonors.map(({ name, blood, donations, badge }) => (
                  <div
                    key={name}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-xl shrink-0">{badge}</span>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-gray-800 text-sm truncate">
                        {name}
                      </p>
                      <p className="text-xs text-gray-400">
                        {donations} donations
                      </p>
                    </div>
                    <span className="w-8 h-8 rounded-full bg-red-400 text-white text-xs font-bold flex items-center justify-center shrink-0 shadow-sm">
                      {blood}
                    </span>
                  </div>
                ))}
              </div>

              {/* Quick blood stock */}
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">
                  Stock Alert
                </p>
                {[
                  { type: "O-", pct: 15 },
                  { type: "AB-", pct: 22 },
                  { type: "B-", pct: 34 },
                ].map(({ type, pct }) => (
                  <div key={type} className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-bold text-gray-600 w-8">
                      {type}
                    </span>
                    <div className="flex-1 bg-gray-100 rounded-full h-1.5">
                      <div
                        className="h-1.5 rounded-full bg-red-400"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                    <span className="text-xs text-red-400 font-semibold w-8 text-right">
                      {pct}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
