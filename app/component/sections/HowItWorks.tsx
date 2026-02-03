'use client';

import Image from 'next/image';

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-50 rounded-full blur-3xl opacity-60"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Content */}
          <div>
            <span className="inline-block py-1 px-3 rounded-full bg-blue-100/50 text-blue-600 text-sm font-bold mb-4 tracking-wide uppercase">
              Process
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-12">
              A streamlined, three-step journey to elevating your customer support experience.
            </p>

            <div className="space-y-8">
              {/* Step 1 */}
              <div className="group flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">1</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    Map Your Needs
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We assess your current channels, operating hours, and KPIs to build a requirement profile unique to your business.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="group flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-700 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">2</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                    Launch & Train
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We deploy dedicated agents, set up necessary tools, and integrate workflows tailored specifically to your ecosystem.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="group flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">3</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                    Optimize & Grow
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Continuous QA monitoring, SLA tracking, and actionable insights to constantly improve your customer satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-indigo-100 transform rotate-1 rounded-2xl opacity-50 blur-lg"></div>
            <div className="relative bg-white p-4 rounded-2xl shadow-xl border border-gray-100">
              <Image
                src="/How it works.png"
                alt="How it works diagram"
                width={800}
                height={600}
                className="w-full h-auto rounded-xl object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
