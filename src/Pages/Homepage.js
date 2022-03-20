import React from "react";
import { Contact, Featured, Services, HeroComponent } from "../Components";
const Homepage = () => {
  return (
    <div>
      <HeroComponent />
      <Featured />
      <Services />
      <Contact />
    </div>
  );
};

export default Homepage;
