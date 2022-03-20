import React from "react";
import { Link } from "react-router-dom";
import hero1 from "../Assets/hero-bcg-2.jpeg";
import hero2 from "../Assets/hero-bcg.jpeg";
const HeroComponent = () => {
  return (
    <main className="section-container">
      <section className="hero-container">
        <article className="hero-text">
          <h2>
            Design Your
            <br /> Comfort Zone
          </h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at
            sed omnis corporis doloremque possimus velit! Repudiandae nisi odit,
            aperiam odio ducimus, obcaecati libero et quia tempora excepturi
            quis alias?sed omnis corporis doloremque possimus velit! Repudiandae
            nisi odit, nisi odit, aperiam odio ducimus, obcaecati libero et{" "}
          </p>
          <Link to="/products" className="hero-btn">
            Shop now
          </Link>
        </article>
        <article className="hero-images">
          <img src={hero2} alt="nice desk" className="hero-one" />
          <div className="hero-bcg"></div>
          <img src={hero1} alt="nice desk" className="hero-two" />
        </article>
      </section>
    </main>
  );
};

export default HeroComponent;
