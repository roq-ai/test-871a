import { PurchaseInterface } from 'interfaces/purchase';
import { ReservationInterface } from 'interfaces/reservation';
import { ReviewInterface } from 'interfaces/review';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ProductInterface {
  id?: string;
  name: string;
  description?: string;
  status: string;
  user_id: string;
  price?: number;
  rental_price?: number;
  rental_status?: string;
  created_at?: any;
  updated_at?: any;
  purchase?: PurchaseInterface[];
  reservation?: ReservationInterface[];
  review?: ReviewInterface[];
  user?: UserInterface;
  _count?: {
    purchase?: number;
    reservation?: number;
    review?: number;
  };
}

export interface ProductGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  status?: string;
  user_id?: string;
  rental_status?: string;
}
