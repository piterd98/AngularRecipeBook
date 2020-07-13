import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
 recipes:Recipe[] = [
   new Recipe('First Recipe','Test recipe','https://c.pxhere.com/photos/0e/3a/oysters_prawns_clams_crab_fish_restaurant_seafood_ocean-1376447.jpg!d')
 ];
  constructor() { }

  ngOnInit(): void {
  }

}
