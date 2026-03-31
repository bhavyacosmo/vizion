import React from 'react';
import { motion } from 'framer-motion';
import {
    Play, Tag, TrendingUp, Layout, Settings2, Zap, BarChart3, Heart
} from 'lucide-react';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const BulkPricing = () => {
    return (
        <div className="pt-32 min-h-screen bg-dark">
            {/* SECTION 1: HERO */}
            <section className="section-container text-center py-20">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="section-title">
                        SELLING IN BULK<br />MADE EFFORTLESS
                    </h1>
                    <p className="large-p mx-auto text-center mt-8">
                        Unlock growth with Vizion's revolutionary bulk discount feature. Say goodbye to complex pricing and hello to effortless transaction scaling.
                    </p>
                    <div className="flex flex-col md:flex-row gap-8 justify-center mt-12 mb-20">
                        <button className="btn-primary">Sign up Now</button>
                        <button className="btn-secondary">Book a demo</button>
                    </div>

                    <div className="w-full max-w-5xl mx-auto aspect-video bg-dark-glass border border-glass-border rounded-3xl overflow-hidden relative group">
                        <img src="/assets/images/SuccessStory.png" alt="Success Story" className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-1000" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-24 h-24 rounded-full bg-accent text-dark flex items-center justify-center shadow-2xl shadow-accent/50 group-hover:scale-110 transition-transform cursor-pointer">
                                <Play size={32} />
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* BENEFIT GRID */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-32 text-center">
                    {[
                        { icon: Tag, title: "Maximize Margins", desc: "Offer competitive pricing while maintaining healthy profit margins." },
                        { icon: TrendingUp, title: "Upsell Opportunities", desc: "Drive larger transactions by encouraging customers to buy more." },
                        { icon: Layout, title: "Unified Strategy", desc: "Streamline the process and attract more customers with ease." }
                    ].map((item, idx) => (
                        <motion.div 
                            key={idx}
                            whileHover={{ y: -10 }}
                            className="bg-dark-glass p-12 rounded-3xl border border-glass-border hover:border-accent/30 transition-all"
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

            {/* VIDEO SECTION - MODERNIZED */}
            <section className="section-container py-32">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="glass-card p-16 flex flex-col lg:flex-row items-center gap-20 border-accent/10"
                >
                    <div className="flex-1">
                        <h3 className="tagline">Introduction</h3>
                        <h2 className="section-title !text-left mt-4 uppercase">UNDERSTANDING<br />BULK PRICING</h2>
                        <p className="text-xl text-dim mt-8 mb-12 leading-relaxed">
                            Discover how our automated systems handle complex calculations, so you can focus on building relationships.
                        </p>
                        <button className="btn-primary flex items-center gap-4">
                            <Play size={18} fill="currentColor" /> Watch Walkthrough
                        </button>
                    </div>
                    <div className="flex-1 w-full">
                        <div className="w-full aspect-video glass-card !p-0 overflow-hidden group">
                            <img src="/assets/images/OnlineReach.png" alt="App Interface" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" />
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* SECTION: SMARTER PRICING */}
            <section className="section-container py-32 bg-dark-glass rounded-[4rem]">
                <motion.div 
                    initial={{ opacity: 0 }} 
                    whileInView={{ opacity: 1 }} 
                    viewport={{ once: true }} 
                    className="text-center mb-24"
                >
                    <h3 className="tagline">Optimization</h3>
                    <h2 className="section-title uppercase">SMARTER PRICING, BIGGER PROFITS</h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
                    <div className="space-y-12">
                        {[
                            { icon: Settings2, title: "Customized Discounts", desc: "Tailor offerings to fit your unique products and pricing strategy." },
                            { icon: Zap, title: "Automatic Application", desc: "No manual calculations. Rewards are applied instantly at checkout." },
                            { icon: BarChart3, title: "Boosted Sales", desc: "Incentivize larger purchases and stock-up behaviors." },
                            { icon: Heart, title: "Customer Loyalty", desc: "Exclusive benefits for your most frequent, high-volume buyers." }
                        ].map((feature, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="flex gap-8 group"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-dark transition-all duration-500">
                                    <feature.icon size={28} />
                                </div>
                                <div>
                                    <h4 className="text-2xl font-bold mb-4 text-white uppercase tracking-tight">{feature.title}</h4>
                                    <p className="text-lg text-dim leading-relaxed">{feature.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    <div className="sticky top-32 space-y-8">
                        <div className="glass-card p-4 !border-accent/10">
                            <img src="/assets/images/TailorSystem1.png" alt="UI Screenshot" className="w-full h-auto rounded-xl shadow-2xl" />
                        </div>
                        <div className="glass-card p-4 !border-accent/10 ml-12 -mt-12 relative z-10">
                            <img src="/assets/images/TailorSystem2.png" alt="UI Screenshot 2" className="w-full h-auto rounded-xl shadow-2xl" />
                        </div>
                    </div>
                </div>
            </section>

             {/* CTA SECTION */}
            <section className="section-container py-40">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center"
                >
                    <h2 className="section-title uppercase">TRANSFORM YOUR PRICING TODAY</h2>
                    <p className="large-p mx-auto mt-8">Scale your wholesale and bulk operations with the market's most intuitive POS.</p>
                    <div className="flex justify-center mt-16">
                        <button className="btn-primary px-16 py-6 text-xl">Get Started Now</button>
                    </div>
                </motion.div>
            </section>
            
            <FAQ />
            <Footer />
        </div>
    )
};

export default BulkPricing;
