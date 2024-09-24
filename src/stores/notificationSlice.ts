import { StateCreator } from "zustand"
import { FavoriteSlideType } from "./favoriteSlice"

type Notification = {
    text: string,
    error: boolean,
    show: boolean,
}

export type NotificationSlideType = {
    notification: Notification,
    showNotification: (payload: Pick<Notification, 'text' | 'error'>) => void,
    hiddeNotification: () => void
}

const initState: Notification = {
    text: '',
    error: false,
    show: false,
}

export const createNotificationSlice: StateCreator<NotificationSlideType & FavoriteSlideType, [], [], NotificationSlideType> = (set, get) => ({
    notification: initState,
    showNotification: (payload) => {
        set({
            notification: {
                text: payload.text,
                error: payload.error,
                show: true,
            }
        })
        setTimeout(() => {
            get().hiddeNotification();
        }, 3000);
    },
    hiddeNotification: () => {
        set({
            notification: initState,
        })
    }
})
