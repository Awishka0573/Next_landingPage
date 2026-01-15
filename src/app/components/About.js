import Link from "next/link";

export default function About() {
    return (
        <div className="min-h-screen bg-white">
            <main>
                {/* About Hero Section */}
                <section className="relative py-20 overflow-hidden bg-gray-50">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
                        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-pink-100/40 rounded-full blur-[100px]"></div>
                        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-rose-100/40 rounded-full blur-[100px]"></div>
                    </div>

                    <div className="relative max-w-7xl mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight mb-6">
                            Empowering the Next Generation of <span className="text-pink-600">AI Creators</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
                            AI-NEXT is more than just a dashboard. It's a comprehensive platform designed to streamline your AI workflows, from model management to performance tracking.
                        </p>
                    </div>
                </section>

                {/* Our Mission */}
                <section className="py-24 max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-5xl font-bold text-gray-900 mb-6">Our Mission</h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Our mission is to democratize access to advanced AI management tools. We believe that every creator, from solo developers to large teams, should have the power to scale their AI visions with ease and efficiency.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                By focusing on user-centric design and cuttingrd-edge performance with Turbopack, we've built a platform that feels like the future of web applications.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-tr from-pink-500 to-rose-500 rounded-3xl blur-2xl opacity-10"></div>
                            <div className="relative bg-gray-900 p-8 rounded-3xl border border-gray-100 shadow-xl overflow-hidden group">
                                <img
                                    src="/logo.png"
                                    alt="AI-NEXT Vision"
                                    className="w-full h-auto object-cover rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                                />
                                <div className="mt-6">
                                    <h3 className="text-xl font-bold text-gray-900">Innovation First</h3>
                                    <p className="text-gray-500">Built for the modern web with Next.js 16.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Key Values */}
                <section className="py-24 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-black text-gray-900">Our Core Values</h2>
                            <div className="mt-4 w-20 h-1 bg-pink-600 mx-auto rounded-full"></div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Performance",
                                    desc: "Blazing fast speeds powered by Turbopack and Next.js 16.",
                                    icon: "⚡"
                                },
                                {
                                    title: "Design",
                                    desc: "A premium, modern look that puts the user experience first.",
                                    icon: "🎨"
                                },
                                {
                                    title: "Community",
                                    desc: "Built by and for AI creators around the world.",
                                    icon: "🌍"
                                }
                            ].map((value, i) => (
                                <div key={i} className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                                    <div className="text-4xl mb-4">{value.icon}</div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                                    <p className="text-gray-500 leading-relaxed">{value.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24">
                    <div className="max-w-5xl mx-auto px-4 text-center">
                        <div className="bg-gray-900 rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
                            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-pink-600/20 rounded-full blur-[100px]"></div>
                            <div className="relative z-10">
                                <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
                                    Ready to join the AI revolution?
                                </h2>
                                <Link
                                    href="/login"
                                    className="inline-block px-10 py-5 bg-pink-600 text-white font-bold text-lg rounded-2xl hover:bg-pink-700 transition-all shadow-lg shadow-pink-900/40 active:scale-95"
                                >
                                    Get Started Today
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}