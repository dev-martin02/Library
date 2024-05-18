/*
    - Fix the name of the store File 
    - What can I put in the store? 
        - Loading state 
        - User state 
        - Store the data from one fetch, and use it in multiples files

*/
import { create } from "zustand";

export const useBookStore = create((set) => ({
  bookStore: [],
  listOfBooks: (book) => set((state) => ({ bookStore: book })),
}));
