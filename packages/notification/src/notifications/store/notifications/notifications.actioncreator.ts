import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { NotificationStore } from '@acpaas-ui/notification-store';

import {
    NOTIFICATION_CLEAR,
    NOTIFICATION_CLEAR_TARGET,
    NOTIFICATION_TRIGGER,
    NOTIFICATIONS_LOAD,
} from './notifications.actiontypes';
import {
    NotificationsState,
    Notifications,
} from './notifications.types';

@Injectable()
export class NotificationsActionCreator {
    private store = new NotificationStore();
    private actionQueue: string[] = [];

    constructor(
        private ngRedux: NgRedux<NotificationsState>
    ) {
        this.store.notifications.subscribe((notifications => {
            this.actionQueue.forEach(action => {
                this.ngRedux.dispatch(this.loadNotifications(notifications, action));
            });

            this.actionQueue.length = 0;
        }).bind(this));
    }

    triggerNotification(...args) {
        this.actionQueue.push(NOTIFICATION_TRIGGER);
        this.store.triggerNotification.apply(this.store, args);
    }

    loadNotifications(notifications: Notifications, action) {
        return {
            type: action || NOTIFICATIONS_LOAD,
            notifications
        };
    }

    clearNotification(notification: any) {
        this.actionQueue.push(NOTIFICATION_CLEAR);
        this.store.clearNotification(notification);
    }

    clearTarget(target: string) {
        this.actionQueue.push(NOTIFICATION_CLEAR_TARGET);
        this.store.clearTarget(target);
    }
}
