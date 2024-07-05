import React, { useState, useEffect } from 'react';
import JsonData from '../data/JsonData';
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../Slices/CategorySlice";

function CategoryMenu() {
  const [categories, setCategories] = useState([]);

  const listUniqueCategories = () => {
    const uniqueList = [...new Set(JsonData.map((item) => item.category))];
    setCategories(uniqueList);
  };

  useEffect(() => {
    listUniqueCategories();
  }, []);
  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.category.category);
  return (
    <div className="m-6">
      <h2 className="text-xl font-semibold flex justify-center">Find the best food</h2>
      <div className="my-5 flex gap-3 justify-center ">
        <button
          onClick={() => dispatch(setCategory("All"))}
          className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white ${
            selectedCategory === "All" && "bg-green-500 text-white"
          }`}
        >
          All
        </button>
        {categories.map((category, index) => {
          return (
            <button
              onClick={() => dispatch(setCategory(category))}
              key={index}
              className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white ${
                selectedCategory === category && "bg-green-500 text-white"
              } `}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default CategoryMenu;
