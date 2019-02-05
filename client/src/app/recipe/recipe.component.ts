import {Component, OnInit, VERSION} from '@angular/core';import {Recipe} from "../Models/Recipe";
import {recipessMock} from "../fake-api/recette.mock";
import {DialogComponent} from "../shared/menu/tabsContent/dialog/dialog.component";
import {MatDialog} from "@angular/material";
import {RecipeDialogComponent} from "./recipe-dialog/recipe-dialog.component";

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  recipes: Recipe[] = recipessMock as Recipe[];
  rows: number[] ;
  ElementNumber: number;
  innerWidth: number;
  ngVersion: string = VERSION.full;
  matVersion: string = '5.1.0';
  breakpoint: number;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.ElementNumber = 3;
    this.rows = Array.from(
      Array(Math.ceil(this.recipes.length / 2)).keys()
    );
    this.breakpoint = (window.innerWidth <= 1000) ? 1 : 3;
    this.innerWidth = window.innerWidth;
  }

  public openDialog(recipe: Recipe) {
    let dialogRef = this.dialog.open(RecipeDialogComponent, {
      width: '890px',
      data: {recipe: recipe}
    });

  }

}
