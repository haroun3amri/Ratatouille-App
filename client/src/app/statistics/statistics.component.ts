import { Component, OnInit } from '@angular/core';
import {Recipe} from "../Models/Recipe";
import {recipessMock} from "../fake-api/recette.mock";
import {RecipeDialogComponent} from "../recipe/recipe-dialog/recipe-dialog.component";
import {MatDialog} from "@angular/material";

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent  {


  recipes: Recipe[] = recipessMock as Recipe[];
   public dialog: MatDialog;

  // data goes here
  public single = [
    {
      "name": "lipides",
      "value": 1940000
    },
    {
      "name": "glucides",
      "value": 3000000
    },
    {
      "name": "proteines",
      "value": 6200000
    },
    {
      "name": "aide gras",
      "value": 8700000
    },
    {
      "name": "sel",
      "value": 5700000
    },
    {
      "name": "energie",
      "value": 3200000
    }
  ];

  public multi = [
    {
      "name": "lipides",
      "series": [
        {
          "name": "2010",
          "value": 7300000
        },
        {
          "name": "2011",
          "value": 8940000
        }
      ]
    },

    {
      "name": "acide gras",
      "series": [
        {
          "name": "2010",
          "value": 7870000
        },
        {
          "name": "2011",
          "value": 8270000
        }
      ]
    },

    {
      "name": "glucides",
      "series": [
        {
          "name": "2010",
          "value": 35000000
        },
        {
          "name": "2011",
          "value": 4800000
        }
      ]
    },
    {
      "name": "sel",
      "series": [
        {
          "name": "2010",
          "value": 1000002
        },
        {
          "name": "2011",
          "value": 6800000
        }
      ]
    },
    {
      "name": "energie",
      "series": [
        {
          "name": "2010",
          "value": 1000002
        },
        {
          "name": "2011",
          "value": 7800000
        }
      ]
    },
    {
      "name": "proteines",
      "series": [
        {
          "name": "2010",
          "value": 2000002
        },
        {
          "name": "2011",
          "value": 25800000
        }
      ]
    }
  ];


  view: any[] = [700, 400];

  // options for the chart
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Number';
  showYAxisLabel = true;
  yAxisLabel = 'Value';
  timeline = true;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA', '#3361FF', '#FF8A33' , '#F5110A' ]
  };

  // line, area
  autoScale = true;

  //pie
  showLabels = true;
  explodeSlices = false;
  doughnut = false;

  public openDialog(recipe: Recipe) {
    let dialogRef = this.dialog.open(RecipeDialogComponent, {
      width: '890px',
      data: {recipe: recipe}
    });

  }
}
