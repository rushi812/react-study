import clsx from "clsx";
import MenuItemsList from "./MenuItemsList";

const RestaurantCategory = ({ category, showMenuItem, handleItemClick }) => {
  const { title, itemCards } = category;

  return (
    <div
      className="p-4 bg-gray-100 rounded-lg shadow-md cursor-pointer"
      onClick={handleItemClick}
    >
      <div className="flex items-center justify-between">
        <span className="text-lg font-bold">
          {title} ({itemCards.length})
        </span>
        <span>{showMenuItem ? "⬆️" : "⬇️"}</span>
      </div>
      {showMenuItem && <MenuItemsList itemsList={itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
