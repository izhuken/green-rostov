export interface User {
  username: string;
  email: string;
  phone: string;
  rating: number;
  is_admin: boolean;
  id: string;
  is_active: boolean;
  create_time: string;
  update_time: string;
}

export type pag<T> = {
  page: number;
  next_page: string;
  previous_page: string;
  data: T[];
};
export interface Task {
  title: string;
  description: string;
  rating: number;
  id: string;
}

export interface Event {
  title: string;
  description: string;
  rating: number;
  creator_id: string;
  id: string;
  create_time: string;
  update_time: string;
}

export interface EventApprove {
  title: string;
  description: string;
  user_id: string;
  event_id: string;
  approved: boolean;
}

export interface TaskApprove {
  description: string;
  user_id: string;
  task_id: string;
}

export * from "./responses";
