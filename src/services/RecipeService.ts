import axios from "axios";
import { CategoriesApiResponseSchema, DrinksApiResponseSchema, RecipeAPIResponseSchema } from "../utils/recipes-schema";
import { Drink, SearchFilter } from "../types";

export async function getCategories() {
    try {
        const urlCategories = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
        const { data } = await axios(urlCategories);
        const result = CategoriesApiResponseSchema.safeParse(data);

        if (result.success) {
            return result.data;
        } else {
            console.error('Error validating the API schema:', result.error);
            return undefined;
        }
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Axios request error:', error.message);
        } else {
            console.error('Unexpected error:', error);
        }

        return undefined;
    }
}

export async function getRecipes(search: SearchFilter) {
    try {
        const urlCategories = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${search.ingredient}&c=${search.category}`;
        const { data } = await axios(urlCategories);
        const result = DrinksApiResponseSchema.safeParse(data);
        if (result.success) {
            return result.data;
        } else {
            console.error('Error validating the API schema:', result.error);
            return undefined;
        }
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Axios request error:', error.message);
        } else {
            console.error('Unexpected error:', error);
        }

        return undefined;
    }
}

export async function getRecipeById(idDrink: Drink['idDrink']) {
    try {
        const urlCategories = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`;
        const { data } = await axios(urlCategories);
        const result = RecipeAPIResponseSchema.safeParse(data.drinks[0]);
        if (result.success) {
            return result.data;
        } else {
            console.error('Error validating the API schema:', result.error);
            return undefined;
        }
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Axios request error:', error.message);
        } else {
            console.error('Unexpected error:', error);
        }

        return undefined;
    }
}