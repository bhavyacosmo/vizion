import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Upload, ChevronLeft, ChevronRight, Check,
    Phone, Mail, Zap
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        // Step 1: Location Info
        legalEntityName: '', legalAddress: '', legalCity: '', legalState: '', legalZip: '',
        entityType: '', entityStartDateMM: '', entityStartDateDD: '', entityStartDateYYYY: '',
        federalTaxId: '', confirmFederalTaxId: '',
        // Step 2: Merchant Location
        businessDbaName: '', businessAddress: '', businessCity: '', businessState: '', businessZip: '',
        contactName: '', locationPhone: '', businessEmail: '', customerServicePhone: '', website: '',
        productsServicesSold: '',
        // Step 3: Owner Info
        ownerFirstName: '', ownerLastName: '', ownerTitle: '', ownershipPercent: '',
        ownerAddress: '', ownerCity: '', ownerState: '', ownerZip: '',
        homePhone: '', cellPhone: '', ssn: '', confirmSsn: '', 
        dobMM: '', dobDD: '', dobYYYY: '',
        dlNumber: '', dlState: '', ownerEmail: '',
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
                    <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div 
                            className="h-full bg-accent"
                            initial={{ width: "25%" }}
                            animate={{ width: `${step * 25}%` }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        />
                    </div>
                </div>

                {/* Form Content */}
                <div className="relative">
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
                    <div className="flex flex-col gap-4 mt-16 pt-12 border-t border-gray-100">
                        {step > 1 && (
                            <button 
                                onClick={prevStep} 
                                className="w-full py-5 bg-[#5A92D6] text-white rounded-lg font-bold flex items-center justify-center gap-3 hover:bg-[#4A82C6] transition-all uppercase tracking-widest text-sm"
                            >
                                Previous
                            </button>
                        )}
                        <button 
                            onClick={step === 4 ? () => navigate('/thank-you') : nextStep} 
                            className="w-full py-5 bg-[#5A92D6] text-white rounded-lg font-bold flex items-center justify-center gap-3 hover:bg-[#4A82C6] transition-all uppercase tracking-widest text-sm"
                        >
                            {step === 4 ? 'Submit' : 'Next'}
                        </button>
                    </div>
                </div>
            </div>

            <MerchantFooter />
        </div>
    );
};

