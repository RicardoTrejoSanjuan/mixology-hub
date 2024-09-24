import { StateCreator } from "zustand";
import { Recipe } from "../types";
import { createNotificationSlice, NotificationSlideType } from "./notificationSlice";

export type FavoriteSlideType = {
    favorites: Recipe[],
    handleClicFavoriteRecipe: (recipe: Recipe) => void,
    favoriteExists: (id: Recipe['idDrink']) => boolean,
    loadFromLocalStorage: () => void,
}


export const createFavoriteSlice: StateCreator<FavoriteSlideType & NotificationSlideType, [], [], FavoriteSlideType> = (set, get, api) => ({
    favorites: [],
    handleClicFavoriteRecipe: (recipe: Recipe) => {
        if (get().favoriteExists(recipe.idDrink)) {
            set((state) => ({
                favorites: state.favorites.filter(favorite => favorite.idDrink !== recipe.idDrink)
            }))
            createNotificationSlice(set, get, api).showNotification({text: 'Successfully removed', error: false})
        } else {
            set((state) => ({
                favorites: [...state.favorites, recipe]
            }))
            createNotificationSlice(set, get, api).showNotification({text: 'Successfully added', error: false})
        }
        localStorage.setItem('favorites', JSON.stringify(get().favorites))
    },
    favoriteExists: (id) => {
        return get().favorites.some(favorite => favorite.idDrink === id)
    },
    loadFromLocalStorage: () => {
        const storeFavorites = localStorage.getItem('favorites');
        if (storeFavorites) {
            set({
                favorites: JSON.parse(storeFavorites)
            })
        }
    }

})
