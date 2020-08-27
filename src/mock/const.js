export const ITEM_WEIGHT = [0.5, 1, 2, 5];

export const GiftType = {
  ONE: `мышь в подарок`,
  SECOND: `мыши в подарок`,
  MORE: `мышей в подарок`,
};

export const GiftTextIntervals = [
  {MIN: 1, MAX: 2},
  {MIN: 2, MAX: 5},
  {MIN: 5, MAX: Infinity},
];

export const GIFT_TEXT = [
  GiftType.ONE,
  GiftType.SECOND,
  GiftType.MORE,
];

export const ItemTasteType = {
  FOIEGRAS: `с фуа-гра`,
  FISH: `с рыбой`,
  CHICKEN: `с курой`,
  RABBIT: `с кроликом`,
};

export const ITEM_TASTES = [
  ItemTasteType.FOIEGRAS,
  ItemTasteType.FISH,
  ItemTasteType.CHICKEN,
  ItemTasteType.RABBIT,
];

export const ProductTasteType = {
  FOIEGRAS: `Паштет из печени утки.`,
  FISH: `Головы щучьи с чесноком да свежайшая сёмгушка.`,
  CHICKEN: `Крылышки и бедрышки.`,
  RABBIT: `Печень в сметане.`,
};

export const PRODUCT_TASTE = [
  ProductTasteType.FOIEGRAS,
  ProductTasteType.FISH,
  ProductTasteType.CHICKEN,
  ProductTasteType.RABBIT,
];

export const ProductType = {
  DEFAULT: ``,
  DISABLE: `Печалька, # закончился.`,
};

export const PRODUCT_TEXT = [
  ProductType.DEFAULT,
  ProductType.DISABLE,
];

export const ItemСlassNameType = {
  DISABLE: `item__description--disable`,
  SELECT: `item__description--select`,
  SELECTED: `item__description--selected`,
};

export const CLASS_NAME_ITEM = [
  ItemСlassNameType.DISABLE,
  ItemСlassNameType.SELECT,
  ItemСlassNameType.SELECTED,
];

export const ItemFirstTextType = {
  DEFAULT: `Сказочное заморское яство`,
  HOVER_ACTIVE: `Котэ не одобряет?`,
};

export const ITEM_FIRST_TEXT = [
  ItemFirstTextType.DEFAULT,
  ItemFirstTextType.HOVER_ACTIVE,
];
