import React from 'react';
import { motion } from 'framer-motion';
import {
    Play, Tag, TrendingUp, Layout, Settings2, Zap, BarChart3, Heart, ArrowRight
} from 'lucide-react';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

const BulkPricing = () => {
    const navigate = useNavigate();
    return (
        <div className="pt-32 min-h-screen bg-dark">
            {/* SECTION 1: HERO */}
            <section className="section-container text-center py-20">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="feature-content-only"
                >
                    <h1 className="hero-title-small">
                        SMARTER PRICING <br /> BETTER MARGINS
                    </h1>
                    <p className="large-p mt-8">
                        Unlock growth with Vizion's revolutionary bulk discount feature. Say goodbye to complex pricing and hello to effortless transaction scaling.
                    </p>
                    <div className="flex flex-col md:flex-row gap-8 justify-center mt-12 mb-20">
                        <button className="btn-primary" onClick={() => navigate('/signup')}>Sign up Now</button>
                        <button className="btn-secondary" onClick={() => navigate('/demo')}>Book a demo</button>
                    </div>
                </motion.div>

                {/* BENEFIT GRID */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20 text-center">
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

            {/* DETAIL SECTION - TYPOGRAPHY FOCUSED */}
            <section className="section-container py-32">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="glass-card p-16 text-center border-accent/10 feature-content-only"
                >
                    <div className="max-w-3xl mx-auto">
                        <h3 className="tagline">Introduction</h3>
                        <h2 className="section-title mt-4 uppercase">UNDERSTANDING<br />BULK PRICING</h2>
                        <p className="text-xl text-dim mt-8 mb-12 leading-relaxed">
                            Discover how our automated systems handle complex calculations, so you can focus on building relationships. Our platform ensures every bulk order is processed with precision and speed.
                        </p>
                        <div className="flex justify-center">
                            <button className="btn-primary flex items-center gap-4" onClick={() => navigate('/signup')}>
                                <Zap size={18} fill="currentColor" /> Explore Features
                            </button>
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
                    className="text-center mb-20"
                >
                    <h3 className="tagline">Optimization</h3>
                    <h2 className="section-title uppercase">SMARTER PRICING, BIGGER PROFITS</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {[
                        { icon: Settings2, title: "Customized Discounts", desc: "Tailor offerings to fit your unique products and pricing strategy." },
                        { icon: Zap, title: "Automatic Application", desc: "No manual calculations. Rewards are applied instantly at checkout." },
                        { icon: BarChart3, title: "Boosted Sales", desc: "Incentivize larger purchases and stock-up behaviors." },
                        { icon: Heart, title: "Customer Loyalty", desc: "Exclusive benefits for your most frequent, high-volume buyers." }
                    ].map((feature, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex gap-8 group glass-card p-10 border-accent/5 hover:border-accent/20 transition-all"
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
            </section>

             {/* CTA SECTION */}
            <section className="section-container py-40">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center feature-content-only"
                >
                    <h2 className="section-title uppercase">TRANSFORM YOUR PRICING TODAY</h2>
                    <p className="large-p mt-8">Scale your wholesale and bulk operations with the market's most intuitive POS.</p>
                    <div className="flex justify-center mt-16">
                        <button className="btn-primary px-16 py-6 text-xl" onClick={() => navigate('/signup')}>Get Started Now</button>
                    </div>
                </motion.div>
            </section>
            
            <FAQ />
            <Footer />
        </div>
    )
};

export default BulkPricing;
