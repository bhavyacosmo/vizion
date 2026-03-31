import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    User, Briefcase, Phone, Mail, MapPin, 
    MessageSquare, CheckCircle2, Navigation, Send, ChevronDown 
} from 'lucide-react';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import ThankYou from '../components/ThankYou';

const Demo = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isCaptchaChecked, setIsCaptchaChecked] = useState(false);
    const [selectedState, setSelectedState] = useState("");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const states = [
        "Alabama", "Alaska", "Arizona", "Arkansas", "California", 
        "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", 
        "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", 
        "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", 
        "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", 
        "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", 
        "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", 
        "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", 
        "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", 
        "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isCaptchaChecked) {
            alert("Please check 'I'm not a robot'");
            return;
        }
        setIsSubmitted(true);
        window.scrollTo(0, 0);
    };

    if (isSubmitted) {
        return (
            <div className="min-h-screen bg-dark flex flex-col items-center justify-center relative overflow-hidden">
                {/* Background Decor for Success Page */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/5 blur-[150px] rounded-full -z-10" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 blur-[150px] rounded-full -z-10" />
                
                <ThankYou />
            </div>
        );
    }

    return (
        <div className="pt-32 min-h-screen bg-dark overflow-hidden">
            <section className="section-container max-w-5xl mx-auto py-20 relative">
                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 blur-[120px] rounded-full -z-10" />
                <div className="absolute bottom-40 left-0 w-72 h-72 bg-blue-500/10 blur-[100px] rounded-full -z-10" />

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="tagline">Experience the Future</span>
                    <h1 className="section-title mt-4">Schedule Your Demo</h1>
                    <p className="text-dim max-w-2xl mx-auto mt-6 text-lg">
                        Discover how Vizion POS can transform your business. Fill out the form below and our team will get in touch.
                    </p>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="demo-glass-card"
                >
                    <form className="demo-form-v2" onSubmit={handleSubmit}>
                        <div className="form-grid-v2">
                            <div className="demo-input-wrapper">
                                <User className="input-icon" size={20} />
                                <input type="text" placeholder="First Name" className="premium-input" required />
                            </div>
                            <div className="demo-input-wrapper">
                                <User className="input-icon" size={20} />
                                <input type="text" placeholder="Last Name" className="premium-input" required />
                            </div>

                            <div className="demo-input-wrapper">
                                <Briefcase className="input-icon" size={20} />
                                <input type="text" placeholder="Business Name" className="premium-input" required />
                            </div>
                            <div className="demo-input-wrapper">
                                <Phone className="input-icon" size={20} />
                                <input type="tel" placeholder="Phone/Mobile Number" className="premium-input" required />
                            </div>

                            <div className="demo-input-wrapper full-width">
                                <Mail className="input-icon" size={20} />
                                <input type="email" placeholder="Email Address" className="premium-input" required />
                            </div>

                            <div className="demo-input-wrapper">
                                <MapPin className="input-icon" size={20} />
                                <input type="text" placeholder="Address" className="premium-input" required />
                            </div>
                            <div className="demo-input-wrapper">
                                <Navigation className="input-icon" size={20} />
                                <input type="text" placeholder="City" className="premium-input" required />
                            </div>

                            <div className="demo-input-wrapper relative">
                                <MapPin className="input-icon" size={20} />
                                <div 
                                    className={`premium-input cursor-pointer flex items-center justify-between ${selectedState ? 'text-white' : 'text-white/40'}`}
                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                >
                                    {selectedState || "Select State"}
                                    <ChevronDown size={18} className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                                </div>
                                <AnimatePresence>
                                    {isDropdownOpen && (
                                        <motion.div 
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            className="custom-dropdown-menu"
                                        >
                                            {states.map(state => (
                                                <div 
                                                    key={state} 
                                                    className="dropdown-option"
                                                    onClick={() => {
                                                        setSelectedState(state);
                                                        setIsDropdownOpen(false);
                                                    }}
                                                >
                                                    {state}
                                                </div>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                            <div className="demo-input-wrapper">
                                <CheckCircle2 className="input-icon" size={20} />
                                <input type="text" placeholder="Zip Code" className="premium-input" required />
                            </div>

                            <div className="demo-input-wrapper full-width">
                                <MessageSquare className="input-icon" size={20} />
                                <textarea placeholder="How can we help you?" className="premium-input premium-textarea"></textarea>
                            </div>
                        </div>

                        <div className="captcha-section mt-10">
                            <div 
                                className={`captcha-inner flex items-center gap-4 cursor-pointer transition-colors ${isCaptchaChecked ? 'bg-accent/10 border-accent/30' : ''}`}
                                onClick={() => setIsCaptchaChecked(!isCaptchaChecked)}
                            >
                                <div className={`captcha-checkbox flex items-center justify-center transition-all ${isCaptchaChecked ? 'bg-accent border-accent' : ''}`}>
                                    {isCaptchaChecked && <CheckCircle2 size={14} className="text-black" />}
                                </div>
                                <span className="text-white/70">I'm not a robot</span>
                                <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="reCAPTCHA" className={`ml-auto w-8 transition-opacity ${isCaptchaChecked ? 'opacity-100' : 'opacity-40'}`} />
                            </div>
                        </div>

                        <div className="text-center mt-12">
                            <motion.button 
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                type="submit" 
                                className="btn-demo-submit"
                            >
                                Schedule a free Demo <Send size={20} />
                            </motion.button>
                        </div>
                    </form>
                </motion.div>
            </section>

            <Newsletter />
            <Footer />
        </div>
    );
};

export default Demo;
