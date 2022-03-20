import React from "react";
import hero from "../Assets/hero-bcg.jpeg";
import PageHero from "../Components/PageHero";
const AboutPage = () => {
  return (
    <main className="main-container">
      <PageHero page={"About"} />
      <section className="about-section-container">
        <article className="about-img-container">
          <img src={hero} alt="hero" className="about-img" />
        </article>
        <article>
          <div className="heading-container">
            <h2>OUR STORY</h2>
            <div className="underline"></div>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
            accusantium sapiente tempora sed dolore esse deserunt eaque
            excepturi, delectus error accusamus vel eligendi, omnis beatae.
            Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque
            dolore, obcaecati incidunt sequi blanditiis est exercitationem
            molestiae delectus saepe odio eligendi modi porro eaque in libero
            minus unde sapiente consectetur architecto. Ullam rerum, nemo iste
            ex, eaque perspiciatis nisi, eum totam velit saepe sed quos
            similique amet. Ex, voluptate accusamus nesciunt totam vitae esse
            iste.
          </p>
        </article>
      </section>
    </main>
  );
};

export default AboutPage;
