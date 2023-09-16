import { create } from "zustand";
import { Customer } from "../types";
import { persist, createJSONStorage } from "zustand/middleware";
interface CurrentUserStore {
  cookie?: string;
  customer?: Customer;
  setCookie: (cookie: string) => void;
  setCustomer: (customer: Customer) => void;
}

const useCurrentUser = create(
  persist<CurrentUserStore>(
    (set) => ({
      cookie: null,
      customer: null,
      setCookie: (cookie: string) => set({ cookie: cookie }),
      setCustomer: (customer: Customer) => set({ customer: customer }),
    }),
    {
      name: "user-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCurrentUser;
