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
      <div className={`transition-all duration-700 ease-in-out overflow-hidden ${showDetailedServices ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <section className="py-24 bg-gray-50 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Business Packages Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Business Service Packages</h2>
              <div className="w-24 h-1 bg-[#1e40af] mx-auto rounded-full mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                In-depth breakdown of our specialized solutions designed to elevate your business operations.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-10 mb-24">
              {/* Business Package 1 */}
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
                      <p className="text-gray-600 text-sm mb-2">Service audit, stakeholder interviews, gap analysis report.</p>
                    </div>

                    <div className="relative pl-6 border-l-2 border-blue-100 ml-2">
                      <span className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></span>
                      <h6 className="font-bold text-gray-800 mb-2 text-base">Phase 2: System Design</h6>
                      <p className="text-gray-600 text-sm mb-2">Service workflow, roles & responsibilities, escalation structure, communication standards.</p>
                    </div>
                    <div className="relative pl-6 border-l-2 border-blue-100 ml-2">
                      <span className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></span>
                      <h6 className="font-bold text-gray-800 mb-2 text-base">Phase 3: Documentation</h6>
                      <p className="text-gray-600 text-sm mb-2">SOP manual, complaint handling procedures, response templates, reporting formats.</p>
                    </div>
                    <div className="relative pl-6 border-l-2 border-transparent ml-2">
                      <span className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></span>
                      <h6 className="font-bold text-gray-800 mb-2 text-base">Phase 4: Training</h6>
                      <p className="text-gray-600 text-sm mb-2">Frontline staff training, supervisor training, service culture orientation.</p>
                    </div>
                  </div>

                  <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100 mt-auto">
                    <h5 className="flex items-center gap-2 font-bold text-blue-800 mb-4 uppercase text-sm tracking-wide">
                      <Target className="w-5 h-5" />
                      Client Outcomes
                    </h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {['Operating model', 'Trained staff', 'Documented SOPs', 'Ready-to-run system'].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-gray-700 text-sm font-medium">
                          <CheckCircle className="text-blue-500 w-4 h-4 flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Package 2 */}
              <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col h-full">
                <div className="bg-gradient-to-r from-blue-700 to-[#1e40af] p-8 text-white">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm">
                      <Activity className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">Package 2: CSOS</h3>
                  </div>
                  <h4 className="text-lg font-medium opacity-90 mb-2">Customer Service Operations Support</h4>
                  <p className="text-blue-100 text-sm italic border-l-2 border-blue-400 pl-3">"For institutions that want ongoing quality, control, and accountability."</p>
                </div>

                <div className="p-8 flex-1 flex flex-col">
                  <h5 className="font-bold text-gray-900 text-lg mb-6 flex items-center gap-2 pb-2 border-b border-gray-100">
                    <span className="w-2 h-8 bg-blue-600 rounded-full"></span>
                    What We Deliver
                  </h5>

                  <div className="grid grid-cols-1 gap-4 mb-8">
                    {[
                      'Service monitoring and quality assessment',
                      'Performance reviews & improvements',
                      'Regular quality assessments',
                      'Refresher staff trainings',
                      'Detailed management reports'
                    ].map((item, i) => (
                      <div key={i} className="flex items-start p-3 rounded-lg bg-gray-50 border border-gray-100 hover:border-blue-100 transition-colors">
                        <div className="mt-1 p-1 bg-blue-100 rounded-md mr-3 text-blue-600">
                          <CheckCircle className="w-3 h-3" />
                        </div>
                        <span className="text-gray-700 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100 mt-auto">
                    <h5 className="flex items-center gap-2 font-bold text-blue-800 mb-4 uppercase text-sm tracking-wide">
                      <Target className="w-5 h-5" />
                      Key Results
                    </h5>
                    <div className="grid grid-cols-2 gap-3">
                      {['Continuous improvement', 'Service discipline', 'Management visibility', 'Reliability'].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-gray-700 text-sm font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* NGO Packages Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">NGO Service Packages</h2>
              <div className="w-24 h-1 bg-emerald-600 mx-auto rounded-full mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Specialized engagement systems designed to strengthen community trust and donor compliance.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-10 mb-24">
              {/* NGO Package 1 */}
              <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col">
                <div className="bg-gradient-to-r from-emerald-600 to-teal-700 p-8 text-white">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">Package 1</h3>
                  </div>
                  <h4 className="text-lg font-medium opacity-90 mb-2">Community & Stakeholder Engagement System Setup</h4>
                  <p className="text-emerald-100 text-sm italic border-l-2 border-emerald-400 pl-3">"For NGOs that want to establish a structured and professional engagement system."</p>
                </div>

                <div className="p-8 flex-1">
                  <h5 className="font-bold text-gray-900 text-lg mb-6 flex items-center gap-2 pb-2 border-b border-gray-100">
                    <span className="w-2 h-8 bg-emerald-600 rounded-full"></span>
                    What We Do
                  </h5>
                  <ul className="space-y-4 mb-8">
                    {[
                      'Map communities and stakeholders',
                      'Design engagement and participation framework',
                      'Set up feedback and grievance system',
                      'Develop engagement procedures (SOPs)',
                      'Train field and program staff'
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-700">
                        <CheckCircle className="text-emerald-500 w-5 h-5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="bg-emerald-50/50 p-6 rounded-2xl border border-emerald-100 mt-auto">
                    <h5 className="flex items-center gap-2 font-bold text-emerald-800 mb-4 uppercase text-sm tracking-wide">
                      <Target className="w-5 h-5" />
                      Output
                    </h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {['Engagement structure', 'Trained field staff', 'Documented processes', 'Ready-to-use system'].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-gray-700 text-sm font-medium">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* NGO Package 2 */}
              <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col">
                <div className="bg-gradient-to-r from-teal-600 to-emerald-700 p-8 text-white">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm">
                      <Activity className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">Package 2</h3>
                  </div>
                  <h4 className="text-lg font-medium opacity-90 mb-2">Community & Stakeholder Engagement Management</h4>
                  <p className="text-emerald-100 text-sm italic border-l-2 border-emerald-400 pl-3">"For NGOs that want ongoing quality and accountability in engagement."</p>
                </div>

                <div className="p-8 flex-1">
                  <h5 className="font-bold text-gray-900 text-lg mb-6 flex items-center gap-2 pb-2 border-b border-gray-100">
                    <span className="w-2 h-8 bg-teal-600 rounded-full"></span>
                    What We Do (Ongoing)
                  </h5>
                  <ul className="space-y-4 mb-8">
                    {[
                      'Support community meetings and consultations',
                      'Monitor feedback and grievances',
                      'Provide regular engagement reports',
                      'Deliver continuous refresher training',
                      'Recommend improvements based on data'
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-700">
                        <CheckCircle className="text-teal-500 w-5 h-5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="bg-teal-50/50 p-6 rounded-2xl border border-teal-100 mt-auto">
                    <h5 className="flex items-center gap-2 font-bold text-teal-800 mb-4 uppercase text-sm tracking-wide">
                      <Target className="w-5 h-5" />
                      Output
                    </h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {['Strong community trust', 'Ethical participation', 'Donor compliance', 'Continuous improvement'].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-gray-700 text-sm font-medium">
                          <div className="w-1.5 h-1.5 rounded-full bg-teal-500"></div>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Government Packages Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Government Agency Service Packages</h2>
              <div className="w-24 h-1 bg-purple-600 mx-auto rounded-full mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Aligned with <span className="font-bold text-purple-700">Rwanda NST2</span> – aiming for 90%+ service quality by 2029.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-10">
              {/* Govt Package 1 */}
              <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col">
                <div className="bg-gradient-to-r from-purple-600 to-indigo-700 p-8 text-white">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm">
                      <Government className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">Package 1</h3>
                  </div>
                  <h4 className="text-lg font-medium opacity-90 mb-2">Quality Service Delivery & Community Engagement System setup</h4>
                  <p className="text-purple-100 text-sm italic border-l-2 border-purple-400 pl-3">"For public institutions that want to improve citizen experience and service quality."</p>
                </div>

                <div className="p-8 flex-1">
                  <h5 className="font-bold text-gray-900 text-lg mb-6 flex items-center gap-2 pb-2 border-b border-gray-100">
                    <span className="w-2 h-8 bg-purple-600 rounded-full"></span>
                    What We Do
                  </h5>
                  <ul className="space-y-4 mb-8">
                    {[
                      'Assess current citizen service practices',
                      'Design service standards and governance',
                      'Set up citizen feedback and grievance system',
                      'Develop service procedures (SOPs)',
                      'Train public servants for excellence'
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-700">
                        <CheckCircle className="text-purple-500 w-5 h-5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="bg-purple-50/50 p-6 rounded-2xl border border-purple-100 mt-auto">
                    <h5 className="flex items-center gap-2 font-bold text-purple-800 mb-4 uppercase text-sm tracking-wide">
                      <Target className="w-5 h-5" />
                      What You Get
                    </h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {['Citizen service model', 'Trained public servants', 'Clear accountability', 'Satisfaction system'].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-gray-700 text-sm font-medium">
                          <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Govt Package 2 */}
              <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col">
                <div className="bg-gradient-to-r from-indigo-600 to-purple-700 p-8 text-white">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm">
                      <Activity className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">Package 2</h3>
                  </div>
                  <h4 className="text-lg font-medium opacity-90 mb-2">Citizen Satisfaction Operations Support Services</h4>
                  <p className="text-purple-100 text-sm italic border-l-2 border-purple-400 pl-3">"For government agencies that want continuous service quality improvement."</p>
                </div>

                <div className="p-8 flex-1">
                  <h5 className="font-bold text-gray-900 text-lg mb-6 flex items-center gap-2 pb-2 border-b border-gray-100">
                    <span className="w-2 h-8 bg-indigo-600 rounded-full"></span>
                    What We Do (Ongoing)
                  </h5>
                  <ul className="space-y-4 mb-8">
                    {[
                      'Monitor citizen satisfaction metrics',
                      'Conduct regular service quality reviews',
                      'Track complaints and feedback loops',
                      'Provide detailed performance reports',
                      'Support service improvement actions'
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-700">
                        <CheckCircle className="text-indigo-500 w-5 h-5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="bg-indigo-50/50 p-6 rounded-2xl border border-indigo-100 mt-auto">
                    <h5 className="flex items-center gap-2 font-bold text-indigo-800 mb-4 uppercase text-sm tracking-wide">
                      <Target className="w-5 h-5" />
                      Output
                    </h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {['Better service delivery', 'Higher citizen satisfaction', 'Stronger public trust', 'NST2 target progress'].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-gray-700 text-sm font-medium">
                          <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
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
