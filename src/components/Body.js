import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [filteredResList, setFilteredResList] = useState([]);
  const [searchText, setSearchText] = useState("");

  const handleFilterRatings = () => {
    const filteredList = resList.filter((res) => res.info.avgRating > 4);
    setFilteredResList(filteredList);
  };

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.022505&lng=72.5713621&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const res = await data.json();
    setResList(
      res?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredResList(
      res?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
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
              <RestaurantCard key={restaurant.info.id} resData={restaurant} />
            ))}
      </div>
    </div>
  );
};

export default Body;
