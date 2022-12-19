export type Participant = {
  id: string;
  name: string;
  icon: string;
};

export const participants: Participant[] = [
  {
    id: '1',
    name: 'Employed',
    icon: 'fa-briefcase',
  },
  {
    id: '2',
    name: 'Student',
    icon: 'fa-graduation-cap',
  },
];

//
// <FontAwesomeIcon icon="fa-regular fa-briefcase" />
// <FontAwesomeIcon icon="fa-light fa-graduation-cap" />
