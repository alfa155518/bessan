import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enHeader from "./locales/en/header.json";
import enFooter from "./locales/en/footer.json";
import arHeader from "./locales/ar/header.json";
import arFooter from "./locales/ar/footer.json";
import enHero from "./locales/en/hero.json";
import arHero from "./locales/ar/hero.json";
import enAboutSection from "./locales/en/aboutSection.json";
import arAboutSection from "./locales/ar/aboutSection.json";
import enStatisticsSection from "./locales/en/statisticsSection.json";
import arStatisticsSection from "./locales/ar/statisticsSection.json";
import enProjectsAndProgramsSection from "./locales/en/projectsAndProgramsSection.json";
import arProjectsAndProgramsSection from "./locales/ar/projectsAndProgramsSection.json";
const savedLanguage = JSON.parse(localStorage.getItem('language-storage') || '{}')?.state?.language || "ar";

i18n.use(initReactI18next).init({
    resources: {
        en: {
            hero: enHero,
            aboutSection: enAboutSection,
            statisticsSection: enStatisticsSection,
            projectsAndProgramsSection: enProjectsAndProgramsSection,
            header: enHeader,
            footer: enFooter
        },
        ar: {
            hero: arHero,
            aboutSection: arAboutSection,
            statisticsSection: arStatisticsSection,
            projectsAndProgramsSection: arProjectsAndProgramsSection,
            header: arHeader,
            footer: arFooter
        }
    },
    lng: savedLanguage,
    fallbackLng: "en",
    interpolation: {
        escapeValue: false
    }
});

export default i18n;
