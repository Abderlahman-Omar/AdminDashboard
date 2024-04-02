export interface Rate {
  id: string; // same as Product id
  votes1: number;
  votes2: number;
  votes3: number;
  votes4: number;
  votes5: number;
}

export interface Review {
  id: number;
  userName: string;
  title: string;
  subtitle: string;
  date: string;
  vote: number;
}
