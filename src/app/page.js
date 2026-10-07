'use client';

import { useState } from 'react';
import { CARS_DATA } from '@/data/cars';
import {
  Zap,    
  ShieldCheck, 
  ChevronRight, 
  ChevronDown,
  ChevronUp,
  MessageSquare, 
  CheckCircle2, 
  Menu, 
  X 
} from 'lucide-react';

export default function Home() {
  const [selectedCar, setSelectedCar] = useState(CARS_DATA[0]);
  const [dailyKm, setDailyKm] = useState(50);
  const [bookingStatus, setBookingStatus] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [batteryCapacity, setBatteryCapacity] = useState(74); // kWh
  const [rangeKm, setRangeKm] = useState(600); // KM
  const [costPerKwh, setCostPerKwh] = useState(1700); // Rp

  const totalChargingCost = batteryCapacity * costPerKwh;
  const costPerKm = rangeKm > 0 ? Math.round(totalChargingCost / rangeKm) : 0;
  const energyEfficiency = batteryCapacity > 0 ? (rangeKm / batteryCapacity).toFixed(1) : 0;

  const [formData, setFormData] = useState({
  nama: '',
  whatsapp: '',
  unit: CARS_DATA[0]?.name || ''
});

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });
};
  

  const [expandedCarId, setExpandedCarId] = useState(null);

  const toggleDetail = (id) => {
    setExpandedCarId(expandedCarId === id ? null : id);
  };

  // 1. WA
