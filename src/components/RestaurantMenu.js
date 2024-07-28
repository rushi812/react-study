import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState();
  const [menuItems, setMenuItems] = useState();

  const { resId } = useParams();

  const fetchMenu = async () => {
    const jsonData = await fetch(`${MENU_API_URL}${resId}`);
    const data = await jsonData.json();

    const info = data?.data?.cards[2]?.card?.card?.info;
    const menuInfo =
      data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards;

    setResInfo(info);
    setMenuItems(menuInfo);
  };

  useEffect(() => {
    fetchMenu();
  }, [resId]);

  console.log("data", { resInfo, menuItems });

  const renderMain = () => {
    if (!resInfo) return null;
    const { name, cuisines, avgRating, costForTwoMessage, sla } = resInfo;

    return (
      <div className="menu">
        <h1>{name}</h1>
        <h2>{cuisines.join(", ")}</h2>
        <h2>
          ⭐️ {avgRating} • {costForTwoMessage}
        </h2>
        <h2>{sla.slaString}</h2>
        <h2>Menu</h2>
        <ul>
          {menuItems?.map((menu) => {
            const { card } = menu;
            return (
              <li key={card.info.id}>
                {card.info.name} - Rs. {card.info.price / 100}
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  return !resInfo ? <Shimmer /> : renderMain();
};

export default RestaurantMenu;
