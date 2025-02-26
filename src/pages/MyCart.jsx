import React from "react";
import CartSection from "../components/CartSection";
import Container from "../components/Container";
import Breadcrumb from "../components/Breadcrumb";

const MyCart = () => {
  return (
    <>
      <Container className="flex-grow px-5 md:px-0">
        <Breadcrumb currentPageTitle="My Cart" />
        <CartSection />
      </Container>
    </>
  );
};

export default MyCart;
