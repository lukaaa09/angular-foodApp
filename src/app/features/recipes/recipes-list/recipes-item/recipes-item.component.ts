import { Component, Input, OnInit } from '@angular/core';
import { IRecipe } from '../../../../core/model/recipe-model';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.scss']
})
export class RecipesItemComponent implements  OnInit{
  @Input() recipe!: IRecipe
  @Input() index!: number
  ngOnInit() {
  }
}
