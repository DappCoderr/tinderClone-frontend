import React from 'react';

const Footer = () => {
  return (
    <footer className="footer footer-center bg-neutral text-neutral-content p-5 mt-auto">
      <aside>
        <p className="text-sm text-center">Copyright © {new Date().getFullYear()} - All rights reserved</p>
      </aside>
    </footer>
  );
};

export default Footer;
