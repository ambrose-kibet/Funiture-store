import React from "react";

const Contact = () => {
  return (
    <main className="Contact">
      <section className="contact-container">
        <article>
          <h4>Join our newsletter and get 20% off</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            sint unde quaerat ratione soluta veniam provident adipisci cumque
            eveniet tempore?
          </p>
        </article>

        <form
          className="form"
          action="https://formspree.io/f/xvolrgle"
          method="POST"
        >
          <div className="form-control">
            <input
              type={"email"}
              placeholder="Enter Email"
              className="form-input"
              name="email"
            />
            <button type="submit" className="submit-btn">
              Subscribe
            </button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Contact;
