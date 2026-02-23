import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import { ArrowRight, MapPin, Target, ShieldCheck } from "lucide-react";


export default function Home() {
    const highlightNeighborhoods = [
        "Morrisania",
        "Claremont Village",
        "Melrose",
    ];

    return (
        <div className="flex flex-col">
            {/* Hero Section - Map First */}
            <section id="map-hero" className="w-full bg-white py-20 px-12">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-16">
                    {/* Map Image */}
                    <div className="relative rounded-3xl shadow-2xl overflow-hidden border border-gray-100 flex-1 max-w-2xl">
                        <Image
                            src="/static-map.jpg"
                            alt="Map of NYC Service Areas"
                            width={850}
                            height={1024}
                            className="w-full h-auto"
                            priority
                        />
                    </div>

                    {/* Call to Action */}
                    <div className="flex flex-col items-center flex-1 max-w-md">
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSd3b2Uj0dfcLGjABHlGVjkJ8kAN0fX35t-P8wAlwsB2DrtUZQ/viewform?usp=header"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full bg-primary text-white px-8 py-10 rounded-[2.5rem] shadow-2xl hover:shadow-primary/40 transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center gap-6 group text-center border-4 border-white"
                        >
                            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <Target size={32} className="text-white" />
                            </div>
                            <h3 className="text-2xl font-black leading-tight">
                                Reach out to us for assistance throughout Bronx
                            </h3>
                            <div className="flex items-center gap-3 font-bold text-sm uppercase tracking-[0.2em] bg-white/10 px-6 py-3 rounded-full group-hover:bg-white/20 transition-all">
                                Open Form <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </div>
                        </a>
                        <p className="mt-6 text-gray-400 text-xs font-medium uppercase tracking-widest">Available 24/7 for community support</p>
                    </div>
                </div>
            </section>

            {/* Trust / Stats Bar */}
            <section className="bg-white border-y border-gray-100 py-10">
                <div className="max-w-6xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="flex items-start gap-5">
                        <div className="p-3 bg-primary/10 rounded-2xl">
                            <Target className="text-primary" size={28} />
                        </div>
                        <div>
                            <h4 className="font-bold text-text-dark mb-1">Targeted Impact</h4>
                            <p className="text-sm text-gray-500">Focusing on neighborhoods with the highest need for connectivity.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-5">
                        <div className="p-3 bg-primary/10 rounded-2xl">
                            <ShieldCheck className="text-primary" size={28} />
                        </div>
                        <div>
                            <h4 className="font-bold text-text-dark mb-1">WCAG AA Compliant</h4>
                            <p className="text-sm text-gray-500">Accessible tools for all community members to stay informed.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-5">
                        <div className="p-3 bg-primary/10 rounded-2xl">
                            <ArrowRight className="text-primary" size={28} />
                        </div>
                        <div>
                            <h4 className="font-bold text-text-dark mb-1">Community Driven</h4>
                            <p className="text-sm text-gray-500">Programs designed and led by local neighborhood leaders.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Service Areas */}
            <section className="py-24 px-8 bg-bg-gray">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                        <div className="max-w-2xl">
                            <h2 className="text-4xl font-black text-text-dark mb-6 leading-tight">
                                Our Primary Focus Areas
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                CityConnect operates across several key neighborhoods in the Bronx and Northern Manhattan. Each area represents a unique partnership with local stakeholders.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {highlightNeighborhoods.map((name, index) => (
                            <div key={name} className="group bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-primary/20">
                                <div className="text-primary font-black text-5xl mb-6 opacity-10 group-hover:opacity-20 transition-opacity">0{index + 1}</div>
                                <h3 className="text-2xl font-bold text-text-dark mb-4">{name}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed mb-8">
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
            <section className="py-24 px-8 bg-white" id="contact">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <span className="text-primary font-black uppercase tracking-widest text-sm mb-6 block">Get in Touch</span>
                            <h2 className="text-5xl font-black text-text-dark mb-8 leading-[1.1]">
                                Have a question? We’d love to hear from you.
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-10">
                                Whether you're a potential local partner, a volunteer, or a resident with a question, our team is ready to connect.
                            </p>

                            <div className="space-y-8">
                                <div className="flex items-center gap-6">
                                    <div className="w-14 h-14 bg-bg-gray rounded-2xl flex items-center justify-center">
                                        <MapPin className="text-dark-teal" size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-text-dark">Official Address</h4>
                                        <p className="text-gray-500 text-sm">Melrose Park, Bronx, NY 10451</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-6">
                                    <div className="w-14 h-14 bg-bg-gray rounded-2xl flex items-center justify-center">
                                        <Target className="text-dark-teal" size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-text-dark">Email Us</h4>
                                        <p className="text-gray-500 text-sm">hello@cityconnect.org</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <ContactForm />
                    </div>
                </div>
            </section>
        </div>
    );
}
