import React from 'react';
import { footerText } from '../../utils/text';
import './footer.css';

export default function Footer() {
  return (
    <footer data-testid="footer-container">
      <p className='text-muted spacing'>{footerText}</p>
    </footer>
  );
}
