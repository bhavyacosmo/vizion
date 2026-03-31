import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    User, Briefcase, MapPin, CheckCircle2, 
    Navigation, Shield, CreditCard, Landmark, 
    Upload, ChevronLeft, ChevronRight, Check,
    Phone, Mail
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Signup = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        // Step 1: Location Info
        legalEntityName: '', legalAddress: '', legalCity: '', legalState: '', legalZip: '',
        entityType: '', entityStartDate: '', federalTaxId: '',
        // Step 2: Merchant Location
        businessDbaName: '', businessAddress: '', businessCity: '', businessState: '', businessZip: '',
        contactName: '', locationPhone: '', businessEmail: '', customerServicePhone: '', website: '',
        // Step 3: Owner Info
        ownerFirstName: '', ownerLastName: '', ownerTitle: '', ownershipPercent: '',
        ownerAddress: '', ownerCity: '', ownerState: '', ownerZip: '',
        homePhone: '', cellPhone: '', ssn: '', dob: '', dlNumber: '', dlState: '',
        // Step 4: Financial Profile
        b2bPercent: '', b2cPercent: '', monthlyVolume: '', avgTxSize: '', maxTxSize: '',
        bankName: '', accountNumber: '', routingNumber: '', accountType: 'Saving'
    });

    const nextStep = () => setStep(prev => Math.min(prev + 1, 4));
    const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

    const renderStep = () => {
        switch(step) {
            case 1: return <Step1 formData={formData} setFormData={setFormData} />;
            case 2: return <Step2 formData={formData} setFormData={setFormData} />;
            case 3: return <Step3 formData={formData} setFormData={setFormData} />;
            case 4: return <Step4 formData={formData} setFormData={setFormData} />;
            default: return null;
        }
    };

    return (
        <div className="pt-32 min-h-screen text-gray-900 overflow-hidden flex flex-col" style={{ background: '#ffffff' }}>
            <div className="flex-1 section-container max-w-5xl mx-auto py-10 relative">
                {/* Progress Header */}
                <div className="mb-16">
                    <div className="flex justify-between items-end mb-6">
                        <div>
                            <p className="text-accent text-xs font-bold uppercase tracking-[0.2em] mb-2">Step {step} of 4</p>
                            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none">
                                {step === 1 && "Location Information"}
                                {step === 2 && "Merchant Location"}
                                {step === 3 && "Owner Information"}
                                {step === 4 && "Financial Profile"}
                            </h2>
                        </div>
                        <div className="hidden md:block text-right">
                            <p className="text-gray-400 text-xs font-medium italic">Application Section</p>
                            <p className="text-gray-700 font-bold">Vizion Merchant Tech</p>
                        </div>
                    </div>
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden backdrop-blur-sm">
                        <motion.div 
                            className="h-full bg-accent"
                            initial={{ width: "25%" }}
                            animate={{ width: `${step * 25}%` }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        />
                    </div>
                </div>

                {/* Form Content */}
                <div className="signup-glass-container mb-24 relative">
                    {/* Decorative element */}
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent/10 rounded-full blur-[100px] pointer-events-none"></div>
                    <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>

                    <div className="relative z-10 p-8 md:p-16">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={step}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.4 }}
                        >
                            {renderStep()}
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Buttons */}
                    <div className="flex flex-col md:flex-row gap-6 mt-16 pt-12 border-t border-white/5">
                        {step > 1 && (
                            <button 
                                onClick={prevStep} 
                                className="flex-1 py-5 border border-white/10 text-white/60 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-white/5 hover:text-white transition-all uppercase tracking-widest text-xs"
                            >
                                <ChevronLeft size={16} /> Previous Section
                            </button>
                        )}
                        <button 
                            onClick={step === 4 ? () => alert('Submitted!') : nextStep} 
                            className="flex-[2] py-5 bg-accent text-black rounded-xl font-black flex items-center justify-center gap-3 hover:shadow-[0_0_30px_rgba(206,144,54,0.3)] transition-all uppercase tracking-widest text-sm"
                        >
                            {step === 4 ? 'Complete Application' : 'Proceed to Next Step'} <ChevronRight size={18} />
                        </button>
                    </div>
                </div>
            </div>
        </div>

            {/* Custom Merchantech Footer */}
            <MerchantFooter />
        </div>
    );
};

