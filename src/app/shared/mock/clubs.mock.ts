import { EWeekDays, IClubs, ICLubsCategory, IClubsLocation, IClubsShift } from '../models/clubs.model';

export const ClubsCategorData: ICLubsCategory[] = [
  {
    id: 1,
    name: 'Futbol',
  },
  {
    id: 2,
    name: 'Basketbol',
  },
  {
    id: 3,
    name: 'Tennis',
  },
  {
    id: 4,
    name: 'Hokkey',
  },
  {
    id: 5,
    name: 'Volleyball',
  },
  {
    id: 6,
    name: 'Rugby',
  },
  {
    id: 7,
    name: 'Suzish',
  },
  {
    id: 8,
    name: 'Boks',
  },
  {
    id: 9,
    name: 'Gimnastika',
  },
  {
    id: 10,
    name: 'Skiing',
  },
  {
    id: 11,
    name: 'Raqs',
  },
];

export const ClubsLocationData: IClubsLocation[] = [
  {
    id: 1,
    region: 'Yakkasaroy tumani',
  },
  {
    id: 2,
    region: 'Shayhontohur tumani',
  },
  {
    id: 3,
    region: 'Chilonzor tumani',
  },
  {
    id: 4,
    region: 'Mirzo Ulughbek tumani',
  },
  {
    id: 5,
    region: 'Sergeli tumani',
  },
  {
    id: 6,
    region: 'Uchtepa tumani',
  },
  {
    id: 7,
    region: 'Yunusobod tumani',
  },
  {
    id: 8,
    region: 'Bektemir tumani',
  },
  {
    id: 9,
    region: 'Mirobod tumani',
  },
  {
    id: 10,
    region: 'Yashnabad tumani',
  },
  {
    id: 11,
    region: 'Olmazor tumani',
  },
];

export const ClubsShiftData: IClubsShift[] = [
  {
    id: 1,
    name: 'Kunduzgi smena',
    startTime: new Date(2025, 5, 14, 9, 0),
    endTime: new Date(2025, 5, 14, 16, 0),
  },
  {
    id: 2,
    name: 'Kechki smena',
    startTime: new Date(2025, 5, 14, 16, 0),
    endTime: new Date(2025, 5, 14, 23, 0),
  }
];

