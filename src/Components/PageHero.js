import React from "react";

const PageHero = ({ page }) => {
  return (
    <section className="page-hero">
      <h3>
        <span className="home-text">Home</span> /<span>{page}</span>
      </h3>
    </section>
  );
};

export default PageHero;
