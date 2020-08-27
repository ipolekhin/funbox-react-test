import React from "react";
import {isBoolType, productType} from "../../types/types.js";
import {
  ItemСlassNameType,
  ItemFirstTextType,
  ITEM_TASTES,
  PRODUCT_TASTE,
  ProductType
} from "../../mock/const.js";

const withItem = (Component) => {
  class WithItem extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        isDisabled: props.product.isDisabled,
        isSelect: false,
        isSelected: props.product.isSelected,
        classNameItem: ``,
        itemFirstText: ItemFirstTextType.DEFAULT,
        productText: ``,
      };
      this.handleItemClick = this.handleItemClick.bind(this);
      this.handleItemMouseOut = this.handleItemMouseOut.bind(this);
      this.handleItemMouseOver = this.handleItemMouseOver.bind(this);
      this.setProps = this.setProps.bind(this);
    }

    handleItemClick(event) {
      event.preventDefault();
      const {isDisabled, isSelected} = this.state;

      if (!isDisabled) {
        this.setState((prevState) => ({
          isSelect: !isSelected ? true : false,
          isSelected: !prevState.isSelected,
        }));
      }
    }

    handleItemMouseOut(event) {
      event.preventDefault();
      const {isSelected} = this.state;
      if (isSelected) {
        this.setState(() => ({
          itemFirstText: ItemFirstTextType.DEFAULT,
          isSelect: false,
        }));
      }
    }

    handleItemMouseOver(event) {
      event.preventDefault();
      const {isSelected} = this.state;
      if (isSelected) {
        this.setState(() => ({
          itemFirstText: ItemFirstTextType.HOVER_ACTIVE,
        }));
      }
    }

    setProps() {
      const {isDisabled, isSelected, isSelect} = this.state;
      const {product} = this.props;

      this.setState(() => {
        if (isDisabled) {
          return ({
            productText: ProductType.DISABLE.replace(`#`, ITEM_TASTES[product.itemTaste]),
            classNameItem: ItemСlassNameType.DISABLE,
          });
        } else if (isSelect && isSelected) {
          return ({
            productText: PRODUCT_TASTE[product.itemTaste],
            classNameItem: ItemСlassNameType.SELECT,
          });
        } else if (!isSelect && isSelected) {
          return ({
            productText: PRODUCT_TASTE[product.itemTaste],
            classNameItem: ItemСlassNameType.SELECTED,
          });
        } else {
          return ({
            itemFirstText: ItemFirstTextType.DEFAULT,
            productText: ProductType.DEFAULT,
            classNameItem: ``,
          });
        }
      });
    }

    render() {
      this.setProps();

      return (
        <Component
          {...this.props}
          {...this.state}
          onItemClick={this.handleItemClick}
          onItemMouseOut={this.handleItemMouseOut}
          onItemMouseOver={this.handleItemMouseOver}
        />
      );
    }
  }

  WithItem.propTypes = {
    isDisabled: isBoolType,
    isSelected: isBoolType,
    product: productType,
  };

  return WithItem;
};

export default withItem;
