import * as yup from 'yup';

export const purchaseValidationSchema = yup.object().shape({
  purchase_date: yup.date().required(),
  status: yup.string().required(),
  price: yup.number().integer().nullable(),
  product_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
