import { createSelector } from '@ngrx/store';
import { AppState } from '../states/app.state';
import { CartState } from '../states/cart.state';

export const selectCartState = (state: AppState) => state.cart;

export const selectCartId = createSelector(
  selectCartState,
  (state: CartState) => state.cartId
);

export const selectProducts = createSelector(
  selectCartState,
  (state: CartState | undefined) => state?.products ?? []
);
