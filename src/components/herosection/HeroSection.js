import React from 'react'
import { Button } from '../button/Button.js'
import INK from '../../video/pexels-mart-production-7565462.mp4'


function HeroSection() {
    return (
        <div className='hero-container'>
            <video src={INK} autoPlay loop muted />
            <h1>DISCOVER VIBRANT</h1>
            <p>Ink that transcends</p>
            <div className="hero-btns">
                <Button 
                className='btn'
                buttonStyle= 'btn--outline'
                buttonSize='btn--large'>
                    PRODUCT
                </Button>
                <Button 
                className='btn'
                buttonStyle= 'btn--primary'
                buttonSize='btn--large'
                onClick={console.log('This is not real')}>
                    SHOP
                </Button>
            </div> 
        </div>
    )
}

export default HeroSection
