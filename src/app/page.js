"use client";

import React, { useState, useEffect, useRef } from 'react';

export default function Home() {
  const [isOpened, setIsOpened] = useState(false);
  const [guestName, setGuestName] = useState('Tamu Undangan');
  // State dan Ref untuk Audio
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Mencegah user melakukan scroll saat cover masih tertutup
  useEffect(() => {
    // 1. Atur overflow scroll
    if (!isOpened) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    // 2. Ambil parameter nama dari URL (contoh: ?to=Budi+Sudarsono)
    const params = new URLSearchParams(window.location.search);
    const toParam = params.get('to');
    if (toParam) {
      setGuestName(toParam); // Mengganti 'Tamu Undangan' dengan nama dari URL
    }    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpened]);

  // Efek untuk memutar musik otomatis saat undangan dibuka
  useEffect(() => {
    if (isOpened && audioRef.current) {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch((error) => console.log("Autoplay diblokir browser:", error));
    }
  }, [isOpened]);

  // Fungsi Toggle Play/Pause
  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <main className="min-h-screen bg-[#FAFAF9] text-stone-800 font-sans relative overflow-hidden">
      
      {/* ELEMEN AUDIO TERSEMBUNYI */}
      <audio ref={audioRef} src="/1000x.mp3" loop preload="auto"></audio>      
      
      {/* =========================================
          COVER OVERLAY (FITUR BUKA UNDANGAN) 
          ========================================= */}
      <div 
        className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-stone-900 text-white transition-transform duration-1000 ease-in-out overflow-hidden ${
          isOpened ? '-translate-y-full' : 'translate-y-0'
        }`}
      >
        <div 
          className="absolute inset-0 z-0 bg-[url('/Ring.jpg')] bg-cover bg-center bg-no-repeat opacity-40"
        ></div>
        
        <div className="relative z-10 text-center px-6 flex flex-col items-center">
          <h3 className="text-sm md:text-base tracking-[0.3em] uppercase text-amber-400 mb-6">
            The Wedding Of
          </h3>
          <h1 className="text-5xl md:text-7xl font-serif mb-8 tracking-tight">
            Khawari & Vina
          </h1>
          
          <div className="mb-12 text-stone-300">
            <p className="text-sm mb-1">Kepada Yth.</p>
            <p className="text-lg font-semibold text-white">{guestName}</p>
          </div>

          <button 
            onClick={() => setIsOpened(true)}
            className="px-8 py-3 bg-amber-700 hover:bg-amber-600 text-white rounded-full text-sm tracking-wide transition-colors duration-300 shadow-lg flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"></path>
            </svg>
            Buka Undangan
          </button>
        </div>
      </div>

      {/* =========================================
          KONTEN UTAMA (Disembunyikan saat cover aktif)
          ========================================= */}
      {/* Background Pastel Doodles & Accents */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-rose-100 rounded-full mix-blend-multiply filter blur-2xl opacity-60"></div>
      <div className="absolute top-40 right-10 w-40 h-40 bg-orange-100 rounded-full mix-blend-multiply filter blur-2xl opacity-60"></div>
      <div className="absolute bottom-20 left-1/4 w-48 h-48 bg-amber-100 rounded-full mix-blend-multiply filter blur-2xl opacity-50"></div>

      {/* 1. HERO SECTION */}
      <section className="relative flex flex-col items-center justify-center min-h-screen px-6 py-20 text-center z-10">
        <h3 className="text-sm md:text-base tracking-[0.3em] uppercase text-amber-700 mb-6">
          The Wedding Of
        </h3>
        
        <h1 className="text-5xl md:text-7xl font-serif text-stone-900 mb-8 tracking-tight">
          Khawari & Vina
        </h1>
        
        {/* Elegant Image with Soft Glow */}
        <div className="relative w-64 h-80 md:w-80 md:h-96 mb-10 rounded-t-full rounded-b-3xl p-2 bg-white shadow-[0_0_30px_rgba(217,119,6,0.15)] transition-all duration-500 hover:shadow-[0_0_40px_rgba(217,119,6,0.25)]">
          <img 
            src="/Moon.jpg" 
            alt="Foto Romeo dan Juliet"
            className="w-full h-full rounded-t-full rounded-b-2xl object-cover"
          />
        </div>

        <p className="text-lg md:text-xl text-stone-600 font-light mb-2">
          Minggu, 27 September 2026
        </p>
        <p className="text-sm text-stone-500">
          Kami mengundang Anda untuk merayakan momen bahagia ini.
        </p>
      </section>

      {/* 2. DETAIL ACARA */}
      <section className="relative py-20 px-6 max-w-4xl mx-auto z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif text-stone-900 mb-4">Rangkaian Acara</h2>
          <div className="w-16 h-[1px] bg-amber-300 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Card Akad */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center">
            <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-4 text-amber-700">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 12c1.33-2.67 3-4 5-4a5 5 0 1 1 0 10c-2 0-3.67-1.33-5-4c-1.33 2.67-3 4-5 4A5 5 0 1 1 7 8c2 0 3.67 1.33 5 4z"></path></svg>
            </div>
            <h3 className="text-2xl font-serif mb-2">Akad Nikah</h3>
            <p className="text-stone-600 mb-1">08:00 WIB - Selesai</p>
            <p className="text-stone-500 text-sm mt-4">Diadakan secara tertutup untuk keluarga inti dan kerabat dekat.</p>
          </div>

          {/* Card Resepsi */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center">
            <div className="w-12 h-12 bg-rose-50 rounded-full flex items-center justify-center mx-auto mb-4 text-rose-700">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
            </div>
            <h3 className="text-2xl font-serif mb-2">Resepsi</h3>
            <p className="text-stone-600 mb-1">12:30 WIB - Selesai</p>
            <p className="text-stone-500 text-sm mt-4">Merupakan sebuah kehormatan bagi kami atas kehadiran Anda.</p>
          </div>
        </div>
      </section>

      {/* 3. LOKASI ACARA */}
      <section className="relative py-20 px-6 bg-stone-100 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-serif text-stone-900 mb-6">Lokasi</h2>
          <p className="text-stone-800 font-medium mb-2">Ballroom Hotel Odaita</p>
          <p className="text-stone-600 text-sm mb-8">Jl. Raya Sumenep No.88, Pamekasan</p>
          
          {/* Map Interaktif */}
          <div className="w-full h-80 rounded-xl overflow-hidden border border-stone-200 shadow-md">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.7337277264933!2d113.505162!3d-7.156752999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd77d8dd0319fdf%3A0xd487435915b88ff9!2sODAITA%20HOTEL!5e0!3m2!1sen!2sid!4v1780754609890!5m2!1sen!2sid"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <a 
            href="https://maps.app.goo.gl/LDSGECg7qmF9aSGF6"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block px-8 py-3 bg-stone-800 text-white rounded-full text-sm tracking-wide hover:bg-amber-800 transition-colors duration-300 shadow-md"
          >
            Buka di Google Maps
          </a>
        </div>
      </section>

      {/* Footer Minimalis */}
      <footer className="py-8 text-center text-stone-400 text-sm bg-stone-100 border-t border-stone-200">
        <p>Created with Love By Khawari_MD</p>
      </footer>

      {/* =========================================
          FLOATING BUTTON MUSIC (Muncul setelah cover dibuka)
          ========================================= */}
      {isOpened && (
        <button
          onClick={toggleAudio}
          className="fixed bottom-6 right-6 z-[60] w-12 h-12 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-md shadow-lg border border-stone-200 text-amber-700 hover:bg-white transition-all duration-300"
          aria-label={isPlaying ? "Pause Music" : "Play Music"}
        >
          {isPlaying ? (
            // Ikon Pause
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
            </svg>
          ) : (
            // Ikon Play
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>
      )}

    </main>
  );
}