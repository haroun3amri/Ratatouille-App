import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ProductComponent} from "../menu/tabsContent/product/product.component";
import {Product} from "../../Models/product";
import {ChoiceComponent} from "../menu/tabsContent/choice/choice.component";
import {MatStepper, MatTabGroup} from "@angular/material";
import {productsMock} from "../../fake-api/products-fake";

@Component({
  selector: 'app-command-tabs',
  templateUrl: './command-tabs.component.html',
  styleUrls: ['./command-tabs.component.scss']
})
export class CommandTabsComponent implements OnInit , AfterViewInit{
  @ViewChild('products') products: ProductComponent;
  @ViewChild('choices') choices : ChoiceComponent;
  @ViewChild('stepper') stepper: MatStepper;



  Cart: Product[] = [];
  productmock = productsMock;
  deliveryCost: number = 0;

  constructor() { }

  ngOnInit() {
  }

  public productCartChangedHandler() {
    console.log(this.products.Cart);
    this.choices.Cart = this.products.Cart;
  }

  ngAfterViewInit() {
    this.choices.Cart = this.products.Cart;
  }

  public categoryChangedHandler(caterory: string) {
    this.stepper.selectedIndex = 1;
    console.log(caterory);
    this.products.products = this.productmock;
    this.products.products = this.productmock.filter(e => e.category === caterory);
  }

  public cartFilledHandler(cart: Product[]) {
    this.stepper.selectedIndex = 2;
    this.Cart = cart;
  }

  public deleiveryChoiceCheckedHandler(deliveryCost: number)
  {
    this.stepper.selectedIndex = 3;
    this.deliveryCost = deliveryCost;
    this.choices.comparator2.Cart = this.Cart;
    this.choices.comparator2.compare();

  }

  choiceChangedHandler() {
    this.stepper.selectedIndex = 4;
  }
  paimentChangedHandler() {
    this.stepper.selectedIndex = 5;
  }


}
