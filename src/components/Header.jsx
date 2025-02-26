import React from "react";
import Container from "./Container";
import { Link } from "react-router-dom";
import useCartStore from "../store/useCartStore";

const Header = () => {
  const {carts} = useCartStore();
  return (
    <header className="p-5">
      <Container>
        <div className="flex justify-between items-center">
          <Link to={"/"} className="text-3xl font-bold">
            WPH Shop
          </Link>
          <Link
            to={"/my-cart"}
            className="border border-black rounded-md p-3 relative active:scale-90 duration-200"
          >
            <div className="flex justify-center items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>

              <p className="text-sm">My Cart</p>
            </div>

            { carts.length !== 0 && (<span className="bg-red-500 rounded-full text-white text-xs size-6 flex justify-center items-center absolute top-0 right-0 translate-x-1/2 -translate-y-1/2">
              {carts.length}
            </span>)}
          </Link>
        </div>
      </Container>
    </header>
  );
};

export default Header;
