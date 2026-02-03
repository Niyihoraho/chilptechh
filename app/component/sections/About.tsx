'use client';

import Image from 'next/image';
import { FiCheckCircle as CheckCircle } from 'react-icons/fi';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About Chilptech</h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed mb-8">
              <p>
                Chilptech is an institutional service systems partner dedicated to transforming how organizations serve, engage, and respond to the people they work with. We provide professional customer service, community engagement, and citizen satisfaction solutions for enterprises, NGOs, and government agencies.
              </p>
              <p>
                Our mission is to help institutions build structured, accountable, and people-centered service systems that improve stakeholder experience, strengthen trust, and enhance organizational credibility. We focus on practical and sustainable approaches, combining governance, clear processes, and staff capacity building to deliver measurable improvements in service quality.
              </p>
              <p>
                At Chilptech, we believe that strong institutions are built on strong service systems. Our work supports organizations in creating lasting impact by improving how they listen, respond, and deliver value to the communities and clients they serve as their main asset.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              <div className="flex items-center gap-3">
                <CheckCircle className="text-[#059669] text-xl" />
                <span className="text-gray-700">Institutional Excellence</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-[#059669] text-xl" />
                <span className="text-gray-700">Accountability Systems</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-[#059669] text-xl" />
                <span className="text-gray-700">Capacity Building</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-[#059669] text-xl" />
                <span className="text-gray-700">Measurable Impact</span>
              </div>
            </div>


          </div>
          <div className="relative">
            <Image
              src="/About.png"
              alt="CHILPTECH Team"
              width={600}
              height={400}
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-[#1e40af] text-white p-6 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
