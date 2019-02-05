import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Product} from "../../../../Models/product";
import {ProductComponent} from "../product/product.component";
import {ComparatorComponent} from "../product/comparator/comparator.component";
import {MatRadioChange, MatSnackBar} from "@angular/material";

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.scss']
})
export class ChoiceComponent implements OnInit {
  @ViewChild('comparator2') comparator2: ComparatorComponent;
  @Output() public choiceChanged: EventEmitter<any> = new EventEmitter();
  marketSlected: boolean = true;


  favoriteSeason: string;
  seasons: string[] = ['Spar', 'Casino', 'Lidle', 'Util', 'Carrefour', 'Monoprix'];
  @Input() Cart: Array<Product> = [];
  @Input() deliveryCost: number = 0;
  CartTotal: number = 0;
  CartTotalWithDelivery: number = 0;

  constructor(private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    console.log(this.Cart);
  }

  refreshSelected(event: MatRadioChange) {
    this.marketSlected = false;
    if (event.value === "Util") {
      this.openSnackBar('Choix du magasin', 'Util');
      this.CartTotal = this.comparator2.result.util;
    }

    if (event.value === "Spar") {
      this.openSnackBar('Choix du magasin', 'Spar');
      this.CartTotal = this.comparator2.result.spart;
    }
    if (event.value === "Monoprix") {
      this.openSnackBar('Choix du magasin', 'Monoprix');

      this.CartTotal = this.comparator2.result.monoprix;
    }
    if (event.value === "Lidle") {
      this.openSnackBar('Choix du magasin', 'Lidle');

      this.CartTotal = this.comparator2.result.lidle;
    }
    if (event.value === "Casino") {
      this.openSnackBar('Choix du magasin', 'Casino');

      this.CartTotal = this.comparator2.result.casino;
    }
    if (event.value === "Carrefour") {
      this.openSnackBar('Choix du magasin', 'Carrefour');

      this.CartTotal = this.comparator2.result.carrefour;
    }
  }

  goToPayment() {
    this.choiceChanged.emit();
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000,
    });
  }
}
