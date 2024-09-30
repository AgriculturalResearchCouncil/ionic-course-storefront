import { Component, Input } from '@angular/core';
import { Product } from '../../interfaces/product';
import { AppState } from '../../states/app.state';
import { addProduct } from '../../actions/cart.action';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-hero-banner',
  standalone: false,
  templateUrl: './hero-banner.component.html',
  styleUrl: './hero-banner.component.scss'
})
export class HeroBannerComponent {

  @Input() data?: Product;

  constructor(private store: Store<AppState>) {}

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
