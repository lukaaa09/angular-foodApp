import { Component, OnInit } from '@angular/core';
import { IShooping } from '../../core/model/shooping-model';
import { ShoppingService } from '../../core/services/shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit{
  ingredient!: IShooping[]
  constructor(private slService: ShoppingService) {
  }
  ngOnInit(): void {
    this.ingredient = this.slService.shoppingList()

    this.slService.ingredientsChanged.subscribe((ingredient) => {
      this.ingredient = ingredient
    })
  }


}
