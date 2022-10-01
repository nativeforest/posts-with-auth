import { Owner } from "./Owner";

export interface IPost {
  id: string;
  image: string;
  likes: number;
  owner: Owner;
  publishDate: string;
  tags: Array<string>;
  text: string;
}



//