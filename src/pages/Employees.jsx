import React from 'react';
import { motion } from 'framer-motion';
import {
    ArrowRight, Users, ShieldCheck, Zap, HandCoins,
    BarChart3, Award, Database, CheckCircle2
} from 'lucide-react';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
const Employees = () => {
    return (
        <div className="pt-32 min-h-screen bg-dark">
            {/* HERO SECTION */}
            <section className="section-container text-center py-20">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="feature-content-only"
                >
                    <h1 className="hero-title-small">
                        EMPOWER YOUR TEAM
                    </h1>
                    <p className="large-p mt-8">
                        Arm your staff with an intuitive POS designed for speed, accountability, and excellence. Build a foundation for growth with tools that people love to use.
                    </p>
                    <div className="flex flex-col md:flex-row gap-8 justify-center mt-12 mb-20">
                        <button className="btn-primary" onClick={() => window.location.href = 'https://cal.com/piyushchandak/30min'}>Sign up now</button>
                        <button className="btn-secondary" onClick={() => window.location.href = 'https://cal.com/piyushchandak/30min'}>Book a demo</button>
                    </div>
                </motion.div>
            </section>

            {/* SECTION 1: ADAPTATION */}
            <section className="section-container py-32">
                <motion.div 
                    initial={{ opacity: 0 }} 
                    whileInView={{ opacity: 1 }} 
                    viewport={{ once: true }} 
                    className="feature-content-only"
                >
                    <div className="text-center">
                        <h3 className="tagline">Efficiency</h3>
                        <h2 className="section-title mt-4 uppercase">QUICK ADAPTATION</h2>
                        <p className="text-xl text-white/90 font-medium mt-8 leading-relaxed max-w-3xl mx-auto">
                            A streamlined solution that empowers your team to work faster and smarter. No long training sessions required.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20 text-left">
                            {[
                                "Hassle-free, intuitive interface for all skill levels.",
                                "Flexible customizations for perfect register flow.",
                                "Reduce inquiries with Customer Facing Displays."
                            ].map((text, i) => (
                                <div key={i} className="flex items-start gap-4 glass-card p-8 border-accent/5 hover:border-accent/20 transition-all">
                                    <CheckCircle2 className="text-accent shrink-0 mt-1" size={20} />
                                    <p className="text-lg text-dim">{text}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-16">
                            <button className="btn-secondary" onClick={() => window.location.href = 'https://cal.com/piyushchandak/30min'}>Book a demo</button>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* SECTION 2: GRATUITY */}
            <section className="bg-dark-glass py-32 border-y border-glass-border">
                <div className="section-container">
                    <motion.div 
                        initial={{ opacity: 0 }} 
                        whileInView={{ opacity: 1 }} 
                        viewport={{ once: true }} 
                        className="feature-content-only"
                    >
                        <div className="text-center">
                            <h3 className="tagline">Transparency</h3>
                            <h2 className="section-title mt-4 uppercase">SIMPLIFIED GRATUITY</h2>
                            <p className="text-xl text-white/90 font-medium mt-8 leading-relaxed max-w-3xl mx-auto">
                                Complete transparency in tip management. consolidated, accurate, and error-free. Every cent accounted for.
                            </p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">
                                <div className="text-left space-y-8">
                                    {[
                                        "Direct system input for all tips.",
                                        "Full history and accountability tracking.",
                                        "Completely customizable gratuity rules."
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-6 group">
                                            <div className="w-2 h-2 rounded-full bg-accent group-hover:scale-150 transition-transform shadow-[0_0_10px_rgba(206,144,54,0.5)]" />
                                            <p className="text-xl text-dim font-medium">{item}</p>
                                        </li>
                                    ))}
                                </div>
                                <div className="glass-card flex flex-col items-center justify-center p-12 text-center !bg-accent/5">
                                    <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mb-8 border border-accent/20">
                                        <HandCoins className="text-accent" size={32} />
                                    </div>
                                    <h4 className="text-2xl font-bold text-white mb-4">TERMINAL SYNC</h4>
                                    <p className="text-dim">Tips are synced instantly from your hardware to the dashboard reports.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* SECTION 3: PERFORMANCE */}
            <section className="section-container py-32">
                <div className="text-center mb-24">
                    <h3 className="tagline">Success</h3>
                    <h2 className="section-title uppercase">PERFORMANCE INSIGHTS</h2>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {[
                        { icon: Database, title: "Monitor Sales", desc: "Real-time tracking of individual performance." },
                        { icon: Users, title: "Forge Teams", desc: "Metrics-driven focus for building your ideal team." },
                        { icon: Award, title: "Reward Excellence", desc: "Recognize top performers based on verifiable data." },
                        { icon: Zap, title: "Equip with Data", desc: "Provide staff with the insights they need to improve." }
                    ].map((card, i) => (
                        <motion.div 
                            key={i}
                            whileHover={{ y: -10 }}
                            className="glass-card hover:border-accent/30 transition-all"
                        >
                            <card.icon className="text-accent mb-8" size={32} />
                            <h4 className="text-xl font-bold mb-4 text-white uppercase tracking-tight">{card.title}</h4>
                            <p className="text-dim leading-relaxed">{card.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

             {/* FINAL CTA */}
            <section className="section-container pb-40">
                <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    className="glass-card p-24 text-center relative overflow-hidden feature-content-only"
                >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-accent/20 blur-xl" />
                    <h2 className="section-title uppercase">READY TO EMPOWER?</h2>
                    <p className="large-p mt-8">Transform how your staff handles checkout, tips, and sales performance.</p>
                    <button 
                        className="btn-primary mt-16 px-16 py-6 text-2xl flex items-center gap-6 mx-auto group"
                        onClick={() => window.location.href = 'https://cal.com/piyushchandak/30min'}
                    >
                        Sign up Now <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                    </button>
                </motion.div>
            </section>

            <FAQ />
            <Footer />
        </div>
    )
};

export default Employees;
