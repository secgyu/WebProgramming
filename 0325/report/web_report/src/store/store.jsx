import { create } from "zustand";
export const usecontactStore = create((set, get) => ({
  contactList: [],
  keyword: "",
  addContact: (contact) => set({ contactList: [...get().contactList, contact] }),
  searchByUserName: (keyword) => set({ keyword }),
}));
