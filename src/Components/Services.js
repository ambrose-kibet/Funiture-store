import React from "react";
import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";
const Services = () => {
  return (
    <main className="service-section-container">
      <section className="service-bcg">
        <div className="service-title">
          <h3>
            Custom Furniture <br /> Built Only For You
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            dolorum debitis consectetur reprehenderit non aliquam voluptates
            dolore aut vero consequuntur.
          </p>
        </div>
        <div className="services-container">
          <article className="service-card">
            <div className="card-header">
              <GiCompass className="g-icon" />
            </div>
            <div className="card-body">
              <h5>Mission</h5>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum
                velit autem unde numquam nisi
              </p>
            </div>
          </article>
          <article className="service-card">
            <div className="card-header">
              <GiDiamondHard className="g-icon" />
            </div>
            <div className="card-body">
              <h5>Vision</h5>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum
                velit autem unde numquam nisi
              </p>
            </div>
          </article>
          <article className="service-card">
            <div className="card-header">
              <GiStabbedNote className="g-icon" />
            </div>
            <div className="card-body">
              <h5>History</h5>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum
                velit autem unde numquam nisi
              </p>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
};

export default Services;
