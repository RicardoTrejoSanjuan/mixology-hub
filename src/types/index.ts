import { CategoriesApiResponseSchema, CategorySchema, DrinksApiResponseSchema, DrinkSchema, RecipeAPIResponseSchema, SearchFilterSchema } from './../utils/recipes-schema';
import { z } from "zod";

export type SearchFilter = z.infer<typeof SearchFilterSchema>

export type Categories = z.infer<typeof CategoriesApiResponseSchema>;

export type Category = z.infer<typeof CategorySchema>;

export type Drinks = z.infer<typeof DrinksApiResponseSchema>;

export type Drink = z.infer<typeof DrinkSchema>;

export type Recipe = z.infer<typeof RecipeAPIResponseSchema>;



// export type Category = CategoriesApiResponseSchema

// export type DraftPatient = Omit<Patient, 'id'>
