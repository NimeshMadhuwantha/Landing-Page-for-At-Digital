import React, { useState } from 'react';
import './Question.css';

const FAQSection = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDescription = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="faq-section">
            <h1>Frequently Asked Questions</h1>
            <div className="faq-item">
                <div className="faq-question" onClick={toggleDescription}>
                    <p>Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?</p>
                    <span>{isOpen ? '-' : '+'}</span>
                </div>
                {isOpen && (
                    <div className="faq-description">
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum.
                            Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi
                            risus sagittis tortor integer.
                        </p>
                    </div>
                )}
            </div>
            
            <div className="faq-item">
                <div className="faq-question">
                    <p>Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?</p>
                    <span>+</span>
                </div>
            </div>
            <div className="faq-item">
                <div className="faq-question">
                    <p>Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?</p>
                    <span>+</span>
                </div>
            </div>
        </div>
    );
};

export default FAQSection;
