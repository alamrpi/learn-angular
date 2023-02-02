import { Component } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('Test Recipe 1', "Description here", "https://cdn.pixabay.com/photo/2023/01/14/13/17/bellflower-7718193_960_720.jpg"),
    new Recipe('Test Recipe 2', "Description here", "https://cdn.pixabay.com/photo/2023/01/12/05/32/duck-7713310_960_720.jpg"),
  ];
}
