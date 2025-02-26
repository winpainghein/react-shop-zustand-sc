import React, { useState } from "react";
import ProductCard from "./ProductCard";
import Container from "./Container";
import useProductStore from "../store/useProductStore";
import useCategoryStore from "../store/useCategoryStore";

const ProductSection = () => {
  const { products } = useProductStore();
  const {categories} = useCategoryStore();
  const currentCategory = categories.find(el => el.isActive === true).name;
  console.log(currentCategory);
  return (
    <section className="px-5 mb-5">
      <Container>
        <p className="text-sm text-gray-500 mb-2">Available Products</p>
        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
          {products.filter(el => currentCategory === "All" || el.category === currentCategory).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProductSection;
