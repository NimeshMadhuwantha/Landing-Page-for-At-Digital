import React from 'react';
import './LandingPage.css';
import HomePageImage from '../../assets/HomePageImage.jpg';
import Button from '../../Components/button/Button';
import ImageDesktop from '../../assets/ImageDesktop.png';
import ImageSearch from '../../assets/ImageSearch.png';
import Question from '../../Components/Question/Question';
import Footer from '../../Components/Footer/Footer';

const LandingPage = () => {
    const handleButtonClick = () => {
        alert('Welcome to the Home Page!');

    };
    return (
       <div className='body-landing'>
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
            <div className='BoxMiddle'>
                <div className='DesktopImage'>
                    <img src={ImageDesktop} alt="" />
                </div>
                <div className='BoxMiddleContent'>
                    <h1>Web & Mobile App Development</h1>
                    <h2>Your web and mobile Apps are pieces of the puzzle to grow your business. 
                        We use frameworks which tailor content and engagement 
                        methods to respond to different intents shown by your potential customers 
                        who interact with your business online.</h2>
                        <Button 
                            label="LEARN MORE" 
                            onClick={handleButtonClick} 
                            className="large"/>
                </div>
            </div>
            <div className='BoxMiddle2'>
                
                <div className='BoxMiddleContent2'>
                    <h1>Digital Strategy Consulting</h1>
                    <h2>Your digital strategy should complement the overall marketing 
                        strategy of the company. In online marketing, each component 
                        will never work in isolation and every business needs a different mix. 
                        We provide a clear concept and strategic overview to find the most efficient model for your business.</h2>
                        <Button 
                            label="LEARN MORE" 
                            onClick={handleButtonClick} 
                            className="large"/>
                </div>
                <div className='ImageSearch'>
                    <img src={ImageSearch} alt="" />
                </div>
            </div>

            <Question/>
            <Footer/>

            </div>
    );
};

export default LandingPage;