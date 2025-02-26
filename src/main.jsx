import { createElement } from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import router from "./routes/router";

const root = document.querySelector("#root");
createRoot(root).render(<RouterProvider router={router} />);








// const categories = [
//   "electronics",
//   "jewelry",
//   "men's clothing",
//   "women's clothing",
// ];

// const root = document.querySelector("#root");

// view react-node
// const app = createElement("p", null, "Product Categories");

// render
// createRoot(root).render(App());

// const root = document.querySelector("#root");

// const title = document.createElement("p");
// title.innerText = "Product Categories";
// title.classList.add("text-2xl","text-gray-500");
// root.append(title);
