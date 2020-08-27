import React from "react";
import {
  functionType,
  productType,
  isStringType,
} from "../../types/types.js";
import {ITEM_TASTES} from "../../mock/const.js";

const Product = (props) => {
  const {
    onItemClick,
    onItemMouseOut,
    onItemMouseOver,
    product,
    productText,
    classNameItem,
    itemFirstText,
  } = props;

  return (
    <React.Fragment>
      <li className="products__item item">
        <div
          className={`item__description ${classNameItem}`}
          onClick={onItemClick}
          onMouseOut={onItemMouseOut}
          onMouseOver={onItemMouseOver}
        >
          <div className="item__border-modify"></div>
          <p className="item__header-text">{itemFirstText}</p>
          <h3 className="item__title">
            {product.itemTitle}
            <span>{ITEM_TASTES[product.itemTaste]}</span>
          </h3>
          <p>
            <span>{product.portionCount}</span> {product.portion}
          </p>
          <p>
            {product.giftCount ? `${product.giftCount} ${product.giftText}` : ``}
          </p>
          <p className="item__weight">
            {product.weight} <span>кг</span>
          </p>
        </div>
        <p className="products__text">
          {productText && (
            productText
          ) || (
            <React.Fragment>
              Чего сидишь? Порадуй котэ, <span onClick={onItemClick}>купи.</span>
            </React.Fragment>
          )}
        </p>
      </li>
    </React.Fragment>
  );
};

Product.propTypes = {
  onItemClick: functionType,
  onItemMouseOut: functionType,
  onItemMouseOver: functionType,
  product: productType,
  productText: isStringType,
  classNameItem: isStringType,
  itemFirstText: isStringType,
};

export default Product;
