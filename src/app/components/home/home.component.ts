import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Product } from '../../interfaces/product';
import { CartService } from '../../services/cart.service';
import { Cart } from '../../interfaces/cart';
import { AppState } from '../../states/app.state';
import { Store, select } from '@ngrx/store';
import { selectUserId } from '../../selectors/user.selector';
import { selectProducts } from '../../selectors/cart.selector';
import { HelperService } from '../../services/helper.service';

@Component({
  selector: 'app-home',
  standalone: false,
  providers: [HttpClient],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  featuredProduct: Product | null = null;
  products: Product[] | [] = [];
  categorizedProductMap: Map<string, Product[]> = new Map<string, Product[]>();
  cartProducts?: Product[] = [];

  constructor(
    private productService: ProductsService,
    private cartService: CartService,
    private store: Store<AppState>,
    private helperService: HelperService){}

  ngOnInit() {
    this.productService.getProducts().subscribe((products: any[]) => {
      this.products = products;
      this.featuredProduct = this.getHighestRatedProduct(products);
      this.categorizedProductMap = this.categorizeProducts(products);
    });

    this.cartService.getUserCarts(1).subscribe((cartObjs: Cart[]) => {
      console.log(cartObjs)
    });

    this.store.pipe(select(selectUserId)).subscribe((e: any) => {
      console.log(e)
    });

    this.store.pipe(select(selectProducts)).subscribe((products: Product[]) => {
      this.cartProducts = products;
    });

    this.helperService.showCartDialog$.subscribe((toggleStatus: boolean) => {
      const cartDetailsDialog = document.querySelector('#cartDetailsDialog') as HTMLDialogElement;
      cartDetailsDialog?.showModal();
    })
  }

  /**
   * Determines the highest rated product from a list of products.
   *
   * This method iterates through the provided array of products and uses the `reduce` method
   * to find the product with the highest rating. If two products have the same highest rating,
   * it then compares the count of ratings to determine which product is more popular and
   * therefore should be considered as the highest rated.
   *
   * @param products An array of Product objects.
   * @returns The product with the highest rating or null if the list is empty.
   */
  getHighestRatedProduct(products: Product[]): Product | null {
    if (!products || products.length === 0) {
      return null;
    }

    return products.reduce((highest, product) => {
      if (!highest) return product;
      if (product.rating.rate > highest.rating.rate) {
        return product;
      } else if (product.rating.rate === highest.rating.rate) {
        if (product.rating.count > highest.rating.count) {
          return product;
        }
      }
      return highest;
    }, null as Product | null);
  }

  /**
   * Separates the products into categories.
   *
   * This method iterates through the provided array of products and organizes them into a map
   * where each key is a category and the value is an array of products belonging to that category.
   *
   * @param products An array of Product objects.
   * @returns A map with categories as keys and arrays of products as values.
   */
  categorizeProducts(products: Product[]): Map<string, Product[]> {
    const categorizedProducts = new Map<string, Product[]>();

    products.forEach(product => {
      if (categorizedProducts.has(product.category)) {
        categorizedProducts.get(product.category)?.push(product);
      } else {
        categorizedProducts.set(product.category, [product]);
      }
    });

    return categorizedProducts;
  }

  addToCart(product: Product[]) {
    let today = new Date();
    this.cartService.createCart(1, today.toString(), product).subscribe((response) => {
      console.log(response);
    })
  }

/**
 * Truncates a given text to a specified length and appends an ellipsis ('...') at the end.
 *
 * @param text The text to be truncated.
 * @param maxLength The maximum length of the text after truncation.
 * @returns The truncated text with an ellipsis.
 */
  truncateText(text: string, maxLength: number): string {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  }

  closeDialog() {
    const cartDetailsDialog = document.querySelector('#cartDetailsDialog') as HTMLDialogElement;
    cartDetailsDialog?.close();
  }
}
