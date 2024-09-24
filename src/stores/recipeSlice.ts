import { StateCreator } from "zustand"
import { getCategories, getRecipeById, getRecipes } from "../services/RecipeService";
import type { Categories, Drink, Drinks, Recipe, SearchFilter } from "../types";

export type RecipesSlideType = {
    categories: Categories,
    drinks: Drinks,
    selectedRecipe: Recipe,
    modal: boolean
    fetchCategories: () => Promise<void>,
    searchRecipes: (data: SearchFilter) => Promise<void>,
    selectRecipe: (idDrink: Drink['idDrink']) => Promise<void>,
    closeModal: () => void,
}

export const createRecipeSlice: StateCreator<RecipesSlideType> = (set) => ({
    categories: {
        drinks: []
    },
    drinks: {
        drinks: []
    },
    selectedRecipe: {} as Recipe,
    modal: false,
    fetchCategories: async() => {
        const categories = await getCategories();
        set({
            categories,
        })
    },
    searchRecipes: async(data: SearchFilter) => {
        const drinks = await getRecipes(data);
        set({
            drinks,
        })
    },
    selectRecipe: async(idDrink: Drink['idDrink']) => {
        const selectedRecipe = await getRecipeById(idDrink)
        set({
            selectedRecipe,
            modal: true
        })
    },
    closeModal: () => {
        set({
            modal: false,
            selectedRecipe: {} as Recipe,
        })
    }
})