const Step1 = ({ formData, setFormData }) => (
    <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-x-6 gap-y-8">
            <div className="col-span-6">
                <label className="signup-label">Legal Entity Name: <span className="text-red-500">*</span></label>
                <input 
                    type="text" 
                    className="signup-input bg-white border-gray-200 text-gray-900" 
                    value={formData.legalEntityName}
                    onChange={(e) => setFormData({...formData, legalEntityName: e.target.value})}
                />
                <p className="text-gray-500 text-sm mt-2">
                    <span className="font-bold">Sole Owners:</span> Enter your full name. <br/>
                    <span className="font-bold">Corporation, LLC & Partnerships:</span> Enter your Corporation, LLC or Partnership name.
                </p>
            </div>

            <div className="col-span-6">
                <label className="signup-label">Legal Address: <span className="text-red-500">*</span></label>
                <input 
                    type="text" 
                    className="signup-input bg-white border-gray-200 text-gray-900" 
                    value={formData.legalAddress}
                    onChange={(e) => setFormData({...formData, legalAddress: e.target.value})}
                />
            </div>

            <div className="col-span-6 md:col-span-2">
                <label className="signup-label">Legal City <span className="text-red-500">*</span></label>
                <input 
                    type="text" 
                    className="signup-input bg-white border-gray-200 text-gray-900" 
                    value={formData.legalCity}
                    onChange={(e) => setFormData({...formData, legalCity: e.target.value})}
                />
            </div>
            <div className="col-span-3 md:col-span-2">
                <label className="signup-label">Legal State <span className="text-red-500">*</span></label>
                <input 
                    type="text" 
                    className="signup-input bg-white border-gray-200 text-gray-900" 
                    value={formData.legalState}
                    onChange={(e) => setFormData({...formData, legalState: e.target.value})}
                />
            </div>
            <div className="col-span-3 md:col-span-2">
                <label className="signup-label">Legal Zip <span className="text-red-500">*</span></label>
                <input 
                    type="text" 
                    className="signup-input bg-white border-gray-200 text-gray-900" 
                    value={formData.legalZip}
                    onChange={(e) => setFormData({...formData, legalZip: e.target.value})}
                />
            </div>

            <div className="col-span-6 md:col-span-3">
                <label className="signup-label">Entity Type: (Select LLC for all Partnerships) <span className="text-red-500">*</span></label>
                <div className="flex flex-col gap-3 mt-2">
                    {['LLC', 'Corporation', 'Sole Proprietor'].map(type => (
                        <label key={type} className="flex items-center gap-3 cursor-pointer group">
                            <input 
                                type="checkbox" 
                                className="w-5 h-5 rounded border-gray-300 transition-all accent-[#5A92D6]" 
                                checked={formData.entityType === type}
                                onChange={() => setFormData({...formData, entityType: type})}
                            />
                            <span className="text-gray-700">{type}</span>
                        </label>
                    ))}
                </div>
            </div>

            <div className="col-span-6 md:col-span-3">
                <label className="signup-label">Entity Start Date: <span className="text-red-500">*</span></label>
                <div className="grid grid-cols-3 gap-2 mt-1">
                    <input 
                        type="text" maxLength="2" placeholder="MM" 
                        className="signup-input bg-white border-gray-200 text-gray-900 text-center" 
                        value={formData.entityStartDateMM}
                        onChange={(e) => setFormData({...formData, entityStartDateMM: e.target.value})}
                    />
                    <input 
                        type="text" maxLength="2" placeholder="DD" 
                        className="signup-input bg-white border-gray-200 text-gray-900 text-center" 
                        value={formData.entityStartDateDD}
                        onChange={(e) => setFormData({...formData, entityStartDateDD: e.target.value})}
                    />
                    <input 
                        type="text" maxLength="4" placeholder="YYYY" 
                        className="signup-input bg-white border-gray-200 text-gray-900 text-center" 
                        value={formData.entityStartDateYYYY}
                        onChange={(e) => setFormData({...formData, entityStartDateYYYY: e.target.value})}
                    />
                </div>
            </div>

            <div className="col-span-6 md:col-span-3">
                <label className="signup-label">Federal Tax ID <span className="text-red-500">*</span></label>
                <input 
                    type="text" 
                    className="signup-input bg-white border-gray-200 text-gray-900" 
                    placeholder="XX-XXXXXXX"
                    value={formData.federalTaxId}
                    onChange={(e) => setFormData({...formData, federalTaxId: e.target.value})}
                />
            </div>
            <div className="col-span-6 md:col-span-3">
                <label className="signup-label">Confirm Federal Tax ID <span className="text-red-500">*</span></label>
                <input 
                    type="text" 
                    className="signup-input bg-white border-gray-200 text-gray-900" 
                    placeholder="XX-XXXXXXX"
                    value={formData.confirmFederalTaxId}
                    onChange={(e) => setFormData({...formData, confirmFederalTaxId: e.target.value})}
                />
            </div>
        </div>
    </div>
);

