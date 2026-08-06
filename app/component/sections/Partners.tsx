'use client';

import Image from 'next/image';

const partners = [
    {
        name: "GBUR",
        logo: "/partners/GBUR lo.png",
    },
    {
        name: "Partner 2",
        logo: "/partners/WhatsApp Image 2026-03-29 at 00.44.16.jpeg",
    }
];

export default function Partners() {
    return (
        <section id="partners" className="py-20 bg-white border-y border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-[#1e40af] text-sm font-bold mb-4 tracking-wide uppercase">
                        Our Collaborators
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1e40af] mb-4 tracking-tight">
                        Trusted Partners
                    </h2>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
                    {partners.map((partner, index) => (
                        <div
                            key={index}
                            className="group relative bg-white border border-gray-100 rounded-2xl p-10 shadow-sm hover:shadow-2xl transition-all duration-500 flex items-center justify-center min-w-[280px] md:min-w-[350px] h-48 md:h-56 transform hover:-translate-y-2"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                            <Image
                                src={partner.logo}
                                alt={partner.name}
                                width={350}
                                height={180}
                                className="relative z-10 h-24 md:h-32 w-auto object-contain transition-all duration-500 hover:scale-105"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
