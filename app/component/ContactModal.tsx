'use client';

import { useState, useEffect } from 'react';
import { 
  FiX as X, 
  FiMail as Mail, 
  FiPhone as Phone, 
  FiMessageCircle as MessageCircle, 
  FiMapPin as MapPin 
} from 'react-icons/fi';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-[60] flex items-center justify-center p-4 transition-all duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={handleBackdropClick}
      onKeyDown={handleKeyDown}
      tabIndex={-1}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      
      {/* Modal Content */}
      <div
        className={`relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full mx-4 transform transition-all duration-300 ${
          isVisible ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900">Get In Touch</h2>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors duration-200"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Contact Information */}
        <div className="p-6">
          <div className="bg-gradient-to-br from-[#1e40af] to-[#059669] text-white rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="text-blue-200 w-6 h-6" />
                </div>
                <div>
                  <p className="text-blue-100 text-sm font-medium">Email</p>
                  <span className="font-semibold text-lg">chilptechfirm@gmail.com</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="text-blue-200 w-6 h-6" />
                </div>
                <div>
                  <p className="text-blue-100 text-sm font-medium">Phone</p>
                  <span className="font-semibold text-lg">+250 780658582</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="text-blue-200 w-6 h-6" />
                </div>
                <div>
                  <p className="text-blue-100 text-sm font-medium">WhatsApp</p>
                  <span className="font-semibold text-lg">Available 24/7</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-blue-200 w-6 h-6" />
                </div>
                <div>
                  <p className="text-blue-100 text-sm font-medium">Location</p>
                  <span className="font-semibold text-lg">Kigali Tech Hub, Rwanda</span>
                </div>
              </div>
            </div>

            {/* WhatsApp Button */}
            <div className="mt-8 text-center">
              <button
                onClick={() => window.open('https://wa.me/250780658582', '_blank')}
                className="bg-white text-[#059669] px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center space-x-3 mx-auto"
              >
                <MessageCircle className="w-6 h-6" />
                <span>Start WhatsApp Chat</span>
              </button>
            </div>

            {/* Additional Info */}
            <div className="mt-6 p-4 bg-white/10 rounded-lg">
              <p className="text-sm text-blue-100 text-center">
                <span className="font-semibold">Free Consultation</span> - 
                Let&apos;s discuss how we can help your business grow with exceptional customer support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
