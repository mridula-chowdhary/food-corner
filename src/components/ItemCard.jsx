import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementQty,
  decrementQty,
} from "../Slices/CartSlice";
import { toast } from "react-hot-toast";

const ItemCard = ({ id, name, qty, price, img}) => {

  const dispatch = useDispatch();

  return (
    <div className="flex gap-2 shadow-md rounded-lg p-2 mb-3">
      <MdDelete
        onClick={() => {
          dispatch(removeFromCart({ id}));
          toast(`${name} Removed!`, {
            icon: "👋",
          });
        }}
        className=" text-gray-600 cursor-pointer"
      />
      <img src={img} alt="" className="w-[50px] h-[50px] " />
      <div className="">
        <h2 className="font-bold text-gray-800">{name}</h2>
        <div className="flex ">
          <div className="text-green-500 font-bold mr-5">₹{price}</div>
          <div className="flex items-center gap-2">
            <AiOutlineMinus
              onClick={() => qty > 1 ? dispatch(decrementQty({ id })) : dispatch(removeFromCart({ id }))}
              className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"
            />
            <span>{qty}</span>
            <AiOutlinePlus
              onClick={() => dispatch(incrementQty({ id }))}
              className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;