export const ClubsData: IClubs[] = [
  {
    id: 1,
    imgLink: './assets/imgs/lessons/footbol.png',
    title: 'Futbol to‘garagi',
    location: 'Shayhontohur tumani, Furqat ko’chasi,2-uy',
    startTime: new Date(2025, 5, 14, 13, 0),
    endTime: new Date(2025, 5, 14, 15, 0),
    phoneNumber: '+998 71 200 12 12',
    price: 570000.0,
    city: 'Toshkent shahar BAM',
    category: ClubsCategorData[0],
    numberOfLesson: 213,
    lessonDates: [
      {
        times: [new Date(2025, 6, 1, 10, 0), new Date(2025, 6, 1, 12, 0)],
        weekDays: [EWeekDays.MON, EWeekDays.WED, EWeekDays.FRI],
        id: 1,
      },
      {
        times: [new Date(2025, 6, 1, 13, 0), new Date(2025, 6, 1, 15, 0)],
        weekDays: [EWeekDays.TUE, EWeekDays.THU, EWeekDays.SAT],
        id: 2,
      },
      {
        times: [new Date(2025, 6, 1, 16, 0), new Date(2025, 6, 1, 18, 0)],
        weekDays: [EWeekDays.MON, EWeekDays.WED, EWeekDays.FRI],
        id: 3,
      },
      {
        times: [new Date(2025, 6, 1, 18, 0), new Date(2025, 6, 1, 20, 0)],
        weekDays: [EWeekDays.TUE, EWeekDays.THU, EWeekDays.SAT],
        id: 4,
      },
    ],
  },
  {
    id: 2,
    imgLink: './assets/imgs/lessons/artist.png',
    title: 'Rassomchilik to‘garagi',
    location: 'Yakkasaroy tumani, Bobur ko‘chasi, 45-uy',
    startTime: new Date(2025, 5, 14, 10, 0),
    endTime: new Date(2025, 5, 14, 12, 0),
    phoneNumber: '+998 71 250 55 55',
    price: 750000.0,
    city: 'Toshkent shahar BAM',
    category: undefined,
    numberOfLesson: 213,
    lessonDates: [
      {
        times: [new Date(2025, 6, 5, 9, 0), new Date(2025, 6, 5, 11, 0)],
        weekDays: [EWeekDays.MON, EWeekDays.WED, EWeekDays.FRI],
        id: 1,
      },
      {
        times: [new Date(2025, 6, 5, 13, 0), new Date(2025, 6, 5, 15, 0)],
        weekDays: [EWeekDays.TUE, EWeekDays.THU, EWeekDays.SAT],
        id: 2,
      },
      {
        times: [new Date(2025, 6, 5, 15, 0), new Date(2025, 6, 5, 17, 0)],
        weekDays: [EWeekDays.MON, EWeekDays.WED, EWeekDays.FRI],
        id: 3,
      },
      {
        times: [new Date(2025, 6, 5, 17, 0), new Date(2025, 6, 5, 19, 0)],
        weekDays: [EWeekDays.TUE, EWeekDays.THU, EWeekDays.SAT],
        id: 4,
      },
    ],
  },
  {
    id: 3,
    imgLink: './assets/imgs/lessons/lego.png',
    title: 'Lego orqali farzandingiz salohiyatini yaxshilash',
    location: 'Chilonzor tumani, Bunyodkor shoh ko‘chasi, 17-uy',
    startTime: new Date(2025, 5, 14, 14, 30),
    endTime: new Date(2025, 5, 14, 16, 30),
    phoneNumber: '+998 71 233 44 77',
    price: 1150000.0,
    city: 'Toshkent shahar BAM',
    category: undefined,
    numberOfLesson: 213,
    lessonDates: [
      {
        times: [new Date(2025, 6, 9, 8, 0), new Date(2025, 6, 9, 10, 0)],
        weekDays: [EWeekDays.MON, EWeekDays.WED, EWeekDays.FRI],
        id: 1,
      },
      {
        times: [new Date(2025, 6, 9, 12, 0), new Date(2025, 6, 9, 14, 0)],
        weekDays: [EWeekDays.TUE, EWeekDays.THU, EWeekDays.SAT],
        id: 2,
      },
      {
        times: [new Date(2025, 6, 9, 14, 0), new Date(2025, 6, 9, 16, 0)],
        weekDays: [EWeekDays.MON, EWeekDays.WED, EWeekDays.FRI],
        id: 3,
      },
      {
        times: [new Date(2025, 6, 9, 16, 0), new Date(2025, 6, 9, 18, 0)],
        weekDays: [EWeekDays.TUE, EWeekDays.THU, EWeekDays.SAT],
        id: 4,
      },
    ],
  },
  {
    id: 4,
    imgLink: './assets/imgs/lessons/dance.png',
    title: 'Raqs mashg’ulotlari',
    location: 'Mirobod tumani, Nukus ko‘chasi, 9-uy',
    startTime: new Date(2025, 5, 14, 18, 0),
    endTime: new Date(2025, 5, 14, 20, 0),
    phoneNumber: '+998 71 222 33 00',
    price: 350000.0,
    city: 'Toshkent shahar BAM',
    category: ClubsCategorData[10],
    numberOfLesson: 213,
    lessonDates: [
      {
        times: [new Date(2025, 6, 13, 11, 0), new Date(2025, 6, 13, 13, 0)],
        weekDays: [EWeekDays.MON, EWeekDays.WED, EWeekDays.FRI],
        id: 1,
      },
      {
        times: [new Date(2025, 6, 13, 15, 0), new Date(2025, 6, 13, 17, 0)],
        weekDays: [EWeekDays.TUE, EWeekDays.THU, EWeekDays.SAT],
        id: 2,
      },
      {
        times: [new Date(2025, 6, 13, 17, 0), new Date(2025, 6, 13, 19, 0)],
        weekDays: [EWeekDays.MON, EWeekDays.WED, EWeekDays.FRI],
        id: 3,
      },
      {
        times: [new Date(2025, 6, 13, 19, 0), new Date(2025, 6, 13, 21, 0)],
        weekDays: [EWeekDays.TUE, EWeekDays.THU, EWeekDays.SAT],
        id: 4,
      },
    ],
  },
  {
    id: 5,
    imgLink: './assets/imgs/lessons/music.png',
    title: 'Musiqa studiyasi',
    location: 'Yunusobod tumani, Kichik halqa ko‘chasi, 3-uy',
    startTime: new Date(2025, 5, 14, 15, 0),
    endTime: new Date(2025, 5, 14, 17, 0),
    phoneNumber: '+998 71 300 44 88',
    price: 350000.0,
    city: 'Toshkent shahar BAM',
    category: undefined,
    numberOfLesson: 213,
    lessonDates: [
      {
        times: [new Date(2025, 6, 17, 10, 30), new Date(2025, 6, 17, 12, 30)],
        weekDays: [EWeekDays.MON, EWeekDays.WED, EWeekDays.FRI],
        id: 1,
      },
      {
        times: [new Date(2025, 6, 17, 14, 30), new Date(2025, 6, 17, 16, 30)],
        weekDays: [EWeekDays.TUE, EWeekDays.THU, EWeekDays.SAT],
        id: 2,
      },
      {
        times: [new Date(2025, 6, 17, 16, 30), new Date(2025, 6, 17, 18, 30)],
        weekDays: [EWeekDays.MON, EWeekDays.WED, EWeekDays.FRI],
        id: 3,
      },
      {
        times: [new Date(2025, 6, 17, 18, 30), new Date(2025, 6, 17, 20, 30)],
        weekDays: [EWeekDays.TUE, EWeekDays.THU, EWeekDays.SAT],
        id: 4,
      },
    ],
  },
  {
    id: 6,
    imgLink: './assets/imgs/lessons/programmer.png',
    title: 'Kompyuter dasturlash to‘garagii',
    location: 'Sergeli tumani, O‘zbekiston ko‘chasi, 22-uy',
    startTime: new Date(2025, 5, 14, 16, 0),
    endTime: new Date(2025, 5, 14, 18, 0),
    phoneNumber: '+998 71 222 33 00',
    price: 1500000.0,
    city: 'Toshkent shahar BAM',
    category: undefined,
    numberOfLesson: 213,
    lessonDates: [
      {
        times: [new Date(2025, 6, 21, 9, 30), new Date(2025, 6, 21, 11, 30)],
        weekDays: [EWeekDays.MON, EWeekDays.WED, EWeekDays.FRI],
        id: 1,
      },
      {
        times: [new Date(2025, 6, 21, 13, 30), new Date(2025, 6, 21, 15, 30)],
        weekDays: [EWeekDays.TUE, EWeekDays.THU, EWeekDays.SAT],
        id: 2,
      },
      {
        times: [new Date(2025, 6, 21, 15, 30), new Date(2025, 6, 21, 17, 30)],
        weekDays: [EWeekDays.MON, EWeekDays.WED, EWeekDays.FRI],
        id: 3,
      },
      {
        times: [new Date(2025, 6, 21, 17, 30), new Date(2025, 6, 21, 19, 30)],
        weekDays: [EWeekDays.TUE, EWeekDays.THU, EWeekDays.SAT],
        id: 4,
      },
    ],
  },

  {
    id: 20,
    imgLink: './assets/imgs/lessons/artist.png',
    title: 'Rassomchilik to‘garagi',
    location: 'Yakkasaroy tumani, Bobur ko‘chasi, 45-uy',
    startTime: new Date(2025, 5, 14, 10, 0),
    endTime: new Date(2025, 5, 14, 12, 0),
    phoneNumber: '+998 71 250 55 55',
    price: 750000.0,
    city: 'Toshkent shahar BAM',
    category: undefined,
    numberOfLesson: 213,
    lessonDates: [
      {
        times: [new Date(2025, 6, 25, 8, 30), new Date(2025, 6, 25, 10, 30)],
        weekDays: [EWeekDays.MON, EWeekDays.WED, EWeekDays.FRI],
        id: 1,
      },
      {
        times: [new Date(2025, 6, 25, 12, 30), new Date(2025, 6, 25, 14, 30)],
        weekDays: [EWeekDays.TUE, EWeekDays.THU, EWeekDays.SAT],
        id: 2,
      },
      {
        times: [new Date(2025, 6, 25, 14, 30), new Date(2025, 6, 25, 16, 30)],
        weekDays: [EWeekDays.MON, EWeekDays.WED, EWeekDays.FRI],
        id: 3,
      },
      {
        times: [new Date(2025, 6, 25, 16, 30), new Date(2025, 6, 25, 18, 30)],
        weekDays: [EWeekDays.TUE, EWeekDays.THU, EWeekDays.SAT],
        id: 4,
      },
    ],
  },
  {
    id: 10,
    imgLink: './assets/imgs/lessons/footbol.png',
    title: 'Futbol to‘garagi',
    location: 'Shayhontohur tumani, Furqat ko’chasi,2-uy',
    startTime: new Date(2025, 5, 14, 13, 0),
    endTime: new Date(2025, 5, 14, 15, 0),
    phoneNumber: '+998 71 200 12 12',
    price: 570000.0,
    city: 'Toshkent shahar BAM',
    category: ClubsCategorData[0],
    numberOfLesson: 213,
    lessonDates: [
      {
        times: [new Date(2025, 6, 29, 11, 30), new Date(2025, 6, 29, 13, 30)],
        weekDays: [EWeekDays.MON, EWeekDays.WED, EWeekDays.FRI],
        id: 1,
      },
      {
        times: [new Date(2025, 6, 29, 15, 30), new Date(2025, 6, 29, 17, 30)],
        weekDays: [EWeekDays.TUE, EWeekDays.THU, EWeekDays.SAT],
        id: 2,
      },
      {
        times: [new Date(2025, 6, 29, 17, 30), new Date(2025, 6, 29, 19, 30)],
        weekDays: [EWeekDays.MON, EWeekDays.WED, EWeekDays.FRI],
        id: 3,
      },
      {
        times: [new Date(2025, 6, 29, 19, 30), new Date(2025, 6, 29, 21, 30)],
        weekDays: [EWeekDays.TUE, EWeekDays.THU, EWeekDays.SAT],
        id: 4,
      },
    ],
  },
  {
    id: 50,
    imgLink: './assets/imgs/lessons/music.png',
    title: 'Musiqa studiyasi',
    location: 'Yunusobod tumani, Kichik halqa ko‘chasi, 3-uy',
    startTime: new Date(2025, 5, 14, 15, 0),
    endTime: new Date(2025, 5, 14, 17, 0),
    phoneNumber: '+998 71 300 44 88',
    price: 350000.0,
    city: 'Toshkent shahar BAM',
    category: undefined,
    numberOfLesson: 213,
    lessonDates: [
      {
        times: [new Date(2025, 7, 3, 10, 0), new Date(2025, 7, 3, 12, 0)],
        weekDays: [EWeekDays.MON, EWeekDays.WED, EWeekDays.FRI],
        id: 1,
      },
      {
        times: [new Date(2025, 7, 3, 14, 0), new Date(2025, 7, 3, 16, 0)],
        weekDays: [EWeekDays.TUE, EWeekDays.THU, EWeekDays.SAT],
        id: 2,
      },
      {
        times: [new Date(2025, 7, 3, 16, 0), new Date(2025, 7, 3, 18, 0)],
        weekDays: [EWeekDays.MON, EWeekDays.WED, EWeekDays.FRI],
        id: 3,
      },
      {
        times: [new Date(2025, 7, 3, 18, 0), new Date(2025, 7, 3, 20, 0)],
        weekDays: [EWeekDays.TUE, EWeekDays.THU, EWeekDays.SAT],
        id: 4,
      },
    ],
  },
  {
    id: 30,
    imgLink: './assets/imgs/lessons/lego.png',
    title: 'Lego orqali farzandingiz salohiyatini yaxshilash',
    location: 'Chilonzor tumani, Bunyodkor shoh ko‘chasi, 17-uy',
    startTime: new Date(2025, 5, 14, 14, 30),
    endTime: new Date(2025, 5, 14, 16, 30),
    phoneNumber: '+998 71 233 44 77',
    price: 1150000.0,
    city: 'Toshkent shahar BAM',
    category: undefined,
    numberOfLesson: 213,
    lessonDates: [
      {
        times: [new Date(2025, 7, 7, 9, 0), new Date(2025, 7, 7, 11, 0)],
        weekDays: [EWeekDays.MON, EWeekDays.WED, EWeekDays.FRI],
        id: 1,
      },
      {
        times: [new Date(2025, 7, 7, 13, 0), new Date(2025, 7, 7, 15, 0)],
        weekDays: [EWeekDays.TUE, EWeekDays.THU, EWeekDays.SAT],
        id: 2,
      },
      {
        times: [new Date(2025, 7, 7, 15, 0), new Date(2025, 7, 7, 17, 0)],
        weekDays: [EWeekDays.MON, EWeekDays.WED, EWeekDays.FRI],
        id: 3,
      },
      {
        times: [new Date(2025, 7, 7, 17, 0), new Date(2025, 7, 7, 19, 0)],
        weekDays: [EWeekDays.TUE, EWeekDays.THU, EWeekDays.SAT],
        id: 4,
      },
    ],
  },
  {
    id: 60,
    imgLink: './assets/imgs/lessons/programmer.png',
    title: 'Kompyuter dasturlash to‘garagii',
    location: 'Sergeli tumani, O‘zbekiston ko‘chasi, 22-uy',
    startTime: new Date(2025, 5, 14, 16, 0),
    endTime: new Date(2025, 5, 14, 18, 0),
    phoneNumber: '+998 71 222 33 00',
    price: 1500000.0,
    city: 'Toshkent shahar BAM',
    category: undefined,
    numberOfLesson: 213,
    lessonDates: [
      {
        times: [new Date(2025, 7, 11, 8, 30), new Date(2025, 7, 11, 10, 30)],
        weekDays: [EWeekDays.MON, EWeekDays.WED, EWeekDays.FRI],
        id: 1,
      },
      {
        times: [new Date(2025, 7, 11, 12, 30), new Date(2025, 7, 11, 14, 30)],
        weekDays: [EWeekDays.TUE, EWeekDays.THU, EWeekDays.SAT],
        id: 2,
      },
      {
        times: [new Date(2025, 7, 11, 14, 30), new Date(2025, 7, 11, 16, 30)],
        weekDays: [EWeekDays.MON, EWeekDays.WED, EWeekDays.FRI],
        id: 3,
      },
      {
        times: [new Date(2025, 7, 11, 16, 30), new Date(2025, 7, 11, 18, 30)],
        weekDays: [EWeekDays.TUE, EWeekDays.THU, EWeekDays.SAT],
        id: 4,
      },
    ],
  },
  {
    id: 40,
    imgLink: './assets/imgs/lessons/dance.png',
    title: 'Raqs mashg’ulotlari',
    location: 'Mirobod tumani, Nukus ko‘chasi, 9-uy',
    startTime: new Date(2025, 5, 14, 18, 0),
    endTime: new Date(2025, 5, 14, 20, 0),
    phoneNumber: '+998 71 222 33 00',
    price: 350000.0,
    city: 'Toshkent shahar BAM',
    category: ClubsCategorData[10],
    numberOfLesson: 213,
    lessonDates: [
      {
        times: [new Date(2025, 7, 15, 11, 0), new Date(2025, 7, 15, 13, 0)],
        weekDays: [EWeekDays.MON, EWeekDays.WED, EWeekDays.FRI],
        id: 1,
      },
      {
        times: [new Date(2025, 7, 15, 15, 0), new Date(2025, 7, 15, 17, 0)],
        weekDays: [EWeekDays.TUE, EWeekDays.THU, EWeekDays.SAT],
        id: 2,
      },
      {
        times: [new Date(2025, 7, 15, 17, 0), new Date(2025, 7, 15, 19, 0)],
        weekDays: [EWeekDays.MON, EWeekDays.WED, EWeekDays.FRI],
        id: 3,
      },
      {
        times: [new Date(2025, 7, 15, 19, 0), new Date(2025, 7, 15, 21, 0)],
        weekDays: [EWeekDays.TUE, EWeekDays.THU, EWeekDays.SAT],
        id: 4,
      },
    ],
  },
];
