export interface Project {
    id: string;
    name: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    ownerId: string;
    owner?: User;
    memberIds: string[];
    members: User[];
    columnIds: string[];
    columns: Column[];
    privacy: ProjectPrivacy;
  }

  export interface ProjectPrivacy {
    privacy: ProjectPrivacy
  }

  export interface User {
    id: string;
  }
  
  export interface Column {
    id: string;
  }