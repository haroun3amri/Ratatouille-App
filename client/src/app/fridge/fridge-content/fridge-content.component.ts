import {Component, EventEmitter, Input, OnInit, Output, VERSION, ViewChild} from '@angular/core';
import {productsMock} from "../../fake-api/products-fake";
import {Product} from "../../Models/product";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {DialogComponent} from "../../shared/menu/tabsContent/dialog/dialog.component";
import {MatDialog, MatSnackBar} from "@angular/material";
import {ComparatorComponent} from "../../shared/menu/tabsContent/product/comparator/comparator.component";

@Component({
  selector: 'app-fridge-content',
  templateUrl: './fridge-content.component.html',
  styleUrls: ['./fridge-content.component.scss']
})
export class FridgeContentComponent implements OnInit {



  @Input() products: any[];
  @Input() Cart: Array<Product> = [];
  rows: number[] ;
  ElementNumber: number;
  innerWidth: number;
  ngVersion: string = VERSION.full;
  matVersion: string = '5.1.0';
  breakpoint: number;
  @Output() public productCartChanged: EventEmitter<Product[]> = new EventEmitter();
  @Output() public cartFilled: EventEmitter<Product[]> = new EventEmitter();
  public form: FormGroup;
  showComparateur: boolean = false;
  showFiller = false;
  constructor(private fileLoader: FormBuilder ,public dialog: MatDialog, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.form = this.fileLoader.group({
      controle1: '',
    });

    this.ElementNumber = 5;
    this.rows = Array.from(
      Array(Math.ceil(this.products.length / 2)).keys()
    );
    this.breakpoint = (window.innerWidth <= 1000) ? 1 : 5;
    this.innerWidth = window.innerWidth;
  }

  filterAccordingtoEconomique() {
    this.products = productsMock;
    this.products = this.products.filter(e => e.tag === 'eco');
  }
  filterAccordingtoBiologique() {
    this.products = productsMock;
    this.products = this.products.filter(e => e.tag === 'bio');
  }
  filterAccordingtoFavorite() {
    this.products = productsMock;
    this.products = this.products.filter(e => e.isFavorite === true);
  }
  initialize() {
    this.products = productsMock;
  }

  addToCart(product: Product) {
    product.isInCart =! product.isInCart;

    this.showComparateur = true;
    if(product.isInCart) {
      this.openSnackBar('Ajout au panier',product.title+' x'+product.quantity);
      this.Cart.push(product);
    }
    else {
      this.openSnackBar('Suppression du panier',product.title);
      this.Cart.splice(this.Cart.indexOf(product),1);
    }
    this.productCartChanged.emit(this.Cart);
    if(this.Cart.length === 0) {
      this.ElementNumber = 5;
    }else {
      this.ElementNumber = 4 ;
    }
  }

  public get controle1(): FormControl {
    return this.form.controls.controle1 as FormControl;
  }

  public openDialog() {
    let dialogRef = this.dialog.open(DialogComponent, {
      width: '890px',
      data: {cart: this.Cart}
    });
    dialogRef.componentInstance.productCartChanged.subscribe(() => {
      this.Cart = dialogRef.componentInstance.data.cart;
      this.productCartChanged.emit(this.Cart);
    });
  }

  public searchProduct() {
    let value = this.controle1.value;
    console.log(value);
    this.products =  this.products.filter(e => e.title === value);
    console.log(this.products);
  }

  public goToDeliverryMode() {
    this.cartFilled.emit(this.Cart);
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000,
    });
  }
  addToFavorite(product: Product) {
    if(product.isFavorite) {
      this.openSnackBar('Suppression au favoris', product.title);
    }else{
      this.openSnackBar('Ajout au favoris',product.title);
    }
    product.isFavorite =! product.isFavorite

  }

}
