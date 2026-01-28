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
        className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden bg-slate-50 min-h-screen flex items-center"
      >
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-gradient-to-br from-blue-100/40 to-indigo-100/40 rounded-full blur-3xl opacity-70 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-blue-50 to-purple-50 rounded-full blur-3xl opacity-70 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Hero Content */}
            <div className="text-center lg:text-left">
              <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-semibold text-sm mb-6 shadow-sm">
                🚀 Elevate your customer experience
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight mb-6 tracking-tight">
                Empowering Businesses through{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  Seamless Support
                </span>
              </h1>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Multilingual, tech-driven support that boosts satisfaction,
                loyalty, and growth across Africa.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-1"
                >
                  Start 14-Day Free Trial
                </button>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-8 py-4 rounded-xl text-lg font-bold text-slate-700 bg-white border border-slate-200 hover:border-blue-200 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  Book a Consultation
                </button>
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start gap-3 text-sm font-medium text-slate-500 border-t border-slate-200 pt-8">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 rounded-lg">
                  <Shield className="text-blue-600 w-4 h-4" />
                  <span>GDPR-aware</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 rounded-lg">
                  <BarChart className="text-indigo-600 w-4 h-4" />
                  <span>SLA-backed</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 rounded-lg">
                  <MapPin className="text-emerald-600 w-4 h-4" />
                  <span>Kigali Tech Hub</span>
                </div>
              </div>
            </div>

            {/* Hero Visual/Card */}
            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-[2rem] rotate-6 opacity-10 blur-xl scale-95 transform transition-transform duration-500 hover:rotate-3"></div>
              <div className="bg-white/80 backdrop-blur-xl rounded-[2rem] shadow-2xl p-8 border border-white/40 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-blue-50 to-transparent rounded-bl-full -mr-8 -mt-8 pointer-events-none"></div>

                <div className="space-y-6 relative z-10">
                  <div className="flex items-start gap-5 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-500/20 flex-shrink-0">
                      <Headset className="text-2xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-lg mb-1">24/7 Support</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">Always available for your customers, ensuring no query goes unanswered.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-emerald-500/20 flex-shrink-0">
                      <Globe className="text-2xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-lg mb-1">Multilingual</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">Expert support in English, Kinyarwanda, and French.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-indigo-500/20 flex-shrink-0">
                      <Zap className="text-2xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-lg mb-1">AI-Enabled</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">Smart automation blended with the human touch for speed and empathy.</p>
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
