import {Component, OnInit, ViewChild} from '@angular/core';
import {productsMock} from "../fake-api/products-fake";
import {Product} from "../Models/product";
import {FridgeContentComponent} from "./fridge-content/fridge-content.component";

@Component({
  selector: 'app-fridge',
  templateUrl: './fridge.component.html',
  styleUrls: ['./fridge.component.scss']
})
export class FridgeComponent implements OnInit {

  @ViewChild('fridge') fridge: FridgeContentComponent;

  products = productsMock;
  Cart: Array<Product> = [];
  selectedFridge: string = 'fridge1';

  constructor() {
  }

  ngOnInit() {

  }

  filterfridge1() {
    this.fridge.products = this.products as Product[];
    this.fridge.products = this.fridge.products.filter(e => e.fridge === 'fridge1');
    this.selectedFridge = 'fridge1';
  }

  filterfridge2() {
    this.fridge.products = this.products as Product[];
    this.fridge.products = this.fridge.products.filter(e => e.fridge === 'fridge2');
    this.selectedFridge = 'fridge2';
  }

  filterfridge3() {
    this.fridge.products = this.products as Product[];
    this.fridge.products = this.fridge.products.filter(e => e.fridge === 'fridge3');
    this.selectedFridge = 'fridge3';
  }


}
