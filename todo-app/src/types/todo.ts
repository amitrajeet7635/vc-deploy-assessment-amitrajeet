export type Category = 'General' | 'Work' | 'Education' | 'Personal' | 'Shopping' | 'Health';

export const CATEGORIES: Category[] = ['General', 'Work', 'Education', 'Personal', 'Shopping', 'Health'];

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: Date;
  category: Category;
}
