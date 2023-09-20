import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer>
    <div className="footer-container">
        <h2>Contact Us</h2>
        <Link href="https://thecodinglord.com.ng/contact" className="footer-contact">@thecodinglord</Link>
        <div className="footer-links">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
        </div>
    </div>
</footer>
  );
};

export default Footer;
