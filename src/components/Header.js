import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
        <button
          className="global-btn"
          onClick={() =>
            btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
          }
        >
          {btnName}
        </button>
      </div>
    </div>
  );
};

export default Header;
