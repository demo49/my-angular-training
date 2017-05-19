import { Ingredient } from '../shared/ingredient.model';
export class ShopingListService{
   private  ingredients:Ingredient[] = [
    new Ingredient('apples',5),
    new Ingredient('bananas',10),
    new Ingredient('milk',20)
  ];
  getIngredients(){
      return this.ingredients.slice();
  }
}