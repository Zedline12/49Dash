export interface ISubCateogry {
  _id?: string;
  picture: string;
  daily_price: number;
  portion: number;
  provider_portion: number;
  payment_factor: number;
  gross_money: number;
  over_head_factor: number;
  paymentMethods?: string[];
  nameAr: string;
  nameEn: string;
  nameCode: string;
  is_hidden: boolean;
}
