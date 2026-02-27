import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import MapWrapper from "@/components/MapWrapper";
import { ArrowRight, MapPin, Target, ShieldCheck } from "lucide-react";

export default function Home() {
    const highlightNeighborhoods = [
        "Morrisania",
        "Claremont Village",
        "Melrose",
    ];

    // Helper for GitHub Pages asset paths
    const asset = (path: string) => `/GRC-X-CITYConnect${path}`;

    return (
        <div className="flex flex-col">
            {/* Hero Section - Map First */}
            <section id="map-hero" className="w-full bg-white py-12 px-5 md:py-20 md:px-12 overflow-hidden">
                <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-10 md:gap-16">
                    {/* Interactive Map */}
                    <div className="relative rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden border border-gray-100 w-full min-h-[500px] md:min-h-[600px] animate-scale-in">
                        <MapWrapper />
                    </div>

                    {/* Call to Action */}
                    <div className="flex flex-col items-center w-full max-w-3xl animate-slide-up delay-200">
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSd3b2Uj0dfcLGjABHlGVjkJ8kAN0fX35t-P8wAlwsB2DrtUZQ/viewform?usp=header"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full bg-primary text-white px-6 py-8 md:px-8 md:py-10 rounded-2xl md:rounded-[2.5rem] shadow-2xl hover:shadow-primary/40 transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center gap-4 md:gap-6 group text-center border-4 border-white"
                        >
                            <div className="w-14 h-14 md:w-16 md:h-16 bg-white/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <Target size={28} className="text-white md:hidden" />
                                <Target size={32} className="text-white hidden md:block" />
                            </div>
                            <h3 className="text-xl md:text-2xl font-black leading-tight">
                                Reach out to us for assistance throughout Bronx
                            </h3>
                            <div className="flex items-center gap-3 font-bold text-xs md:text-sm uppercase tracking-[0.2em] bg-white/10 px-5 py-3 rounded-full group-hover:bg-white/20 transition-all">
                                Open Form <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </div>
                        </a>
                        <p className="mt-4 md:mt-6 text-gray-400 text-xs font-medium uppercase tracking-widest animate-reveal delay-400">Available 24/7 for community support</p>
                    </div>
                </div>
            </section>

            {/* Trust / Stats Bar */}
            <section className="bg-white border-y border-gray-100 py-8 md:py-10 animate-reveal">
                <div className="max-w-6xl mx-auto px-5 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    <div className="flex items-start gap-4 md:gap-5 group transition-all duration-300 hover:translate-y-[-4px]">
                        <div className="p-3 bg-primary/10 rounded-2xl group-hover:bg-primary group-hover:text-white transition-colors duration-300 shrink-0">
                            <Target className="text-primary group-hover:text-white" size={24} />
                        </div>
                        <div>
                            <h4 className="font-bold text-text-dark mb-1 text-sm md:text-base">Targeted Impact</h4>
                            <p className="text-xs md:text-sm text-gray-500">Focusing on neighborhoods with the highest need for connectivity.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 md:gap-5 group transition-all duration-300 hover:translate-y-[-4px]">
                        <div className="p-3 bg-primary/10 rounded-2xl group-hover:bg-primary group-hover:text-white transition-colors duration-300 shrink-0">
                            <ShieldCheck className="text-primary group-hover:text-white" size={24} />
                        </div>
                        <div>
                            <h4 className="font-bold text-text-dark mb-1 text-sm md:text-base">WCAG AA Compliant</h4>
                            <p className="text-xs md:text-sm text-gray-500">Accessible tools for all community members to stay informed.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 md:gap-5 group transition-all duration-300 hover:translate-y-[-4px]">
                        <div className="p-3 bg-primary/10 rounded-2xl group-hover:bg-primary group-hover:text-white transition-colors duration-300 shrink-0">
                            <ArrowRight className="text-primary group-hover:text-white" size={24} />
                        </div>
                        <div>
                            <h4 className="font-bold text-text-dark mb-1 text-sm md:text-base">Community Driven</h4>
                            <p className="text-xs md:text-sm text-gray-500">Programs designed and led by local neighborhood leaders.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Service Areas */}
            <section className="py-14 px-5 md:py-24 md:px-8 bg-bg-gray">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-6 md:gap-8 animate-slide-up">
                        <div className="max-w-2xl">
                            <h2 className="text-3xl md:text-4xl font-black text-text-dark mb-4 md:mb-6 leading-tight">
                                Our Primary Focus Areas
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                                CityConnect operates across several key neighborhoods in the Bronx and Northern Manhattan. Each area represents a unique partnership with local stakeholders.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {highlightNeighborhoods.map((name, index) => (
                            <div key={name} className={`group bg-white p-7 md:p-10 rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-primary/20 animate-slide-up`} style={{ animationDelay: `${(index + 1) * 0.1}s` }}>
                                <div className="text-primary font-black text-4xl md:text-5xl mb-4 md:mb-6 opacity-10 group-hover:opacity-20 transition-opacity">0{index + 1}</div>
                                <h3 className="text-xl md:text-2xl font-bold text-text-dark mb-3 md:mb-4">{name}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed mb-6 md:mb-8">
                                    Serving residents through dedicated community centers and local advocacy networks established in {new Date().getFullYear() - 2}.
                                </p>
                                <div className="flex items-center gap-2 text-primary font-bold text-sm cursor-pointer hover:gap-4 transition-all">
                                    <span>View Initiatives</span>
                                    <ArrowRight size={16} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-14 px-5 md:py-24 md:px-8 bg-white" id="contact">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
                        <div className="animate-slide-right">
                            <span className="text-primary font-black uppercase tracking-widest text-xs md:text-sm mb-4 md:mb-6 block">Get in Touch</span>
                            <h2 className="text-3xl md:text-5xl font-black text-text-dark mb-6 md:mb-8 leading-[1.1]">
                                Have a question? We'd love to hear from you.
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8 md:mb-10">
                                Whether you're a potential local partner, a volunteer, or a resident with a question, our team is ready to connect.
                            </p>

                            <div className="space-y-6 md:space-y-8">
                                <div className="flex items-center gap-4 md:gap-6 group">
                                    <div className="w-12 h-12 md:w-14 md:h-14 bg-bg-gray rounded-xl md:rounded-2xl flex items-center justify-center group-hover:bg-primary/10 transition-colors shrink-0">
                                        <MapPin className="text-dark-teal group-hover:text-primary" size={22} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-text-dark text-sm md:text-base">Official Address</h4>
                                        <p className="text-gray-500 text-xs md:text-sm">Melrose Park, Bronx, NY 10451</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 md:gap-6 group">
                                    <div className="w-12 h-12 md:w-14 md:h-14 bg-bg-gray rounded-xl md:rounded-2xl flex items-center justify-center group-hover:bg-primary/10 transition-colors shrink-0">
                                        <Target className="text-dark-teal group-hover:text-primary" size={22} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-text-dark text-sm md:text-base">Email Us</h4>
                                        <p className="text-gray-500 text-xs md:text-sm">hello@cityconnect.org</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="animate-scale-in delay-200">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
