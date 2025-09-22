'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { FaBars as Menu, FaTimes as X } from 'react-icons/fa';
import ContactModal from '../ContactModal';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      
      <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center space-x-2">
                <Image
                  src="/images/logo.png"
                  alt="CHILPTECH Logo"
                  width={120}
                  height={120}
                  className="w-25 h-20 object-contain"
                />
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="#home" 
              className="text-gray-700 hover:text-[#1e40af] transition duration-300"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Home
            </Link>
            <Link 
              href="#services" 
              className="text-gray-700 hover:text-[#1e40af] transition duration-300"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Services
            </Link>
            <Link 
              href="#about" 
              className="text-gray-700 hover:text-[#1e40af] transition duration-300"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              About
            </Link>
            <Link 
              href="#contact" 
              className="text-gray-700 hover:text-[#1e40af] transition duration-300"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact
            </Link>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-[#1e40af] text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300 font-bold shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Book Consultation
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-[#1e40af]"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link 
              href="#home" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
              onClick={(e) => {
                e.preventDefault();
                setIsOpen(false);
                document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Home
            </Link>
            <Link 
              href="#services" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
              onClick={(e) => {
                e.preventDefault();
                setIsOpen(false);
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Services
            </Link>
            <Link 
              href="#about" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
              onClick={(e) => {
                e.preventDefault();
                setIsOpen(false);
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              About
            </Link>
            <Link 
              href="#contact" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
              onClick={(e) => {
                e.preventDefault();
                setIsOpen(false);
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact
            </Link>
            <button 
              onClick={() => {
                setIsModalOpen(true);
                setIsOpen(false);
              }}
              className="block w-full text-center bg-[#1e40af] text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300 mt-2 font-bold shadow-lg"
            >
              Book Consultation
            </button>
          </div>
        </div>
      )}
    </nav>
    </>
  );
}
