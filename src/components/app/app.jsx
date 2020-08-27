import React from "react";
import Product from "../product/product.jsx";
import {productsType} from "../../types/types.js";
import withItem from "../../hocs/with-item/with-item.js";

const WithItemWrapped = withItem(Product);

const App = (props) => {
  const {products} = props;

  return (
    <React.Fragment>
      <h1 className="visually-hidden">Funbox</h1>

      <section className="products container">
        <h2 className="products__header">Ты сегодня покормил кота?</h2>

        <ul className="products__list">
          {products.map((product) => (
            <WithItemWrapped
              key={product.id}
              product={product}
            />
          ))}
        </ul>
      </section>
    </React.Fragment>
  );
};

App.propTypes = {
  products: productsType,
};

export default App;
