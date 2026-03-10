import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    Zap, Globe, Cloud, Layout, Smartphone, CheckCircle,
    Database, Shield, PieChart, Users, ArrowRight,
    ChevronDown, Mail, Phone, MapPin, Box
} from 'lucide-react'

const FAQ_DATA = [
    { q: "1. Is Vizion's smoke shop POS system easy to use?", a: "Yes, our platform is designed to be user-friendly and easy to navigate, even for those who aren't tech-savvy. Our intuitive interface makes it easy to manage your inventory, process payments, and generate reports with just a few clicks." },
    { q: "2. Can Vizion's platform be customized to fit my business's unique needs?", a: "Yes, our platform is highly customizable, allowing you to tailor it to your specific business needs. We offer a range of features and tools that can be customized to fit your business, including inventory management, payment processing, reporting and analytics, and more." },
    { q: "3. Is Vizion's smoke shop POS system secure?", a: "Yes, Vizion's platform is designed with security in mind. Our payment processing system is fully encrypted, ensuring that your customers' data is protected at all times. We also provide compliance tools to help you meet regulations for age-restricted products, ensuring that you're operating in a safe and legal manner." },
    { q: "4. Does Vizion offer customer support?", a: "Yes, our team is available 24/7 to provide support and assistance whenever you need it. Whether you're experiencing technical difficulties or have questions about using our platform, we're here to help." },
    { q: "5. Can Vizion's smoke shop POS system be used on multiple devices?", a: "Yes, our platform is designed to be flexible and accessible from anywhere, on any device. Whether you're using a desktop computer, a tablet, or a smartphone, you can access Vizion's platform and manage your business from anywhere." },
    { q: "6. Can Vizion's platform be integrated with other software?", a: "Yes, we offer integrations with a range of other software and tools, including accounting software, loyalty programs, and more. Our team can work with you to integrate Vizion's platform with the software and tools you're already using, making it easy to manage all aspects of your business in one place." },
    { q: "7. What are the key features to look for in a POS system for a tobacco store?", a: "An ideal tobacco store POS system should offer detailed inventory tracking, age verification for compliance, insightful sales reports, accounting software integration, and customer loyalty program management." },
    { q: "8. How does a POS system help in complying with tobacco sales regulations?", a: "Vizion's pos system for tobacco stores can include age verification features to ensure legal compliance in selling age-restricted products. It may also help in maintaining necessary records and reports required by regulatory authorities." },
    { q: "9. What features your smoke shop pos system should have?", a: "1) Inventory Management\n2) POS system with Age Verification\n3) Smoke Shop Sales Reporting\n4) Integrated Loyalty Programs\n5) Security and Access Control\n6) Mobile POS for Smoke Shop" }
]

