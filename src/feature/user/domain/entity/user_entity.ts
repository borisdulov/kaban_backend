export interface User {
  _id: string;
  name: string;
  email?: string;
  login: string;
  username?: string;
  bio?: string;
  avatar?: string;
  projectsIds?: string[];
}
