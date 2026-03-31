import React from 'react';
import { motion } from 'framer-motion';
import {
    ArrowRight, CheckCircle2, ShoppingBag, Award, Heart
} from 'lucide-react';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const LoyaltyProgram = () => {
    return (
        <div className="pt-32 min-h-screen bg-dark">
            {/* HERO SECTION */}
            <section className="section-container text-center py-20">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="section-title">
                        REWARD LOYALTY<br />DRIVE REVENUE
                    </h1>
                    <p className="large-p mx-auto text-center mt-8">
                        Turn every customer into a regular with our integrated, multi-channel loyalty platform. Reward, engage, and grow.
                    </p>
                    <div className="flex flex-col md:flex-row gap-8 justify-center mt-12 mb-20">
                        <button className="btn-primary">Sign up Now</button>
                        <button className="btn-secondary">How it works</button>
                    </div>

                    <div className="w-full max-w-5xl mx-auto aspect-video bg-dark-glass border border-glass-border rounded-3xl overflow-hidden relative group">
                        <img src="/assets/images/LoyaltyProgram.png" alt="Loyalty App" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000" />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60" />
                    </div>
                </motion.div>
            </section>

            {/* THREE STEPS */}
            <section className="section-container py-32">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {[
                        { icon: ShoppingBag, title: "Earn Points", text: "Customers earn points for every dollar spent, in-store or online." },
                        { icon: Award, title: "Unlock Rewards", text: "Redeem points for discounts, exclusive products, or store credit." },
                        { icon: Heart, title: "Build Bonds", text: "Create lasting relationships that keep your brand top-of-mind." }
                    ].map((step, i) => (
                        <motion.div 
                            key={i}
                            whileHover={{ y: -10 }}
                            className="glass-card p-12 border-accent/10 hover:border-accent/30 transition-all text-center"
                        >
                            <div className="flex justify-center mb-10">
                                <div className="p-6 bg-accent/10 rounded-2xl text-accent">
                                    <step.icon size={48} />
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold mb-6 text-white uppercase tracking-tight">{step.title}</h3>
                            <p className="text-lg text-dim leading-relaxed">{step.text}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* DETAIL SECTION */}
            <section className="section-container pb-40">
                <motion.div 
                    initial={{ opacity: 0 }} 
                    whileInView={{ opacity: 1 }} 
                    viewport={{ once: true }} 
                    className="split-view reverse items-center"
                >
                    <div className="text-side p-12">
                        <h3 className="tagline">Strategy</h3>
                        <h2 className="section-title !text-left mt-4 uppercase">ADVANCED BONUS CAMPAIGNS</h2>
                        <ul className="space-y-10 mt-12">
                            {[
                                { title: "Custom Point Rules", desc: "Set specific rewards for specific products or time periods." },
                                { title: "Automated Reachouts", desc: "Engage inactive customers with personalized bonus offers." },
                                { title: "Seamless Integration", desc: "Points are tracked automatically at the POS—no extra hardware." }
                            ].map((item, i) => (
                                <li key={i} className="flex gap-8 group">
                                    <div className="shrink-0 w-12 h-12 rounded-full border border-accent/30 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-dark transition-all">
                                        <CheckCircle2 size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-2xl font-bold text-white uppercase tracking-tight">{item.title}</h4>
                                        <p className="text-lg text-dim mt-2">{item.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="image-side">
                        <div className="glass-card p-4 !bg-accent/5">
                            <img src="/assets/images/TailorSystem2.png" alt="Loyalty Dashboard" className="w-full h-auto rounded-xl shadow-2xl" />
                        </div>
                    </div>
                </motion.div>
            </section>

            <FAQ />
            <Footer />
        </div>
    )
};

export default LoyaltyProgram;
