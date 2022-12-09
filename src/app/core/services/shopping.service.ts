import { Injectable, EventEmitter, Output } from '@angular/core';
import { IShooping } from '../model/shooping-model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
   ingredientsChanged = new EventEmitter<IShooping[]>()
  ingredient: IShooping[] = [
    {
      name: 'Cake',
      amount: 12
    },
    {
      name: 'Chakapuli',
      amount: 30
    }
  ]
  constructor() { }

  public shoppingList() {
    return this.ingredient.slice()
  }

  public onIngredientAdded(ingredient: IShooping) {
    this.ingredient.push(ingredient)
    this.ingredientsChanged.emit(this.ingredient)
  }
}
