import { ProductInterface } from 'interfaces/product';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ReservationInterface {
  id?: string;
  product_id: string;
  user_id: string;
  start_date: any;
  end_date: any;
  status: string;
  created_at?: any;
  updated_at?: any;

  product?: ProductInterface;
  user?: UserInterface;
  _count?: {};
}

export interface ReservationGetQueryInterface extends GetQueryInterface {
  id?: string;
  product_id?: string;
  user_id?: string;
  status?: string;
}
