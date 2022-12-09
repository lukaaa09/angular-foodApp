import { Component, ElementRef, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { IShooping } from '../../../core/model/shooping-model';
import { ShoppingService } from '../../../core/services/shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements  OnInit{
  @ViewChild('nameInput') nameInputRef!: ElementRef
  @ViewChild('amountInput') amountInputRef!: ElementRef
  @Output() addIngredient = new EventEmitter<IShooping>()

  constructor(private slService: ShoppingService) {
  }

  ngOnInit() {
  }
  public addItem() {
    const newIngredient = this.amountInputRef.nativeElement.value && this.nameInputRef.nativeElement.value;
    this.slService.onIngredientAdded(newIngredient)
  }
}
