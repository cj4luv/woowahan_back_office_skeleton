export type NotificationType = "success" | "error" | "info";
export type FinishType = "success" | "error";
export type IGeoLocation = [number, number];

export interface INotification {
  id: number;
  type: NotificationType;
  msg: string;
  show: boolean;
  timestamp: number;
}

export interface ITimelineItem {
  time: string;
  count: number;
}

export interface IAuthentication {
  name: string;
  picture: string;
  token: string;
}

export interface IAsyncTaskStatus {
  id: string;
  action: string;
  complete: boolean;
  completeStatus?: FinishType;
  timestamp: number;
}

export interface IShop {
  id: number;
  shopName: string;
  ownerName: string;
  coupon: string;
  category: string;
  geoLocation: IGeoLocation;
  phone: string;
  address: string;
  createDate: string;
}

export interface IStoreState {
  authentication: IAuthentication | null;
  monitoring: boolean;
  shopList: IShop[];
  openNotificationCenter: boolean;
  showTimeline: boolean;
  duration: number;
  asyncTasks: IAsyncTaskStatus[];
  notifications: INotification[];
  success: number;
  failure: number;
  successTimeline: ITimelineItem[];
  failureTimeline: ITimelineItem[];
}
