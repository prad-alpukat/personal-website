import { create } from 'zustand'

const useStore = create((set) => ({
    isLoading: false,
    setIsLoading: (loading: boolean) => set({ isLoading: loading }),
}))

export default useStore