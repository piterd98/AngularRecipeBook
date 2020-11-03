import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shoppingList/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shoppingList/shopping-list/shopping-list-edit/shopping-list-edit.component';
import { IngredientComponent } from './shoppingList/ingredient/ingredient.component';
import { RecipeListComponent } from './recipeBook/recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipeBook/recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipeBook/recipes/recipe-detail/recipe-detail.component';
import { RecipeComponent } from './recipeBook/recipes/recipe.component';
import { DropdownDirective } from './shared/dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    IngredientComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipeComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
