import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient("Apples",5),
    new Ingredient("Tomato", 3)
  ];
  constructor() { }
  
  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
  

  
  ngOnInit(): void {
  }

}
