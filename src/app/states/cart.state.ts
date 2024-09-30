import { Product } from "../interfaces/product";

export interface CartState {
    cartId: Number | null;
    products: Product[];
}
