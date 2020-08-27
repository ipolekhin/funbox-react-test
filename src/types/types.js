import PropTypes from "prop-types";

const functionType = PropTypes.func.isRequired;

const isBoolType = PropTypes.bool;

const isStringType = PropTypes.string;

const productType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  itemFirstText: PropTypes.string.isRequired,
  itemTitle: PropTypes.string.isRequired,
  itemTastes: PropTypes.number.isRequired,
  portionCount: PropTypes.number.isRequired,
  portion: PropTypes.string.isRequired,
  giftCount: PropTypes.number.isRequired,
  giftText: PropTypes.string.isRequired,
  weight: PropTypes.number.isRequired,
  productText: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  isSelected: PropTypes.bool.isRequired,
});

const productsType = PropTypes.arrayOf(productType).isRequired;

export {
  functionType,
  isBoolType,
  isStringType,
  productType,
  productsType,
};
