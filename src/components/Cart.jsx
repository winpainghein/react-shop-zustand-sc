import React from "react";
import useProductStore from "../store/useProductStore";
import useCartStore from "../store/useCartStore";
import Swal from "sweetalert2";

const Cart = ({ cart: { id, productId, quantity } }) => {
  const { products } = useProductStore();
  const { increaseQuantity, decreaseQuantity, removeCart } = useCartStore();
  const product = products.find((el) => el.id === productId);
  const cost = product.price * quantity;
  const handleRemoveCart = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "This will be removed from My Cart",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeCart(id);
        Swal.fire({
          title: "Removed successfully!",
          text: "Your Cart has been removed.",
          icon: "success",
        });
      }
    });
  };
  const handleIncreaseQuantity = () => {
    increaseQuantity(id);
  };
  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      decreaseQuantity(id);
    } else {
      handleRemoveCart(id);
    }
  };
  
  return (
    <div className="border border-black px-5 py-4 grid grid-cols-6 rounded-md md:text-base text-sm relative">
      <div className="col-span-1">
        <img src={product.image} alt="" className="h-16 ml-0 md:ml-5" />
      </div>
      <div className="col-span-2 ">
        <p className=" mb-2 line-clamp-2 md:line-clamp-2 lg:line-clamp-none">{product.title}</p>
        <p className=" text-gray-500">Price (${product.price})</p>
      </div>
      <div className="col-span-2 mx-auto">
        <p className=" mb-2">Quantity</p>
        <div className="flex gap-2 md:gap-2 lg:gap-3">
          <button
            onClick={handleDecreaseQuantity}
            className=" bg-black text-white p-1.5 rounded-md active:scale-90 duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
            </svg>
          </button>
          {quantity}
          <button
            onClick={handleIncreaseQuantity}
            className=" bg-black text-white p-1.5 rounded-md active:scale-90 duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="md:col-span-1 col-span-1 ">
        <p className=" text-end md:text-2xl text-lg font-bold mt-3">${(cost).toFixed(2)}</p>
      </div>
      <button
        onClick={handleRemoveCart}
        className="border border-red-500 rounded-full text-white text-xs size-6 flex justify-center items-center absolute top-1 right-1 translate-x-1/2 -translate-y-1/2 bg-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-4 stroke-red-500 "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
          />
        </svg>
      </button>
    </div>
  );
};

export default Cart;
