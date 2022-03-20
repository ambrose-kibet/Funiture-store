import React from "react";

const Footer = () => {
  return (
    <section className="footer-container">
      <div className="footer">
        <h5>
          &copy; {new Date().getFullYear()} <span>ComfySloth</span> All rights
          reserved
        </h5>
      </div>
    </section>
  );
};

export default Footer;
