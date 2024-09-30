import { Product } from "./product";

/**
 * Represents the structure of a shopping cart entity within the application.
 * @param id The unique identifier of the cart.
 * @param userId The unique identifier of the user who owns the cart.
 * @param date The date when the cart was created or last modified.
 * @param products An array of Product items that are in the cart.
 */
export interface Cart {
  id: number,
  userId: number,
  date: string,
  products: Product[]
}
