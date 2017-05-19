import { EventEmitter} from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
recipeSelected = new EventEmitter<Recipe>();
  private  recipes:Recipe[] = [
    new Recipe('Test recipe',
    'tasty',
    'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg',
    [
      new Ingredient ('meet',1)
    ]),
    new Recipe('Testing',
    'very tasty',
    'http://www.seriouseats.com/recipes/assets_c/2016/12/20161201-crispy-roast-potatoes-29-thumb-1500xauto-435281.jpg',
    [
      new Ingredient('apple',123)
    ])
  ];

  getRecipes(){
      return this.recipes.slice();
  }
}