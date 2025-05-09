import { create } from "zustand";

type MenuState = {
	isMenuOpen: boolean;
	handleMenu: () => void;
};

const useModalStore = create<MenuState>((set) => ({
	isMenuOpen: false,
	handleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
}));

export default useModalStore;
