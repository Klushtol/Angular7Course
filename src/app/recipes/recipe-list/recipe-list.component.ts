import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    @Output() afterRecipeSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>();
    recipes: Recipe[] = [
        new Recipe('Test Recipe', 'Test description', 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/9/11/WU2001_Cast-Iron-Pizza_s4x3.jpg.rend.hgtvcom.826.620.suffix/1536690646007.jpeg')
    ];

    constructor() { }

    ngOnInit() {}

    onRecipeItemSelect(recipe: Recipe) {
        this.afterRecipeSelected.emit(recipe);
    }
}
