export interface IRecipe {
  id: number;
  name: string;
  nutrients_value: string;
  ingredients: string[];
  image: string;
  temps: string;
  personnes: number;
  etape1: string;
  etape2: string;
  etape3: string;
  etape4: string;
  etape5: string;
  etape6: string;
  etape7: string;
  etape8: string;
  etape9: string;
  etape10: string;


  deploy: boolean;
}

export class Recipe {
  id: number;
  name: string;
  nutrients_value: string;
  ingredients: string[];
  image: string;
  temps: string;
  personnes: number;
  etape1: string;
  etape2: string;
  etape3: string;
  etape4: string;
  etape5: string;
  etape6: string;
  etape7: string;
  etape8: string;
  etape9: string;
  etape10: string;

  deploy: boolean;

  constructor(id:number,
              name: string,
              nutrients_value:string ,
              ingredients:string[],
              image: string,
              temps: string,
              personnes: number,
              etape1: string,
              etape2: string,
              etape3: string,
              etape4: string,
              etape5: string,
              etape6: string,
              etape7: string,
              etape8: string,
              etape9: string,
              etape10: string

  ) {
    {
      this.id = id;
      this.name = name;
      this.nutrients_value = nutrients_value;
      this.ingredients = ingredients;
      this.image = image;
      this.temps= temps;
      this.personnes= personnes;
      this.etape1= etape1;
      this.etape2= etape2;
      this.etape3= etape3;
      this.etape4= etape4;
      this.etape5= etape5;
      this.etape6= etape6;
      this.etape7= etape7;
      this.etape8= etape8;
      this.etape9= etape9;
      this.etape10= etape10;
    }
  }
}
