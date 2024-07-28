import { useEffect, useState } from "react";

import { API_URL } from "../utils/constants";

import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { getRestaurantUrl } from "../utils/urls";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [filteredResList, setFilteredResList] = useState([]);
  const [searchText, setSearchText] = useState("");

  const handleFilterRatings = () => {
    const filteredList = resList.filter((res) => res.info.avgRating > 4);
    setFilteredResList(filteredList);
  };

  const fetchData = async () => {
    const data = await fetch(API_URL);
    const res = await data.json();
    const restautantsList = res?.data?.cards.find(
      (r) => r?.card?.card?.id === "restaurant_grid_listing"
    );
    setResList(
      restautantsList?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredResList(
      restautantsList?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = () => {
    const filteredList = resList.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredResList(filteredList);
  };

  return (
    <div className="body">
      <div className="filter-container">
        <div className="search">
          <input
            type="text"
            placeholder="Search..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <button className="global-btn" onClick={handleFilterRatings}>
          ⭐️ Ratings 4+
        </button>
      </div>
      <div className="res-container">
        {!filteredResList?.length
          ? [...Array(10)].map((e, i) => <Shimmer key={`shimmer${i}`} />)
          : filteredResList.map((restaurant) => (
              <Link
                to={getRestaurantUrl(restaurant.info.id)}
                key={restaurant.info.id}
              >
                <RestaurantCard resData={restaurant} />
              </Link>
            ))}
      </div>
    </div>
  );
};

export default Body;
