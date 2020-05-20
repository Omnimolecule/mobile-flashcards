
import * as Permissions from 'expo-permissions';
import { AsyncStorage } from 'react-native';
import * as Notifications from 'expo-notifications';

const NOTIFICATION_KEY = 'MobileFlashcard:notification';

export function clearLocalNotification() {
    return AsyncStorage.removeItem(NOTIFICATION_KEY)
        .then(Notifications.cancelAllScheduledNotificationsAsync)
}

export function setLocalNotification() {
    AsyncStorage.getItem(NOTIFICATION_KEY)
        .then(JSON.parse)
        .then((data) => {
            if (data === null) {
                Permissions.getAsync(Permissions.NOTIFICATIONS)
                    .then(({ status }) => {
                        if (status === 'granted') {
                            console.log('Lets do it!');
                            Notifications.cancelAllScheduledNotificationsAsync()

                            Notifications.setNotificationHandler({
                                handleNotification: async () => ({
                                  shouldShowAlert: true,
                                  shouldPlaySound: true,
                                  shouldSetBadge: false,
                                })
                              });

                            Notifications.scheduleNotificationAsync({
                                content: {
                                  title: "Time to learn",
                                  body: "👋 don't forget to flip some cards today!",
                                },
                                trigger: {
                                  seconds: 60 * 60 * 24, //remind in 24 hours from now
                                  repeats: true
                                },
                              });

                            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
                        }
                    })
            }
        })
}