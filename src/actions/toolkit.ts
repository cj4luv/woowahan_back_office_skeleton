import uuid from 'uuid/v4';
import { IAsyncTaskStatus } from '../store';
import last from 'lodash/last';

export const createAsyncPayload = (
  payload: object = {},
  prefix: string = ''
) => ({
  ...payload,
  asyncTaskId: `${prefix}${uuid()}`
});

export const getAsyncId = (action: any) => action.payload.asyncTaskId;
export const getLastFinishAction = (
  asyncTasks: IAsyncTaskStatus[],
  action: any
) => {
  return last(
    asyncTasks
      .filter((t: IAsyncTaskStatus) => t.action === action)
      .sort((a: IAsyncTaskStatus, b: IAsyncTaskStatus) =>
        a.timestamp > b.timestamp ? 1 : a.timestamp < b.timestamp ? -1 : 0
      )
  );
};
export const isAsyncAction = (action: any) => !!action.payload.asyncTaskId;
export const isFinishAsyncAction = (
  asyncTasks: IAsyncTaskStatus[],
  id: string
) => !!asyncTasks.find((t: IAsyncTaskStatus) => t.id === id && t.complete);
export const hasRunningAsyncAction = (asyncTasks: any) =>
  asyncTasks.filter((t: IAsyncTaskStatus) => !t.complete).length > 0;
