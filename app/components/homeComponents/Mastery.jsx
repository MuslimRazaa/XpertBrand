import React from 'react'

function Mastery() {
    return (
        <div>

            {/* <!-- Scrolling Banner --> */}
            <div className="scrolling-banner">
                <div className="scrolling-banner-content">
                    <span className="scrolling-banner-item">Branding</span>
                    <span className="scrolling-banner-item">Website Development</span>
                    <span className="scrolling-banner-item">Mobile App Development</span>
                    <span className="scrolling-banner-item">Digital Marketing</span>
                    <span className="scrolling-banner-item">Website Design</span>
                    <span className="scrolling-banner-item">Branding</span>
                    <span className="scrolling-banner-item">Website Development</span>
                    <span className="scrolling-banner-item">Mobile App Development</span>
                    <span className="scrolling-banner-item">Digital Marketing</span>
                    <span className="scrolling-banner-item">Website Design</span>
                </div>
            </div>

            {/* <!-- Main Content Section --> */}
            <div className="main-section">
                <div className="content-wrapper">
                    {/* Left Side - Stats Card */}
                    <div className="stats-card">
                        <div className="stats-number">220+</div>
                        <div className="mastery-section-main-flexinf">

                            <div className="mastery-section-content">
                                <p className="stats-description">
                                    It is a long established fact that a reader will be distracted by the readable content of a page wreadable content of a page when looking at its layout.
                                </p>
                               
                            </div>

                            {/* <!-- Animated Chart Bars --> */}
                            <div className="chart-bars">
                                <div className="bar bar-1"></div>
                                <div className="bar bar-2"></div>
                            </div>
                        </div>

                    </div>

                    {/* <!-- Right Side - Content --> */}
                    <div className="content-area">

                        <div className="Mastery-heading-wrapper">
                            <div className="mastery-heading-btn">

                                <h1 className="main-heading">
                                    Mastery of Creative Innovation

                                </h1>
                                <a href="#" className="read-more-btn">Read More </a>

                            </div>
                            <div className="mastery-content">
                                <div className="tags">
                                    <div className="tag">Branding</div>
                                    <div className="tag">Design</div>
                                </div>
                                <p className="description-text">
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                   The point of using Lorem Ipsum is that it has a more-or-less here, content 'here', making it look like readable English.

                                </p>
                               
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Discount Form Section */}
            <div className="discount-section">
                <h2 className="discount-heading">Get 60% OFF</h2>
                <div className="form-wrapper">
                    <input type="text" className="input-field" placeholder="Name" />
                    <input type="email" className="input-field" placeholder="Email" />
                    <input type="tel" className="input-field" placeholder="Phone Number" />
                    <button className="subscribe-btn">Subscribe</button>
                </div>
            </div>
        </div>
    )
}

export default Mastery