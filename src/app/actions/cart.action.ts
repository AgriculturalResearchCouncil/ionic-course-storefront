import { createAction, props } from '@ngrx/store';
import { Product } from '../interfaces/product';


export const setCartId = createAction(
  '[Cart] Set Cart ID',
  props<{ cartId: Number }>()
);

export const addProduct = createAction(
  '[Cart] Add Product',
  props<{ product: Product }>()
);

export const removeProduct = createAction(
  '[Cart] Remove Product',
  props<{ productId: string }>()
);