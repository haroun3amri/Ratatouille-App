import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatDatepicker} from "@angular/material";
import {MomentDateAdapter} from '@angular/material-moment-adapter';

import * as moment from 'moment';

const myMoment : moment.Moment = moment("someDate");


// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/
export const MY_FORMATS = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};


@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.scss'],
  providers: [
    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
    // application's root module. We provide it at the component level here, due to limitations of
    // our example generation script.
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
})
export class PaiementComponent implements OnInit {
  @Output() public paimentChanged: EventEmitter<any> = new EventEmitter();


  public form: FormGroup;

  date = new FormControl(moment());

  constructor(private fileLoader: FormBuilder) { }

  ngOnInit() {
    this.form = this.fileLoader.group({
      controle1: ['',  [Validators.required,Validators.maxLength(9), Validators.minLength(9) , Validators.pattern('[0-9]*')]],
      controle2: [ new FormControl(moment()),  [Validators.required]],
      controle3: ['',  [Validators.required,Validators.maxLength(3), Validators.minLength(3) , Validators.pattern('[0-9]*')]]

    });

  }

  public get controle1(): FormControl {
    return this.form.controls.controle1 as FormControl;
  }

  public get controle2(): FormControl {
    return this.form.controls.controle2 as FormControl;
  }

  public get controle3(): FormControl {
    return this.form.controls.controle3 as FormControl;
  }

  public get controle4(): FormControl {
    return this.form.controls.controle4 as FormControl;
  }

  public onPaiement() {
    this.paimentChanged.emit()
  }

  chosenYearHandler(normalizedYear: moment.Moment) {
    const ctrlValue = this.controle2.value;
    ctrlValue.year(normalizedYear.year());
    this.controle2.setValue(ctrlValue);
  }

  chosenMonthHandler(normlizedMonth: moment.Moment, datepicker: MatDatepicker<moment.Moment>) {
    const ctrlValue = this.controle2.value;
    ctrlValue.month(normlizedMonth.month());
    this.controle2.setValue(ctrlValue);
    datepicker.close();
  }

}
