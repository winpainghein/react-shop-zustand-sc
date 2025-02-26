import React from "react";
import Cart from "./Cart";
import Container from "./Container";
import { Link } from "react-router-dom";
import emptyCartSvg from "../asset/emptyCart.svg";
import useCartStore from "../store/useCartStore";
import useProductStore from "../store/useProductStore";
import Swal from "sweetalert2";

const CartSection = () => {
  const { carts } = useCartStore();
  const { products } = useProductStore();

  const total = carts.reduce((pv, { productId, quantity }) => {
    const product = products.find((el) => el.id === productId);
    const cost = product.price * quantity;
    return pv + cost;
  }, 0);
  const tax = total * 0.05;
  const netTotal = total + tax;
  const handleOrderNow = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Your Order is Confirmed",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="flex flex-col gap-5 h-[90%]">
      {carts.length === 0 ? (
        <img
          src={emptyCartSvg}
          alt="empty-cart"
          className="block h-44 mx-auto mt-20"
        />
      ) : (
        carts.map((cart) => <Cart key={cart.id} cart={cart} />)
      )}
      <div className="w-full mt-auto bg-white">
        <Container>
          <div className=" border-t border-black flex justify-end gap-10 py-3 mb-5">
            <div className=" text-right flex flex-col">
              <p className=" text-gray-500">Total</p>
              <p className=" font-bold mt-auto">{total.toFixed(2)}</p>
            </div>
            <div className=" text-right flex flex-col ">
              <p className=" text-gray-500">Tax(10%)</p>
              <p className=" font-bold mt-auto">{tax.toFixed(2)}</p>
            </div>
            <div className=" text-right">
              <p className=" text-gray-500">Net Total</p>
              <p className=" text-2xl font-bold">{netTotal.toFixed(2)}</p>
            </div>
          </div>
          <div className=" text-end mb-7">
            <button
              // disabled={carts.length === 0}
              onClick={handleOrderNow}
              className={` ${
                carts.length === 0 ? "hidden" : "active:scale-90 "
              } duration-200 border border-black px-4 py-2 rounded-md`}
            >
              Order Now
            </button>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default CartSection;
