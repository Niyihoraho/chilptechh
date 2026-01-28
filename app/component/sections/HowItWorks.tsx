'use client';

import { FiArrowRight } from 'react-icons/fi';

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-50 rounded-full blur-3xl opacity-60"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100/50 text-blue-600 text-sm font-bold mb-4 tracking-wide uppercase">
            Process
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A streamlined, three-step journey to elevating your customer support experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-[2.5rem] left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-blue-200 via-indigo-200 to-blue-200 -z-10"></div>

          {/* Step 1 */}
          <div className="group relative">
            <div className="relative flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-2xl bg-white border-2 border-blue-100 shadow-xl flex items-center justify-center mb-8 relative z-10 group-hover:scale-110 transition-transform duration-300 md:group-hover:-translate-y-2">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-inner">
                  <span className="text-3xl font-bold text-white">1</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                Map Your Needs
              </h3>
              <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">
                We assess your current channels, operating hours, and KPIs to build a requirement profile unique to your business.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="group relative">
            <div className="relative flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-2xl bg-white border-2 border-indigo-100 shadow-xl flex items-center justify-center mb-8 relative z-10 group-hover:scale-110 transition-transform duration-300 md:group-hover:-translate-y-2">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-700 flex items-center justify-center shadow-inner">
                  <span className="text-3xl font-bold text-white">2</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors">
                Launch & Train
              </h3>
              <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">
                We deploy dedicated agents, set up necessary tools, and integrate workflows tailored specifically to your ecosystem.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="group relative">
            <div className="relative flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-2xl bg-white border-2 border-emerald-100 shadow-xl flex items-center justify-center mb-8 relative z-10 group-hover:scale-110 transition-transform duration-300 md:group-hover:-translate-y-2">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center shadow-inner">
                  <span className="text-3xl font-bold text-white">3</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors">
                Optimize & Grow
              </h3>
              <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">
                Continuous QA monitoring, SLA tracking, and actionable insights to constantly improve your customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
