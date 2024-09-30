import { CartState } from "./cart.state";
import { UserState } from "./user.state";

export interface AppState {
    user: UserState;
    cart: CartState;
}
