import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppinglistService } from 'src/app/shoppingList/shoppinglist.service';
import {Recipe} from './recipe.model'

@Injectable()
export class RecipeService {
   
    recipeChosen = new EventEmitter<Recipe>();

    private recipes:Recipe[] = [
        new Recipe('First Recipe','Test recipe','https://c.pxhere.com/photos/0e/3a/oysters_prawns_clams_crab_fish_restaurant_seafood_ocean-1376447.jpg!d',
        [new Ingredient('Meat',1),new Ingredient('Potato', 3)]),
    new Recipe('Second Recipe','Test recipe','https://c.pxhere.com/photos/0e/3a/oysters_prawns_clams_crab_fish_restaurant_seafood_ocean-1376447.jpg!d',
    [
        new Ingredient('Meat',1),
        new Ingredient('Potato', 3)

])
      ];

      getRecipes() {
          return this.recipes.slice();
       }
      addIngredientsToShoppingList(ingredients: Ingredient[]) {
          this.shoppinglistService.addIngredients(ingredients);

      }
      constructor(private shoppinglistService: ShoppinglistService) {

      }

}