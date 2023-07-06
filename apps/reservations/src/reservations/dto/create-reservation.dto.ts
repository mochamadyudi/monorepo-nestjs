export class CreateReservationDto {
  timestamp: Date;
  startData: Date;
  endDate: Date;
  userId: string;
  placeId: string;
  invoiceId: string;
}
