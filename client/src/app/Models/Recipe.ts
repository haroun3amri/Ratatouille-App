export interface IRecipe {
  id: number;
  name: string;
  nutrients_value: string;
  ingredients: string[];
  image: string;
  temps: string;
  personnes: number;
  preparation: string;

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
  preparation: string;

  deploy: boolean;

  constructor(id:number , name: string , nutrients_value:string , ingredients:string[], image: string, temps: string, personnes: number, preparation: string) {
    {
      this.id = id;
      this.name = name;
      this.nutrients_value = nutrients_value;
      this.ingredients = ingredients;
      this.image = image;
      this.temps= temps;
      this.personnes= personnes;
      this.preparation= preparation;
    }
  }
}
