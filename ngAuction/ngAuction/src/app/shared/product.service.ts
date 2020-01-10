import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public description: string,
    public categories: string[]) {
  }
}

export class ProductService {
  getProducts(): Product[] {
    if (products.length < 10) {
      products = generateNProducts(10);
    }
    return products;
  }
  getProductById(productId: number): Product {
    if (products.length < 10) {
      products = generateNProducts(10);
    }
    return products.find(p => p.id === productId);
  }
  constructor() {
  }
}

let products = [
  {
    'id': 0,
    'title': 'First Product',
    'price': 24.99,
    'rating': 4.3,
    'description': `This is a short description.
   Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    'categories': ['electronics', 'hardware']
  },
  {
    'id': 1,
    'title': 'Second Product',
    'price': 64.99,
    'rating': 3.5,
    'description': `This is a short description.
   Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    'categories': ['books']
  }];


function generateNProducts(count: number): Array<Product> {
  let products: Array<Product> = new Array<Product>()
  let defaultCategories: Array<string> = ["books", "collectibles", "electronics", "hardware", "apparel", "movies", "tv", "sports", "cars"]
  for (let i: number = 0; i < count; i++) {
    let id: number = i;
    let title: string = `Product-${id}`
    let price: number = Math.floor(Math.random() * 100) + .99;
    let rating: number = (Math.random() * 50)
    rating = (rating - rating % 5) / 10
    let description: string = `This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`

    let categories: string[] = [];
    for (let cat of defaultCategories) {
      if (Math.random() < .30) {
        categories.push(cat);
      }
    }

    products.push(new Product(id, title,
      price, rating, description, categories));
  }
  return products;
}