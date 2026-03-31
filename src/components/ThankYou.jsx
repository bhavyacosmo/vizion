import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';

const ThankYou = () => {
    return (
        <section className="flex flex-col items-center justify-center text-center px-6 py-20">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl"
            >
                <div className="mb-14">
                    <img src="/logo.png" alt="Vizion Tools" className="h-16 mx-auto opacity-80" />
                </div>

                <h1 className="text-6xl md:text-8xl font-black text-green-500 mb-6 uppercase tracking-tight">
                    THANK YOU!
                </h1>

                <p className="text-3xl md:text-5xl text-white font-bold mb-14 leading-tight">
                    for sharing the details.<br />
                    We will get in touch with you shortly.
                </p>

                <div className="mb-12">
                    <Link 
                        to="/" 
                        className="thank-you-home-btn"
                        onClick={() => window.scrollTo(0, 0)}
                    >
                        GO TO HOME PAGE
                    </Link>
                </div>

                <div className="space-y-4">
                    <p className="text-2xl text-accent font-bold uppercase tracking-widest">For Questions & Inquiries</p>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mt-8">
                        <div className="flex items-center gap-4 text-white text-2xl md:text-3xl font-bold">
                            <Mail size={32} className="text-white" />
                            <span>ravi@viziontools.com</span>
                        </div>
                        <div className="hidden md:block w-px h-10 bg-white/20" />
                        <div className="flex items-center gap-4 text-white text-2xl md:text-3xl font-bold">
                            <Phone size={32} className="text-white" />
                            <span>929-204-4923</span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default ThankYou;
