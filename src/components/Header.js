import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { getAboutUrl, getContactUrl, getHomeUrl } from "../utils/urls";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to={getHomeUrl()}>Home</Link>
          </li>
          <li>
            <Link to={getAboutUrl()}>About Us</Link>
          </li>
          <li>
            <Link to={getContactUrl()}>Contact Us</Link>
          </li>
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
