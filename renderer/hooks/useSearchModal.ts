import { create } from "zustand";

interface SearchStore{
    onOpen : () => void;
    onClose : () => void;
    isOpen : boolean;
}

const useSearchModal = create<SearchStore>((set) =>({
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
    isOpen: false,

}))

export default useSearchModal;