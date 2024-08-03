import { useState } from "react";
import { useParams } from "react-router-dom";

import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";

import useRestaurantMenu from "../hooks/useReataurantMenu";

const RestaurantMenu = () => {
  const [showMenuItem, setMenuShowItem] = useState(0);
  const { resId } = useParams();
  const { resInfo, menuItems } = useRestaurantMenu(resId);

  const handleItemClick = (itemIndex) => {
    if (showMenuItem === itemIndex) return setMenuShowItem(null);
    else return setMenuShowItem(itemIndex);
  };

  const renderMain = () => {
    if (!resInfo) return null;
    const { name, cuisines, avgRating, costForTwoMessage, sla } = resInfo;

    return (
      <div className="flex justify-center">
        <div className="flex flex-col gap-5 w-2/3">
          <h1 className="text-2xl font-bold">{name}</h1>
          <div className="flex flex-col items-start p-4 border-[1px] border-gray-300 rounded-xl shadow-lg shadow-gray-300">
            <h2 className="font-bold">
              ⭐️ {avgRating} • {costForTwoMessage}
            </h2>
            <h2 className="text-base font-light text-gray-500">
              {cuisines.join(", ")}
            </h2>
            <h2>{sla.slaString}</h2>
          </div>

          <div className="flex flex-col gap-5">
            {menuItems?.map((menu, index) => {
              const { card } = menu;
              return (
                <RestaurantCategory
                  key={card.card.title}
                  category={card.card}
                  showMenuItem={showMenuItem === index}
                  handleItemClick={() => handleItemClick(index)}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  return !resInfo ? <Shimmer /> : renderMain();
};

export default RestaurantMenu;
