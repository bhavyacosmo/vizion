import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Smartphone, Globe, Cloud } from 'lucide-react'

const FAQ_DATA = [
    {
        q: "How secure is my business information?",
        a: "We prioritize security above all else. Our cloud servers are PCI-compliant, and our platform is protected by the highest level of security protocols, ensuring all your business data and customer information remain completely safe and secure from any unauthorized access."
    },
    {
        q: "Do I need specialized hardware to use Vizion POS?",
        a: "Vizion POS is designed to be highly versatile. You can run our platform on a wide range of devices, including tablets, smartphones, and professional-grade POS terminals. We provide flexible hardware compatibility to fit your specific workflow and shop environment."
    }
]

const ContentBlocks = () => {
    return (
        <div className="content-blocks">
            {/* Loyalty Section */}
            <section className="section-container">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="glass-card loyalty-banner"
                >
                    <div className="banner-content">
                        <h2 className="accent-text">LOYALTY THAT PAYS BACK</h2>
                        <p>Reward your repeat customers and watch your loyalty grow. Our built-in loyalty program is designed to drive retention and increase customer lifetime value automatically.</p>
                        <button className="btn-primary mt-4">Learn More</button>
                    </div>
                </motion.div>
            </section>

            {/* FAQ Section */}
            <section className="section-container">
                <h2 className="section-title">Common Questions</h2>
                <div className="faq-list">
                    {FAQ_DATA.map((faq, i) => (
                        <div key={i} className="glass-card mb-4 faq-item">
                            <h3 className="mb-2">{faq.q}</h3>
                            <p>{faq.a}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default ContentBlocks
