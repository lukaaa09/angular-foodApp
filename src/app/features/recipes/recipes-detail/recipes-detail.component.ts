import { Component, OnInit } from '@angular/core';
import { IRecipe } from '../../../core/model/recipe-model';
import { ActivatedRoute } from '@angular/router';
import { RecipesService } from '../../../core/services/recipes.service';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.scss']
})
export class RecipesDetailComponent implements OnInit{
  recipe!: IRecipe
  id!: number
  constructor(private router: ActivatedRoute, private RService: RecipesService) {
  }
  ngOnInit() {
    this.router.params.subscribe((params) => {
      this.id = +params['id']
      this.recipe = this.RService.getRecipe(this.id)
    })
  }

}
