import CategoryModel from './category';

export default interface LineItemModel {
  _id: string;
  title: string;
  description: string;
  isSavings: boolean;
  amount: number;
  date: Date;
  category: CategoryModel;
}

export const NewLineItem: LineItemModel = {
  _id: null,
  title: '',
  description: '',
  isSavings: false,
  amount: 0,
  date: new Date(),
  category: null,
};
