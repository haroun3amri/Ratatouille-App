import {Component, EventEmitter, Inject, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from "@angular/material";
import {Product} from "../../../../Models/product";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class DialogComponent implements OnInit {

  @Output() public productCartChanged: EventEmitter<any> = new EventEmitter();


  constructor(public dialogRef: MatDialogRef<DialogComponent> , @Inject(MAT_DIALOG_DATA) public data, private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  removeFromCart(product: Product) {
    this.openSnackBar('Suppression du panier', product.title);
    this.data.cart.splice(this.data.cart.indexOf(product),1);
    product.isInCart = false;
    this.productCartChanged.emit();
  }


  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000,
    });
  }

}
