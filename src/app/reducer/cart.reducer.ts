import { createReducer, on } from '@ngrx/store';
import { setCartId, addProduct, removeProduct } from '../actions/cart.action';
import { CartState } from '../states/cart.state';

export const initialState: CartState = {
  cartId: null,
  products: [],
};

export const cartReducer = createReducer(
  initialState,
  on(setCartId, (state, { cartId }) => ({ ...state, cartId: Number(cartId) })),
  on(addProduct, (state, { product }) => ({
    ...state,
    products: [...state.products, product]
  })),
  on(removeProduct, (state, { productId }) => ({
    ...state,
    products: state.products.filter(product => product.id !== Number(productId))
  }))
);