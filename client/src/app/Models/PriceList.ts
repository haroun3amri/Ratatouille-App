export interface IPriceList {
  carrefour: number;
  lidle: number;
  casino: number;
  util: number;
  spart: number;
  monoprix: number;
}

export class PriceList {
  carrefour: number;
  lidle: number;
  casino: number;
  util: number;
  spart: number;
  monoprix: number;



  constructor(carrefour:number , lidle: number , casino: number , util:number , spart:number , monoprix:number) {
    {
      this.carrefour = carrefour;
      this.lidle = lidle;
      this.casino = casino;
      this.util = util;
      this.spart = spart;
      this.monoprix = monoprix;
    }
  }
}
