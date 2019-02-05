import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {PriceList} from "../../../../../Models/PriceList";
import {Product} from "../../../../../Models/product";
import {CompraisonResult} from "../../../../../Models/comparaisonResult";

@Component({
  selector: 'app-comparator',
  templateUrl: './comparator.component.html',
  styleUrls: ['./comparator.component.scss']
})
export class ComparatorComponent implements OnInit{

  @Input()Cart: Array<Product> = [];
  comparaisonResult: Array<CompraisonResult> = [];
  result: PriceList = new PriceList(0,0,0,0,0,0);

  constructor() { }

  ngOnInit() {
    }

    compare(){
      this.comparaisonResult = [];
      this.result =  new PriceList(0,0,0,0,0,0);
      for (let product of this.Cart) {
        this.result.carrefour = this.result.carrefour + (product.priceList[0].carrefour * product.quantity);
        this.result.casino = this.result.casino + (product.priceList[0].casino * product.quantity);
        this.result.lidle = this.result.lidle + (product.priceList[0].lidle * product.quantity);
        this.result.monoprix = this.result.monoprix + (product.priceList[0].monoprix * product.quantity);
        this.result.spart = this.result.spart + (product.priceList[0].spart * product.quantity);
        this.result.util = this.result.util + (product.priceList[0].util * product.quantity);
      }
      this.comparaisonResult.push(new CompraisonResult('Carrefour' ,  this.result.carrefour , 'https://cdn.freebiesupply.com/logos/large/2x/carrefour-3-logo-png-transparent.png '));
      this.comparaisonResult.push(new CompraisonResult('Casino', this.result.casino , 'http://www.vector-logo.net/logo_preview/ai/c/CASINO_SUPERMARKET_LOGO.png'));
      this.comparaisonResult.push(new CompraisonResult('Lidle' , this.result.lidle, 'http://caritasgliwice.pl/wp-content/uploads/2017/05/lidl-logo-AFAFEAFE19-seeklogo.com_.png'));
      this.comparaisonResult.push(new CompraisonResult('Monoprix' , this.result.monoprix, 'https://www.determine.com/wp-content/uploads/2017/12/monoprix-logo.png'));
      this.comparaisonResult.push(new CompraisonResult('Spar', this.result.spart, 'https://www.cent-mille-liens.com/upload/franchises/kzjkij-spar.jpg'));
      this.comparaisonResult.push(new CompraisonResult('Util' , this.result.util, 'https://www.commerce-associe.fr/sites/default/files/styles/logo_enseigne/public/2018-08/Utile-logo-270x160.png?itok=aEH5a5OU'));
      this.comparaisonResult.sort((a, b) => a.total_price - b.total_price);
    }

  getValue(product: Product , shopName : string) {

      if(shopName === 'Carrefour') {
          return product.priceList[0].carrefour
      }
      if(shopName === 'Casino') {
          return product.priceList[0].casino
      }
      if(shopName === 'Lidle') {
           return product.priceList[0].lidle
      }
      if(shopName === 'Monoprix') {
        return product.priceList[0].monoprix

      }
      if(shopName === 'Spar') {
        return product.priceList[0].spart

      }
      if(shopName === 'Util') {
        return product.priceList[0].util

      }
  }


}
