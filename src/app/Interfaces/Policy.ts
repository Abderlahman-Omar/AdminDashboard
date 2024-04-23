export interface Policy {
  id: number;
  title: string;
  returnWithin: string;
  restorable: string;
}

export const policyData: Policy[] = [
  {
    id: 0,
    title: 'no return',
    returnWithin: '0',
    restorable: 'no',
  },
  {
    id: 1,
    title: '30 days return',
    returnWithin: '30 days',
    restorable: 'yes',
  },
  {
    id: 2,
    title: '60 days return',
    returnWithin: '60',
    restorable: 'yes',
  },
  {
    id: 3,
    title: '90 days return',
    returnWithin: '90',
    restorable: 'yes',
  },
];
