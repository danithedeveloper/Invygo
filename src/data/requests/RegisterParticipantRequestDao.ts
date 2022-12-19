export type RegisterParticipantRequestDao = {
  id: string;
  name: string;
  age: number;
  locality: string;
  dateOfBirth?: string;
  profession?: string;
  noOfGuests: number;
  address: string;
};
