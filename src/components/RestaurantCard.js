import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { cloudinaryImageId, name, avgRating, sla, cuisines, areaName } =
    resData.info;

  return (
    <div className="res-card">
      <div className="res-image">
        <img alt="res-logo" src={`${CDN_URL}/${cloudinaryImageId}`} />
      </div>
      <div className="res-info">
        <h3 className="res-title">{name}</h3>
        <h4 className="res-rating">
          <span>⭐️ {avgRating.toFixed(1)} • </span>
          <span>{sla.slaString}</span>
        </h4>
        <p className="res-cuisine">{cuisines.join(", ")}</p>
        <p className="res-address">{areaName}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
