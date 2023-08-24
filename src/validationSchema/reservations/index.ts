import * as yup from 'yup';

export const reservationValidationSchema = yup.object().shape({
  start_date: yup.date().required(),
  end_date: yup.date().required(),
  status: yup.string().required(),
  product_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
