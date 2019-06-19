import { ActionType, getType } from "typesafe-actions";
import { IStoreState } from "../store";
import * as Actions from "../actions";

export const initializeState: IStoreState = {
  authentication: null,
  monitoring: false,
  shopList: [],
  openNotificationCenter: false,
  showTimeline: false,
  duration: 200,
  asyncTasks: [],
  notifications: [],
  success: 0,
  failure: 0,
  successTimeline: [],
  failureTimeline: []
};

export default (
  state: IStoreState = initializeState,
  action: ActionType<typeof Actions>
) => {
  switch (action.type) {
    case getType(Actions.cleanupAsyncTask): {
      const currentTime = Date.now();
      return {
        ...state,
        asyncTasks: state.asyncTasks.filter(
          task => task.complete && currentTime - task.timestamp > 10000
        )
      };
    }
    case getType(Actions.createAsyncTask):
      return {
        ...state,
        asyncTasks: [
          ...state.asyncTasks,
          {
            id: action.payload.id,
            action: action.payload.action,
            complete: false,
            timestamp: Date.now()
          }
        ]
      };
    case getType(Actions.completeAsyncTask):
      return {
        ...state,
        asyncTasks: state.asyncTasks.map(task =>
          task.id === action.payload.id
            ? {
                ...task,
                complete: true,
                completeStatus: action.payload.completeStatus
              }
            : { ...task }
        )
      };
    case getType(Actions.responseShopList):
      return {
        ...state,
        shopList: action.payload.rows
      };
    case getType(Actions.successLogin):
      return {
        ...state,
        authentication: { ...action.payload }
      };
    case getType(Actions.successLogout):
      return {
        ...state,
        authentication: null
      };
    case getType(Actions.startMonitoring):
      return {
        ...state,
        monitoring: true
      };
    case getType(Actions.stopMonitoring):
      return {
        ...state,
        monitoring: false
      };
    case getType(Actions.openNotificationCenter):
      return {
        ...state,
        openNotificationCenter: true
      };
    case getType(Actions.closeNotificationCenter):
      return {
        ...state,
        openNotificationCenter: false
      };
    case getType(Actions.showOrderTimelineChart):
      return {
        ...state,
        showTimeline: true
      };
    case getType(Actions.hideOrderTimelineChart):
      return {
        ...state,
        showTimeline: false
      };
    case getType(Actions.updateOrderStatus):
      return {
        ...state,
        ...action.payload
      };
    case getType(Actions.updateOrderTimeline):
      const { success, failure } = action.payload;
      return {
        ...state,
        successTimeline: success.map(([time, count]) => ({ time, count })),
        failureTimeline: failure.map(([time, count]) => ({ time, count }))
      };
    case getType(Actions.addNotification):
      return {
        ...state,
        notifications: [
          ...state.notifications,
          {
            id: Date.now(),
            ...action.payload,
            show: false,
            timestamp: Date.now()
          }
        ]
      };
    case getType(Actions.showedNotification):
      return {
        ...state,
        notifications: state.notifications.map(noti =>
          noti.id === action.payload.id ? { ...noti, show: true } : noti
        )
      };
    default:
      return Object.assign({}, state);
  }
};
