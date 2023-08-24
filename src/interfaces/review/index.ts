import { UserInterface } from 'interfaces/user';
import { ProductInterface } from 'interfaces/product';
import { GetQueryInterface } from 'interfaces';

export interface ReviewInterface {
  id?: string;
  user_id: string;
  product_id: string;
  rating: number;
  comment?: string;
  date: any;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  product?: ProductInterface;
  _count?: {};
}

export interface ReviewGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  product_id?: string;
  comment?: string;
}
