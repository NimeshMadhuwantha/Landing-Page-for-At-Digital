import React from 'react';
import './LandingPage.css';
import HomePageImage from '../../assets/HomePageImage.jpg';
import Button from '../../Components/button/Button';

const LandingPage = () => {
    const handleButtonClick = () => {
        alert('Welcome to the Home Page!');
    };
    return (
        <div className="landing-page">
                <div className="background-image">
                    <img src={HomePageImage}/>
                </div>
                <div className='TopContent'>
                    <h1>We crush your competitors, goals, and sales records - without the B.S.</h1>
                 <div className='ButtonTop'>   
                        <Button 
                        label="Get free consultation" 
                        onClick={handleButtonClick} 
                        className="large"/>
                </div>

                </div>
            </div>
    );
};

export default LandingPage;