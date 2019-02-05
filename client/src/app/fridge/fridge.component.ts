import {Component, EventEmitter, OnInit, Output, VERSION, ViewChild} from '@angular/core';
import {productsMock} from "../fake-api/products-fake";
import {Product} from "../Models/product";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {MatDialog, MatSnackBar} from "@angular/material";
import {DialogComponent} from "../shared/menu/tabsContent/dialog/dialog.component";
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
  constructor() { }

  ngOnInit() {

  }

  filterfridge1() {
    this.fridge.products = this.products;
    this.fridge.products = this.fridge.products.filter(e => e.fridge === 'fridge1');
  }

  filterfridge2() {
    this.fridge.products = this.products;
    this.fridge.products = this.fridge.products.filter(e => e.fridge === 'fridge2');
  }

  filterfridge3() {
    this.fridge.products = this.products;
    this.fridge.products = this.fridge.products.filter(e => e.fridge === 'fridge3');
  }



}
