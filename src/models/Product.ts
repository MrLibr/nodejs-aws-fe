import * as Yup from 'yup';

export type Product = {
  id: string,
  title: string,
  description: string,
  img: string,
  currency: string,
  price: number,
  count: number,
};

export const ProductSchema = Yup.object().shape({
  title: Yup.string().required(),
  description: Yup.string(),
  img: Yup.string().required(),
  currency: Yup.string().required(),
  price: Yup.number().required(),
  count: Yup.number().required(),
});
