import React from 'react';
import { footerText } from '../../utils/text';
import './footer.css';

export default function Footer() {
  return (
    <footer data-testid="Footer" >
      <p data-testid="footerText" className='text-muted spacing'>{footerText}</p>
    </footer>
  );
}
