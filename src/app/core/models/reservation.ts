export interface Reservation {
  _id: string; // or ObjectId if you're using a specific type for IDs
  email: string;
  password: string;
  scholarshipType: number; // or enum if defined
  passportOption: number; // or enum if defined
  transactionsCount: number;
  isDateAutomatic: boolean;
  reservationDate?: Date;
}