const FullSiteContent = () => {
    const [activeFaq, setActiveFaq] = useState(null)

    const sectionVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    }

    return (
        <div className="content-stack">
            {/* SECTION 1: HERO OVERLAY */}
            <section className="section-container min-h-screen flex items-center">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants} className="hero-text-block">
                    <h2 className="section-title text-left">STREAMLINE YOUR SALES: ADVANCED POS & ONLINE ORDERING FOR AGE-RESTRICTED PRODUCTS</h2>
                    <p className="large-p">Expand Your Market Reach: Sell Glass, Bongs, Kratom, Delta, CBD, Vapes and Smoking Accessories In-Store and Online for pickup and/or delivery.</p>
                    <p className="description-p">Vizion introduces an innovative smoke shop pos system. Streamline your business with our user-friendly interface, efficient inventory tracking, and seamless transaction processing. Enhance customer experience and boost your smoke shop's efficiency with Vizion's POS solution. Upgrade today for a smarter retail journey.</p>
                    <div className="mt-10 flex gap-6">
                        <button className="btn-primary">Request Demo</button>
                        <button className="btn-secondary">Learn More</button>
                    </div>
                </motion.div>
            </section>

            {/* SECTION 2: SUCCESS STARTS HERE */}
            <section className="section-container bg-dark-glass">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants} className="content-grid-2">
                    <div className="text-side">
                        <h3 className="tagline">SMOKE SHOP SUCCESS STARTS HERE:</h3>
                        <h2 className="accent-text text-4xl font-bold mb-6">THE ULTIMATE SMOKE SHOP POS SYSTEM</h2>
                        <p className="mb-6">Boost your Smoke Shop's performance with Vizion! Our affordable cloud-based POS system for smoke shops is crafted to meet the unique needs of smoke shops, head shops, vape shops, and tobacco stores. With Vizion, you'll unlock a wealth of features aimed at skyrocketing your revenue and expanding your business. Experience seamless payment processing and gain valuable insights with our robust reporting tools. Vizion isn't just a POS system; it's a growth accelerator for your tobacco shop, enhancing both efficiency and profitability. Let Vizion take your business to the next level!</p>

                        <div className="sub-features mt-12">
                            <h3 className="text-2xl font-bold mb-4">Power In Every Transaction</h3>
                            <p className="mb-8">Vizion POS systems are equipped with a multitude of integrated features, enabling you to establish and tailor your business precisely to your requirements from the get-go.</p>

                            <div className="triple-grid">
                                <div className="mini-card"><Zap className="accent" size={32} /><h4>Pick-Up & Delivery Orders</h4><p>Vizion POS enhances your customer's convenience with efficient pick-up and delivery options, streamlining your order process and boosting satisfaction.</p></div>
                                <div className="mini-card"><Globe className="accent" size={32} /><h4>Custom Website</h4><p>Increase your sales and improve customer experience with online ordering. Accept orders from your own website!</p></div>
                                <div className="mini-card"><Cloud className="accent" size={32} /><h4>Always On, Always Connected</h4><p>Cloud-powered for ultimate convenience. Monitor sales, process refunds, manage deposits, and access reports from anywhere your business takes you.</p></div>
                            </div>
                        </div>
                    </div>
                    <div className="image-side"><img src="/assets/images/pos-system-for-smoke-shop.png" alt="POS System Dashboard" className="w-full h-auto rounded-xl shadow-2xl border border-white/10" /></div>
                </motion.div>
            </section>

            {/* SECTION 3: TAILOR YOUR SYSTEM */}
            <section className="section-container">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
                    <h2 className="section-title text-center">Vizion POS: Tailor Your System to Fit Your Business</h2>
                    <div className="triple-grid-large mt-12">
                        <div className="glass-card step-card"><span className="step-num">01</span><h4>Get Started with Vizion POS</h4><p>Start your vizion POS experience now with a free sign-up! Streamline your sales and operations with our advanced, user-friendly system tailored for your retail needs.</p></div>
                        <div className="glass-card step-card"><span className="step-num">02</span><h4>Choose Your Ideal Hardware</h4><p>Vizion POS offers the freedom to choose hardware that fits your store's unique style and requirements. Enjoy a customized POS experience with our versatile hardware options.</p><img src="/assets/images/QuickveePOS.png" alt="Diverse Hardware" className="w-full h-auto mt-4 rounded-lg shadow-lg" /></div>
                        <div className="glass-card step-card"><span className="step-num">03</span><h4>Start Adding Inventory</h4><p>Start adding inventory to your Vizion POS and take the first step towards a more organized and profitable business. Our System is designed to simplify and enhance your stock management.</p><a href="https://merchants.quickvee.com/" target="_blank" rel="noopener noreferrer" className="btn-primary mt-6 inline-block">Shop Now</a></div>
                    </div>
                </motion.div>
            </section>

            {/* SECTION 4: LOYALTY PROGRAM */}
            <section id="loyalty" className="section-container bg-gold-low">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants} className="split-view">
                    <div className="image-side"><img src="/assets/images/LoyaltyProgram.png" alt="Loyalty App Animation" className="w-full h-auto rounded-xl shadow-2xl border border-white/10" /></div>
                    <div className="text-side">
                        <h2 className="tagline">Loyalty Program:</h2>
                        <h2 className="section-title">Building Lasting Connections</h2>
                        <div className="bullet-grid space-y-8">
                            <div className="bullet-item"><h4>Reward Every Sale</h4><p>With our innovative platform, watch your customers accumulate points on every purchase, enhancing their shopping experience.</p></div>
                            <div className="bullet-item"><h4>Tailored Bonus Campaigns</h4><p>Drive repeat business and customer loyalty with custom bonus point events tailored to peak seasons and special dates.</p></div>
                            <div className="bullet-item"><h4>A Hub of Rewards</h4><p>Imagine your store as a destination for rewards, where every transaction is an opportunity for shoppers to earn and indulge in more. Let your customers earn points as they spend more and reward them with points towards their next purchase.</p></div>
                            <div className="bullet-item"><h4>Elevate Your Store</h4><p>Enrich your store's appeal and attract repeat customers. Our loyalty program will be the new highlight of your store, attracting repeat customers again and again.</p></div>
                        </div>
                        <button className="btn-primary mt-12">Loyalty Program <ArrowRight size={18} className="inline ml-2" /></button>
                    </div>
                </motion.div>
            </section>

            {/* SECTION 5: ONLINE REACH */}
            <section id="ordering" className="section-container">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants} className="glass-card banner-cta">
                    <div className="text-center max-w-4xl mx-auto">
                        <h2 className="section-title">Expand Your Reach: Get Online with Vizion POS</h2>
                        <p className="mb-8 text-xl">With Vizion's smoke shop POS System, transitioning your smoke shop to the online marketplace is effortless. Our team will help your store get online with minimum work from you. Expand your reach beyond the store front, offer customers the convenience of ordering their favorite items for pickup and delivery from your online store.</p>
                        <button className="btn-secondary">Online Ordering</button>
                        <img src="/assets/images/ExpandYourReach.png" alt="Online Ordering Platform" className="w-full h-auto mt-12 rounded-2xl shadow-2xl border border-white/10" />
                    </div>
                </motion.div>
            </section>

            {/* SECTION 6: BULK PRICING */}
            <section id="bulk" className="section-container">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants} className="split-view reverse">
                    <div className="text-side">
                        <h3 className="tagline">Bulk Pricing</h3>
                        <h2 className="section-title">Boost Retail Sales with Vizion’s Bulk Pricing</h2>
                        <p className="mb-6">For retail businesses like smoke shops, offering Bulk Pricing can be a game-changer. Vizion's advanced vape shop POS System makes bulk pricing a breeze. Offer discounts as customers purchase larger quantities, motivating them to buy more.</p>

                        <h4 className="text-xl font-bold mb-2 accent-text">Optimize Bulk Pricing with Vizion: Insights and Flexibility</h4>
                        <p className="mb-6">Vizion simplifies the management of Bulk Pricing strategies, enabling easy adjustments based on market trends and inventory levels. Get insights into sales patterns and consumer behaviors, facilitating tailored pricing strategies that cater to customer preferences.</p>

                        <h4 className="text-xl font-bold mb-2 accent-text">Vizion POS: Enhance Efficiency, Sales, and Customer Loyalty</h4>
                        <p>Our POS system, designed specifically for smoke shops, goes beyond transaction processing; it becomes an essential tool for strategic pricing, inventory management, and customer relationship management. In essence, Vizion’s Smoke shop POS system with inventory management optimizes operational efficiency, drives sales, and nurtures customer loyalty by streamlining inventory tasks.</p>
                        <button className="btn-primary mt-8">Bulk Pricing</button>
                    </div>
                    <div className="image-side"><img src="/assets/images/BulkPricing.png" alt="Bulk Pricing UI" className="w-full h-auto rounded-xl shadow-2xl border border-white/10" /></div>
                </motion.div>
            </section>

            {/* SECTION 7: TEAM MANAGEMENT */}
            <section id="employees" className="section-container bg-dark-glass">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
                    <h2 className="section-title text-center">Team Management Simplified</h2>
                    <div className="triple-grid-large mt-12">
                        <div className="feature-card-v2 glass-card"><Users className="accent mb-4" size={40} /><h4>Analyze Staff Activities Seamlessly</h4><p>Discover a new level of staff oversight with Vizion POS. Easily analyze activities, track progress, and identify areas for improvement, all within a user-friendly interface.</p></div>
                        <div className="feature-card-v2 glass-card"><Layout className="accent mb-4" size={40} /><h4>Simplify Your Workforce Management</h4><p>Vizion POS makes workforce management a breeze. Effortlessly handle schedules, track hours, and manage roles, all within one seamless platform.</p></div>
                        <div className="feature-card-v2 glass-card"><Smartphone className="accent mb-4" size={40} /><h4>Effortless Staff Creation and Editing</h4><p>Experience the simplicity of managing your smoke shop team with Vizion's smoke shop POS system. Our platform allows effortless creation and editing of staff profiles, ensuring smooth operations and accurate data management in your smoke shop business.</p></div>
                    </div>
                    <div className="text-center mt-12"><button className="btn-secondary">Employees</button></div>
                </motion.div>
            </section>

            {/* SECTION 8: PAYMENTS */}
            <section id="payments" className="section-container">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants} className="split-view">
                    <div className="image-side"><img src="/assets/images/ExperienceHassleFreePayments.png" alt="Payment Processing Visualization" className="w-full h-auto rounded-xl shadow-2xl border border-white/10" /></div>
                    <div className="text-side">
                        <h3 className="tagline">Hassle-Free Payments Acceptance</h3>
                        <h2 className="section-title">Support for All Major Payment Methods</h2>
                        <p className="mb-4 text-dim">Visa, Mastercard, Discover, AMEX, Debit, EBT, Apple Pay and Google Pay. Seamlessly Integrated.</p>

                        <div className="mod-grid-simple space-y-6">
                            <div className="mod-item"><h4>Seamlessly Integrated</h4><p>Vizion POS minimizes the risk of human error and cuts down on manual data entry, ensuring accuracy & efficiency in your business operations through integrated payment processing for smoke shops.</p></div>
                            <div className="mod-item"><h4>Split Payments</h4><p>Easily split payments for a sale over multiple methods, offering your customers convenience and versatility at checkout.</p></div>
                            <div className="mod-item"><h4>Tipping</h4><p>Vizion POS streamlines the process of accepting tips, making it a hassle-free experience for both staff and customers.</p></div>
                            <div className="mod-item"><h4>PCI Compliance</h4><p>Experience the security of Vizion's smoke shop POS system as it safely handles credit card transactions, ensuring all data in your smoke shop is stored, processed, and transmitted with utmost security.</p></div>
                        </div>
                        <button className="btn-primary mt-10">Payments</button>
                    </div>
                </motion.div>
            </section>

            {/* SECTION 9: ANALYTICS */}
            <section id="analytics" className="section-container bg-dark-glass">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants} className="split-view reverse">
                    <div className="text-side">
                        <h2 className="section-title">Vizion Analytics</h2>
                        <p className="mb-6 text-xl">With Vizion POS, transitioning your smoke shop to the online marketplace is effortless.</p>
                        <p className="text-dim">Expand your reach beyond the storefront, offer customers the convenience of ordering their favorite items for pickup and delivery.</p>
                        <button className="btn-primary mt-10">Analytics</button>
                    </div>
                    <div className="image-side"><img src="/assets/images/QuickveeAnalytics.png" alt="Analytics Dashboard" className="w-full h-auto rounded-xl shadow-2xl border border-white/10" /></div>
                </motion.div>
            </section>

            {/* SECTION 10: STORE CREDITS & REFUNDS */}
            <section className="section-container">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants} className="glass-card overflow-hidden relative flex flex-col items-center text-center">
                    <h2 className="section-title">Easily Handle Store Credits and Refunds</h2>
                    <div className="max-w-4xl mx-auto z-10 relative">
                        <p className="mb-6 text-lg">Vizion POS introduces a customer-friendly store credit feature, empowering merchants to offer credits for future purchases instead of direct refunds. This strategy keeps revenue in-store and nurtures repeat patronage, strengthening customer loyalty and trust.</p>
                        <p className="mb-6 text-lg">Vizion's integrated store credit functionality also streamlines the handling of returns and exchanges.</p>
                        <p className="mb-10 text-lg">Vizion provides efficient monitoring and management of credit balances, ensuring precise and transparent transactions. This approach not only maintains sales but also enhances the overall shopping experience for customers, adding significant value to each interaction.</p>
                        <button className="btn-secondary mb-12">Store Credits & Refunds</button>
                    </div>
                    <img src="/assets/images/EasyHandlingofStoreCreditsandRefunds.png" alt="Store Credit UI" className="w-full max-w-2xl h-auto rounded-xl shadow-2xl relative z-0 border border-white/10" />
                </motion.div>
            </section>

            {/* SECTION 11: INVENTORY MANAGEMENT */}
            <section className="section-container">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants} className="split-view">
                    <div className="image-side"><img src="/assets/images/ManageInventorywithEase.png" alt="Global Inventory Sync" className="w-full h-auto rounded-xl shadow-2xl border border-white/10" /></div>
                    <div className="text-side">
                        <h2 className="section-title">Manage Inventory with Ease</h2>
                        <p className="mb-6 text-xl">Efficiently handle everything from introducing new products, crafting variants, to tracking inventory levels with Vizion's robust cloud-based system.</p>
                        <p className="text-dim">Seamlessly integrate all your sales channels into one unified platform, simplifying your entire inventory management process.</p>
                        <button className="btn-primary mt-10">Inventory Management</button>
                    </div>
                </motion.div>
            </section>

            {/* SECTION 12: STREAMLINED EFFICIENCY */}
            <section className="section-container bg-dark-glass">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
                    <h2 className="section-title text-center">Streamlined Efficiency for Your Business</h2>
                    <div className="quad-grid mt-12">
                        <div className="mod-card-v3 glass-card"><Box className="accent mb-3" /><h4>Dispatch Center</h4><p>Manage delivery orders and payouts.</p></div>
                        <div className="mod-card-v3 glass-card"><Zap className="accent mb-3" /><h4>Coupons and Promo Codes</h4><p>Create coupons & promo codes to boost your sales.</p></div>
                        <div className="mod-card-v3 glass-card"><PieChart className="accent mb-3" /><h4>Reporting</h4><p>Robust reporting to keep track of your sales.</p></div>
                        <div className="mod-card-v3 glass-card"><CheckCircle className="accent mb-3" /><h4>Auto printing</h4><p>Orders will automatically print for pickup or delivery.</p></div>
                    </div>
                </motion.div>
            </section>

            {/* SECTION 13: TESTIMONIAL */}
            <section className="section-container">
                <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} className="glass-card testimonial-card-wide text-center">
                    <div className="quote-mark text-5xl mb-6 accent-text">“</div>
                    <p className="text-2xl italic font-light mb-8">Vizion is an amazing product and we have implemented the system in all four Papa Jay's locations. Vizion allows us to sell online for pick up, delivery and helps us keep in touch with our customers. I recommend Vizion to all smoke shops looking for a great POS solution.</p>
                    <div className="testimonial-footer flex flex-col items-center">
                        <strong>PAPA JAY'S</strong>
                        <span className="text-dim">Multi-Location Smoke Shop Owner</span>
                    </div>
                </motion.div>
            </section>

            {/* SECTION 14: FAQS */}
            <section id="faq" className="section-container pt-24">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
                    <h2 className="section-title text-center">FAQS</h2>
                    <div className="faq-accordion mt-16 max-w-4xl mx-auto">
                        {FAQ_DATA.map((faq, i) => (
                            <div key={i} className={`faq-card ${activeFaq === i ? 'active' : ''}`} onClick={() => setActiveFaq(activeFaq === i ? null : i)}>
                                <div className="faq-header">
                                    <h3 className="font-semibold">{faq.q}</h3>
                                    <ChevronDown className={`icon transition-transform ${activeFaq === i ? 'rotate-180' : ''}`} />
                                </div>
                                <AnimatePresence>
                                    {activeFaq === i && (
                                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="faq-body overflow-hidden">
                                            <p className="pt-2 text-dim leading-relaxed" style={{ whiteSpace: 'pre-line' }}>{faq.a}</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* SECTION 15: DEMO FORM */}
            <section id="demo" className="section-container">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants} className="glass-card demo-section text-center p-16">
                    <h2 className="section-title">Schedule a Free Demo or Sign Up</h2>
                    <p className="mb-12 text-xl max-w-2xl mx-auto">What will you get with a demo? A 20-minute demo with our product experts will help you unleash all of Vizion's potential.</p>
                    <form className="demo-grid-compact max-w-3xl mx-auto text-left space-y-4">
                        <div className="dual-inputs flex gap-4">
                            <input type="text" placeholder="First Name" required className="flex-1 p-4 bg-white/5 border border-white/10 rounded focus:border-yellow-500 outline-none" />
                            <input type="text" placeholder="Last Name" required className="flex-1 p-4 bg-white/5 border border-white/10 rounded focus:border-yellow-500 outline-none" />
                        </div>
                        <input type="email" placeholder="Email Address" required className="w-full p-4 bg-white/5 border border-white/10 rounded focus:border-yellow-500 outline-none" />
                        <input type="tel" placeholder="Phone/Mobile Number" required className="w-full p-4 bg-white/5 border border-white/10 rounded focus:border-yellow-500 outline-none" />
                        <button type="submit" className="btn-primary w-full py-5 text-xl mt-6">Request Demo</button>
                    </form>
                </motion.div>
            </section>

            {/* SECTION 16: MERCHANT PROMO */}
            <section className="section-container text-center py-24">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants} className="flex flex-col items-center">
                    <h3 className="tagline mb-6">Merchants using Vizion POS & Online Ordering</h3>
                    <h2 className="section-title">Join Our Customer List to Get Updates and Promos</h2>
                    <p className="text-2xl text-dim max-w-2xl mx-auto mb-16">Take your smoke shop into the Cloud with Vizion.</p>
                    <img src="/assets/images/schedule.png" alt="Merchant Tablet Preview" className="w-full max-w-3xl h-auto rounded-2xl shadow-2xl" />
                </motion.div>
            </section>

            {/* FOOTER SECTION */}
            <footer className="footer-v3 bg-black/90 border-t border-white/10 pt-24 pb-12">
                <div className="section-container">
                    <div className="footer-grid-main mb-20 flex flex-col md:flex-row justify-between gap-16">
                        <div className="footer-info max-w-md">
                            <h3 className="logo-text text-3xl mb-8">VIZION</h3>
                            <h4 className="text-xl font-bold mb-6 text-white">Contact Us</h4>
                            <div className="space-y-4 text-lg">
                                <div className="flex items-center gap-4 text-dim hover:text-yellow-500 transition-colors"><Mail size={24} className="text-yellow-500" /> ravi@viziontools.com</div>
                                <div className="flex items-center gap-4 text-dim hover:text-yellow-500 transition-colors"><Phone size={24} className="text-yellow-500" /> 929-204-4923</div>
                            </div>
                        </div>
                        <div className="footer-nav md:ml-auto md:pl-24">
                            <h4 className="text-xl font-bold mb-8 text-white">Quick Links</h4>
                            <div className="flex gap-16 text-lg">
                                <ul className="flex flex-col gap-4 list-none m-0 p-0">
                                    <li><a href="#loyalty" className="text-white hover:text-yellow-500 transition-colors block" style={{ color: 'white' }}>Loyalty Program</a></li>
                                    <li><a href="#ordering" className="text-white hover:text-yellow-500 transition-colors block" style={{ color: 'white' }}>Online Ordering</a></li>
                                    <li><a href="#bulk" className="text-white hover:text-yellow-500 transition-colors block" style={{ color: 'white' }}>Bulk Pricing</a></li>
                                </ul>
                                <ul className="flex flex-col gap-4 list-none m-0 p-0">
                                    <li><a href="#employees" className="text-white hover:text-yellow-500 transition-colors block" style={{ color: 'white' }}>Employees</a></li>
                                    <li><a href="#payments" className="text-white hover:text-yellow-500 transition-colors block" style={{ color: 'white' }}>Payments</a></li>
                                    <li><a href="#analytics" className="text-white hover:text-yellow-500 transition-colors block" style={{ color: 'white' }}>Analytics</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom border-t border-white/5 pt-10 text-center">
                        <p className="text-dim text-lg">Copyright 2026 All Rights Reserved Vizion Tools</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default FullSiteContent