const Step1 = ({ formData, setFormData }) => (
    <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-x-6 gap-y-8">
            <div className="col-span-6">
                <label className="signup-label">Legal Entity Name <span className="text-accent">*</span></label>
                <input 
                    type="text" 
                    className="signup-input" 
                    placeholder="Enter full legal name"
                    value={formData.legalEntityName}
                    onChange={(e) => setFormData({...formData, legalEntityName: e.target.value})}
                />
                <p className="signup-sublabel mt-2">
                    <span className="font-bold">Sole Owners:</span> Enter your full name. <br/>
                    <span className="font-bold">Corporation, LLC & Partnerships:</span> Enter your Corporation, LLC or Partnership name.
                </p>
            </div>

            <div className="col-span-6">
                <label className="signup-label">Legal Address <span className="text-accent">*</span></label>
                <input 
                    type="text" 
                    className="signup-input" 
                    placeholder="Address"
                    value={formData.legalAddress}
                    onChange={(e) => setFormData({...formData, legalAddress: e.target.value})}
                />
            </div>

            <div className="col-span-6 md:col-span-2">
                <label className="signup-label">Legal City <span className="text-accent">*</span></label>
                <input 
                    type="text" 
                    className="signup-input" 
                    value={formData.legalCity}
                    onChange={(e) => setFormData({...formData, legalCity: e.target.value})}
                />
            </div>
            <div className="col-span-3 md:col-span-2">
                <label className="signup-label">Legal State <span className="text-accent">*</span></label>
                <input 
                    type="text" 
                    className="signup-input" 
                    value={formData.legalState}
                    onChange={(e) => setFormData({...formData, legalState: e.target.value})}
                />
            </div>
            <div className="col-span-3 md:col-span-2">
                <label className="signup-label">Legal Zip <span className="text-accent">*</span></label>
                <input 
                    type="text" 
                    className="signup-input" 
                    value={formData.legalZip}
                    onChange={(e) => setFormData({...formData, legalZip: e.target.value})}
                />
            </div>

            <div className="col-span-6 md:col-span-3 flex flex-col gap-4">
                <label className="signup-label">Entity Type (Select LLC for all Partnerships) <span className="text-accent">*</span></label>
                <div className="space-y-3">
                    {['LLC', 'Corporation', 'Sole Proprietor'].map(type => (
                        <label key={type} className="flex items-center gap-3 cursor-pointer group">
                            <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${formData.entityType === type ? 'bg-accent border-accent' : 'border-white/20 group-hover:border-accent/50'}`}>
                                {formData.entityType === type && <Check size={14} className="text-black font-bold" />}
                            </div>
                            <input 
                                type="radio" 
                                className="hidden" 
                                name="entityType"
                                checked={formData.entityType === type}
                                onChange={() => setFormData({...formData, entityType: type})}
                            />
                            <span className="text-white/80 group-hover:text-white transition-colors">{type}</span>
                        </label>
                    ))}
                </div>
            </div>

            <div className="col-span-6 md:col-span-3">
                <label className="signup-label">Entity Start Date <span className="text-accent">*</span></label>
                <div className="grid grid-cols-3 gap-2 mt-1">
                    <input type="text" maxLength="2" placeholder="MM" className="signup-input text-center" />
                    <input type="text" maxLength="2" placeholder="DD" className="signup-input text-center" />
                    <input type="text" maxLength="4" placeholder="YYYY" className="signup-input text-center" />
                </div>
            </div>

            <div className="col-span-6 md:col-span-3">
                <label className="signup-label">Federal Tax ID <span className="text-accent">*</span></label>
                <input 
                    type="text" 
                    className="signup-input" 
                    placeholder="XX-XXXXXXX"
                    value={formData.federalTaxId}
                    onChange={(e) => setFormData({...formData, federalTaxId: e.target.value})}
                />
            </div>
            <div className="col-span-6 md:col-span-3">
                <label className="signup-label">Confirm Federal Tax ID <span className="text-accent">*</span></label>
                <input 
                    type="text" 
                    className="signup-input" 
                    placeholder="XX-XXXXXXX"
                />
            </div>
        </div>
    </div>
);

const Step2 = ({ formData, setFormData }) => (
    <div className="space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-x-6 gap-y-8">
            <div className="col-span-6">
                <label className="signup-label">Business (DBA) Name <span className="text-accent">*</span></label>
                <input 
                    type="text" 
                    className="signup-input" 
                    value={formData.businessDbaName}
                    onChange={(e) => setFormData({...formData, businessDbaName: e.target.value})}
                />
            </div>

            <div className="col-span-6">
                <label className="signup-label flex justify-between">
                    Business Address <span className="text-accent">*</span>
                    <button 
                        className="text-[10px] text-accent uppercase tracking-widest font-bold hover:underline"
                        onClick={() => setFormData({
                            ...formData, 
                            businessAddress: formData.legalAddress,
                            businessCity: formData.legalCity,
                            businessState: formData.legalState,
                            businessZip: formData.legalZip
                        })}
                    >
                        SAME AS LEGAL ADDRESS
                    </button>
                </label>
                <input 
                    type="text" 
                    className="signup-input" 
                    value={formData.businessAddress}
                    onChange={(e) => setFormData({...formData, businessAddress: e.target.value})}
                />
            </div>

            <div className="col-span-6 md:col-span-2">
                <label className="signup-label">Business City <span className="text-accent">*</span></label>
                <input 
                    type="text" 
                    className="signup-input" 
                    value={formData.businessCity}
                    onChange={(e) => setFormData({...formData, businessCity: e.target.value})}
                />
            </div>
            <div className="col-span-3 md:col-span-2">
                <label className="signup-label">Business State <span className="text-accent">*</span></label>
                <input 
                    type="text" 
                    className="signup-input" 
                    value={formData.businessState}
                    onChange={(e) => setFormData({...formData, businessState: e.target.value})}
                />
            </div>
            <div className="col-span-3 md:col-span-2">
                <label className="signup-label">ZIP code <span className="text-accent">*</span></label>
                <input 
                    type="text" 
                    className="signup-input" 
                    value={formData.businessZip}
                    onChange={(e) => setFormData({...formData, businessZip: e.target.value})}
                />
            </div>

            <div className="col-span-6 md:col-span-3">
                <label className="signup-label">Contact Name <span className="text-accent">*</span></label>
                <input type="text" className="signup-input" />
            </div>
            <div className="col-span-6 md:col-span-3">
                <label className="signup-label">Location Phone <span className="text-accent">*</span></label>
                <input type="tel" className="signup-input" />
            </div>
            <div className="col-span-6 md:col-span-3">
                <label className="signup-label">Business Email <span className="text-accent">*</span></label>
                <input type="email" className="signup-input" />
            </div>
            <div className="col-span-6 md:col-span-3">
                <label className="signup-label">Customer Service Phone</label>
                <input type="tel" className="signup-input" />
            </div>
            <div className="col-span-6">
                <label className="signup-label">Website</label>
                <input type="url" className="signup-input" placeholder="https://" />
            </div>
        </div>

        <div className="pt-8 border-t border-white/10">
            <h3 className="text-2xl font-bold mb-6 text-white uppercase tracking-tighter">Business Information</h3>
            <div className="signup-input-wrapper">
                <label className="signup-label">Products / Services Sold <span className="text-accent">*</span></label>
                <textarea className="signup-input h-32 pt-4 resize-none"></textarea>
            </div>
        </div>
    </div>
);

const Step3 = ({ formData, setFormData }) => (
    <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-x-6 gap-y-8">
            <div className="col-span-6 md:col-span-3">
                <label className="signup-label">Owner First Name <span className="text-accent">*</span></label>
                <input type="text" className="signup-input" />
            </div>
            <div className="col-span-6 md:col-span-3">
                <label className="signup-label">Owner Last Name <span className="text-accent">*</span></label>
                <input type="text" className="signup-input" />
            </div>
            <div className="col-span-6 md:col-span-3">
                <label className="signup-label">Title <span className="text-accent">*</span></label>
                <input type="text" className="signup-input" />
            </div>
            <div className="col-span-6 md:col-span-3">
                <label className="signup-label">Ownership % <span className="text-accent">*</span></label>
                <input type="text" className="signup-input" />
            </div>
            <div className="col-span-6">
                <label className="signup-label">Home Address <span className="text-accent">*</span></label>
                <input type="text" className="signup-input" />
            </div>
            <div className="col-span-6 border-2 border-dashed border-white/10 rounded-2xl p-12 text-center hover:border-accent/40 transition-all cursor-pointer bg-white/[0.02] group">
                <Upload size={40} className="mx-auto text-accent mb-4 group-hover:scale-110 transition-transform" />
                <p className="text-xl font-bold uppercase tracking-tight">Driver's License Photo</p>
                <p className="text-white/30 text-xs mt-2 uppercase tracking-widest font-bold">Recommended: High Resolution JPEG or PNG</p>
            </div>
        </div>
    </div>
);

const Step4 = ({ formData, setFormData }) => (
    <div className="space-y-12">
        <div>
            <h3 className="text-2xl font-bold mb-8 text-white uppercase tracking-tighter">Financial Profile</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <label className="signup-label">B2B %</label>
                    <input type="text" className="signup-input" placeholder="0%" />
                </div>
                <div>
                    <label className="signup-label">B2C %</label>
                    <input type="text" className="signup-input" placeholder="0%" />
                </div>
            </div>
        </div>
        <div className="pt-8 border-t border-white/10">
            <h3 className="text-2xl font-bold mb-8 text-white uppercase tracking-tighter">Settlement Bank Info</h3>
            <div className="grid grid-cols-1 md:grid-cols-6 gap-x-6 gap-y-8">
                <div className="col-span-6">
                    <label className="signup-label">Bank Name <span className="text-accent">*</span></label>
                    <input type="text" className="signup-input" />
                </div>
                <div className="col-span-3">
                    <label className="signup-label">Account Number <span className="text-accent">*</span></label>
                    <input type="text" className="signup-input" />
                </div>
                <div className="col-span-3">
                    <label className="signup-label">Routing Number <span className="text-accent">*</span></label>
                    <input type="text" className="signup-input" />
                </div>
            </div>
        </div>
    </div>
);

const MerchantFooter = () => (
    <footer className="bg-[#f0f4f8] text-[#334155] py-20 px-10 border-t border-slate-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
                <h3 className="text-2xl font-black mb-8 text-[#0f172a]">About</h3>
                <p className="leading-relaxed text-lg opacity-80">
                    Merchantech provides simple and convenient ways to accept credit cards, debit cards, and EBT cards. 
                    We provide payment and online ordering solutions to small businesses.
                </p>
            </div>
            <div>
                <h3 className="text-2xl font-black mb-8 text-[#0f172a]">Contact</h3>
                <div className="space-y-4">
                    <div>
                        <p className="font-bold text-slate-500 text-xs uppercase tracking-widest mb-1">Phone</p>
                        <p className="flex items-center gap-2 text-lg font-bold text-blue-600"><Phone size={18} /> 1-800-276-3724</p>
                    </div>
                    <div>
                        <p className="font-bold text-slate-500 text-xs uppercase tracking-widest mb-1">Email</p>
                        <p className="flex items-center gap-2 text-lg font-bold text-blue-600"><Mail size={18} /> csr@merchantech.com</p>
                    </div>
                </div>
            </div>
            <div>
                <h3 className="text-2xl font-black mb-8 text-[#0f172a]">Services</h3>
                <ul className="space-y-3 text-lg font-bold">
                    {['Payment Processing', 'Kratom Payment Processing', 'Yumvee for Restaurants', 'Vizion POS & Online Ordering', 'High Risk Processing'].map(s => (
                        <li key={s} className="flex items-center gap-2 text-blue-600 cursor-pointer hover:underline">
                            <ChevronRight size={16} /> {s}
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h3 className="text-2xl font-black mb-8 text-[#0f172a]">Join our Newsletter</h3>
                <p className="mb-6 opacity-70">Get weekly access to our best deals.</p>
                <div className="flex bg-white border border-slate-300 rounded overflow-hidden">
                    <input type="text" placeholder="Email" className="flex-1 p-4 outline-none placeholder:text-slate-300" />
                    <button className="bg-blue-500 text-white px-8 font-bold hover:bg-blue-600 transition-colors">Send</button>
                </div>
            </div>
        </div>
        <div className="mt-20 pt-10 border-t border-slate-200 text-center font-bold text-slate-400">
            All Rights Reserved | Copyright 2026 | Merchantech.com
        </div>
    </footer>
);

export default Signup;
