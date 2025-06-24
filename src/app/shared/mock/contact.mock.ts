import { IContact, IContactCategory } from "../models/contacts.model";



export const ContactsData: IContact[]  = [
  {
    id: 1,
    name: "Respublika Barkamol avlod bolalar maktabi",
    email: "info@renessans.uz",
    phoneNumber: "+998 71 200 12 12",
    link: "bam.uzedu.uz",
    location: "Toshkent shahar, Shayhontohur tumani, Furqat ko’chasi-2",
    bams: 17,
    clubs: 155,
    clubsPeople: 6353,
    employees: 698,
    imgLink: ""
  }
]
export const ContactsCategoriesData: IContactCategory[] = [
  {
    id: 1,
    name: "Respublika tashkilotlari",
    bams: 17,
    clubs: 155,
    clubsPeople: 6353,
    employees: 698,
    currentCategories: undefined,
    contact: ContactsData[0]
  },
  {
    id: 2,
    name: "Qoraqalpog‘iston Respublikasi",
    bams: 25,
    clubs: 244,
    clubsPeople: 4125,
    employees: 785,
    currentCategories: undefined,
    contact: ContactsData[0]
  },
  {
    id: 3,
    name: "Andijon Viloyati",
    bams: 20,
    clubs: 180,
    clubsPeople: 7120,
    employees: 750,
    currentCategories: undefined,
    contact: ContactsData[0]
  },
  {
    id: 4,
    name: "Buxoro Viloyati",
    bams: 15,
    clubs: 165,
    clubsPeople: 5900,
    employees: 670,
    currentCategories: undefined,
    contact: ContactsData[0]
  },
  {
    id: 5,
    name: "Jizzax Viloyati",
    bams: 12,
    clubs: 140,
    clubsPeople: 4800,
    employees: 620,
    currentCategories: undefined,
    contact: ContactsData[0]
  },
  {
    id: 6,
    name: "Qashqadaryo Viloyati",
    bams: 25,
    clubs: 200,
    clubsPeople: 8500,
    employees: 800,
    currentCategories: undefined,
    contact: ContactsData[0]
  },
  {
    id: 7,
    name: "Navoi Viloyati",
    bams: 10,
    clubs: 130,
    clubsPeople: 4500,
    employees: 590,
    currentCategories: undefined,
    contact: ContactsData[0]
  },
  {
    id: 8,
    name: "Namangan Viloyati",
    bams: 18,
    clubs: 175,
    clubsPeople: 6200,
    employees: 720,
    currentCategories: undefined,
    contact: ContactsData[0]
  },
  {
    id: 9,
    name: "Samarqand Viloyati",
    bams: 22,
    clubs: 190,
    clubsPeople: 7800,
    employees: 780,
    currentCategories: undefined,
    contact: ContactsData[0]
  },
  {
    id: 10,
    name: "Sirdaryo Viloyati",
    bams: 14,
    clubs: 145,
    clubsPeople: 5700,
    employees: 640,
    currentCategories: undefined,
    contact: ContactsData[0]
  },
  {
    id: 11,
    name: "Surxondaryo Viloyati",
    bams: 16,
    clubs: 160,
    clubsPeople: 6000,
    employees: 680,
    currentCategories: undefined,
    contact: ContactsData[0]
  },
  {
    id: 12,
    name: "Toshkent Viloyati",
    bams: 30,
    clubs: 220,
    clubsPeople: 9500,
    employees: 900,
    currentCategories: undefined,
    contact: ContactsData[0]
  },
  {
    id: 13,
    name: "Xorazm Viloyati",
    bams: 19,
    clubs: 185,
    clubsPeople: 5300,
    employees: 730,
    currentCategories: undefined,
    contact: ContactsData[0]
  },
  {
    id: 14,
    name: "Toshkent Shahri",
    bams: 40,
    clubs: 250,
    clubsPeople: 12000,
    employees: 1000,
    currentCategories: undefined,
    contact: ContactsData[0]
  },
  {
    id: 15,
    name: "Farg‘ona Viloyati",
    bams: 21,
    clubs: 210,
    clubsPeople: 8000,
    employees: 850,
    currentCategories: undefined,
    contact: ContactsData[0]
  },
  {
    id: 16,
    name: "BARBBIM",
    bams: 0,
    clubs: 0,
    clubsPeople: 0,
    employees: 0,
    currentCategories: undefined,
    contact: ContactsData[0]
  },
  {
    id: 17,
    name: "BARBO‘EM",
    bams: 0,
    clubs: 0,
    clubsPeople: 0,
    employees: 0,
    currentCategories: undefined,
    contact: ContactsData[0]
  },
  {
    id: 18,
    name: "BARBTIM",
    bams: 0,
    clubs: 0,
    clubsPeople: 0,
    employees: 0,
    currentCategories: undefined,
    contact: ContactsData[0]
  },
];

ContactsCategoriesData[0].currentCategories = [
  ContactsCategoriesData[ContactsCategoriesData.length - 3],
  ContactsCategoriesData[ContactsCategoriesData.length - 2],
  ContactsCategoriesData[ContactsCategoriesData.length - 1]
];
