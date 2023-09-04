import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

interface User {
  id: number;
  username: string;
}

interface UserState {
  fetchUsers: any;
  users: User[];
  isLoading: boolean;
  errors: string[];
  addUser: (username: string) => void;
}
export const useUserStore = create<UserState>()(persist(devtools(immer((set) => ({
  users: [],
  currentUser: null,
  settings: {},
  isLoading: false,
  errors: [],
  fetchUsers: async () => {
    try {
      const result = await fetch("https://jsonplaceholder.typicode.com/users");
      const json = await result.json() as User[];
      set({users:json})
    } catch (error) {
      console.log(error)
    }

},
  addUser: (username: string) => set((state) => {
    //   users: [...state.users, { id: Date.now(), username }], --соблюдаем иммутабельность
    state.users.push({id:Date.now(), username}) //изменили на пуш
    }),
 
}))),{name:"userStore", version: 1}));



const Menu = () => {
  return <h2>Menu</h2>
};

export default Menu;
