import { Injectable } from '@angular/core';
import { IRecipe } from '../model/recipe-model';
import { IShooping } from '../model/shooping-model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  recipes: IRecipe[] = [
    {
      name: "A Georgian delicious food",
      description: 'First fo try by yourself',
      imagePath: 'https://dcassetcdn.com/design_img/10150/1680/1680_298517_10150_image.jpg',
      ingredients: [
        {
          name: 'xachapuri',
          amount: 10
        }
      ]

    },
    {
      name: "Sushi Asian delicious food",
      description: 'Asian junk food',
      imagePath: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      ingredients: [
        {
          name: 'spagetti',
          amount: 9
        }
      ]
    }
  ]

  public getRecipes() {
   return  this.recipes.slice()
  }
  public getRecipe(index: number) {
    return this.recipes.slice()[index]
  }
}