const Step2 = ({ formData, setFormData }) => (
    <div className="space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-x-6 gap-y-8">
            <div className="col-span-6">
                <label className="signup-label">Business (DBA) Name <span className="text-red-500">*</span></label>
                <input 
                    type="text" 
                    className="signup-input bg-white border-gray-200 text-gray-900" 
                    value={formData.businessDbaName}
                    onChange={(e) => setFormData({...formData, businessDbaName: e.target.value})}
                />
            </div>

            <div className="col-span-6">
                <label className="signup-label flex justify-between">
                    <span>Business Address <span className="text-red-500">*</span></span>
                    <button 
                        className="text-xs text-blue-600 font-bold hover:underline italic"
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
                    className="signup-input bg-white border-gray-200 text-gray-900" 
                    value={formData.businessAddress}
                    onChange={(e) => setFormData({...formData, businessAddress: e.target.value})}
                />
            </div>

            <div className="col-span-6 md:col-span-2">
                <label className="signup-label">Business City <span className="text-red-500">*</span></label>
                <input 
                    type="text" 
                    className="signup-input bg-white border-gray-200 text-gray-900" 
                    value={formData.businessCity}
                    onChange={(e) => setFormData({...formData, businessCity: e.target.value})}
                />
            </div>
            <div className="col-span-3 md:col-span-2">
                <label className="signup-label">Business State <span className="text-red-500">*</span></label>
                <input 
                    type="text" 
                    className="signup-input bg-white border-gray-200 text-gray-900" 
                    value={formData.businessState}
                    onChange={(e) => setFormData({...formData, businessState: e.target.value})}
                />
            </div>
            <div className="col-span-3 md:col-span-2">
                <label className="signup-label">ZIP code <span className="text-red-500">*</span></label>
                <input 
                    type="text" 
                    className="signup-input bg-white border-gray-200 text-gray-900" 
                    value={formData.businessZip}
                    onChange={(e) => setFormData({...formData, businessZip: e.target.value})}
                />
            </div>

            <div className="col-span-6 md:col-span-3">
                <label className="signup-label">Contact Name: <span className="text-red-500">*</span></label>
                <input 
                    type="text" 
                    className="signup-input bg-white border-gray-200 text-gray-900" 
                    value={formData.contactName}
                    onChange={(e) => setFormData({...formData, contactName: e.target.value})}
                />
            </div>
            <div className="col-span-6 md:col-span-3">
                <label className="signup-label">Location Phone: <span className="text-red-500">*</span></label>
                <input 
                    type="tel" 
                    className="signup-input bg-white border-gray-200 text-gray-900" 
                    value={formData.locationPhone}
                    onChange={(e) => setFormData({...formData, locationPhone: e.target.value})}
                />
            </div>
            <div className="col-span-6 md:col-span-3">
                <label className="signup-label">Business Email: <span className="text-red-500">*</span></label>
                <input 
                    type="email" 
                    className="signup-input bg-white border-gray-200 text-gray-900" 
                    value={formData.businessEmail}
                    onChange={(e) => setFormData({...formData, businessEmail: e.target.value})}
                />
            </div>
            <div className="col-span-6 md:col-span-3">
                <label className="signup-label">Customer Service Phone:</label>
                <input 
                    type="tel" 
                    className="signup-input bg-white border-gray-200 text-gray-900" 
                    value={formData.customerServicePhone}
                    onChange={(e) => setFormData({...formData, customerServicePhone: e.target.value})}
                />
            </div>
            <div className="col-span-6">
                <label className="signup-label">Website:</label>
                <input 
                    type="url" 
                    className="signup-input bg-white border-gray-200 text-gray-900" 
                    value={formData.website}
                    onChange={(e) => setFormData({...formData, website: e.target.value})}
                />
            </div>
        </div>

        <div className="pt-8 border-t border-gray-100">
            <h3 className="text-3xl font-black mb-8 text-gray-900 uppercase tracking-tighter">Business Information</h3>
            <div className="space-y-4">
                <label className="signup-label">Products / Services Sold: <span className="text-red-500">*</span></label>
                <textarea 
                    className="signup-input bg-white border-gray-200 text-gray-900 h-16 pt-3 resize-none"
                    value={formData.productsServicesSold}
                    onChange={(e) => setFormData({...formData, productsServicesSold: e.target.value})}
                ></textarea>
            </div>
        </div>
    </div>
);

