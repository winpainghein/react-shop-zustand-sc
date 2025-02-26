import React from "react";
import { useParams } from "react-router-dom";
import Container from "../components/Container";
import Rating from "../components/Rating";
import Breadcrumb from "../components/Breadcrumb";
import useProductStore from "../store/useProductStore";
import useCartStore from "../store/useCartStore";
import toast from "react-hot-toast";

const ProductDetail = () => {
  const { products } = useProductStore();
  const { carts, addCart } = useCartStore();

  const { productSlug } = useParams();
  // console.log(productId);
  const currentProduct = products.find(
    (product) => product.slug === productSlug
  );

  // console.log(currentProduct);
  const handleAddCart = () => {
    const newCart = {
      id: Date.now(),
      productId: currentProduct.id,
      quantity: 1,
    };
    // console.log(newCart);
    addCart(newCart);
    toast.success('Added to My Cart');
  };

  const handleAddedBtn = () => {
    toast.error('Already existed in My Cart');
  };

  return (
    <Container className="px-5">
      <Breadcrumb currentPageTitle="Product Detail" />
      <div className=" border border-black rounded-md p-10 my-10">
        <div className="grid grid-rows-1 md:grid-cols-2 gap-10 md:gap-5 lg:gap-0">
          <div className="col-span-1 flex justify-start md:justify-center items-center">
            <img
              src={currentProduct.image}
              alt=""
              className="h-48 w-auto md:h-auto md:w-3/4 lg:w-2/4"
            />
          </div>
          <div className="col-span-1 flex flex-col items-start gap-5">
            <h3 className=" text-3xl font-bold ">{currentProduct.title}</h3>
            <p className=" bg-gray-200 text-gray-700 inline-block px-5 py-1">
              {currentProduct.category}
            </p>
            <p className="">{currentProduct.description}</p>
            <Rating rate={currentProduct.rating.rate} />
            <div className=" flex justify-between w-full items-center">
              <p>Price : ({currentProduct.price}) </p>
              {carts.find((cart) => cart.productId === currentProduct.id) ? (
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
        </div>
      </div>
    </Container>
  );
};

export default ProductDetail;
