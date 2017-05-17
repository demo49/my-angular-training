import { Component, OnInit ,EventEmitter,Output} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() rsp = new EventEmitter<Recipe>();
  recipes:Recipe[] = [
    new Recipe('Test recipe','tasty','http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg')
  ];
  
  constructor() { }

  ngOnInit() {
  }

 onRecipeSelected(recipe:Recipe){
   this.rsp.emit(recipe);
 }
}
