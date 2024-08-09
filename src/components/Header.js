import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import {
  getAboutUrl,
  getCartUrl,
  getContactUrl,
  getGroceryUrl,
  getHomeUrl,
} from "../utils/urls";
import useOnlineStatus from "../hooks/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className="flex justify-between items-center shadow-lg p-4 bg-orange-100">
      <div className="w-16 rounded-full overflow-hidden">
        <img src={LOGO_URL} className="object-cover" />
      </div>
      <div className="flex items-center">
        <ul className="flex items-center">
          <li className="px-4">Online: {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4 transition-all ease-linear hover:text-orange-400">
            <Link to={getHomeUrl()}>Home</Link>
          </li>
          <li className="px-4 transition-all ease-linear hover:text-orange-400">
            <Link to={getAboutUrl()}>About Us</Link>
          </li>
          <li className="px-4 transition-all ease-linear hover:text-orange-400">
            <Link to={getContactUrl()}>Contact Us</Link>
          </li>
          <li className="px-4 transition-all ease-linear hover:text-orange-400">
            <Link to={getGroceryUrl()}>Grocery</Link>
          </li>
          <li className="px-4 transition-all ease-linear hover:text-orange-400">
            <Link to={getCartUrl()}>Cart ({cartItems.length})</Link>
          </li>
        </ul>
        <button
          className="flex items-center bg-orange-300 px-4 py-2 rounded-lg transition-all ease-linear hover:bg-orange-400 h-9"
          onClick={() =>
            btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
          }
        >
          {btnName}
        </button>
        <div className="px-4 transition-all ease-linear">{loggedInUser}</div>
      </div>
    </div>
  );
};

export default Header;
