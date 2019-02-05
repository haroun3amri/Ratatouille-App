import { Component } from '@angular/core';
import {promotionsMock} from "./fake-api/promotions-mock";
import {DialogComponent} from "./shared/menu/tabsContent/dialog/dialog.component";
import {MatDialog, MatSnackBar} from "@angular/material";
import {FormBuilder} from "@angular/forms";
import {PromoDialogComponent} from "./promo-dialog/promo-dialog.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';
  promotions = promotionsMock;
  FilterAccordingPriceIsAscendant: boolean = true;
  FilterAccordingDateIsAscendant: boolean = true;
  FilterAccordingFavoriteIsAscendant: boolean = true;


  constructor(public dialog: MatDialog) { }

  public filterAccordingtoPrice() {
    if(this.FilterAccordingPriceIsAscendant) {
      this.promotions.sort((a, b) => a.percent - b.percent)
    }
    else {
      this.promotions.sort((a, b) => b.percent - a.percent)
    }
    this.FilterAccordingPriceIsAscendant = !this.FilterAccordingPriceIsAscendant;
  }

  public filterAccordingtoDate() {
    this.promotions.sort((a,b) => {
      let dateA =  new Date(Number(a.date.split('/')[0]) ,Number(a.date.split('/')[1]) ,Number(a.date.split('/')[2]));
      let dateB =  new Date(Number(b.date.split('/')[0]) ,Number(b.date.split('/')[1]) ,Number(b.date.split('/')[2]));
      if(this.FilterAccordingDateIsAscendant) {
        return dateA.getDate() - dateB.getDate();
      }else {
        return dateB.getDate() - dateA.getDate();
      }
    })
    this.FilterAccordingDateIsAscendant =!this.FilterAccordingDateIsAscendant;
  }

  public filterAccordingtoFavorite() {
    this.promotions.sort((a,b) =>  {
      if(this.FilterAccordingFavoriteIsAscendant) {
        return (a.isNew === b.isNew) ? 0 : a.isNew ? -1 : 1;
      }else {
        return (a.isNew === b.isNew) ? 0 : b.isNew ? -1 : 1;

      }
    });
    this.FilterAccordingFavoriteIsAscendant =! this.FilterAccordingFavoriteIsAscendant;
}

  public openDialog(promotion: any) {
    let dialogRef = this.dialog.open(PromoDialogComponent, {
      width: '890px',
      data: {link: promotion.link}
    });
  }

}
