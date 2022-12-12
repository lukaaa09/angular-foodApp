import { Component, OnInit, Output, EventEmitter, ViewChild, OnDestroy } from '@angular/core';
import { IShooping } from '../../../core/model/shooping-model';
import { ShoppingService } from '../../../core/services/shopping.service';
import { FormGroup, NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements  OnInit, OnDestroy{
  @ViewChild('f') slForm!: NgForm
  @Output() addIngredient = new EventEmitter<IShooping>()
  subscription!: Subscription;
  editMode = false
  editItemIndex!: number
  editedItem!: IShooping
  constructor(private slService: ShoppingService) {
  }

  ngOnInit() {
    this.subscription = this.slService.startedEditing.subscribe((index: number) =>{
      this.editItemIndex = index
      this.editMode = true
      this.editedItem = this.slService.getItemIndex(index)
      this.slForm.setValue({
        name: this.editedItem.name,
        amount: this.editedItem.amount
      })
    })
  }
  public addItem(form: NgForm) {
    // const value = form.value.name form.value.amount
    this.slService.onIngredientAdded(form.value.name)
    console.log(form.value.name)
  }
  public onClear() {
    this.slForm.reset()
    this.editMode = false
  }

  public onDelete() {
    this.slService.deleteIngredients(this.editItemIndex)
    this.onClear()
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
