import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware';
import i18n from '../i18n';

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
                i18n.changeLanguage(lang);
                set({ lang });
            },
            toggleLang: () => {
                const newLang = get().lang === 'ar' ? 'en' : 'ar';
                get().setLang(newLang);
            },
        }),
        {
            name: 'language-storage',
            storage: createJSONStorage(() => localStorage),
        }
    )
);
