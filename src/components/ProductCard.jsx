import React from "react";
import Rating from "./Rating";
import { Link, useNavigate } from "react-router-dom";
import useCartStore from "../store/useCartStore";
import toast from "react-hot-toast";

const ProductCard = ({
  product: {
    id,
    title,
    slug,
    price,
    image,
    rating: { rate },
  },
}) => {
  const { carts, addCart } = useCartStore();

  const handleAddCart = (event) => {
    event.stopPropagation();
    const newCart = {
      id: Date.now(),
      productId: id,
      quantity: 1,
    };
    addCart(newCart);
    toast.success('Added to My Cart')
  };
  const navigate = useNavigate();
  const handleProductDetail = () => {
    navigate(`/product-detail/${slug}`);
  };
  const handleAddedBtn = (event) => {
    event.stopPropagation();
    toast.error('Already existed in My Cart');
  }

  return (
    <div
      onClick={handleProductDetail}
      // to={`/product-detail/${id}`}
      className="border border-black p-5 flex flex-col items-start gap-5 rounded-md"
    >
      <img className="h-40" src={image} alt="" />
      <p className="font-bold line-clamp-2">{title}</p>
      <Rating rate={rate} />
      <div className="flex justify-between w-full items-end">
        <p>${price}</p>
        {carts.find((cart) => cart.productId === id) ? (
          <button
          onClick={handleAddedBtn}
            className=" text-sm border border-black bg-black text-white px-3 py-1.5
           rounded-md"
          >
            Added
          </button>
        ) : (
          <button
            onClick={handleAddCart}
            className=" text-sm border border-black px-3 py-1.5 rounded-md"
          >
            Add Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
