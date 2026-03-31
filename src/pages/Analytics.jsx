import React from 'react';
import {
    BarChart3,
    TrendingUp,
    Globe,
    PieChart,
    MapPin,
    Smartphone,
    Zap,
    FileSearch,
    ShieldCheck,
    Coins,
    CreditCard,
    ArrowRight,
    Play
} from 'lucide-react';
import { motion } from 'framer-motion';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const Analytics = () => {
    const sectionVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
    };

    return (
        <div className="pt-32 min-h-screen bg-dark">
            {/* HERO SECTION */}
            <section className="section-container text-center py-20">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
                    <h1 className="text-5xl md:text-6xl font-bold mb-8 text-gray-900 leading-tight">
                        Empower your decisions with <br /> in-depth POS reporting
                    </h1>
                    <p className="text-xl text-dim max-w-4xl mx-auto mb-12 leading-relaxed">
                        Leverage Vizion's robust analytics tools for real-time insights into the sales trends and data shaping your business, and monitor vital metrics such as revenue and performance.
                    </p>
                    <div className="flex flex-col md:flex-row gap-6 justify-center mb-20">
                        <button className="btn-primary px-12 py-5 text-xl">Sign up now</button>
                    </div>

                    <div className="w-full max-w-5xl mx-auto aspect-[16/10] bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center text-dim italic shadow-2xl relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                        <span className="relative z-10">[Image: Laptop showing Sales Report Dashboard]</span>
                    </div>
                </motion.div>
            </section>

            {/* 3-BENEFIT GRID */}
            <section className="section-container py-24 border-y border-white/5">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center">
                        <div className="flex justify-center mb-8">
                            <FileSearch className="w-16 h-16 text-gray-900" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-gray-900 uppercase tracking-wider">Dive into details</h3>
                        <p className="text-lg text-dim">Utilize POS report filters to identify peak business hours and top-selling products, while also exploring monthly sales trends and fine-grained details.</p>
                    </motion.div>
                    <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center">
                        <div className="flex justify-center mb-8">
                            <TrendingUp className="w-16 h-16 text-gray-900" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-gray-900 uppercase tracking-wider">Monitor sales</h3>
                        <p className="text-lg text-dim">Utilize our business tracking software to keep a close eye on your revenue stream with transparent sales reports.</p>
                    </motion.div>
                    <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center">
                        <div className="flex justify-center mb-8">
                            <Globe className="w-16 h-16 text-gray-900" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-gray-900 uppercase tracking-wider">Access from anywhere</h3>
                        <p className="text-lg text-dim">Monitor your business from anywhere, anytime — whether through your dashboard or the Vizion mobile app.</p>
                    </motion.div>
                </div>
            </section>

            {/* VIDEO/STANDARDS SECTION */}
            <section className="section-container py-32">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={sectionVariants}
                    className="glass-card p-12 flex flex-col md:flex-row items-center gap-16 border-2 border-white/5"
                >
                    <div className="flex-1">
                        <h2 className="text-5xl font-bold mb-8 text-gray-900 leading-tight">Set higher standards <br /> for your business</h2>
                        <p className="text-xl text-dim mb-10">Find out how Vizion can improve your business through a personalized demo provided by our team.</p>
                        <div className="flex flex-col sm:flex-row gap-6">
                            <button className="btn-secondary px-10 py-4">Contact Us</button>
                            <button className="flex items-center gap-4 text-xl font-semibold text-gray-900 group">
                                <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center transition-colors" style={{ '--tw-bg-opacity': 1 }} onMouseEnter={e => e.currentTarget.style.background = '#ce9036'} onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}>
                                    <Play className="fill-white w-5 h-5" />
                                </div>
                                Play Video
                            </button>
                        </div>
                    </div>
                    <div className="flex-1 w-full">
                        <div className="w-full max-w-lg mx-auto aspect-[4/3] glass-card border-white/10 flex items-center justify-center text-dim italic">
                            [Image: Business Dashboard Graphic]
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* EXPERIENCE NEW STANDARD */}
            <section className="section-container py-24 border-t border-white/5">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants} className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 uppercase tracking-tight">Experience a new standard of POS sales reporting</h2>
                </motion.div>

                <div className="space-y-32">
                    {/* TRACK SALES */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants} className="flex flex-col md:flex-row items-center gap-16">
                        <div className="flex-1">
                            <div className="aspect-video glass-card border-white/10 flex items-center justify-center text-dim italic">
                                [Image: Real-time Sales Chart Preview]
                            </div>
                        </div>
                        <div className="flex-1">
                            <h3 className="text-3xl font-bold text-gray-900 mb-6">Track sales as they happen</h3>
                            <p className="text-xl text-dim mb-10 leading-relaxed">Stay informed about total overall and hourly revenue, best-selling items, refund and discount statistics, open orders, and more.</p>

                            <h3 className="text-3xl font-bold text-gray-900 mb-6">Multi-location sales insights</h3>
                            <p className="text-xl text-dim mb-10 leading-relaxed">View total sales data that covers all your locations, both online and in-store.</p>

                            <h3 className="text-3xl font-bold text-gray-900 mb-6">Access 24/7, Anywhere</h3>
                            <p className="text-xl text-dim leading-relaxed">Monitor real-time sales no matter where you are. Simply access your dashboard on your mobile phone or laptop.</p>
                        </div>
                    </motion.div>

                    {/* GAIN CONTROL */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants} className="flex flex-col md:flex-row-reverse items-center gap-16">
                        <div className="flex-1">
                            <div className="aspect-video glass-card border-white/10 flex items-center justify-center text-dim italic">
                                [Image: Top Performing Items & Team Members UI]
                            </div>
                        </div>
                        <div className="flex-1">
                            <h2 className="text-4xl font-bold text-gray-900 mb-10 uppercase tracking-tighter italic">Gain control over your data</h2>
                            <div className="space-y-10">
                                <div>
                                    <h4 className="text-2xl font-bold text-gray-900 mb-3">Snapshot of performance</h4>
                                    <p className="text-lg text-dim">Find out which items, locations, times, and team members perform the best and worst through Vizion's sales tracking system.</p>
                                </div>
                                <div>
                                    <h4 className="text-2xl font-bold text-gray-900 mb-3">Simplified tax preparation</h4>
                                    <p className="text-lg text-dim">Expedite and simplify the tax filing process with readily available POS reports that you can provide to your accountant or tax preparer.</p>
                                </div>
                                <div>
                                    <h4 className="text-2xl font-bold text-gray-900 mb-3">Custom business analytics</h4>
                                    <p className="text-lg text-dim">Generate the reports that will aid in making better decisions for your business's overall performance and health.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* END OF DAY */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants} className="flex flex-col md:flex-row items-center gap-16">
                        <div className="flex-1">
                            <div className="aspect-video glass-card border-white/10 flex items-center justify-center text-dim italic">
                                [Image: End of Day Summary Report UI]
                            </div>
                        </div>
                        <div className="flex-1">
                            <h2 className="text-4xl font-bold text-gray-900 mb-10 uppercase tracking-tighter italic">Explore end-of-day analytics</h2>
                            <div className="space-y-10">
                                <div>
                                    <h4 className="text-2xl font-bold text-gray-900 mb-3">Total Sales and Refunds</h4>
                                    <p className="text-lg text-dim">Obtain an overview of your day immediately upon closing out.</p>
                                </div>
                                <div>
                                    <h4 className="text-2xl font-bold text-gray-900 mb-3">Tip Amounts</h4>
                                    <p className="text-lg text-dim">Monitor overall sales per staff member. Allocate tips to your team.</p>
                                </div>
                                <div>
                                    <h4 className="text-2xl font-bold text-gray-900 mb-3">Card Payments</h4>
                                    <p className="text-lg text-dim">View the volume of credit card transactions, categorized by card type.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

             {/* FINAL CTA */}
            <section className="section-container py-32 border-t border-white/5">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={sectionVariants}
                    className="glass-card p-20 bg-white/10 relative overflow-hidden flex flex-col items-center text-center"
                >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                    <h2 className="text-5xl font-bold mb-8 text-white">Ready to supercharge your business?</h2>
                    <p className="text-2xl text-dim italic mb-12">
                        Build your POS System now.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6">
                        <button className="btn-primary px-16 py-6 text-2xl">Sign up Now</button>
                        <button className="btn-secondary px-16 py-6 text-2xl">Shop Vizion</button>
                    </div>
                </motion.div>
            </section>

            <FAQ />
            <Footer />
        </div>
    );
};

export default Analytics;
