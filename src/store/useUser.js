import { create } from 'zustand';

const useUser = create((set) => ({
  user: null,
  addUser: (data) => set(() => ({ user: data })),
  removeUser: () => set(() => ({ user: null })),
}));

export default useUser;
