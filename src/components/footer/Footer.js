import React from 'react'
import { Button } from '../button/Button';
import { Link } from 'react-router-dom';
import LOGO from '../../images/transLOGO.png'

function Footer() {
    return (
        <div className='footer-container'>
        <section className='footer-subscription'>
          <p className='footer-subscription-heading'>
            Keep in Touch.
          </p>
          <p className='footer-subscription-text'>
          Join the newsletter to know when a new product drops.
          </p>
          <div className='input-areas'>
            <form>
              <input
                className='footer-input'
                name='email'
                type='email'
                placeholder='Your Email'
              />
              <Button buttonStyle='btn--outline'>Subscribe</Button>
            </form>
          </div>
        </section>
        <div class='footer-links'>
          <div className='footer-link-wrapper'>
            <div class='footer-link-items'>
              <h2>Questions? Comments?</h2>
              <p>Send us an email at info@vivid.com and one of customer service specialist will contact you. We love hearing from customers!</p>
            </div>
            <div class='footer-link-items'>
              <h2>Contact Us</h2>
              <Link to='/'>Contact</Link>
              <Link to='/'>Support</Link>
            </div>
          </div>
          <div className='footer-link-wrapper'>
            <div class='footer-link-items'>
              <h2>Product</h2>
              <Link to='/'>Our Inks</Link>
              <Link to='/'>Ambassadors</Link>
              <Link to='/'>Quality Control</Link>
              <Link to='/'>Careers</Link>
              <Link to='/'>Gallery</Link>
            </div>
            <div class='footer-link-items'>
              <h2>Quick Links</h2>
              <Link to='/'>Home</Link>
              <Link to='/'>About</Link>
              <Link to='/'>Talk to us!</Link>
              <Link to='/'>Shipping Policy</Link>
              <Link to='/'>Refund Policy</Link>
              <Link to='/'>Terms of Sales</Link>
              <Link to='/'>Privacy Policy</Link>
            </div>
          </div>
        </div>
        <section class='social-media'>
          <div class='social-media-wrap'>
            <div class='footer-logo'>
              <Link to='/' className='social-logo'>
             <img src={LOGO} alt="Footer Logo" />
              </Link>
            </div>
            <small class='website-rights'>V I V I D © 2021</small>
            <div class='social-icons'>
              <Link
                class='social-icon-link facebook'
                to='/'
                target='_blank'
                aria-label='Facebook'
              >
                <i class='fab fa-facebook-f' />
              </Link>
              <Link
                class='social-icon-link instagram'
                to='/'
                target='_blank'
                aria-label='Instagram'
              >
                <i class='fab fa-instagram' />
              </Link>
              <Link
                class='social-icon-link twitter'
                to='/'
                target='_blank'
                aria-label='Twitter'
              >
                <i class='fab fa-twitter' />
              </Link>
            </div>
          </div>
        </section>
      </div>
    )
}

export default Footer
