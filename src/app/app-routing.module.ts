import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './features/header/header.component';
import * as path from 'path';
import { RecipesComponent } from './features/recipes/recipes.component';
import { ShoppingListComponent } from './features/shopping-list/shopping-list.component';
import { RecipeStartComponent } from './features/recipes/recipe-start/recipe-start.component';
import { RecipesDetailComponent } from './features/recipes/recipes-detail/recipes-detail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'recipes',
    pathMatch: 'full'
  },
  {
    path: 'recipes',
    component: RecipesComponent,
    children: [
      {
        path: '',
        component: RecipeStartComponent
      },
      {
        path: ':id',
        component: RecipesDetailComponent
      }    ]
  },
  {
    path: 'shopping-list',
    component: ShoppingListComponent
  },
  // {
  //   path: 'details',
  //   component: RecipesDetailComponent
  // }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
