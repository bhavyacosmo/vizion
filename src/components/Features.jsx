import React from 'react'

const Features = () => {
    const features = [
        {
            title: "Power In Every Transaction",
            desc: "Process transactions faster than ever with our intuitive checkout flow.",
            icon: "⚡"
        },
        {
            title: "Pick-Up & Delivery",
            desc: "Seamless integration for local delivery and in-store pick-up orders.",
            icon: "📦"
        },
        {
            title: "Custom Website",
            desc: "Every merchant gets a high-converting, personalized storefront.",
            icon: "🌐"
        },
        {
            title: "Cloud Connectivity",
            desc: "Access your business data anywhere, anytime, with 100% uptime.",
            icon: "☁️"
        }
    ]

    return (
        <section id="features" className="section-container">
            <h2 className="section-title">Revolutionize Your Smoke Shop</h2>
            <div className="features-grid">
                {features.map((f, i) => (
                    <div key={i} className="glass-card feature-card">
                        <div className="feature-icon">{f.icon}</div>
                        <h3>{f.title}</h3>
                        <p>{f.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Features
