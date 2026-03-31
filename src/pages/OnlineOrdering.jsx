import React from 'react';
import { motion } from 'framer-motion';
import {
    CheckCircle2, ArrowRight, Globe, Clock, Zap, Truck
} from 'lucide-react';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

const OnlineOrdering = () => {
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
                        STREAMLINE YOUR <br /> ONLINE ORDERING
                    </h1>
                    <p className="large-p mt-8">
                        Seamlessly sync your in-store inventory to a stunning, high-conversion online shop. Pickup and delivery, simplified.
                    </p>
                    <div className="flex flex-col md:flex-row gap-6 justify-center mb-20">
                        <button className="btn-primary px-12 py-5 text-xl" onClick={() => window.location.href = 'https://cal.com/piyushchandak/30min'}>Sign up now</button>
                        <button className="btn-secondary" onClick={() => window.location.href = 'https://cal.com/piyushchandak/30min'}>Book a demo</button>
                    </div>
                </motion.div>
            </section>

            {/* FEATURE GRID */}
            <section className="section-container py-32">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { icon: Globe, title: "Global Reach", text: "Break the barriers of your physical storefront." },
                        { icon: Clock, title: "24/7 Ordering", text: "Let customers shop whenever inspiration strikes." },
                        { icon: Zap, title: "Instant Sync", text: "Inventory updates in real-time across all channels." },
                        { icon: Truck, title: "Local Delivery", text: "Manage zip-code based delivery and pickup with ease." }
                    ].map((item, i) => (
                        <motion.div 
                            key={i}
                            whileHover={{ y: -10 }}
                            className="glass-card p-10 border-accent/10 hover:border-accent/30 transition-all"
                        >
                            <item.icon className="text-accent mb-8" size={32} />
                            <h4 className="text-xl font-bold mb-4 text-white uppercase tracking-tight">{item.title}</h4>
                            <p className="text-dim leading-relaxed">{item.text}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* TRANSITION SECTION */}
            <section className="bg-dark-glass py-32 border-y border-glass-border">
                <div className="section-container">
                    <motion.div 
                        initial={{ opacity: 0 }} 
                        whileInView={{ opacity: 1 }} 
                        viewport={{ once: true }} 
                        className="feature-content-only"
                    >

                        <div className="text-center">
                            <h3 className="tagline">Transition</h3>
                            <h2 className="section-title mt-4 uppercase">EFFORTLESS MOVE TO DIGITAL</h2>
                            <p className="text-xl text-white/90 font-medium mt-8 leading-relaxed max-w-3xl mx-auto">
                                Our team handles the heavy lifting. We'll have your products live and ready for orders with minimal work from your side.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20 text-left">
                                {[
                                    { title: "Smart SEO Integration", desc: "Get found on Google with optimized product pages." },
                                    { title: "Mobile-First Design", desc: "Perfect shopping experience on any smartphone." },
                                    { title: "Secure Checkout", desc: "PCI-compliant processing for Every transaction." }
                                ].map((feature, i) => (
                                    <div key={i} className="group glass-card p-8 border-accent/5 hover:border-accent/20">
                                        <h4 className="text-2xl font-bold text-white group-hover:text-accent transition-colors uppercase tracking-tight">{feature.title}</h4>
                                        <p className="text-lg text-dim mt-2">{feature.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* FINAL CALL TO ACTION */}
            <section className="section-container pb-40 pt-20">
                <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    className="glass-card p-24 text-center relative overflow-hidden"
                >
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
                    <h2 className="section-title uppercase">READY TO EXPAND?</h2>
                    <p className="large-p mx-auto mt-8 mb-16 max-w-2xl">Join hundreds of merchants who scaled their business with Vizion Online.</p>
                    <div className="flex flex-col sm:flex-row gap-8 justify-center">
                    <button className="btn-primary mt-16 px-16 py-6 text-2xl flex items-center gap-6 mx-auto group" onClick={() => window.location.href = 'https://cal.com/piyushchandak/30min'}>
                        Sign up Now <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                    </button>
                    </div>
                </motion.div>
            </section>

            <FAQ />
            <Footer />
        </div>
    )
};

export default OnlineOrdering;