const Step3 = ({ formData, setFormData }) => (
    <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-x-6 gap-y-8">
            <div className="col-span-6 md:col-span-3">
                <label className="signup-label">Owner First Name: <span className="text-red-500">*</span></label>
                <input 
                    type="text" 
                    className="signup-input bg-white border-gray-200 text-gray-900" 
                    value={formData.ownerFirstName}
                    onChange={(e) => setFormData({...formData, ownerFirstName: e.target.value})}
                />
            </div>
            <div className="col-span-6 md:col-span-3">
                <label className="signup-label">Owner Last Name: <span className="text-red-500">*</span></label>
                <input 
                    type="text" 
                    className="signup-input bg-white border-gray-200 text-gray-900" 
                    value={formData.ownerLastName}
                    onChange={(e) => setFormData({...formData, ownerLastName: e.target.value})}
                />
            </div>
            <div className="col-span-6 md:col-span-3">
                <label className="signup-label">Title: <span className="text-red-500">*</span></label>
                <input 
                    type="text" 
                    className="signup-input bg-white border-gray-200 text-gray-900" 
                    value={formData.ownerTitle}
                    onChange={(e) => setFormData({...formData, ownerTitle: e.target.value})}
                />
            </div>
            <div className="col-span-6 md:col-span-3">
                <label className="signup-label">Ownership % <span className="text-red-500">*</span></label>
                <input 
                    type="text" 
                    className="signup-input bg-white border-gray-200 text-gray-900" 
                    value={formData.ownershipPercent}
                    onChange={(e) => setFormData({...formData, ownershipPercent: e.target.value})}
                />
            </div>
            <div className="col-span-6">
                <label className="signup-label">Home Address: <span className="text-red-500">*</span></label>
                <input 
                    type="text" 
                    className="signup-input bg-white border-gray-200 text-gray-900" 
                    value={formData.ownerAddress}
                    onChange={(e) => setFormData({...formData, ownerAddress: e.target.value})}
                />
            </div>
            <div className="col-span-6 md:col-span-2">
                <label className="signup-label">City: <span className="text-red-500">*</span></label>
                <input 
                    type="text" 
                    className="signup-input bg-white border-gray-200 text-gray-900" 
                    value={formData.ownerCity}
                    onChange={(e) => setFormData({...formData, ownerCity: e.target.value})}
                />
            </div>
            <div className="col-span-3 md:col-span-2">
                <label className="signup-label">State: <span className="text-red-500">*</span></label>
                <input 
                    type="text" 
                    className="signup-input bg-white border-gray-200 text-gray-900" 
                    value={formData.ownerState}
                    onChange={(e) => setFormData({...formData, ownerState: e.target.value})}
                />
            </div>
            <div className="col-span-3 md:col-span-2">
                <label className="signup-label">Zip Code: <span className="text-red-500">*</span></label>
                <input 
                    type="text" 
                    className="signup-input bg-white border-gray-200 text-gray-900" 
                    value={formData.ownerZip}
                    onChange={(e) => setFormData({...formData, ownerZip: e.target.value})}
                />
            </div>
            <div className="col-span-6">
                <label className="signup-label">Home Phone: <span className="text-red-500">*</span></label>
                <input 
                    type="tel" 
                    className="signup-input bg-white border-gray-200 text-gray-900" 
                    value={formData.homePhone}
                    onChange={(e) => setFormData({...formData, homePhone: e.target.value})}
                />
            </div>
            <div className="col-span-6">
                <label className="signup-label">Cell Phone Number <span className="text-red-500">*</span></label>
                <input 
                    type="tel" 
                    className="signup-input bg-white border-gray-200 text-gray-900" 
                    placeholder="(___) ___-____"
                    value={formData.cellPhone}
                    onChange={(e) => setFormData({...formData, cellPhone: e.target.value})}
                />
            </div>
            <div className="col-span-6 md:col-span-3">
                <label className="signup-label">Social Security #: <span className="text-red-500">*</span></label>
                <input 
                    type="password" 
                    className="signup-input bg-white border-gray-200 text-gray-900" 
                    value={formData.ssn}
                    onChange={(e) => setFormData({...formData, ssn: e.target.value})}
                />
            </div>
            <div className="col-span-6 md:col-span-3">
                <label className="signup-label">Confirm Social Security #: <span className="text-red-500">*</span></label>
                <input 
                    type="password" 
                    className="signup-input bg-white border-gray-200 text-gray-900" 
                    value={formData.confirmSsn}
                    onChange={(e) => setFormData({...formData, confirmSsn: e.target.value})}
                />
            </div>
            <div className="col-span-6">
                <label className="signup-label">Date of Birth <span className="text-red-500">*</span></label>
                <div className="grid grid-cols-3 gap-2 mt-1">
                    <input 
                        type="text" maxLength="2" placeholder="MM" 
                        className="signup-input bg-white border-gray-200 text-gray-900 text-center" 
                        value={formData.dobMM}
                        onChange={(e) => setFormData({...formData, dobMM: e.target.value})}
                    />
                    <input 
                        type="text" maxLength="2" placeholder="DD" 
                        className="signup-input bg-white border-gray-200 text-gray-900 text-center" 
                        value={formData.dobDD}
                        onChange={(e) => setFormData({...formData, dobDD: e.target.value})}
                    />
                    <input 
                        type="text" maxLength="4" placeholder="YYYY" 
                        className="signup-input bg-white border-gray-200 text-gray-900 text-center" 
                        value={formData.dobYYYY}
                        onChange={(e) => setFormData({...formData, dobYYYY: e.target.value})}
                    />
                </div>
            </div>
            <div className="col-span-6 md:col-span-3">
                <label className="signup-label">Driver License #</label>
                <input 
                    type="text" 
                    className="signup-input bg-white border-gray-200 text-gray-900" 
                    value={formData.dlNumber}
                    onChange={(e) => setFormData({...formData, dlNumber: e.target.value})}
                />
            </div>
            <div className="col-span-6 md:col-span-3">
                <label className="signup-label">DL State:</label>
                <input 
                    type="text" 
                    className="signup-input bg-white border-gray-200 text-gray-900" 
                    value={formData.dlState}
                    onChange={(e) => setFormData({...formData, dlState: e.target.value})}
                />
            </div>
            <div className="col-span-6">
                <p className="signup-label mb-2">Driver's License: (To expedite the processing of your application please attach a picture of your driver's license.)</p>
                <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center hover:border-blue-400 transition-all cursor-pointer bg-gray-50 flex flex-col items-center">
                    <Upload size={32} className="text-gray-400 mb-2" />
                    <p className="text-gray-600 font-medium">Click or drag a file to this area to upload.</p>
                </div>
            </div>
            <div className="col-span-6">
                <label className="signup-label">Email <span className="text-red-500">*</span></label>
                <input 
                    type="email" 
                    className="signup-input bg-white border-gray-200 text-gray-900" 
                    value={formData.ownerEmail}
                    onChange={(e) => setFormData({...formData, ownerEmail: e.target.value})}
                />
            </div>
        </div>
    </div>
);

