import React from 'react';

const Newsletter = () => {
    return (
        <section className="newsletter-section">
            <div className="newsletter-container">
                <h2 className="newsletter-title">Join Our Customer List to Get Updates and Promos</h2>
                <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                    <div className="newsletter-input-group">
                        <input type="email" placeholder="Email" className="n-input" required />
                        <button type="submit" className="n-submit-btn">Submit</button>
                    </div>
                </form>
                <p className="newsletter-subtext">Take your smoke shop into the Cloud with Vizion.</p>
            </div>
        </section>
    );
};

export default Newsletter;
