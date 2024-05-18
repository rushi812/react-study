import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [resList, setResList] = useState([]);

  const handleFilterRatings = () => {
    const filteredList = resList.filter((res) => res.info.avgRating > 4);
    setResList(filteredList);
  };

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.022505&lng=72.5713621&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const res = await data.json();
    setResList(
      res?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="body">
      {/* <div className="search">Search...</div> */}
      <div className="filter-container">
        <button className="filter-btn" onClick={handleFilterRatings}>
          ⭐️ Ratings 4+
        </button>
      </div>
      <div className="res-container">
        {!resList.length
          ? Array(10).fill(<Shimmer />)
          : resList.map((restaurant) => (
              <RestaurantCard key={restaurant.info.id} resData={restaurant} />
            ))}
      </div>
    </div>
  );
};

export default Body;
