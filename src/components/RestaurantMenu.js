import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../hooks/useReataurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const { resInfo, menuItems } = useRestaurantMenu(resId);

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
