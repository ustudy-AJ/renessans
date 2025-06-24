
export interface IClubs{
  id: number;
  imgLink: string;
  title: string;
  location: string;
  startTime: Date;
  endTime: Date;
  phoneNumber: string;
  price: number;
  city: string;
  category?: ICLubsCategory;
  lessonDates: IClubDate[];
  numberOfLesson: 213,

}

export interface ICLubsCategory{
  id: number;
  name: string;
}

export interface IClubsLocation{
  id: number;
  region: string;
}

export interface IClubsShift{
  id: number;
  name: string;
  startTime: Date;
  endTime: Date;
}


export interface IClubDate{
  id: number,
  times: Date[];
  weekDays: EWeekDays[];
}

export enum EWeekDays{
  MON,
  TUE,
  WED,
  THU,
  FRI,
  SAT,
  SUN,
}
