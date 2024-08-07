import React, { useContext } from "react";
import UserContext from "../utils/UserContext";

const About = () => {
  const { loggedInUser } = useContext(UserContext);

  return (
    <div>
      <h1>About Us</h1>
      <h3>
        Welcome -{" "}
        <span className="text-xl text-green-500 font-bold">{loggedInUser}</span>{" "}
        to About Us Page
      </h3>
    </div>
  );
};

export default About;
