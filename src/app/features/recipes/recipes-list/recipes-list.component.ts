import { Component, OnInit } from '@angular/core';
import { IRecipe } from 'src/app/core/model/recipe-model';
import { RecipesService } from '../../../core/services/recipes.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {
   recipes!: IRecipe[]

  constructor(private recipeService: RecipesService) {
  }
  ngOnInit(): void {
  this.recipes = this.recipeService.getRecipes()
  }
}
