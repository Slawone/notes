export type NoteForDb = {
  name: string;
  text: string;
};

export type NoteFromDb = {
  id: number;
  name: string;
  text: string;
  status: string;
  createdAt: Date;
  completedAt: Date;
};
