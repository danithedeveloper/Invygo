import {RadioOption} from '../components/elements/RadioButton/RadioButton';
//
export type Participant = {
  id: string;
  name: string;
  age: number;
  locality: string;
  dateOfBirth: Date| null;
  profession: RadioOption|null;
  noOfGuests: number;
  address: string;
};
//
// export default Participant;

// export default class Participant {
//   id: string;
//   name: string;
//   age: number;
//   locality: string;
//   dateOfBirth: Date | null;
//   profession: RadioOption | null;
//   noOfGuests: number;
//   address: string;
//
//
//
//
//   constructor(
//     id: string,
//     name: string,
//     age: number,
//     locality: string,
//     dateOfBirth: Date,
//     profession: RadioOption,
//     noOfGuests: number,
//     address: string,
//   ) {
//     this.id = id;
//     this.name = name;
//     this.age = age;
//     this.locality = locality;
//     this.dateOfBirth = dateOfBirth;
//     this.profession = profession;
//     this.noOfGuests = noOfGuests;
//     this.address = address;
//   }
// }

export const mockParticipants: Participant = {
  id: '',
  name: '',
  age: -1,
  locality: '',
  dateOfBirth: null,
  profession: null,
  noOfGuests: -1,
  address: '',
};
