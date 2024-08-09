import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import MenuItemsList from "./MenuItemsList";
import { clearItems } from "../utils/cartSlice";
import { getHomeUrl } from "../utils/urls";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearItems());
  };

  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-5 w-2/3">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Cart</h1>
          <button
            className="flex items-center bg-orange-300 px-4 py-2 rounded-lg transition-all ease-linear hover:bg-orange-400 h-9"
            onClick={handleClearCart}
          >
            Clear
          </button>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg shadow-md">
          {!cartItems?.length ? (
            <div>
              <p className="text-xl font-bold">Your cart is empty</p>
              <p className="text-gray-400">
                You can go to home page to view more restaurants
              </p>
              <p className="text-blue-600 hover:underline">
                <Link to={getHomeUrl()}>Go to Home</Link>
              </p>
            </div>
          ) : (
            <MenuItemsList itemsList={cartItems} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
