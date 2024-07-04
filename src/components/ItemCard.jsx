import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const ItemCard = ({ img, name, price }) => {
  const [qty, setQty] = useState(1);

  const increaseQty = () => setQty(qty + 1);
  const decreaseQty = () => setQty(qty > 1 ? qty - 1 : 1);

  return (
    <div className="flex items-center justify-between mb-4 p-2 border rounded-md">
      <img src={img} alt={name} className="w-16 h-16 object-cover rounded-md" />
      <div className="flex flex-col justify-between ml-4 flex-grow">
        <span className="font-semibold text-gray-800">{name}</span>
        <span className="text-gray-600">${price}</span>
        <div className="flex items-center mt-2">
          <button onClick={decreaseQty} className="p-1 border rounded-md">
            <AiOutlineMinus />
          </button>
          <span className="mx-2">{qty}</span>
          <button onClick={increaseQty} className="p-1 border rounded-md">
            <AiOutlinePlus />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
