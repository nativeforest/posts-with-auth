import { Owner } from "./Owner";

export interface IComment{
  id: string;
  message: string;
  owner: Owner
  post: string;
  publishDate: string;
}