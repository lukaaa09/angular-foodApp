import { Component, OnInit } from '@angular/core';
import { IRecipe } from 'src/app/core/model/recipe-model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {
   recipes: IRecipe[] = [
     {
       name: "A Georgian delicious food",
       description: 'First fo try by yourself',
       imagePath: 'https://dcassetcdn.com/design_img/10150/1680/1680_298517_10150_image.jpg'
      },
     {
       name: "Sushi",
       description: 'Asian junk food',
       imagePath: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'
     }
   ]

  ngOnInit(): void {

  }
}