const SALES_WA_NUMBER = "6285885926665"; 
  const handleDirectWA = (type, carName = '') => {
    let message = "";

    switch (type) {
      case 'harga':
        message = "Halo Pak Paschal, bisa minta daftar harga Changan terbaru?";
        break;
      case 'promo':
        message = "Halo Pak Paschal, apa saja promo menarik Changan bulan ini?";
        break;
      case 'konsultasi':
        message = carName 
          ? `Halo Pak Paschal, saya tertarik dan ingin konsultasi mengenai unit ${carName}.`
          : "Halo Pak Paschal, saya ingin konsultasi unit Changan.";
        break;
      default:
        message = "Halo Pak Paschal, saya ingin bertanya tentang mobil Changan.";
    }

    const waUrl = `https://wa.me/${SALES_WA_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };
  

  // Handler khusus Form Booking Test Drive via WA
  const handleBookingWA = (e) => {
    e.preventDefault();
    const message = `Halo Pak Paschal, saya ingin mengajukan Booking Test Drive:\n\n- Nama: ${formData.nama}\n- WhatsApp: ${formData.whatsapp}\n- Unit Pilihan: ${formData.unit}\n\nMohon dihubungi lebih lanjut untuk konfirmasi jadwal. Terima kasih!`;
    const waUrl = `https://wa.me/${SALES_WA_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };


  // 2. IG
  const SALES_Instagram = "https://www.instagram.com/changan_indomobiljkt?stkn=MXJ6eTZsNHh3ajFzaw=="; 
  const handleDirectInstagram = (type, carName = '') => {
    let message = "";

    switch (type) {
      case 'harga':
        message = "Halo Pak Paschal, bisa minta daftar harga Changan terbaru?";
        break;
      case 'promo':
        message = "Halo Pak Paschal, apa saja promo menarik Changan bulan ini?";
        break;
      case 'konsultasi':
        message = carName 
          ? `Halo Pak Paschal, saya tertarik dan ingin konsultasi mengenai unit ${carName}.`
          : "Halo Pak Paschal, saya ingin konsultasi unit Changan.";
        break;
      default:
        message = "Halo Pak Paschal, saya ingin bertanya tentang mobil Changan.";
    }

    const InstagramUrl = `https://www.instagram.com/changan_indomobiljkt?stkn=MXJ6eTZsNHh3ajFzaw==`;
    window.open(InstagramUrl, '_blank', 'noopener,noreferrer');
  }; 
  
  // 3. Threads
  const SALES_Threads = "https://www.threads.com/@changan_indomobiljkt"; 
  const handleDirectThreads = (type, carName = '') => {
    let message = "";

    switch (type) {
      case 'harga':
        message = "Halo Pak Paschal, bisa minta daftar harga Changan terbaru?";
        break;
      case 'promo':
        message = "Halo Pak Paschal, apa saja promo menarik Changan bulan ini?";
        break;
      case 'konsultasi':
        message = carName 
          ? `Halo Pak Paschal, saya tertarik dan ingin konsultasi mengenai unit ${carName}.`
          : "Halo Pak Paschal, saya ingin konsultasi unit Changan.";
        break;
      default:
        message = "Halo Pak Paschal, saya ingin bertanya tentang mobil Changan.";
    }

    const ThreadsUrl = `https://www.threads.com/@changan_indomobiljkt`;
    window.open(ThreadsUrl, '_blank', 'noopener,noreferrer');
  };
  
  // 4. Tiktok
  const SALES_Tiktok = "https://www.tiktok.com/@changanindomobil.jkt?_r=1&_t=ZS-99kJamVgKEp"; 
  const handleDirectTiktok = (type, carName = '') => {
    let message = "";

    switch (type) {
      case 'harga':
        message = "Halo Pak Paschal, bisa minta daftar harga Changan terbaru?";
        break;
      case 'promo':
        message = "Halo Pak Paschal, apa saja promo menarik Changan bulan ini?";
        break;
      case 'konsultasi':
        message = carName 
          ? `Halo Pak Paschal, saya tertarik dan ingin konsultasi mengenai unit ${carName}.`
          : "Halo Pak Paschal, saya ingin konsultasi unit Changan.";
        break;
      default:
        message = "Halo Pak Paschal, saya ingin bertanya tentang mobil Changan.";
    }

    const ThreadsUrl = `https://www.tiktok.com/@changanindomobil.jkt?_r=1&_t=ZS-99kJamVgKEp`;
    window.open(ThreadsUrl, '_blank', 'noopener,noreferrer');
  };

  const handleBooking = (e) => {
    e.preventDefault();
    setBookingStatus('loading');
    setTimeout(() => {
      setBookingStatus('success');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 overflow-x-hidden w-full relative">
      {/* 1. Header Navigation */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-slate-950/80 border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 sm:gap-3 group shrink-0">
            <img 
              src="logo/changan-logo.jpeg"
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
            <a href="#" className="hover:text-cyan-400 transition">Home</a>
            <a href="#models" className="hover:text-cyan-400 transition">Model EV</a>
            <a href="#simulasi" className="hover:text-cyan-400 transition">Simulasi Biaya EV</a>
            <a href="#testdrive" className="hover:text-cyan-400 transition">Jadwal Test Drive</a>
            {/* Link About Us Ditambahkan Disini */}
            <a href="/about" className="hover:text-cyan-400 transition">Tentang Kami</a>
          </nav>

          {/* Action Button & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a 
              href="#testdrive"
              className="hidden sm:inline-block bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-5 py-2.5 rounded-full text-sm transition shadow-[0_0_20px_rgba(6,182,212,0.4)]"
            >
              Test Drive Sekarang
            </a>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-slate-300 hover:text-cyan-400 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>

          {/* Dropdown Menu Khusus Mobile */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-slate-950 border-b border-cyan-500/20 px-6 py-4 flex flex-col gap-4 text-sm font-medium text-slate-300">
              <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="text-cyan-400 font-semibold py-1">Home</a>
              <a href="#models" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-cyan-400 py-1">Model EV</a>
              <a href="#simulasi" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-cyan-400 py-1">Simulasi Biaya EV</a>
              <a href="#testdrive" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-cyan-400 py-1">Jadwal Test Drive</a>
              {/* Link About Us untuk Tampilan Mobile */}
              <a href="/about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-cyan-400 py-1">Tentang Kami</a>
              <a href="#testdrive" onClick={() => setIsMobileMenuOpen(false)} className="sm:hidden text-center bg-cyan-500 text-slate-950 font-bold py-2.5 rounded-full mt-2">
                Test Drive Sekarang
              </a>
            </div>
          )}
        </header>
 
      {/* 3. Hero Section */}
      <section className="relative pt-20 sm:pt-15 pb-16 sm:pb-20 px-4 sm:px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center overflow-hidden">
        <div className="w-full min-w-0">
          <h1 className="md:text-5xl font-black tracking-tight leading-tight mb-1 sm:mb-1 break-words">
            <br /> CHANGAN JAKARTA PULOGADUNG
          <span className="text-[30px] bg-gradient-to-r from-cyan-300 via-blue-500 to-indigo-500 bg-clip-text text-transparent inline-block max-w-full">
              INOVASI MASA KINI DIMULAI DARI SINI
          </span>
          </h1>
          <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-4 sm:mb-6 max-w-full">
            <Zap size={14} className="shrink-0" />
            <span className="truncate">Era Baru Mobil Listrik Pintar Indonesia</span>
          </div>
 

          <p className="text-slate-400 text-sm sm:text-lg mb-6 sm:mb-8 max-w-lg leading-relaxed">
            Kombinasi sempurna desain futuristik, teknologi tertinggi, safety driving, dan efisiensi jarak tempuh hingga 620 km.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full">
            <a 
              href="#models" 
              className="w-full sm:w-auto justify-center bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl flex items-center gap-2 hover:opacity-90 transition text-center text-sm sm:text-base"
            >
              Jelajahi Model <ChevronRight size={18} />
            </a>
            <a 
              href="#simulasi" 
              className="w-full sm:w-auto text-center border border-slate-700 hover:border-cyan-500 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-semibold transition text-sm sm:text-base"
            >
              Simulasi Biaya EV
            </a>
          </div>
        </div>

        {/* Dynamic Interactive Preview */}
        <div className="relative group w-full max-w-full">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl blur-md opacity-30 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative bg-slate-900 border border-slate-800 rounded-3xl p-4 sm:p-6 overflow-hidden">
            <img 
              src={selectedCar.image} 
              alt={selectedCar.name} 
              className="w-full h-56 sm:h-72 object-cover rounded-2xl mb-4 sm:mb-6 shadow-2xl transition duration-500 hover:scale-105"
            />
            <div className="flex justify-between items-end">
              <div>
                <span className="text-[10px] sm:text-xs text-cyan-400 font-bold tracking-wider uppercase">{selectedCar.category}</span>
                <h3 className="text-xl sm:text-2xl font-bold">{selectedCar.name}</h3>
                <p className="text-cyan-300 font-bold text-lg sm:text-xl mt-0.5">{selectedCar.price}</p>
              </div>
              <div className="text-right">
                <span className="text-[10px] sm:text-xs text-slate-500 block">Jarak Tempuh</span>
                <span className="text-base sm:text-lg font-extrabold text-slate-200">{selectedCar.detailedSpecs?.driveRange || selectedCar.range}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Section Produk & Spesifikasi Lengkap */}
      <section id="models" className="py-16 sm:py-20 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <span className="text-cyan-400 font-bold text-xs uppercase tracking-widest block mb-2">Lineup Produk</span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
            Model & Spesifikasi Changan EV
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-xs sm:text-base">
            Temukan kendaraan listrik premium sesuai gaya hidup Anda dengan garansi resmi dan performa terbaik.
          </p>
        </div>

        {/* Grid Kartu Produk */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CARS_DATA.map((car) => {
            const isExpanded = expandedCarId === car.id;

            return (
              <div 
                key={car.id} 
                className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Gambar Produk */}
                  <div className="relative h-48 sm:h-56 w-full bg-slate-950 overflow-hidden">
                    <img 
                      src={car.image} 
                      alt={car.name} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    {car.isBestSeller && (
                      <span className="absolute top-3 right-3 bg-cyan-500 text-slate-950 font-bold text-[10px] sm:text-xs px-2.5 py-1 rounded-full uppercase tracking-wider">
                        Best Seller
                      </span>
                    )}
                    <span className="absolute bottom-3 left-3 bg-slate-950/80 backdrop-blur-md text-cyan-400 text-[10px] sm:text-xs px-2.5 py-1 rounded-md border border-cyan-500/30">
                      {car.category}
                    </span>
                  </div>

                  {/* Info Utama */}
                  <div className="p-5 sm:p-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">{car.name}</h3>
                    
                    {/* Harga */}
                    <div className="mb-5 pb-4 border-b border-slate-800">
                      <span className="text-slate-500 text-[10px] sm:text-xs block">Mulai Dari</span>
                      <p className="text-xl sm:text-2xl font-extrabold text-cyan-400">{car.price}</p>
                      {car.priceNote && <span className="text-slate-500 text-[10px] sm:text-xs">{car.priceNote}</span>}
                    </div>

                    {/* Spesifikasi Utama (4 Box Utama) */}
                    <div className="mb-4">
                      <h4 className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold mb-2.5">
                        SPESIFIKASI UTAMA
                      </h4>
                      
                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-slate-950/80 border border-slate-800/80 p-2.5 rounded-xl">
                          <span className="text-[10px] text-slate-500 block">Maximum Power</span>
                          <span className="text-xs font-bold text-slate-200 truncate block mt-0.5">
                            {car.detailedSpecs?.maxPower || '-'}
                          </span>
                        </div>

                        <div className="bg-slate-950/80 border border-slate-800/80 p-2.5 rounded-xl">
                          <span className="text-[10px] text-slate-500 block">Maximum Torque</span>
                          <span className="text-xs font-bold text-slate-200 truncate block mt-0.5">
                            {car.detailedSpecs?.maxTorque || '-'}
                          </span>
                        </div>

                        <div className="bg-slate-950/80 border border-slate-800/80 p-2.5 rounded-xl">
                          <span className="text-[10px] text-slate-500 block">Battery Capacity</span>
                          <span className="text-xs font-bold text-slate-200 truncate block mt-0.5">
                            {car.detailedSpecs?.batteryCapacity || '-'}
                          </span>
                        </div>

                        <div className="bg-slate-950/80 border border-slate-800/80 p-2.5 rounded-xl">
                          <span className="text-[10px] text-slate-500 block">Drive Range</span>
                          <span className="text-xs font-bold text-slate-200 truncate block mt-0.5">
                            {car.detailedSpecs?.driveRange || '-'}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Collapsible Section untuk Detail & Fitur Unggulan */}
                    {isExpanded && (
                      <div className="mb-4 pt-3 border-t border-slate-800/80 space-y-4">
                        <div>
                          <h5 className="text-[10px] uppercase tracking-wider text-cyan-400 font-bold mb-2">
                            SPESIFIKASI TAMBAHAN
                          </h5>
                          <div className="grid grid-cols-2 gap-2">
                            <div className="bg-slate-950 border border-slate-800 p-2.5 rounded-xl">
                              <span className="text-[10px] text-slate-400 block font-medium">30-80% DC Charging</span>
                              <div className="mt-0.5 space-y-1">
                                {Array.isArray(car.detailedSpecs?.dcChargingTime) ? (
                                  car.detailedSpecs.dcChargingTime.map((time, index) => (
                                    <span key={index} className="text-xs font-bold text-white block">
                                      • {time}
                                    </span>
                                  ))
                                ) : (
                                  <span className="text-xs font-bold text-white block">
                                    {car.detailedSpecs?.dcChargingTime || '-'}
                                  </span>
                                )}
                              </div>
                            </div>

                            <div className="bg-slate-950 border border-slate-800 p-2.5 rounded-xl">
                              <span className="text-[10px] text-slate-400 block font-medium mb-1">Color</span>
                              <div className="space-y-0.5">
                                {Array.isArray(car.detailedSpecs?.colors) ? (
                                  car.detailedSpecs.colors.map((color, index) => (
                                    <span key={index} className="text-xs font-bold text-white block">
                                      • {color}
                                    </span>
                                  ))
                                ) : (
                                  <span className="text-xs font-bold text-white block">
                                    {car.detailedSpecs?.colors || '-'}
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Fitur Unggulan */}
                        {car.features && car.features.length > 0 && (
                          <div>
                            <h5 className="text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-2">
                              FITUR UNGGULAN
                            </h5>
                            <ul className="space-y-1.5 text-xs text-slate-300">
                              {car.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <CheckCircle2 size={13} className="text-cyan-400 shrink-0 mt-0.5" />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Tombol Toggle Selengkapnya / Sembunyikan */}
                    <button
                      onClick={() => toggleDetail(car.id)}
                      className="w-full mb-2 py-2.5 px-4 bg-slate-950 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500 rounded-xl text-xs font-bold text-cyan-400 flex items-center justify-center gap-2 transition-all"
                    >
                      <span>{isExpanded ? 'Sembunyikan' : 'Selengkapnya'}</span>
                      {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>

                    {/* Tombol Brosur PDF */}
                    {car.pdfUrl && (
                      <a
                        href={car.pdfUrl}
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full mb-3 py-2.5 px-4 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/40 rounded-xl text-xs font-semibold text-cyan-300 flex items-center justify-center gap-2 transition-all"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span>Brosur PDF</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Tombol CTA Utama */}
                <div className="p-5 sm:p-6 pt-0">
                  <button
                    onClick={() => handleDirectWA('konsultasi', car.name)}
                    className="w-full text-center bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold py-3 rounded-xl transition-all shadow-lg hover:shadow-cyan-500/25 text-xs sm:text-sm"
                  >
                    Minta Penawaran / Test Drive
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. EV Operational Cost Simulation */}
      <section id="simulasi" className="py-16 sm:py-20 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-white text-slate-800 p-6 sm:p-10 rounded-3xl shadow-2xl border border-slate-100">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-cyan-500 mb-2">
              Simulasi Biaya Operasional EV
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-medium">
              Hitung efisiensi perjalanan Anda bersama CHANGAN
            </p>
          </div>

          <div className="bg-slate-50/80 p-5 sm:p-6 rounded-2xl border border-slate-100 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">
                  Kapasitas Baterai (kWh)
                </label>
                <input
                  type="number"
                  value={batteryCapacity || ''}
                  onChange={(e) => setBatteryCapacity(Number(e.target.value))}
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-800 font-medium focus:outline-none focus:border-cyan-500 shadow-sm"
                  placeholder="74"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">
                  Jarak Tempuh (KM)
                </label>
                <input
                  type="number"
                  value={rangeKm || ''}
                  onChange={(e) => setRangeKm(Number(e.target.value))}
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-800 font-medium focus:outline-none focus:border-cyan-500 shadow-sm"
                  placeholder="600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">
                  Harga per kWh (Rp)
                </label>
                <input
                  type="number"
                  value={costPerKwh || ''}
                  onChange={(e) => setCostPerKwh(Number(e.target.value))}
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-800 font-medium focus:outline-none focus:border-cyan-500 shadow-sm"
                  placeholder="1700"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white border border-slate-100 rounded-2xl p-6 text-center shadow-sm flex flex-col justify-center">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                TOTAL BIAYA CAS
              </span>
              <span className="text-2xl sm:text-3xl font-extrabold text-cyan-500">
                Rp {totalChargingCost.toLocaleString('id-ID')}
              </span>
            </div>

            <div className="bg-white border border-slate-100 rounded-2xl p-6 text-center shadow-sm flex flex-col justify-center">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                BIAYA PER KM
              </span>
              <span className="text-2xl sm:text-3xl font-extrabold text-emerald-500">
                Rp {costPerKm.toLocaleString('id-ID')}
              </span>
            </div>

            <div className="bg-white border border-slate-100 rounded-2xl p-6 text-center shadow-sm flex flex-col justify-center">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                EFISIENSI ENERGI
              </span>
              <span className="text-2xl sm:text-3xl font-extrabold text-slate-800">
                {energyEfficiency} KM/kWh
              </span>
            </div>
          </div>

          <p className="text-center text-xs text-slate-400">
            *Estimasi biaya berdasarkan input data secara real-time.
          </p>
        </div>
      </section>

      {/* 6. Section Pilihan WhatsApp Cepat */}
      <section className="py-12 bg-slate-900/60 border-y border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h3 className="text-lg sm:text-xl font-bold mb-2">Konsultasi & Tanya Info Cepat</h3>
          <p className="text-slate-400 text-xs sm:text-sm mb-6">Pilih kategori pertanyaan Anda untuk terhubung langsung via WhatsApp</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
            <button
              onClick={() => handleDirectWA('harga')}
              className="flex items-center justify-center gap-3 bg-slate-950 border border-cyan-500/30 hover:border-cyan-400 p-3.5 sm:p-4 rounded-xl text-slate-200 hover:text-cyan-400 font-semibold transition group text-sm"
            >
              <MessageSquare className="text-cyan-400 group-hover:scale-110 transition shrink-0" size={18} />
              <span>Tanya Daftar Harga</span>
            </button>

            <button
              onClick={() => handleDirectWA('promo')}
              className="flex items-center justify-center gap-3 bg-slate-950 border border-emerald-500/30 hover:border-emerald-400 p-3.5 sm:p-4 rounded-xl text-slate-200 hover:text-emerald-400 font-semibold transition group text-sm"
            >
              <MessageSquare className="text-emerald-400 group-hover:scale-110 transition shrink-0" size={18} />
              <span>Tanya Promo Terkini</span>
            </button>

            <button
              onClick={() => handleDirectWA('konsultasi')}
              className="flex items-center justify-center gap-3 bg-slate-950 border border-blue-500/30 hover:border-blue-400 p-3.5 sm:p-4 rounded-xl text-slate-200 hover:text-blue-400 font-semibold transition group text-sm"
            >
              <MessageSquare className="text-blue-400 group-hover:scale-110 transition shrink-0" size={18} />
              <span>Konsultasi Unit</span>
            </button>
          </div>
        </div>
      </section>
      

      {/* 7. Booking Test Drive Form */}
        {/* Booking Form */}
      <section id="testdrive" className="py-16 sm:py-20 max-w-xl mx-auto px-4 sm:px-6">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">Jadwalkan Test Drive</h3>
            <p className="text-slate-400 text-xs sm:text-sm">Isi data singkat berikut untuk konfirmasi test drive langsung via WhatsApp</p>
          </div>

          <form onSubmit={handleBookingWA} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-1">Nama Lengkap</label>
              <input 
                required 
                type="text" 
                name="nama"
                value={formData.nama}
                onChange={handleChange}
                placeholder="Masukkan nama Anda" 
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm focus:border-cyan-500 focus:outline-none text-slate-100" 
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1">Nomor WhatsApp</label>
                <input 
                  required 
                  type="tel" 
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  placeholder="08...." 
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm focus:border-cyan-500 focus:outline-none text-slate-100" 
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1">Pilih Unit</label>
                <select 
                  name="unit"
                  value={formData.unit}
                  onChange={handleChange}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm focus:border-cyan-500 focus:outline-none text-slate-300"
                >
                  {CARS_DATA.map((c) => (
                    <option key={c.id} value={c.name}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button 
              type="submit" 
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold py-3.5 sm:py-4 rounded-xl hover:opacity-90 transition shadow-[0_0_20px_rgba(6,182,212,0.3)] text-sm sm:text-base"
            >
              Konfirmasi Booking Test Drive via WhatsApp
            </button>
          </form>
        </div>
      </section>


        {/* Floating Buttons Container */}
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
          {/* Floating Instagram Button */}
          <button
            onClick={() => handleDirectInstagram('konsultasi')}
            className="p-2 rounded-full text-white bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 transition-all hover:scale-110 drop-shadow-[0_0_12px_rgba(225,48,108,0.5)] group"
            title="Kunjungi Instagram"
          >
            <svg
              className="w-6 h-6 group-hover:rotate-12 transition-transform"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </button>

          {/* Floating WhatsApp Button */}
          <button
            onClick={() => handleDirectWA('konsultasi')}
            className="p-2 rounded-full bg-[#25D366] text-white transition-all hover:scale-110 drop-shadow-[0_0_5px_rgba(37,211,102,0.5)] group"
            title="Hubungi Via WhatsApp"
          >
            <svg 
              className="w-6 h-6 group-hover:rotate-12 transition-transform" 
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
          </button>
          
          {/* Floating Threads Button */}
          <button
            onClick={() => handleDirectThreads('konsultasi')}
            className="p-2 rounded-full bg-black text-white transition-all hover:scale-110 drop-shadow-[0_0_5px_rgba(255,255,255,0.2)] group border border-slate-800"
            title="Kunjungi Threads"
          >
            <svg 
              className="w-6 h-6 group-hover:rotate-12 transition-transform" 
              fill="currentColor" 
              viewBox="0 0 16 16"
            >
              <path d="M6.321 6.016c-.27-.18-1.166-.802-1.166-.802.756-1.081 1.753-1.502 3.132-1.502.975 0 1.803.327 2.394.948s.928 1.509 1.005 2.644q.492.207.905.484c1.109.745 1.719 1.86 1.719 3.137 0 2.716-2.226 5.075-6.256 5.075C4.594 16 1 13.987 1 7.994 1 2.034 4.482 0 8.044 0 9.69 0 13.55.243 15 5.036l-1.36.353C12.516 1.974 10.163 1.43 8.006 1.43c-3.565 0-5.582 2.171-5.582 6.79 0 4.143 2.254 6.343 5.63 6.343 2.777 0 4.847-1.443 4.847-3.556 0-1.438-1.208-2.127-1.27-2.127-.236 1.234-.868 3.31-3.644 3.31-1.618 0-3.013-1.118-3.013-2.582 0-2.09 1.984-2.847 3.55-2.847.586 0 1.294.04 1.663.114 0-.637-.54-1.728-1.9-1.728-1.25 0-1.566.405-1.967.868ZM8.716 8.19c-2.04 0-2.304.87-2.304 1.416 0 .878 1.043 1.168 1.6 1.168 1.02 0 2.067-.282 2.232-2.423a6.2 6.2 0 0 0-1.528-.161"/>
            </svg>
          </button>        
          
          {/* Floating TikTok Button */}
          <button
            onClick={handleDirectTiktok}
            className="p-2 rounded-full bg-slate-950 text-white transition-all hover:scale-110 drop-shadow-[0_0_5px_rgba(255,255,255,0.2)] group border border-slate-800"
            title="Kunjungi TikTok"
          >
            <svg
              className="w-6 h-6 group-hover:rotate-12 transition-transform"
              viewBox="0 0 48 48"
            >
              <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g transform="translate(8.000000, 6.000000)">
                  <path
                    d="M29.5248245,9.44576327 C28.0821306,9.0460898 26.7616408,8.29376327 25.6826204,7.25637551 C25.5109469,7.09719184 25.3493143,6.92821224 25.1928245,6.75433469 C23.9066204,5.27833469 23.209151,3.38037551 23.2336408,1.42290612 L17.3560898,1.42290612 L17.3560898,23.7086204 C17.3560898,27.7935184 15.1520082,29.9535184 12.416498,29.9535184 C11.694049,29.9611102 10.9789469,29.8107429 10.3213959,29.5124571 C9.6636,29.2144163 9.07951837,28.7758041 8.60955918,28.2272327 C8.1398449,27.6789061 7.79551837,27.0340898 7.60180408,26.3385796 C7.4078449,25.6430694 7.36890612,24.9132735 7.48743673,24.2008653 C7.60596735,23.4884571 7.87902857,22.8105796 8.28751837,22.2154776 C8.69625306,21.6198857 9.23037551,21.1212735 9.85241633,20.7546612 C10.474702,20.3878041 11.1694776,20.1617633 11.8882531,20.0924571 C12.6070286,20.023151 13.3324163,20.1122939 14.0129878,20.3535184 L14.0129878,14.3584163 C13.4889061,14.2430694 12.9530694,14.1862531 12.416498,14.1894367 L12.3917633,14.1894367 C10.2542939,14.1943347 8.16604898,14.8325388 6.39127347,16.0234776 C4.61649796,17.2149061 3.23429388,18.9051918 2.41976327,20.8812735 C1.60523265,22.8578449 1.39486531,25.0310694 1.8151102,27.1269061 C2.2351102,29.2227429 3.2671102,31.1469061 4.78033469,32.6564571 C6.29380408,34.1660082 8.22066122,35.1933551 10.3174776,35.6082122 C12.4142939,36.0230694 14.5870286,35.8073143 16.561151,34.9878857 C18.5355184,34.1682122 20.2226204,32.7820898 21.409151,31.0041306 C22.5959265,29.2264163 23.2289878,27.136702 23.228498,24.9992327 L23.228498,12.8155592 C25.5036,14.392702 28.2244163,15.134498 31.1289061,15.1886204 L31.1289061,9.68551837 C30.5869469,9.66568163 30.049151,9.5851102 29.5248245,9.44576327"
                    fill="#FE2C55"
                  ></path>
                  <path
                    d="M25.195102,6.75428571 C24.7946939,6.47510204 24.4148571,6.1675102 24.0587755,5.83346939 C22.8210612,4.66016327 22.0062857,3.11020408 21.7420408,1.42530612 C21.6622041,0.954367347 21.6220408,0.47755102 21.6220408,0 L15.7444898,0 L15.7444898,22.6408163 C15.7444898,27.5069388 13.5404082,28.5183673 10.804898,28.5183673 C10.0829388,28.5262041 9.36783673,28.3758367 8.71028571,28.0773061 C8.0524898,27.7792653 7.46791837,27.3406531 6.99820408,26.7920816 C6.5282449,26.2437551 6.18440816,25.5989388 5.99044898,24.9034286 C5.7964898,24.2079184 5.75755102,23.4781224 5.87583673,22.7657143 C5.99461224,22.053551 6.26767347,21.3756735 6.67640816,20.7800816 C7.08489796,20.1847347 7.61902041,19.6861224 8.24106122,19.3195102 C8.86334694,18.952898 9.55787755,18.7266122 10.276898,18.6573061 C10.9959184,18.588 11.7208163,18.6773878 12.4016327,18.9183673 L12.4016327,12.9328163 C5.40489796,11.8236735 0,17.4783673 0,23.5760816 C0.00465306122,26.4426122 1.14514286,29.1898776 3.17191837,31.216898 C5.19869388,33.2434286 7.94595918,34.3839184 10.8124898,34.3885714 C16.7730612,34.3885714 21.6220408,30.7444898 21.6220408,23.5760816 L21.6220408,11.3924082 C23.8995918,12.9795918 26.6204082,13.7142857 29.524898,13.7632653 L29.524898,8.26040816 C27.9658776,8.18914286 26.4617143,7.66604082 25.195102,6.75428571"
                    fill="#25F4EE"
                  ></path>
                  <path
                    d="M21.6220653,23.5764245 L21.6220653,11.392751 C23.8996163,12.9794449 26.6204327,13.7141388 29.5251673,13.7633633 L29.5251673,9.44581224 C28.0822286,9.04613878 26.7617388,8.29381224 25.6824735,7.25617959 C25.5110449,7.09724082 25.3494122,6.92826122 25.1926776,6.75438367 C24.7922694,6.4752 24.4126776,6.16736327 24.056351,5.83356735 C22.8186367,4.66026122 22.0041061,3.11030204 21.7396163,1.42540408 L17.3730857,1.42540408 L17.3730857,23.7111184 C17.3730857,27.7957714 15.1690041,29.9560163 12.4334939,29.9560163 C11.6569224,29.9538122 10.8918612,29.7681796 10.2005143,29.414302 C9.50941224,29.0601796 8.91186122,28.5476082 8.45635102,27.9182204 C7.49071837,27.3946286 6.72712653,26.5636898 6.2865551,25.5571592 C5.84573878,24.5508735 5.75341224,23.4260571 6.02377959,22.3609959 C6.29390204,21.2959347 6.91177959,20.3516082 7.77896327,19.6771592 C8.64639184,19.0027102 9.71365714,18.6365878 10.8122694,18.6365878 C11.3564327,18.6412408 11.8961878,18.7362612 12.4090041,18.9182204 L12.4090041,14.1894857 C10.304351,14.1921796 8.24647347,14.8093224 6.48786122,15.9657306 C4.72924898,17.1221388 3.3470449,18.7666286 2.51047347,20.6978939 C1.67390204,22.6291592 1.41969796,24.7627102 1.77896327,26.8362612 C2.13822857,28.9098122 3.09553469,30.8334857 4.53308571,32.3704653 C6.36271837,33.6848327 8.55945306,34.3906286 10.8122694,34.3884296 C16.7730857,34.3884296 21.6220653,30.7445878 21.6220653,23.5764245"
                    fill="#FFFFFF"
                  ></path>
                </g>
              </g>
            </svg>
          </button>
        </div>
    </div>
  );
}