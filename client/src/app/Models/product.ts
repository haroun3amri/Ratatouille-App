import {PriceList} from "./PriceList";

export interface IProduct {
  id: number;
  title: string;
  fridge: string;
  category: string;
  tag: string;
  isFavorite: boolean;
  isInCart: boolean;
  imageLink: string;
  quantity: number;
  priceList: [PriceList];
}

export class Product {
  id: number;
  title: string;
  fridge: string;
  category: string;
  tag: string;
  isFavorite: boolean;
  isInCart: boolean;
  imageLink: string;
  quantity: number;
  priceList: [PriceList];



  constructor(product) {
    {
      this.id = product.id;
      this.title = product.title;
      this.fridge = product.fridge;
      this.category = product.category;
      this.isFavorite = product.isFavorite;
      this.imageLink = product.imageLink;
      this.quantity = product.quantity;
      this.priceList = product.priceList;
      this.tag = product.tag;
      this.isInCart = product.isInCart;
    }
  }
}
