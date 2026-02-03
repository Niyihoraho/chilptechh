"use client";

import { useState } from "react";
import {
  FiArrowRight as ArrowRight,
  FiCheckCircle as CheckCircle,
  FiShield as Shield,
  FiGlobe as Globe,
  FiZap as Zap,
  FiBarChart2 as BarChart,
  FiMapPin as MapPin,
  FiLayers as Layers,
  FiUsers as Users,
  FiActivity as Activity,
} from "react-icons/fi";
import About from "./component/sections/About";
import CTA from "./component/sections/CTA";
import FoundersMessage from "./component/sections/FoundersMessage";
import HowItWorks from "./component/sections/HowItWorks";
import Services from "./component/sections/Services";
import WhyChooseUs from "./component/sections/WhyChooseUs";
import ContactModal from "./component/ContactModal";
// import { About, Services, HowItWorks, CTA, FoundersMessage } from './components/sections';
// import LiveChat from './components/LiveChat';

// Define types for our components
interface IndustryItemProps {
  icon: React.ComponentType<{ className?: string }>;
  name: string;
}

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Hero Section */}
      <section
        id="home"
        className="pt-16 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen flex items-center"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Empowering Businesses through{" "}
                <span className="text-[#1e40af] font-extrabold">
                  Seamless customer satisfaction system setup
                </span>
              </h1>
              <p className="text-2xl italic font-medium text-[#1e40af] mb-4 leading-relaxed">
                “We are CHILPTECH – The Voice of Customers”
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Service quality system, citizen satisfaction frameworks, institutional service governance, feedback and accountability systems that boosts satisfaction, loyalty, and growth across Africa
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-[#1e40af] text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-blue-700 transition duration-300 shadow-xl text-center transform hover:scale-105"
                >
                  Start Your 14-Day Free Trial
                </button>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="border-2 border-[#1e40af] text-[#1e40af] px-8 py-4 rounded-lg text-lg font-bold hover:bg-[#1e40af] hover:text-white transition duration-300 text-center transform hover:scale-105"
                >
                  Book a Consultation
                </button>
              </div>
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Shield className="text-[#1e40af]" />
                  <span>GDPR-aware processes</span>
                </div>
                <div className="flex items-center gap-2">
                  <BarChart className="text-[#1e40af]" />
                  <span>SLA-backed performance</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="text-[#1e40af]" />
                  <span>Kigali Tech Hub</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition duration-500">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#1e40af] rounded-full flex items-center justify-center shadow-lg">
                      <Layers className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">
                        System Setup
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Professional CSSS & CSOS frameworks
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#059669] rounded-full flex items-center justify-center shadow-lg">
                      <Users className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">
                        Engagement
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Strategic NGO & community solutions
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#dc2626] rounded-full flex items-center justify-center shadow-lg">
                      <Activity className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">
                        Impact
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Government-grade quality delivery
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <WhyChooseUs />

      <About />

      <Services />


      <HowItWorks />


      <CTA />

      {/* Founder's Message Section */}
      <FoundersMessage />
    </>
  );
}
