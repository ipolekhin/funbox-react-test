import {
  getGiftText,
  getRandomBooleanValue,
  getRandomIntegerNumber,
  getRandomItem
} from "../utils/common.js";
import {ITEM_TASTES, ITEM_WEIGHT} from "./const.js";

const ONE = 1;
const MAX_PORTION_COUNT = 100;
const MAX_GIFT_COUNT = 10;

const generateProduct = () => {
  const id = Math.random();
  const itemTaste = getRandomIntegerNumber(0, ITEM_TASTES.length);
  const portionCount = getRandomIntegerNumber(ONE, MAX_PORTION_COUNT);
  const weight = getRandomItem(ITEM_WEIGHT);
  const giftCount = getRandomIntegerNumber(0, MAX_GIFT_COUNT);
  const giftText = getGiftText(giftCount);
  const isDisabled = getRandomBooleanValue();
  const isSelected = isDisabled ? false : getRandomBooleanValue();

  return ({
    id,
    itemTaste,
    portionCount,
    weight,
    giftCount,
    giftText,
    isDisabled,
    isSelected,
    itemFirstText: `Сказочное заморское яство`,
    itemTitle: `Нямшука`,
    portion: `порций`,
  });
};

const generateProducts = (count) => {
  return new Array(count).fill(``).map(generateProduct);
};

export {generateProducts};
