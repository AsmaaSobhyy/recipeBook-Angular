import { Recipe } from "./recipe.model";
import {  Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";

@Injectable()
export class RecipeService {
    recipesChanged= new Subject<Recipe[]>();

   private recipes : Recipe[] = [
        new Recipe('bread',
        'american bread loaf',
        'https://www.maxpixel.net/static/photo/1x/Gourmet-Food-Homemade-Baked-Bread-Bakery-Cooking-1674657.jpg',
        [
            new Ingredient('flour',1),
            new Ingredient ('salt', 2),
            new Ingredient('water',5)
        ]),

        new Recipe('cookies',
        'this is a test recipe',
        'https://www.maxpixel.net/static/photo/1x/Recipes-Healthy-Food-Cookies-2930770.jpg',
        [
            new Ingredient('chocolate',20),
            new Ingredient('banana',4),
            new Ingredient('flour',1)
        ])
      ];
      constructor(private slService :ShoppingListService){}
     setRecipes(recipes:Recipe[]){
         this.recipes=recipes;
         this.recipesChanged.next(this.recipes.slice());
     }
     
      getRecipes(){
          return this.recipes.slice();
      }
      getRecipe (index:number){
          return this.recipes[index];
      }
      
      addIngredientsToCart(ingredients:Ingredient[]){
          this.slService.addIngredients(ingredients);


      }
      addRecipe(recipe:Recipe){
          this.recipes.push(recipe);
          this.recipesChanged.next(this.recipes.slice());

      }
      updateRecipe(index:number,newRecipe:Recipe){
          this.recipes[index]=newRecipe;
          this.recipesChanged.next(this.recipes.slice());

      }
      deleteRecipe(index:number){
          this.recipes.splice(index,1);
          this.recipesChanged.next(this.recipes.slice());

      }
      


}