import React from "react";
import useCategoryStore from "../store/useCategoryStore";

const CategoryButton = ({ category: { id, name, isActive } }) => {
  const { activeCategory } = useCategoryStore();
  const handleActiveCategory = () => {
    activeCategory(id);
  };
  return (
    <button
      onClick={handleActiveCategory}
      className={`${
        isActive && "bg-black text-white"
      }  border border-black rounded-md px-4 py-2 me-2 text-nowrap`}
    >
      {name}
    </button>
  );
};

export default CategoryButton;
