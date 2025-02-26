import React from "react";
import Container from "./Container";

const Footer = () => {
  const date = new Date();
  return (
    
    <footer className="mt-auto py-2 bg-black text-white text-center">
      <Container>
      {date.getFullYear()} Copyright &copy;{" "}
      <a href="https://github.com/winpainghein00">WPH</a>
      </Container>
    </footer>
  );
};

export default Footer;
