import { IMAGE_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { cloudinaryImageId, name, avgRating, sla, cuisines, areaName } =
    resData.info;

  return (
    <div className="flex flex-col gap-3 transition-all ease-linear hover:scale-[.97] w-[250px]">
      <div className="h-44 rounded-lg overflow-hidden">
        <img
          alt="res-logo"
          src={`${IMAGE_URL}/${cloudinaryImageId}`}
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

export const withDiscountLabel = (ResCardComponent) => {
  return (props) => {
    const { aggregatedDiscountInfoV3 } = props.resData.info;
    const { header, subHeader } = aggregatedDiscountInfoV3;
    return (
      <div className="relative transition-all ease-linear hover:scale-[.97]">
        <label className="absolute left-4 top-32 bg-orange-100 text-black text-xl px-2 z-[1]">
          {header} {subHeader}
        </label>
        <ResCardComponent {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
