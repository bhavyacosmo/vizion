import React from 'react'

const Hardware = () => {
    return (
        <section id="hardware" className="section-container hardware-section">
            <div className="hardware-content glass-card">
                <div className="text-side">
                    <h2>Versatile Hardware Solutions</h2>
                    <p>Whether you prefer a sleek tablet, a mobile handheld, or a robust terminal, Quickvee adapts to your workflow. Use any device, anywhere.</p>
                    <ul className="hardware-list">
                        <li>✓ High-Resolution Multi-Touch Displays</li>
                        <li>✓ Integrated Payment Terminals</li>
                        <li>✓ Portable Handheld Scanning</li>
                    </ul>
                </div>
                <div className="visual-side">
                    {/* 3D Hardware Model will be rendered here */}
                    <div className="model-placeholder">
                        [3D Hardware Interaction]
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hardware
