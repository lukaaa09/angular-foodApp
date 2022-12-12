import { Injectable, EventEmitter, Output } from '@angular/core';
import { IShooping } from '../model/shooping-model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  @Output() ingredientsChanged = new EventEmitter<IShooping[]>()
  startedEditing = new Subject<number>()
  ingredient: IShooping[] = [
    {
      name: 'Cake',
      amount: 12
    },
    {
      name: 'Burger',
      amount: 30
    }
  ]

  constructor() {
  }

  public shoppingList() {
    return this.ingredient.slice()
  }

  public getItemIndex(index: number) {
    return this.ingredient[index]
  }

  public onIngredientAdded(ingredient: IShooping) {
    this.ingredient.push(ingredient)
    this.ingredientsChanged.emit(this.ingredient)
  }

  public deleteIngredients(index: number) {
    this.ingredient.splice(index, 1)
    this.ingredientsChanged.emit(this.ingredient)
  }


}
