import React from "react";

import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          All of our menu items are inspired by multi cuisine and have been
          created by our head chef, after studying authentic Japanese Cuisine in
          Tokyo. Not only do we have fresh flown-in seafood from the northeast,
          but we also have a variety of handcrafted cocktails, wine, and beer to
          choose from. Come dine with us & experience an authentic Japanese meal
          in an intimate dining space. We look forward to serving you!
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          We pride ourselves in following the traditional Hot Chicken
          seasonings. From dry spice to the classic hot oil.Before the French
          Revolution, aristocratic French households maintained elaborate
          culinary establishments, but when the Revolution reduced the number of
          private households offering employment, many chefs and cooks found
          employment in restaurant kitchens.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
