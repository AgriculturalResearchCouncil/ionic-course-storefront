import { Component, Input } from '@angular/core';
import { Product } from '../../interfaces/product';
import { CartService } from '../../services/cart.service';
import { AppState } from '../../states/app.state';
import { Store } from '@ngrx/store';
import { addProduct } from '../../actions/cart.action';

@Component({
  selector: 'app-product-card',
  standalone: false,
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input() data?: Product;

  constructor(private cartService: CartService, private store: Store<AppState>) {}

  /**
   * Adds a product to the cart by dispatching an action.
   * @param product The product to be added to the cart.
   */
  addToCart(product?: Product) {
    if (!product) return;
    this.store.dispatch(addProduct({
      product
    }));
  }
}
