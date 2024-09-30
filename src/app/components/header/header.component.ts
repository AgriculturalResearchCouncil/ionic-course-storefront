import { Component } from '@angular/core';
import { AppState } from '../../states/app.state';
import { Store, select } from '@ngrx/store';
import { selectCartId, selectProducts } from '../../selectors/cart.selector';
import { Product } from '../../interfaces/product';
import { firstValueFrom } from 'rxjs';
import { selectUserId } from '../../selectors/user.selector';
import { CartService } from '../../services/cart.service';
import { setCartId } from '../../actions/cart.action';
import { Cart } from '../../interfaces/cart';
import { HelperService } from '../../services/helper.service';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  cartCount: number = 0;

  constructor(
    private store: Store<AppState>,
    private cartService: CartService,
    private helperService: HelperService) {
    this.store.pipe(select(selectProducts)).subscribe((products: Product[]) => {
      this.cartCount = products.length;
    })
  }

  /**
   * Asynchronously retrieves the user ID, cart ID, and products from the store.
   * If the cart ID does not exist, creates a new cart with the current date and products.
   * If the cart ID exists, updates the existing cart with the current date, products, and user ID.
   * Finally, toggles the cart dialog to display.
   */
  async showCart() {
    const userId = await firstValueFrom(this.store.pipe(select(selectUserId)));
    if (!userId) return;
    const cartId = await firstValueFrom(this.store.pipe(select(selectCartId)));
    const products = await firstValueFrom(this.store.pipe(select(selectProducts)));

    if (!cartId) {
      this.cartService.createCart(userId, new Date().toString(), products).subscribe((newCart: Cart) => {
        this.store.dispatch(setCartId({ cartId: newCart.id }));
      });
    } else {
      this.cartService.updateCart(cartId, new Date().toString(), products, userId).subscribe((updatedCart) => {
      });
    }

    this.helperService.toggleCartDialog(true);
  }
}
