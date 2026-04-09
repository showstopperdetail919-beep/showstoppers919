'use client';

import { useState, useEffect, FormEvent } from 'react';
import { Lock, LogOut, RefreshCw } from 'lucide-react';

type Booking = {
  id: string;
  submittedAt: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  vehicleType: string;
  address: string;
  message?: string;
};

const SERVICE_LABELS: Record<string, string> = {
  'basic-wash': 'Basic Mobile Wash',
  'gold-detail': 'Gold Detail',
  'diamond-detail': 'Diamond Detail',
  'window-tint': 'Window Tint',
  'black-diamond': 'Black Diamond Package',
  'custom-quote': 'Custom Quote',
};

export default function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    if (password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
      setAuthed(true);
      setError('');
    } else {
      setError('Incorrect password.');
    }
  };

  const fetchBookings = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/booking');
      const data = await res.json();
      setBookings(data.bookings || []);
    } catch {
      setBookings([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (authed) fetchBookings();
  }, [authed]);

  if (!authed) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center px-4">
        <div className="w-full max-w-sm">
          <div className="text-center mb-8">
            <div className="w-14 h-14 rounded-full bg-[#C9A84C]/10 flex items-center justify-center mx-auto mb-4">
              <Lock size={24} className="text-[#C9A84C]" />
            </div>
            <h1 className="font-heading font-extrabold text-2xl text-[#FAFAFA]">Admin Access</h1>
            <p className="font-body text-sm text-[#FAFAFA]/50 mt-2">Show Stopper Detailing</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg px-4 py-3 text-sm font-body text-[#FAFAFA] placeholder-[#FAFAFA]/30 focus:outline-none focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C]/30 transition-colors"
            />
            {error && (
              <p className="text-xs font-body text-red-400">{error}</p>
            )}
            <button type="submit" className="w-full btn-gold py-3 text-sm">
              Sign In
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-heading font-extrabold text-2xl text-gradient-gold">
              Booking Submissions
            </h1>
            <p className="font-body text-sm text-[#FAFAFA]/50 mt-1">
              Show Stopper Detailing Admin
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={fetchBookings}
              disabled={loading}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#2A2A2A] text-sm font-body text-[#FAFAFA]/70 hover:border-[#C9A84C]/50 hover:text-[#C9A84C] transition-all"
            >
              <RefreshCw size={14} className={loading ? 'animate-spin' : ''} />
              Refresh
            </button>
            <button
              onClick={() => setAuthed(false)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#2A2A2A] text-sm font-body text-[#FAFAFA]/70 hover:border-red-800/60 hover:text-red-400 transition-all"
            >
              <LogOut size={14} />
              Sign Out
            </button>
          </div>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl px-5 py-4">
            <p className="font-body text-xs text-[#FAFAFA]/40 uppercase tracking-wide">Total Bookings</p>
            <p className="font-heading font-extrabold text-3xl text-gradient-gold mt-1">{bookings.length}</p>
          </div>
          <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl px-5 py-4">
            <p className="font-body text-xs text-[#FAFAFA]/40 uppercase tracking-wide">This Month</p>
            <p className="font-heading font-extrabold text-3xl text-[#FAFAFA] mt-1">
              {bookings.filter((b) => {
                const d = new Date(b.submittedAt);
                const now = new Date();
                return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
              }).length}
            </p>
          </div>
          <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl px-5 py-4 col-span-2 sm:col-span-1">
            <p className="font-body text-xs text-[#FAFAFA]/40 uppercase tracking-wide">Latest Submission</p>
            <p className="font-heading font-semibold text-sm text-[#FAFAFA] mt-1">
              {bookings.length > 0
                ? new Date(bookings[bookings.length - 1].submittedAt).toLocaleDateString()
                : '—'}
            </p>
          </div>
        </div>

        {/* Table */}
        {bookings.length === 0 ? (
          <div className="text-center py-20 bg-[#1A1A1A] rounded-xl border border-[#2A2A2A]">
            <p className="font-heading font-semibold text-xl text-[#FAFAFA]/40">No bookings yet.</p>
            <p className="font-body text-sm text-[#FAFAFA]/25 mt-2">Submissions will appear here once customers book.</p>
          </div>
        ) : (
          <div className="overflow-x-auto rounded-xl border border-[#2A2A2A]">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-[#C9A84C] to-[#A3882E]">
                  {['Date Submitted', 'Name', 'Phone', 'Email', 'Service', 'Vehicle', 'Appt Date', 'Address', 'Notes'].map((h) => (
                    <th key={h} className="px-4 py-3 text-left text-xs font-heading font-bold text-[#0A0A0A] uppercase tracking-wider whitespace-nowrap">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[...bookings].reverse().map((b, idx) => (
                  <tr
                    key={b.id}
                    className={`border-b border-[#2A2A2A] last:border-0 ${idx % 2 === 0 ? 'bg-[#111111]' : 'bg-[#1A1A1A]'} hover:bg-[#C9A84C]/5 transition-colors`}
                  >
                    <td className="px-4 py-3 text-xs font-body text-[#FAFAFA]/60 whitespace-nowrap">
                      {new Date(b.submittedAt).toLocaleDateString()}
                    </td>
                    <td className="px-4 py-3 text-sm font-body font-medium text-[#FAFAFA] whitespace-nowrap">{b.name}</td>
                    <td className="px-4 py-3 text-xs font-body text-[#FAFAFA]/70 whitespace-nowrap">
                      <a href={`tel:${b.phone}`} className="hover:text-[#C9A84C] transition-colors">{b.phone}</a>
                    </td>
                    <td className="px-4 py-3 text-xs font-body text-[#FAFAFA]/70 whitespace-nowrap">
                      <a href={`mailto:${b.email}`} className="hover:text-[#C9A84C] transition-colors">{b.email}</a>
                    </td>
                    <td className="px-4 py-3 text-xs font-body text-[#C9A84C] whitespace-nowrap">
                      {SERVICE_LABELS[b.service] || b.service}
                    </td>
                    <td className="px-4 py-3 text-xs font-body text-[#FAFAFA]/70 whitespace-nowrap">{b.vehicleType}</td>
                    <td className="px-4 py-3 text-xs font-body text-[#FAFAFA]/70 whitespace-nowrap">{b.date}</td>
                    <td className="px-4 py-3 text-xs font-body text-[#FAFAFA]/60 max-w-[150px] truncate">{b.address}</td>
                    <td className="px-4 py-3 text-xs font-body text-[#FAFAFA]/50 max-w-[200px] truncate">{b.message || '—'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
