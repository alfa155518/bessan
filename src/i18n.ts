import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enHeader from "./locales/en/header.json";
import enFooter from "./locales/en/footer.json";
import arHeader from "./locales/ar/header.json";
import arFooter from "./locales/ar/footer.json";
import enHero from "./locales/en/Home/hero.json";
import arHero from "./locales/ar/Home/hero.json";
import enAboutSection from "./locales/en/Home/aboutSection.json";
import arAboutSection from "./locales/ar/Home/aboutSection.json";
import enStatisticsSection from "./locales/en/Home/statisticsSection.json";
import arStatisticsSection from "./locales/ar/Home/statisticsSection.json";
import enProjectsAndProgramsSection from "./locales/en/Home/projectsAndProgramsSection.json";
import arProjectsAndProgramsSection from "./locales/ar/Home/projectsAndProgramsSection.json";
import enAboutBanner from "./locales/en/About/about.json";
import arAboutBanner from "./locales/ar/About/about.json";
import enProjects from "./locales/en/ProjectAndPrograms/projects.json";
import arProjects from "./locales/ar/ProjectAndPrograms/projects.json";
import enHome from "./locales/en/home.json";
import arHome from "./locales/ar/home.json";
import enContact from "./locales/en/contact.json";
import arContact from "./locales/ar/contact.json";
import enNews from "./locales/en/news.json";
import arNews from "./locales/ar/news.json";
import enReports from "./locales/en/reports.json";
import arReports from "./locales/ar/reports.json";
import enServices from "./locales/en/services.json";
import arServices from "./locales/ar/services.json";
const savedLanguage = JSON.parse(localStorage.getItem('language-storage') || '{}')?.state?.lang || "ar";

i18n.use(initReactI18next).init({
    resources: {
        en: {
            // Home
            hero: enHero,
            aboutSection: enAboutSection,
            statisticsSection: enStatisticsSection,
            projectsAndProgramsSection: enProjectsAndProgramsSection,
            // About
            about: enAboutBanner,
            // Projects
            projects: enProjects,
            // Layout
            header: enHeader,
            footer: enFooter,
            home: enHome,
            contact: enContact,
            news: enNews,
            reports: enReports,
            services: enServices,
        },
        ar: {
            // Home
            hero: arHero,
            aboutSection: arAboutSection,
            statisticsSection: arStatisticsSection,
            projectsAndProgramsSection: arProjectsAndProgramsSection,
            // About
            about: arAboutBanner,
            // Projects
            projects: arProjects,
            // Layout
            header: arHeader,
            footer: arFooter,
            home: arHome,
            contact: arContact,
            news: arNews,
            reports: arReports,
            services: arServices,
        }
    },
    lng: savedLanguage,
    fallbackLng: "en",
    interpolation: {
        escapeValue: false
    }
});

export default i18n;
