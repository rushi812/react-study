import { useState, useEffect } from "react";
import { MENU_API_URL } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState();
  const [menuItems, setMenuItems] = useState();

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

  return { resInfo, menuItems };
};

export default useRestaurantMenu;
