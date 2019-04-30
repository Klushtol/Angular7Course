import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Tasty Schnitzel',
            'A super tasty schnitzel - just awesome!',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeTuQC54h7_2WTBS0QNpucPkpHJSCEwepJVFyfEuiTZQZkCALqQw',
            [
                new Ingredient('Meat', 1),
                new Ingredient('FrenchFries', 20),
            ]),
        new Recipe(
            'Big Fat Burger',
            'What else you need to say?',
            'https://www.tasteofhome.com/wp-content/uploads/2017/10/exps28800_UG143377D12_18_1b_RMS-696x696.jpg',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 1),
            ])
    ];

    constructor(private shoppingListService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }
}
