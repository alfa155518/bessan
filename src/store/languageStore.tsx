import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware';

type Language = "en" | "ar";

interface LangState {
    lang: Language;
    setLang: (lang: Language) => void;
    toggleLang: () => void;
}

export const useLanguageStore = create<LangState>()(
    persist(
        (set, get) => ({
            lang: 'ar',
            setLang: (lang: Language) => {
                import('../i18n').then(({ default: i18n }) => {
                    i18n.changeLanguage(lang);
                });
                set({ lang });
            },
            toggleLang: () => {
                const newLang = get().lang === 'ar' ? 'en' : 'ar';
                import('../i18n').then(({ default: i18n }) => {
                    i18n.changeLanguage(newLang);
                });
                set({ lang: newLang });
            },
        }),
        {
            name: 'language-storage',
            storage: createJSONStorage(() => localStorage),
        }
    )
);
