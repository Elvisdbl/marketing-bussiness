export interface IService {
  id_service?: number;
  title: string;
  type: string;
  description: string;
  price: number;
  image?: string;
}

export interface IOrder {
  id_order?: number;
  id_user?: number;
  id_service?: number;
  order_date: Date;
  details: string;
  total_price: number;
}

export interface IUser {
  id_user?: number;
  name?: string;
  email?: string;
  password: string;
}

export interface IPlan {
  id_plan?: number;
  id_service?: number;
  type: string;
  price: number;
}

export interface IPlanDetails {
  id_detail?: number;
  id_plan: number;
  name: string;
}

export interface IPartner {
  id_partner?: number;
  name: string;
  image: string;
}

export interface IArea {
  id_area?: number;
  name: string;
}

export interface IChat {
  id_chat?: number;
  id_message?: number;
}

export interface IMessage {
  id_message?: number;
  id_user?: number;
  message: string;
  message_created: Date;
}
