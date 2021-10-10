import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              WorkReq
              <i class='fas fa-fingerprint' />
            </Link>
          </div>
          <small class='website-rights'>WorkRequest | Бүх эрх хуулиар хамгаалагдсан © 2021  </small>
        </div>
  );
}

export default Footer;
