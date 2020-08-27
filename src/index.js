import "./scss/style.scss";
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {generateProducts} from "./mock/products.js";

const MAX_PRODUCTS = 3;
const products = generateProducts(MAX_PRODUCTS);

ReactDOM.render(
    <App
      products={products}
    />,
    document.querySelector(`.page__main`)
);
