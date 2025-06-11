
export interface IClubs{
  id: number;
  imgLink: string;
  title: string;
  location: string;
  time: Date[];
  phoneNumber: string;
  price: number;
  city: string;
  category?: ICLubsCategory;
}

export interface ICLubsCategory{
  id: number;
  name: string;
}
