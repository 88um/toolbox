import { create } from "zustand";
import { Account } from "../types";

type Types = "login" | "edit";

interface ModalStore {
  onOpen: () => void;
  onClose: () => void;
  setType: (type: Types) => void;
  setAccount: (account: Account) => void;
  type: Types;
  account? : Account 
  isOpen: boolean;
}

const useAccountModal = create<ModalStore>((set) => ({
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  setType: (type: Types) => set({ type: type }),
  setAccount: (account: Account ) => set({ account: account}),
  type: "login",
  isOpen: false,
  account: undefined
}));


export default useAccountModal;