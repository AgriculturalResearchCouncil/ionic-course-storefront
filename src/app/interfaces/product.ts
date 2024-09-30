import { Rating } from "./rating";

/**
 * Represents the structure of a product entity within the application.
 * @param id The unique identifier of the product.
 * @param title The title or name of the product.
 * @param price The price of the product as a string.
 * @param category The category to which the product belongs.
 * @param description A brief description of the product.
 * @param image A URL to an image of the product.
 */
export interface Product {
  id: number,
  title: string,
  price: string,
  category: string,
  description: string,
  image: string,
  rating: Rating
}
