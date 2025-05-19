import { PassportOption } from "./passportOption.interface";
import { ScolarShipType } from "./scolarShipType.interface";

export interface Reservation {
    _id: string;
    email: string;
    password: string;
    scholarshipType:ScolarShipType 
    passportOption: PassportOption ;
    transactionsCount: number;
    isDateAutomatic: boolean;
    processState?: string;
    state?: number | null;
  processDate?: Date;
  reservationDate?: Date | null;
  interval: number;
  isProxy: boolean;
  reservedAt:string
  }