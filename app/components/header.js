"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full h-20 z-50 bg-[#0f1c2e]/80 backdrop-blur-md border-b border-white/10 dark:bg-black/80 flex items-center">
      <nav className="flex justify-between items-center w-full max-w-7xl mx-auto px-6">
        {/* Logo */}
        <Link href="/" className="font-raleway font-extrabold text-2xl text-white tracking-tighter">
          Rent<span className="text-blue-500">Car</span>
        </Link>

        {/* Hamburger Menu Button */}
        <button 
          className="md:hidden text-white text-xl" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '✕' : '☰'}
        </button>

        {/* Navigation Links */}
        <div className={`${isOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:static top-20 left-0 w-full md:w-auto bg-[#0f1c2e] md:bg-transparent p-6 md:p-0 gap-6 text-sm font-medium items-center shadow-lg md:shadow-none`}>
          <Link href="/" className="text-white hover:text-blue-400 transition-colors">Accueil</Link>
          <Link href="/cars" className="text-gray-300 hover:text-white transition-colors">Véhicules</Link>
          <Link href="/about" className="text-gray-300 hover:text-white transition-colors">À propos</Link>
          <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
          
          <Link 
            href="/inscription" 
            className="bg-white text-[#0f1c2e] px-5 py-2 rounded-full text-sm font-bold hover:bg-blue-50 transition-all shadow-lg"
          >
            Connexion
          </Link>
        </div>
      </nav>
    </header>
  );
}