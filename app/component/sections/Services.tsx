'use client';

import { useState } from 'react';
import {
  FiCheckCircle as CheckCircle,
  FiBriefcase as Business,
  FiGlobe as Globe,
  FiShield as Government,
  FiLayers as Layers,
  FiTarget as Target,
  FiActivity as Activity,
  FiChevronDown as ChevronDown,
  FiChevronUp as ChevronUp
} from 'react-icons/fi';

export default function Services() {
  const [showDetailedServices, setShowDetailedServices] = useState(false);

  return (
    <>
      {/* Core Services */}
      <section id="services" className="py-24 bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#1e40af] text-white overflow-hidden relative">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 mix-blend-overlay"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 mix-blend-overlay"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-sm font-semibold mb-4 backdrop-blur-sm">
              Our Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Our Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-indigo-200">Services</span>
            </h2>
            <p className="text-xl text-blue-100/90 max-w-2xl mx-auto leading-relaxed">
              Comprehensive quality service solutions tailored to empower your institution's growth and reliability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Businesses */}
            <div className="group bg-white/5 backdrop-blur-md rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-blue-400/30 shadow-xl hover:shadow-2xl hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Business className="text-9xl text-white transform rotate-12" />
              </div>
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Business className="text-2xl text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-white">BUSINESSES</h3>
              <p className="text-blue-200 mb-6 text-sm font-medium uppercase tracking-wider">Enterprises, SMEs, Startups</p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-blue-100 group-hover:text-white transition-colors">
                  <div className="mt-1 p-1 bg-blue-500/20 rounded-full">
                    <CheckCircle className="w-3 h-3 text-blue-300" />
                  </div>
                  <span className="text-sm">Package 1: Customer Service System Setup (CSSS)</span>
                </li>
                <li className="flex items-start gap-3 text-blue-100 group-hover:text-white transition-colors">
                  <div className="mt-1 p-1 bg-blue-500/20 rounded-full">
                    <CheckCircle className="w-3 h-3 text-blue-300" />
                  </div>
                  <span className="text-sm">Package 2: Customer Service Operations Support (CSOS)</span>
                </li>
              </ul>
            </div>

            {/* NGOs */}
            <div className="group bg-white/5 backdrop-blur-md rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-emerald-400/30 shadow-xl hover:shadow-2xl hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Globe className="text-9xl text-white transform rotate-12" />
              </div>
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Globe className="text-2xl text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-white">NGOs</h3>
              <p className="text-emerald-200 mb-6 text-sm font-medium uppercase tracking-wider">Service Packages</p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-blue-100 group-hover:text-white transition-colors">
                  <div className="mt-1 p-1 bg-emerald-500/20 rounded-full">
                    <CheckCircle className="w-3 h-3 text-emerald-300" />
                  </div>
                  <span className="text-sm">Package 1: Community & Stakeholder Engagement System Setup</span>
                </li>
                <li className="flex items-start gap-3 text-blue-100 group-hover:text-white transition-colors">
                  <div className="mt-1 p-1 bg-emerald-500/20 rounded-full">
                    <CheckCircle className="w-3 h-3 text-emerald-300" />
                  </div>
                  <span className="text-sm">Package 2: Community & Stakeholder Engagement Management</span>
                </li>
              </ul>
            </div>

            {/* Government Agencies */}
            <div className="group bg-white/5 backdrop-blur-md rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-purple-400/30 shadow-xl hover:shadow-2xl hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Government className="text-9xl text-white transform rotate-12" />
              </div>
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Government className="text-2xl text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-white">GOVERNMENT</h3>
              <p className="text-purple-200 mb-6 text-sm font-medium uppercase tracking-wider">Agencies Service Packages</p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-blue-100 group-hover:text-white transition-colors">
                  <div className="mt-1 p-1 bg-purple-500/20 rounded-full">
                    <CheckCircle className="w-3 h-3 text-purple-300" />
                  </div>
                  <span className="text-sm">Package 1: Quality Service Delivery & Community Engagement System Setup</span>
                </li>
                <li className="flex items-start gap-3 text-blue-100 group-hover:text-white transition-colors">
                  <div className="mt-1 p-1 bg-purple-500/20 rounded-full">
                    <CheckCircle className="w-3 h-3 text-purple-300" />
                  </div>
                  <span className="text-sm">Package 2: Citizen Satisfaction Operations Support Services</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={() => setShowDetailedServices(!showDetailedServices)}
              className="group bg-white text-[#1e40af] px-10 py-4 rounded-full text-lg font-bold hover:bg-blue-50 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transform hover:-translate-y-0.5 flex items-center gap-2 mx-auto"
            >
              <span>{showDetailedServices ? 'Hide Detailed Services' : 'View Detailed Services'}</span>
              {showDetailedServices ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />}
            </button>
          </div>
        </div>
      </section>

      {/* Detailed Services Section */}
      <div className={`transition-all duration-700 ease-in-out overflow-hidden ${showDetailedServices ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <section className="py-24 bg-gray-50 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Business Service Packages</h2>
              <div className="w-24 h-1 bg-[#1e40af] mx-auto rounded-full mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                In-depth breakdown of our specialized solutions designed to elevate your business operations.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-10">
              {/* Package 1 */}
              <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col">
                <div className="bg-gradient-to-r from-[#1e40af] to-blue-700 p-8 text-white">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm">
                      <Layers className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">Package 1: CSSS</h3>
                  </div>
                  <h4 className="text-lg font-medium opacity-90 mb-2">Customer Service System Setup</h4>
                  <p className="text-blue-100 text-sm italic border-l-2 border-blue-400 pl-3">"For institutions that want to build or fix their customer service operations."</p>
                </div>

                <div className="p-8 flex-1">
                  <h5 className="font-bold text-gray-900 text-lg mb-6 flex items-center gap-2 pb-2 border-b border-gray-100">
                    <span className="w-2 h-8 bg-blue-600 rounded-full"></span>
                    What We Deliver
                  </h5>

                  <div className="space-y-8 mb-8">
                    <div className="relative pl-6 border-l-2 border-blue-100 ml-2">
                      <span className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></span>
                      <h6 className="font-bold text-gray-800 mb-2 text-base">Phase 1: Consultancy</h6>
                      <ul className="text-gray-600 space-y-1 text-sm">
                        <li className="flex items-center gap-2"><div className="w-1 h-1 bg-gray-400 rounded-full"></div> Service audit</li>
                        <li className="flex items-center gap-2"><div className="w-1 h-1 bg-gray-400 rounded-full"></div> Stakeholder interviews</li>
                        <li className="flex items-center gap-2"><div className="w-1 h-1 bg-gray-400 rounded-full"></div> Gap analysis report</li>
                      </ul>
                    </div>

                    <div className="relative pl-6 border-l-2 border-blue-100 ml-2">
                      <span className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></span>
                      <h6 className="font-bold text-gray-800 mb-2 text-base">Phase 2: System Design</h6>
                      <ul className="text-gray-600 space-y-1 text-sm">
                        <li className="flex items-center gap-2"><div className="w-1 h-1 bg-gray-400 rounded-full"></div> Service workflow</li>
                        <li className="flex items-center gap-2"><div className="w-1 h-1 bg-gray-400 rounded-full"></div> Roles & responsibilities</li>
                        <li className="flex items-center gap-2"><div className="w-1 h-1 bg-gray-400 rounded-full"></div> Escalation structure</li>
                        <li className="flex items-center gap-2"><div className="w-1 h-1 bg-gray-400 rounded-full"></div> Communication standards</li>
                      </ul>
                    </div>
                    <div className="relative pl-6 border-l-2 border-blue-100 ml-2">
                      <span className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></span>
                      <h6 className="font-bold text-gray-800 mb-2 text-base">Phase 3: Documentation</h6>
                      <ul className="text-gray-600 space-y-1 text-sm">
                        <li className="flex items-center gap-2"><div className="w-1 h-1 bg-gray-400 rounded-full"></div> SOP manual</li>
                        <li className="flex items-center gap-2"><div className="w-1 h-1 bg-gray-400 rounded-full"></div> Complaint handling procedures</li>
                        <li className="flex items-center gap-2"><div className="w-1 h-1 bg-gray-400 rounded-full"></div> Response templates & Reporting formats</li>
                      </ul>
                    </div>
                    <div className="relative pl-6 border-l-2 border-transparent ml-2">
                      <span className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></span>
                      <h6 className="font-bold text-gray-800 mb-2 text-base">Phase 4: Training</h6>
                      <ul className="text-gray-600 space-y-1 text-sm">
                        <li className="flex items-center gap-2"><div className="w-1 h-1 bg-gray-400 rounded-full"></div> Frontline staff training</li>
                        <li className="flex items-center gap-2"><div className="w-1 h-1 bg-gray-400 rounded-full"></div> Supervisor training</li>
                        <li className="flex items-center gap-2"><div className="w-1 h-1 bg-gray-400 rounded-full"></div> Service culture orientation</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-emerald-50/50 p-6 rounded-2xl border border-emerald-100 mt-auto">
                    <h5 className="flex items-center gap-2 font-bold text-emerald-800 mb-4 uppercase text-sm tracking-wide">
                      <Target className="w-5 h-5" />
                      Client Outcomes
                    </h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {['Customer service operating model', 'Trained staff', 'Documented procedures', 'Ready-to-run system'].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-gray-700 text-sm font-medium">
                          <CheckCircle className="text-emerald-500 w-4 h-4 flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Package 2 */}
              <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col h-full">
                <div className="bg-gradient-to-r from-indigo-700 to-indigo-900 p-8 text-white">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm">
                      <Activity className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">Package 2: CSOS</h3>
                  </div>
                  <h4 className="text-lg font-medium opacity-90 mb-2">Customer Service Operations Support</h4>
                  <p className="text-indigo-100 text-sm italic border-l-2 border-indigo-400 pl-3">"For institutions that want ongoing quality, control, and accountability."</p>
                </div>

                <div className="p-8 flex-1 flex flex-col">
                  <h5 className="font-bold text-gray-900 text-lg mb-6 flex items-center gap-2 pb-2 border-b border-gray-100">
                    <span className="w-2 h-8 bg-indigo-600 rounded-full"></span>
                    What We Deliver
                  </h5>

                  <div className="grid grid-cols-1 gap-4 mb-8">
                    {[
                      'Service monitoring and quality assessment',
                      'Performance reviews',
                      'Quality assessments',
                      'Improvement recommendations',
                      'Refresher trainings',
                      'Management reports'
                    ].map((item, i) => (
                      <div key={i} className="flex items-start p-3 rounded-lg bg-gray-50 border border-gray-100 hover:border-indigo-100 transition-colors">
                        <div className="mt-1 p-1 bg-indigo-100 rounded-md mr-3 text-indigo-600">
                          <CheckCircle className="w-3 h-3" />
                        </div>
                        <span className="text-gray-700 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-indigo-50/50 p-6 rounded-2xl border border-indigo-100 mt-auto">
                    <h5 className="flex items-center gap-2 font-bold text-indigo-800 mb-4 uppercase text-sm tracking-wide">
                      <Target className="w-5 h-5" />
                      Key Results
                    </h5>
                    <div className="space-y-3">
                      {[
                        'Continuous improvement',
                        'Service discipline',
                        'Management visibility',
                        'Institutional reliability'
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-gray-700 text-sm font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
      </div>
    </>
  );
}
