import { createSelector } from 'reselect';

// 2 types: input selector and output selector

//1st selector: input selector - is a function that gets the whole state and just return a slice of it. Ie the Cart.

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
);
