export interface IContact {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
  link: string;
  location: string;
  bams: number;
  clubs: number;
  clubsPeople: number;
  employees: number;

  imgLink: string;
}
export interface IContactCategory {
  id: number;
  name: string;
  bams: number,
  clubs: number,
  clubsPeople: number,
  employees: number,
  currentCategories?: IContactCategory[];
  contact?: IContact;
}
