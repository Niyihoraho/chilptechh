"use client";

import { useState } from "react";
import {
  FiArrowRight as ArrowRight,
  FiCheckCircle as CheckCircle,
  FiHeadphones as Headset,
  FiGlobe as Globe,
  FiZap as Zap,
  FiShield as Shield,
  FiBarChart2 as BarChart,
  FiMapPin as MapPin,
} from "react-icons/fi";
import About from "./component/sections/About";
import CTA from "./component/sections/CTA";
import FoundersMessage from "./component/sections/FoundersMessage";
import HowItWorks from "./component/sections/HowItWorks";
import Services from "./component/sections/Services";
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
                  Seamless Customer Support
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Multilingual, tech-driven support that boosts satisfaction,
                loyalty, and growth across Africa
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
                      <Headset className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">
                        24/7 Support
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Always available for your customers
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#059669] rounded-full flex items-center justify-center shadow-lg">
                      <Globe className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">
                        Multilingual
                      </h3>
                      <p className="text-gray-600 text-sm">
                        English • Kinyarwanda • French
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#dc2626] rounded-full flex items-center justify-center shadow-lg">
                      <Zap className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">
                        AI-Enabled
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Smart automation with human touch
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
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-semibold mb-6">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              The CHILPTECH Advantage
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              We deliver world-class customer support that drives satisfaction,
              loyalty, and business growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="group bg-slate-50 rounded-2xl p-8 hover:bg-white border border-slate-100 hover:border-blue-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Globe className="text-8xl text-blue-600 transform rotate-12" />
              </div>
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <Globe className="text-blue-600 text-2xl group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                Multilingual by Default
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                English, Kinyarwanda, and French—culturally aligned support your
                customers truly understand.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group bg-slate-50 rounded-2xl p-8 hover:bg-white border border-slate-100 hover:border-emerald-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Zap className="text-8xl text-emerald-600 transform rotate-12" />
              </div>
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors duration-300">
                <Zap className="text-emerald-600 text-2xl group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-emerald-600 transition-colors">
                AI-Enabled & Human-Led
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                We blend trained agents with CRM, VoIP, and help-desk tools for
                fast, precise resolutions.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group bg-slate-50 rounded-2xl p-8 hover:bg-white border border-slate-100 hover:border-red-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <ArrowRight className="text-8xl text-red-600 transform rotate-12" />
              </div>
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors duration-300">
                <ArrowRight className="text-red-600 text-2xl group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-red-600 transition-colors">
                Scalable & Cost-Effective
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Flexible packages and add-ons that grow with you—without the
                overhead of in-house teams.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="group bg-slate-50 rounded-2xl p-8 hover:bg-white border border-slate-100 hover:border-purple-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <CheckCircle className="text-8xl text-purple-600 transform rotate-12" />
              </div>
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors duration-300">
                <CheckCircle className="text-purple-600 text-2xl group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-purple-600 transition-colors">
                Insight-Driven
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Quality monitoring, SLA tracking, and monthly reports to improve
                satisfaction and retention.
              </p>
            </div>
          </div>
        </div>
      </section>

      <About />

      <Services />


      <HowItWorks />


      <CTA />

      {/* Founder's Message Section */}
      <FoundersMessage />
    </>
  );
}
