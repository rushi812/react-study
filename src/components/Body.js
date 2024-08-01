import { useEffect, useState } from "react";

import { API_URL } from "../utils/constants";

import RestaurantCard, { withDiscountLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { getRestaurantUrl } from "../utils/urls";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [filteredResList, setFilteredResList] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withDiscountLabel(RestaurantCard);

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
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Search..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="border-[1px] border-black p-2 h-9 rounded-lg"
          />
          <button
            onClick={handleSearch}
            className="flex items-center bg-gray-200 p-2 rounded-lg transition-all ease-linear hover:bg-gray-300 h-9"
          >
            Search
          </button>
        </div>
        <button
          className="flex items-center  p-2 rounded-lg transition-all ease-linea border-[1px] border-gray-400 border-solid hover:bg-gray-100 h-9"
          onClick={handleFilterRatings}
        >
          ⭐️ Ratings 4+
        </button>
      </div>
      <div className="flex gap-10 flex-wrap justify-start">
        {!filteredResList?.length
          ? [...Array(10)].map((e, i) => <Shimmer key={`shimmer${i}`} />)
          : filteredResList.map((restaurant) => (
              <Link
                to={getRestaurantUrl(restaurant.info.id)}
                key={restaurant.info.id}
              >
                {restaurant?.info?.aggregatedDiscountInfoV3 ? (
                  <RestaurantCardPromoted resData={restaurant} />
                ) : (
                  <RestaurantCard resData={restaurant} />
                )}
              </Link>
            ))}
      </div>
    </div>
  );
};

export default Body;
