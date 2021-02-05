export default interface CategoryModel {
  _id?: string;
  name: string;
  icon: string;
  isActive?: boolean;
}

export const NewCategory: CategoryModel = {
  name: '',
  icon: '',
};
