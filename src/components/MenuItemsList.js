import clsx from "clsx";
import { IMAGE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const MenuItemsList = ({ itemsList }) => {
  const dispatch = useDispatch();
  const handleAddItem = () => {
    dispatch(addItem("pizza"));
  };

  return (
    <div className="mt-4 flex flex-col gap-4">
      {itemsList.map((item, index) => {
        const {
          card: { info },
        } = item;
        return (
          <>
            <div className="flex justify-between">
              <div key={info.id} className="flex flex-col gap-1 w-9/12">
                <p className="text-lg font-medium">{info.name}</p>
                <p className="text-sm">
                  <span
                    className={clsx(
                      info.finalPrice && "text-gray-500 line-through"
                    )}
                  >
                    ₹{(info.price || info.defaultPrice) / 100}
                  </span>
                  {!!info?.finalPrice && (
                    <span className="ml-1">₹{info.finalPrice / 100}</span>
                  )}
                </p>
                {!!Object.keys(info?.ratings?.aggregatedRating)?.length && (
                  <p className="text-sm">
                    <span className="text-green-900">
                      ★{info.ratings.aggregatedRating.rating}
                    </span>
                    <span className="ml-1">
                      ({info.ratings.aggregatedRating.ratingCountV2})
                    </span>
                  </p>
                )}
                <p className="text-sm font-light text-gray-500">
                  {info.description}
                </p>
              </div>
              <div className="relative w-3/12 h-36 ml-14">
                <div className="w-full h-full rounded-lg overflow-hidden">
                  <img
                    src={`${IMAGE_URL}/${info.imageId}`}
                    className="w-full h-full object-cover object-center"
                  />
                  <button
                    className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-white hover:bg-gray-100 w-[120px] p-2 rounded-md text-green-500 font-bold border-[1px] border-gray-200"
                    onClick={handleAddItem}
                  >
                    ADD
                  </button>
                </div>
              </div>
            </div>
            {index !== itemsList?.length - 1 && <hr className="my-5" />}
          </>
        );
      })}
    </div>
  );
};

export default MenuItemsList;
