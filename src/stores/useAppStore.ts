import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { createRecipeSlice, RecipesSlideType } from "./recipeSlice";
import { createFavoriteSlice, FavoriteSlideType } from './favoriteSlice';
import { createNotificationSlice, NotificationSlideType } from './notificationSlice';

export const useAppStore = create<RecipesSlideType & FavoriteSlideType & NotificationSlideType>()(
  devtools((...a) => ({
    ...createRecipeSlice(...a),
    ...createFavoriteSlice(...a),
    ...createNotificationSlice(...a),
  }), { name: 'AppStore', serialize: true })
);
