import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQ_DATA = [
    { q: "Is Vizion's smoke shop POS system easy to use?", a: "Yes, our platform is designed to be user-friendly and easy to navigate. Our intuitive interface makes it easy to manage your inventory, process payments, and generate reports with just a few clicks." },
    { q: "Can the platform be customized to fit my business's unique needs?", a: "Precisely. We offer a range of features and tools that can be tailored to fit your specific requirements, including inventory management, payment processing, and advanced reporting." },
    { q: "Is the system secure?", a: "Vizion's platform is designed with security in mind. Our payment processing system is fully encrypted and PCI DSS Level 1 compliant, ensuring that your customers' data is protected at all times." },
    { q: "Does Vizion offer customer support?", a: "Our dedicated team is available 24/7 to provide professional support and assistance whenever you need it via phone, email, or chat." },
    { q: "Can it be used on multiple devices?", a: "Yes, our cloud-based platform is accessible from anywhere on any device—desktop, tablet, or smartphone." },
    { q: "Can it be integrated with other software?", a: "We offer seamless integrations with accounting software, marketing tools, and more through our robust API. Our team can assist with specific integration needs." }
];

const FAQ = () => {
    const [activeFaq, setActiveFaq] = useState(null);

    return (
        <section id="faq" className="section-container pt-32 pb-40">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <h2 className="section-title text-center uppercase italic">Frequently Asked <span className="text-accent">Questions</span></h2>
                <div className="faq-accordion mt-20 max-w-4xl mx-auto space-y-6">
                    {FAQ_DATA.map((faq, i) => (
                        <div 
                            key={i} 
                            className={`faq-card ${activeFaq === i ? 'active bg-accent/5 border-accent/20' : 'bg-dark-glass border-glass-border'}`} 
                            onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                        >
                            <div className="faq-header p-10">
                                <h3 className="text-xl font-bold uppercase tracking-tight text-gray-900">{faq.q}</h3>
                                <ChevronDown className={`text-accent transition-transform duration-500 ${activeFaq === i ? 'rotate-180' : ''}`} />
                            </div>
                            <AnimatePresence>
                                {activeFaq === i && (
                                    <motion.div 
                                        initial={{ height: 0, opacity: 0 }} 
                                        animate={{ height: 'auto', opacity: 1 }} 
                                        exit={{ height: 0, opacity: 0 }} 
                                        className="overflow-hidden"
                                    >
                                        <div className="faq-body px-10 pb-10 pt-0 text-xl text-dim leading-relaxed">
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default FAQ;
