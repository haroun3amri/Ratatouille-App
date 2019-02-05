import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Product} from "../../../../Models/product";
import {MatSnackBar} from "@angular/material";

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.scss']
})
export class DriverComponent implements OnInit {
  @Output() public deleiveryChoiceChecked: EventEmitter<number> = new EventEmitter();

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  public selectDriveDelivery() {
    this.openSnackBar('Mode de livraison', 'Drive');
    this.deleiveryChoiceChecked.emit(4);
  }

  public selectHomeDelivery() {
    this.openSnackBar('Mode de livraison', 'Commande à domicile');
    this.deleiveryChoiceChecked.emit(12);
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000,
    });
  }
  showInfoDrive(){    this.openSnackBar('Vous pouvez passer pour recuperer votre commande chez le drive du magazin que vous choisissez', '');
  }
  showInfoHome(){    this.openSnackBar('Votre commande vous sera livrée dans les delais les plus optimales', '');
  }

}
