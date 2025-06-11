import { IClubs, ICLubsCategory } from "../models/clubs.model";

export const ClubsCategorData: ICLubsCategory[] = [
  {
    id: 1,
    name: "Futbol"
  },
  {
    id: 2,
    name: "Basketbol"
  },
  {
    id: 3,
    name: "Tennis"
  },
  {
    id: 4,
    name: "Hokkey"
  },
  {
    id: 5,
    name: "Volleyball"
  },
  {
    id: 6,
    name: "Rugby"
  },
  {
    id: 7,
    name: "Suzish"
  },
  {
    id: 8,
    name: "Boks"
  },
  {
    id: 9,
    name: "Gimnastika"
  },
  {
    id: 10,
    name: "Skiing"
  },
  {
    id: 11,
    name: "Raqs"
  },
]


export const ClubsData: IClubs[] = [
  {
    id: 1,
    imgLink: "./assets/imgs/lessons/footbol.png",
    title: "Futbol to‘garagi",
    location: "Shayhontohur tumani, Furqat ko’chasi,2-uy",
    time: [new Date("13:00"), new Date("15:00")],
    phoneNumber: "+998 71 200 12 12",
    price: 570000.00,
    city: "Toshkent shahar BAM",
    category: ClubsCategorData[0]
  },
  {
    id: 2,
    imgLink: "./assets/imgs/lessons/artist.png",
    title: "Rassomchilik to‘garagi",
    location: "Yakkasaroy tumani, Bobur ko‘chasi, 45-uy",
    time: [new Date("10:00"), new Date("12:00")],
    phoneNumber: "+998 71 250 55 55",
    price: 750000.00,
    city: "Toshkent shahar BAM",
    category: ClubsCategorData[0]
  },
  {
    id: 3,
    imgLink: "./assets/imgs/lessons/lego.png",
    title: "Lego orqali farzandingiz salohiyatini yaxshilash",
    location: "Chilonzor tumani, Bunyodkor shoh ko‘chasi, 17-uy",
    time: [new Date("14:30"), new Date("16:30")],
    phoneNumber: "+998 71 233 44 77",
    price: 1150000.00,
    city: "Toshkent shahar BAM",
    category: undefined
  },
  {
    id: 4,
    imgLink: "./assets/imgs/lessons/dance.png",
    title: "Raqs mashg’ulotlari",
    location: "Mirobod tumani, Nukus ko‘chasi, 9-uy",
    time: [new Date("18:00"), new Date("20:00")],
    phoneNumber: "+998 71 222 33 00",
    price: 350000.00,
    city: "Toshkent shahar BAM",
    category: ClubsCategorData[10]
  },
  {
    id: 5,
    imgLink: "./assets/imgs/lessons/music.png",
    title: "Musiqa studiyasi",
    location: "Yunusobod tumani, Kichik halqa ko‘chasi, 3-uy",
    time: [new Date("15:00"), new Date("17:00")],
    phoneNumber: "+998 71 300 44 88",
    price: 350000.00,
    city: "Toshkent shahar BAM",
    category: undefined
  },
  {
    id: 6,
    imgLink: "./assets/imgs/lessons/programmer.png",
    title: "Kompyuter dasturlash to‘garagii",
    location: "Sergeli tumani, O‘zbekiston ko‘chasi, 22-uy",
    time: [new Date("16:00"), new Date("18:00")],
    phoneNumber: "+998 71 222 33 00",
    price: 1500000.00,
    city: "Toshkent shahar BAM",
    category: undefined
  },




  {
    id: 20,
    imgLink: "./assets/imgs/lessons/artist.png",
    title: "Rassomchilik to‘garagi",
    location: "Yakkasaroy tumani, Bobur ko‘chasi, 45-uy",
    time: [new Date("10:00"), new Date("12:00")],
    phoneNumber: "+998 71 250 55 55",
    price: 750000.00,
    city: "Toshkent shahar BAM",
    category: ClubsCategorData[0]
  },
  {
    id: 10,
    imgLink: "./assets/imgs/lessons/footbol.png",
    title: "Futbol to‘garagi",
    location: "Shayhontohur tumani, Furqat ko’chasi,2-uy",
    time: [new Date("13:00"), new Date("15:00")],
    phoneNumber: "+998 71 200 12 12",
    price: 570000.00,
    city: "Toshkent shahar BAM",
    category: ClubsCategorData[0]
  },

  {
    id: 50,
    imgLink: "./assets/imgs/lessons/music.png",
    title: "Musiqa studiyasi",
    location: "Yunusobod tumani, Kichik halqa ko‘chasi, 3-uy",
    time: [new Date("15:00"), new Date("17:00")],
    phoneNumber: "+998 71 300 44 88",
    price: 350000.00,
    city: "Toshkent shahar BAM",
    category: undefined
  },
  {
    id: 30,
    imgLink: "./assets/imgs/lessons/lego.png",
    title: "Lego orqali farzandingiz salohiyatini yaxshilash",
    location: "Chilonzor tumani, Bunyodkor shoh ko‘chasi, 17-uy",
    time: [new Date("14:30"), new Date("16:30")],
    phoneNumber: "+998 71 233 44 77",
    price: 1150000.00,
    city: "Toshkent shahar BAM",
    category: undefined
  },
  {
    id: 60,
    imgLink: "./assets/imgs/lessons/programmer.png",
    title: "Kompyuter dasturlash to‘garagii",
    location: "Sergeli tumani, O‘zbekiston ko‘chasi, 22-uy",
    time: [new Date("16:00"), new Date("18:00")],
    phoneNumber: "+998 71 222 33 00",
    price: 1500000.00,
    city: "Toshkent shahar BAM",
    category: undefined
  },
  {
    id: 40,
    imgLink: "./assets/imgs/lessons/dance.png",
    title: "Raqs mashg’ulotlari",
    location: "Mirobod tumani, Nukus ko‘chasi, 9-uy",
    time: [new Date("18:00"), new Date("20:00")],
    phoneNumber: "+998 71 222 33 00",
    price: 350000.00,
    city: "Toshkent shahar BAM",
    category: ClubsCategorData[10]
  },


]