const Step4 = ({ formData, setFormData }) => (
    <div className="space-y-12">
        <div className="space-y-8">
            <h3 className="text-3xl font-black text-gray-900 uppercase tracking-tighter">Sales Profile</h3>
            <p className="text-gray-600 italic">What percentage of your sales are business to business (B2B) and what percentage of your sales are business to consumers (B2C)</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <label className="signup-label font-black text-xs uppercase tracking-widest text-gray-500">B2B%</label>
                    <input 
                        type="text" 
                        className="signup-input bg-white border-gray-200 text-gray-900 mt-2" 
                        value={formData.b2bPercent}
                        onChange={(e) => setFormData({...formData, b2bPercent: e.target.value})}
                    />
                </div>
                <div>
                    <label className="signup-label font-black text-xs uppercase tracking-widest text-gray-500">B2C %</label>
                    <input 
                        type="text" 
                        className="signup-input bg-white border-gray-200 text-gray-900 mt-2" 
                        value={formData.b2cPercent}
                        onChange={(e) => setFormData({...formData, b2cPercent: e.target.value})}
                    />
                </div>
            </div>
        </div>

        <div className="pt-8 border-t border-gray-100 space-y-8">
            <h3 className="text-3xl font-black text-gray-900 uppercase tracking-tighter">Processing Volume</h3>
            <div className="grid grid-cols-1 md:grid-cols-6 gap-x-6 gap-y-8">
                <div className="col-span-6">
                    <label className="signup-label">Requested Monthly Volume <span className="text-red-500">*</span></label>
                    <input 
                        type="text" 
                        className="signup-input bg-white border-gray-200 text-gray-900" 
                        value={formData.monthlyVolume}
                        onChange={(e) => setFormData({...formData, monthlyVolume: e.target.value})}
                    />
                </div>
                <div className="col-span-3">
                    <label className="signup-label">Avg Transaction Size <span className="text-red-500">*</span></label>
                    <input 
                        type="text" 
                        className="signup-input bg-white border-gray-200 text-gray-900" 
                        value={formData.avgTxSize}
                        onChange={(e) => setFormData({...formData, avgTxSize: e.target.value})}
                    />
                </div>
                <div className="col-span-3">
                    <label className="signup-label">Max Transaction Size <span className="text-red-500">*</span></label>
                    <input 
                        type="text" 
                        className="signup-input bg-white border-gray-200 text-gray-900" 
                        value={formData.maxTxSize}
                        onChange={(e) => setFormData({...formData, maxTxSize: e.target.value})}
                    />
                </div>
            </div>
        </div>

        <div className="pt-8 border-t border-gray-100 space-y-8">
            <h3 className="text-3xl font-black text-gray-900 uppercase tracking-tighter">Settlement Bank Info</h3>
            <div className="grid grid-cols-1 md:grid-cols-6 gap-x-6 gap-y-8">
                <div className="col-span-6 md:col-span-3">
                    <label className="signup-label font-bold">Bank Name: <span className="text-red-500">*</span></label>
                    <input 
                        type="text" 
                        className="signup-input bg-white border-gray-200 text-gray-900 mt-2" 
                        value={formData.bankName}
                        onChange={(e) => setFormData({...formData, bankName: e.target.value})}
                    />
                </div>
                <div className="col-span-6 md:col-span-3">
                    <label className="signup-label font-bold">Account Number: <span className="text-red-500">*</span></label>
                    <input 
                        type="text" 
                        className="signup-input bg-white border-gray-200 text-gray-900 mt-2" 
                        value={formData.accountNumber}
                        onChange={(e) => setFormData({...formData, accountNumber: e.target.value})}
                    />
                </div>
                <div className="col-span-6 md:col-span-3">
                    <label className="signup-label font-bold">Routing Number: <span className="text-red-500">*</span></label>
                    <input 
                        type="text" 
                        className="signup-input bg-white border-gray-200 text-gray-900 mt-2" 
                        value={formData.routingNumber}
                        onChange={(e) => setFormData({...formData, routingNumber: e.target.value})}
                    />
                </div>
                <div className="col-span-6 md:col-span-3">
                    <label className="signup-label font-bold">Type <span className="text-red-500">*</span></label>
                    <select 
                        className="signup-input bg-white border-gray-200 text-gray-900 mt-2 appearance-none cursor-pointer"
                        value={formData.accountType}
                        onChange={(e) => setFormData({...formData, accountType: e.target.value})}
                    >
                        <option value="Saving">Saving</option>
                        <option value="Checking">Checking</option>
                    </select>
                </div>
                <div className="col-span-6">
                    <p className="signup-label font-bold mb-4">Voided Check: (Please include a picture of a voided check with your business name and address printed by your bank. Your funds will be deposited to this account.)</p>
                    <div className="border-2 border-dashed border-gray-200 rounded-xl p-10 text-center hover:border-blue-400 transition-all cursor-pointer bg-gray-50 flex flex-col items-center">
                        <Upload size={36} className="text-gray-400 mb-3" />
                        <p className="text-gray-600 font-medium">Click or drag a file to this area to upload.</p>
                    </div>
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
