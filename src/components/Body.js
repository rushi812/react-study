import RestaurantCard from "./RestaurantCard";
import RES_LIST from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [resList, setResList] = useState(RES_LIST);

  const handleFilterRatings = () => {
    const filteredList = resList.filter((res) => res.info.avgRating > 4);
    setResList(filteredList);
  };

  return (
    <div className="body">
      {/* <div className="search">Search...</div> */}
      <div className="filter-container">
        <button className="filter-btn" onClick={handleFilterRatings}>
          Ratings 4+
        </button>
      </div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
