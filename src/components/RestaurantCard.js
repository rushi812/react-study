import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { cloudinaryImageId, name, avgRating, sla, cuisines, areaName } =
    resData.info;

  return (
    <div className="flex flex-col gap-3 transition-all ease-linear hover:scale-95 w-[250px]">
      <div className="h-44 rounded-lg overflow-hidden">
        <img
          alt="res-logo"
          src={`${CDN_URL}/${cloudinaryImageId}`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="ml-3 flex flex-col gap-[2px]">
        <h3 className="font-bold text-lg">{name}</h3>
        <h4 className="text-base">
          <span>⭐️ {avgRating.toFixed(1)} • </span>
          <span>{sla.slaString}</span>
        </h4>
        <p className="text-base font-light text-gray-500">
          {cuisines.join(", ")}
        </p>
        <p className="text-base font-light text-gray-500">{areaName}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
