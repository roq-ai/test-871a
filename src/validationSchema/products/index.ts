import * as yup from 'yup';

export const productValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
  status: yup.string().required(),
  price: yup.number().integer().nullable(),
  rental_price: yup.number().integer().nullable(),
  rental_status: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
});
