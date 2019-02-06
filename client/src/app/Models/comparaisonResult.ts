import {Product} from "./product";

export interface ICompraisonResult {
  shop_name: string;
  shop_logo: string;
  total_price: number;
}

export class CompraisonResult {
  shop_name: string;
  shop_logo: string
  total_price: number;



  constructor(shop_name:string , total_price: number , shop_logo: string) {
    {
      this.shop_name = shop_name;
      this.shop_logo = shop_logo;
      this.total_price = total_price;
    }
  }
}
