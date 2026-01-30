'use client';

import {
    FiShield,
    FiLayers,
    FiZap,
    FiCheckCircle,
    FiUsers,
    FiBarChart2
} from 'react-icons/fi';

const features = [
    {
        title: "Institutional Expertise",
        description: "We specialize in serving enterprises, NGOs, and government agencies. Our solutions are tailored to institutional structures, accountability requirements, and stakeholder expectations.",
        icon: FiShield,
        color: "blue"
    },
    {
        title: "Systems, Not Just Advice",
        description: "We go beyond consultancy. We build complete service systems including procedures, roles, training, and operational frameworks that organizations can use immediately.",
        icon: FiLayers,
        color: "indigo"
    },
    {
        title: "Low-Cost, High-Impact Approach",
        description: "Our methods are practical and sustainable. We deliver strong results without expensive technology or complex infrastructure, making our services accessible and scalable.",
        icon: FiZap,
        color: "amber"
    },
    {
        title: "Focus on Governance and Accountability",
        description: "We strengthen internal discipline, transparency, and responsibility, enabling organizations to demonstrate credibility to clients, communities, donors, and regulators.",
        icon: FiCheckCircle,
        color: "emerald"
    },
    {
        title: "People-Centered Solutions",
        description: "We improve how institutions communicate, respond, and engage. Our work directly enhances stakeholder experience and builds long-term trust.",
        icon: FiUsers,
        color: "rose"
    },
    {
        title: "Long-Term Partnership Model",
        description: "We are not a one-time service provider. We position ourselves as an operational partner committed to continuous improvement and institutional growth.",
        icon: FiBarChart2,
        color: "purple"
    }
];

const colorVariants: { [key: string]: string } = {
    blue: "bg-blue-100 text-blue-600 border-blue-100 hover:border-blue-400 group-hover:bg-blue-600",
    indigo: "bg-indigo-100 text-indigo-600 border-indigo-100 hover:border-indigo-400 group-hover:bg-indigo-600",
    amber: "bg-amber-100 text-amber-600 border-amber-100 hover:border-amber-400 group-hover:bg-amber-600",
    emerald: "bg-emerald-100 text-emerald-600 border-emerald-100 hover:border-emerald-400 group-hover:bg-emerald-600",
    rose: "bg-rose-100 text-rose-600 border-rose-100 hover:border-rose-400 group-hover:bg-rose-600",
    purple: "bg-purple-100 text-purple-600 border-purple-100 hover:border-purple-400 group-hover:bg-purple-600",
};

export default function WhyChooseUs() {
    return (
        <section id="why-choose-us" className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-100/50 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-sm font-bold mb-4 tracking-wide uppercase">
                        Value Proposition
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                        Why Choose <span className="text-[#1e40af]">CHILPTECH?</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        We deliver more than just services; we build sustainable systems that transform organizational excellence.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-blue-200 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1"
                        >
                            <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300 ${colorVariants[feature.color].split(' ')[0]} ${colorVariants[feature.color].split(' ')[1]}`}>
                                <feature.icon className="text-2xl group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#1e40af] transition-colors">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
