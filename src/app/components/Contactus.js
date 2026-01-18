"use client";
import { useState } from "react";

export default function Contactus() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="min-h-screen bg-white">
             <main>
                {/* Contact Hero Section */}
                <section id="contact" className="relative py-20 overflow-hidden bg-gray-50">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
                        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-pink-100/40 rounded-full blur-[100px]"></div>
                        <div className="absolute bottom-[10%] left-[-5%] w-[30%] h-[30%] bg-rose-100/40 rounded-full blur-[100px]"></div>
                    </div>

                    <div className="relative max-w-7xl mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight mb-6">
                            Get in <span className="text-pink-600">Touch</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-semibold">
                            Have questions or feedback? Don’t hesitate to<br/>
                            get in touch — I’m always open to new ideas and collaborations.
                        </p>
                    </div>
                </section>

                {/* Contact Content */}
                <section className="py-24 max-w-7xl mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16">

                        {/* Contact Info */}
                        <div className="space-y-12">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
                                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                    Reach out to us through any of these channels. We aim to respond to all inquiries within 24 hours.
                                </p>

                                <div className="space-y-6">
                                    {[
                                        { icon: "📧", label: "Email", value: "awishkaisuru0573@gmail.com" },
                                        { icon: "📍", label: "Address", value: "No.01, Bandaranayaka mw, Ballapana Galigamuwa Town." },
                                        { icon: "💬", label: "Live Chat", value: "0701224436" }
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-2xl bg-pink-50 flex items-center justify-center text-2xl">
                                                {item.icon}
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold text-pink-600 uppercase tracking-widest">{item.label}</p>
                                                <p className="text-lg text-gray-900 font-semibold">{item.value}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Social Links */}
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Follow Us</h3>
                                <div className="flex gap-4">
                                    {["Twitter", "LinkedIn", "Instagram", "GitHub"].map((social) => (
                                        <a
                                            key={social}
                                            href="#"
                                            className="px-4 py-2 rounded-xl bg-gray-50 text-gray-600 border border-gray-100 hover:bg-pink-600 hover:text-white hover:border-pink-600 transition-all font-bold"
                                        >
                                            {social}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="relative">
                            <div className="absolute -inset-4 bg-linear-to-tr from-pink-500 to-rose-500 rounded-[3rem] blur-2xl opacity-10"></div>
                            <div className="relative bg-white p-8 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-2xl">
                                {!submitted ? (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-gray-700 ml-1">Full Name</label>
                                                <input
                                                    required
                                                    placeholder="Awishka Isuru"
                                                    className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-4 focus:ring-pink-500/10 focus:border-pink-500 transition-all font-medium"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
                                                <input
                                                    required
                                                    type="email"
                                                    placeholder="awishka@gmail.com.com"
                                                    className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-4 focus:ring-pink-500/10 focus:border-pink-500 transition-all font-medium"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-gray-700 ml-1">Subject</label>
                                            <input
                                                required
                                                placeholder="How can we help?"
                                                className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-4 focus:ring-pink-500/10 focus:border-pink-500 transition-all font-medium"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-gray-700 ml-1">Message</label>
                                            <textarea
                                                required
                                                rows="4"
                                                placeholder="Your message here..."
                                                className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-4 focus:ring-pink-500/10 focus:border-pink-500 transition-all font-medium resize-none"
                                            ></textarea>
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full py-5 rounded-2xl bg-pink-600 text-white font-bold text-lg hover:bg-pink-700 transition-all shadow-lg shadow-pink-200 active:scale-[0.98]"
                                        >
                                            Send Message
                                        </button>
                                    </form>
                                ) : (
                                    <div className="text-center py-12 animate-fade-in">
                                        <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center text-4xl mx-auto mb-6">
                                            ✓
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                                        <p className="text-gray-500 font-medium">
                                            Thank you for reaching out. We'll be in touch soon.
                                        </p>
                                        <button
                                            onClick={() => setSubmitted(false)}
                                            className="mt-8 text-pink-600 font-bold hover:underline"
                                        >
                                            Send another message
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>

                    </div>
                </section>
            </main>
        </div>
    );
}
