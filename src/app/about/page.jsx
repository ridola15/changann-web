'use client';

import { useState } from 'react';
import { 
  Zap, 
  ShieldCheck, 
  Award, 
  Users, 
  MapPin, 
  Phone, 
  Mail, 
  CheckCircle2, 
  Menu, 
  X,
  ChevronRight
} from 'lucide-react';

export default function About() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Deklarasi Nomor WA Sales
  const SALES_WA_NUMBER = "6285885926665"; 

  const handleDirectWA = () => {
    const message = "Halo Pak Paschal, saya ingin bertanya lebih lanjut mengenai Dealer Resmi Changan Indonesia.";
    const waUrl = `https://wa.me/${SALES_WA_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 overflow-x-hidden w-full relative">
      {/* 1. Header Navigation */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-slate-950/80 border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 sm:gap-3 group shrink-0">
            <img 
              src="/logo/changan-logo.jpeg" 
              alt="Changan Logo"
              className="h-10 sm:h-12 w-auto object-contain group-hover:scale-105 transition-transform" 
            />
            <span className="text-base sm:text-xl font-extrabold tracking-wider sm:tracking-widest flex items-center">
              <span className="text-[#0B457F]">CHANGAN</span>
              <span className="text-[10px] sm:text-xs tracking-normal text-cyan-400 border border-cyan-500/40 px-1.5 sm:px-2 py-0.5 rounded-full ml-1.5 whitespace-nowrap">
                EV ID
              </span>
            </span>
          </a>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="/" className="hover:text-cyan-400 transition">Home</a>
            <a href="/#models" className="hover:text-cyan-400 transition">Model EV</a>
            <a href="/#simulasi" className="hover:text-cyan-400 transition">Simulasi Biaya EV</a>
            <a href="/#testdrive" className="hover:text-cyan-400 transition">Jadwal Test Drive</a>
            <a href="/about" className="text-cyan-400 font-semibold border-b-2 border-cyan-400 pb-0.5">Tentang Kami</a>

          </nav>

          {/* Action Button & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button 
              onClick={handleDirectWA}
              className="hidden sm:inline-block bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-5 py-2.5 rounded-full text-sm transition shadow-[0_0_20px_rgba(6,182,212,0.4)]"
            >
              Hubungi Sales
            </button>

            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-slate-300 hover:text-cyan-400 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Dropdown Menu Mobile */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-slate-950 border-b border-cyan-500/20 px-6 py-4 flex flex-col gap-4 text-sm font-medium text-slate-300">
            <a href="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-cyan-400 py-1">Home</a>
            <a href="/#models" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-cyan-400 py-1">Model EV</a>
            <a href="/#simulasi" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-cyan-400 py-1">Simulasi Biaya EV</a>
            <a href="/#testdrive" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-cyan-400 py-1">Jadwal Test Drive</a>
            <a href="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-cyan-400 font-semibold py-1">Tentang Kami</a>
            <button 
              onClick={() => { setIsMobileMenuOpen(false); handleDirectWA(); }} 
              className="sm:hidden text-center bg-cyan-500 text-slate-950 font-bold py-2.5 rounded-full mt-2"
            >
              Hubungi Sales
            </button>
          </div>
        )}
      </header>

      {/* 2. Hero About Section */}
      <section className="pt-28 sm:pt-36 pb-12 sm:pb-16 px-4 sm:px-6 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-4">
          <Zap size={14} className="shrink-0" />
          <span>Dealer Resmi Changan Electric Vehicle</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight mb-4">
          Pelopor Mobil Listrik Cerdas <br />
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
            Untuk Masa Depan Indonesia
          </span>
        </h1>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Kami berkomitmen menghadirkan lini kendaraan listrik pintar (EV) dengan teknologi otonom tercanggih, kenyamanan premium, dan layanan purna jual terbaik bagi konsumen di seluruh Indonesia.
        </p>
      </section>

      {/* 3. Stats & Value Proposition */}
      <section className="py-10 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl text-center">
            <Award className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
            <span className="text-2xl sm:text-3xl font-black text-white block">Top 5</span>
            <span className="text-xs text-slate-400">Produsen Otomotif Global</span>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl text-center">
            <Zap className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
            <span className="text-2xl sm:text-3xl font-black text-white block">1100+ KM</span>
            <span className="text-xs text-slate-400">Jarak Tempuh Maksimal</span>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl text-center">
            <ShieldCheck className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
            <span className="text-2xl sm:text-3xl font-black text-white block">8 Tahun</span>
            <span className="text-xs text-slate-400">Garansi Baterai EV</span>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl text-center">
            <Users className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
            <span className="text-2xl sm:text-3xl font-black text-white block">24/7</span>
            <span className="text-xs text-slate-400">Dukungan Sales & Service</span>
          </div>
        </div>
      </section>

      {/* 4. Detail Visi, Misi & Komitmen */}
      <div className="py-12 sm:py-16 px-4 sm:px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="bg-slate-900 border border-slate-800 p-6 sm:p-8 rounded-3xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl"></div>
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">Mengapa Memilih Changan EV?</h2>
          <ul className="space-y-4 text-xs sm:text-sm text-slate-300">
            <li className="flex items-start gap-3">
              <CheckCircle2 size={18} className="text-cyan-400 shrink-0 mt-0.5" />
              <span><strong>Desain Futuristik & Aerodinamis:</strong> Dirancang oleh pusat riset desain internasional di Italia dan Jepang.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 size={18} className="text-cyan-400 shrink-0 mt-0.5" />
              <span><strong>Teknologi Baterai Cerdas:</strong> Proteksi IP68 waterproof, manajemen suhu real-time, dan fitur fast charging DC.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 size={18} className="text-cyan-400 shrink-0 mt-0.5" />
              <span><strong>Autonomous Driving Level 2+:</strong> Dilengkapi radar gelombang milimeter dan kamera 540° untuk keamanan berkendara penuh.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 size={18} className="text-cyan-400 shrink-0 mt-0.5" />
              <span><strong>Layanan Sales Khusus:</strong> Konsultasi unit cepat dan profesional langsung oleh Executive Sales kami.</span>
            </li>
          </ul>
        </div>

        {/* Profil Consultant/Sales Card */}
            <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-cyan-500/30 p-6 sm:p-8 rounded-3xl shadow-xl flex flex-col justify-between">
              <div>
                {/* Foto Profil Sales */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.3)] shrink-0">
                    <img 
                      src="/profil/pf.jpeg" 
                      alt="Paschal Changan ID" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest block mb-0.5">
                      Official Sales Consultant
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-white">Paschal Changan ID</h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-400 mb-6 leading-relaxed">
                  Siap melayani kebutuhan pemesanan, simulasi kredit, jadwal test drive, hingga pengiriman unit ke seluruh wilayah Indonesia.
                </p>

                <div className="space-y-3 text-xs sm:text-sm mb-6 border-t border-slate-800 pt-4">
                  <div className="flex items-center gap-3 text-slate-300">
                    <Phone size={16} className="text-cyan-400 shrink-0" />
                    <span>6285885926665</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-300">
                    <MapPin size={16} className="text-cyan-400 shrink-0" />
                    <span>Changan Pulo Gadung - Indonesia</span>
                  </div>
                </div>
              </div>

              <button
                onClick={handleDirectWA}
                className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold py-3 rounded-xl transition flex items-center justify-center gap-2 text-sm shadow-[0_0_15px_rgba(6,182,212,0.3)]"
              >
                <span>Konsultasi via WhatsApp</span>
                <ChevronRight size={16} />
              </button>
            </div>

      {/* 5. Footer Navigasi Ringkas */}
      <footer className="border-t border-slate-800 py-8 text-center text-xs text-slate-500">
        <p>© {new Date().getFullYear()} Paschal Changan. All rights reserved.</p>
      </footer>
    </div>
  </div>
  );
}