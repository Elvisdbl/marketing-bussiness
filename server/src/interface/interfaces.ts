export interface Service {
  id_service?: number;
  title: string;
  type: string;
  description: string;
  price: string; //i have to fix this
  details: string;
}

export interface Order {
  id_order?: number;
  id_user?: number;
  id_service?: number;
  order_date: Date;
  details: string;
  total_price: number;
}

export interface Message {
  id_message?: number;
  id_user?: number;
  message: string;
  message_date: Date;
}

export interface User {
  id_user?: number;
  name?: string;
  email?: string;
}

export interface Chat {
  id_chat?: number;
  id_message?: number;
}

export interface Area {
  id_area?: number;
  area: string; // change it by name
}

export interface Partner {
  id_partner?: number;
  name: string;
}

export interface Plan {
  id_plan?: number;
  id_service?: number;
  plan: string; // change it by name
  description: string;
}
