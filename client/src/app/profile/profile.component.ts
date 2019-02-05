import { Component, OnInit } from '@angular/core';
import {usersMock} from "../fake-api/users-mock";
import {User} from "../Models/user";

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  users = usersMock;
  actuelUser : User;


  constructor() { }

  ngOnInit() {
    this.actuelUser = this.users[2];
  }

  // data goes here
  public single = [
    {
      "name": "Viande",
      "value": 1940000
    },
    {
      "name": "Fruits",
      "value": 3000000
    },
    {
      "name": "Légumes",
      "value": 6200000
    },
    {
      "name": "Pates",
      "value": 8700000
    },
    {
      "name": "Liquides",
      "value": 5700000
    },
    {
      "name": "Divers",
      "value": 3200000
    }
  ];

  public multi = [
    {
      "name": "Lidle",
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
      "name": "Carrefour",
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
      "name": "Util",
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
      "name": "Spar",
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
      "name": "Monoprix",
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
      "name": "Casino",
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

}
