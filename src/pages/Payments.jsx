import React from 'react';
import { motion } from 'framer-motion';
import {
    ArrowRight, Coins, Smile, Settings, CreditCard,
    Users, Headphones, BarChart3, Zap, Smartphone,
    Lock, ShieldCheck
} from 'lucide-react';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

import { useNavigate } from 'react-router-dom';

const Payments = () => {
    const navigate = useNavigate();
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
                        SECURE PAYMENTS <br /> INTEGRATED FOR GROWTH
                    </h1>
                    <p className="large-p mt-8">
                        Unlock the potential of your business with Vizion Payments. Seamlessly manage sales, secure transactions, and scale operations with elite protection.
                    </p>
                    <div className="flex flex-col md:flex-row gap-8 justify-center mt-12 mb-20">
                        <button className="btn-primary" onClick={() => navigate('/signup')}>Sign up Now</button>
                        <button className="btn-secondary" onClick={() => navigate('/demo')}>Book a demo</button>
                    </div>
                </motion.div>
            </section>

            {/* BENEFIT GRID */}
            <section className="section-container py-32">
                <div className="text-center mb-24">
                    <h3 className="tagline">Benefits</h3>
                    <h2 className="section-title uppercase">WHY CHOOSE VIZION PAYMENTS</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {[
                        { icon: Users, title: "Customers First", desc: "Automate transactions for a lightning-fast checkout experience." },
                        { icon: Headphones, title: "Unified Support", desc: "Expert assistance available 24/7 for hardware and software." },
                        { icon: BarChart3, title: "Business Success", desc: "Gain powerful insights that help you stay ahead of the market." }
                    ].map((item, idx) => (
                        <motion.div 
                            key={idx}
                            whileHover={{ y: -10 }}
                            className="bg-dark-glass p-12 rounded-3xl border border-glass-border hover:border-accent/30 transition-all text-center"
                        >
                            <div className="flex justify-center mb-10">
                                <item.icon className="text-accent" size={56} />
                            </div>
                            <h3 className="text-2xl font-bold mb-6 text-white uppercase tracking-tight">{item.title}</h3>
                            <p className="text-lg text-dim leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* EFFICIENCY DETAILS SECTION */}
            <section className="section-container py-32 bg-dark-glass rounded-[4rem]">
                <motion.div 
                    initial={{ opacity: 0 }} 
                    whileInView={{ opacity: 1 }} 
                    viewport={{ once: true }} 
                    className="feature-content-only"
                >
                    <div className="text-center">
                        <h3 className="tagline">Efficiency</h3>
                        <h2 className="section-title mt-4 uppercase">SINGLE SOLUTION EFFICIENCY</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20 text-left">
                            {[
                                "Launch fast with our user-friendly onboarding process.",
                                "Unified operations: Hardware, software, and support in one place.",
                                "Leverage payment data to tailor your customer experience.",
                                "Comprehensive overview of sales across multiple locations."
                            ].map((text, i) => (
                                <div key={i} className="flex gap-6 items-start glass-card p-8 border-accent/5 hover:border-accent/20 transition-all">
                                    <ArrowRight className="text-accent shrink-0 mt-1" size={24} />
                                    <p className="text-xl text-dim font-medium">{text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* 6-ITEM FEATURE GRID */}
            <section className="section-container py-40">
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-center mb-24">
                    <h3 className="tagline">Features</h3>
                    <h2 className="section-title uppercase">ROBUST & INTUITIVE</h2>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { icon: Zap, title: "Continuous Innovation", text: "Harness evolving features with unmatched expert support." },
                        { icon: BarChart3, title: "Max Efficiency", text: "Advanced accounting tools and valuable shopping metrics." },
                        { icon: Smartphone, title: "Live Insights", text: "Precise reporting and real-time performance tracking." },
                        { icon: Smile, title: "Happy Customers", text: "High-speed processing with multiple payment methods." },
                        { icon: Users, title: "Empowered Teams", text: "Simplified reconciliation and significant error reduction." },
                        { icon: Settings, title: "Streamlined Flow", text: "Access all sales and payment data in a unified dashboard." }
                    ].map((item, i) => (
                        <motion.div 
                            key={i} 
                            whileHover={{ scale: 1.02 }}
                            className="glass-card p-10 flex flex-col items-center text-center border-accent/5 hover:border-accent/20"
                        >
                            <div className="p-6 bg-accent/10 rounded-2xl mb-8 group-hover:bg-accent group-hover:text-dark transition-colors">
                                <item.icon size={32} />
                            </div>
                            <h4 className="text-2xl font-bold text-white mb-4 uppercase tracking-tight">{item.title}</h4>
                            <p className="text-lg text-dim leading-relaxed">{item.text}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* SECURITY & SUPPORT CAROUSEL STYLE SECTION */}
            <section className="section-container pb-40">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* SUPPORT */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="glass-card p-16 !border-accent/10"
                    >
                        <h2 className="text-4xl font-bold text-white mb-8 uppercase tracking-tighter">24/7 EXPERT SUPPORT</h2>
                        <ul className="space-y-6">
                            {[
                                "Plug-and-play setup for instant transactions.",
                                "Personalized one-on-one software training.",
                                "Guides, videos, and professional resources."
                            ].map((item, i) => (
                                <li key={i} className="flex gap-4 items-center">
                                    <div className="w-2 h-2 rounded-full bg-accent" />
                                    <p className="text-lg text-dim">{item}</p>
                                </li>
                            ))}
                        </ul>
                        <button className="btn-primary mt-12 w-full" onClick={() => navigate('/signup')}>Sign Up Now</button>
                    </motion.div>

                    {/* SECURITY */}
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="glass-card p-16 !bg-accent !text-dark"
                    >
                        <Lock className="mb-8" size={64} />
                        <h2 className="text-4xl font-bold mb-6 uppercase tracking-tighter">ELITE SECURITY</h2>
                        <p className="text-xl mb-10 font-bold opacity-80">PCI DSS Level 1 Valided compliance with end-to-end encryption.</p>
                        <ul className="space-y-6">
                            {[
                                "Data protection at every touchpoint.",
                                "Server monitoring 24 hours a day.",
                                "Fraud prevention and risk management."
                            ].map((item, i) => (
                                <li key={i} className="flex gap-4 items-center">
                                    <ShieldCheck size={24} />
                                    <p className="text-lg font-bold">{item}</p>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
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
                    <h2 className="section-title uppercase">READY TO TRANSACT?</h2>
                    <p className="large-p mt-8 italic">Experience the elite standard in POS payments.</p>
                    <button 
                        className="btn-primary mt-16 px-16 py-6 text-2xl flex items-center gap-6 mx-auto group"
                        onClick={() => navigate('/signup')}
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

export default Payments;
