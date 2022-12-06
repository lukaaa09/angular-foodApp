import { Component } from '@angular/core';
import { IShooping } from '../../core/model/shooping-model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent {
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

}
