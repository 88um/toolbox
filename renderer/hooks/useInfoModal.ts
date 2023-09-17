import { create } from "zustand";

type Types = "info" | "error";

interface ModalStore {
  onOpen: () => void;
  onClose: () => void;
  setType: (type: Types) => void;
  type: string;
  isOpen: boolean;
}

const userInfoModal = create<ModalStore>((set) => ({
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  setType: (type: Types) => set({ type: type }),
  type: "error",
  isOpen: false,
}));


export default userInfoModal;