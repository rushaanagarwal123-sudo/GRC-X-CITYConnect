"use client";

import React, { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

const ContactForm = () => {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate submission
        setTimeout(() => {
            setSubmitted(true);
        }, 500);
    };

    if (submitted) {
        return (
            <div className="bg-white p-12 rounded-3xl shadow-xl text-center animate-in zoom-in duration-500">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={40} className="text-primary" />
                </div>
                <h3 className="text-3xl font-bold text-text-dark mb-4">Message Sent!</h3>
                <p className="text-gray-600 mb-8 max-w-sm mx-auto">
                    Thank you for reaching out to CityConnect. Our team will get back to you within 24-48 hours.
                </p>
                <button
                    onClick={() => setSubmitted(false)}
                    className="text-primary font-bold hover:underline"
                >
                    Send another message
                </button>
            </div>
        );
    }

    return (
        <div className="bg-white p-10 md:p-14 rounded-3xl shadow-2xl border border-gray-100">
            <h3 className="text-3xl font-bold text-text-dark mb-2">Connect With Us</h3>
            <p className="text-gray-500 mb-10">Have questions about our initiatives? We're here to help.</p>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2 px-1">Full Name</label>
                    <input
                        id="name"
                        type="text"
                        required
                        className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2 px-1">Email Address</label>
                    <input
                        id="email"
                        type="email"
                        required
                        className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2 px-1">Message</label>
                    <textarea
                        id="message"
                        required
                        rows={4}
                        className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                        placeholder="How can we work together?"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full bg-primary hover:bg-dark-teal text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all shadow-lg hover:shadow-primary/20 group"
                >
                    <span>Send Message</span>
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
