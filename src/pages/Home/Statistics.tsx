import styles from "@/sass/pages/Home/statistics.module.scss";
import { useTranslation } from "react-i18next";
import { useLanguageStore } from "@/store/languageStore";
import Counter from "@/components/common/Counter";

export default function Statistics() {
    const { t } = useTranslation("statisticsSection");
    const { lang } = useLanguageStore();
    return (
        <section className={styles.statistics} dir={lang === "ar" ? "rtl" : "ltr"}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <h2>{t("title")}</h2>
                    <p>{t("description")}</p>
                </div>
                <div className={styles.statsContainer}>
                    <div className={styles.statistic}>
                        <strong><Counter value={10} />K+</strong>
                        <span>{t("beneficiaries")}</span>
                    </div>
                    <div className={styles.statistic}>
                        <strong><Counter value={50} />+</strong>
                        <span>{t("projects")}</span>
                    </div>
                    <div className={styles.statistic}>
                        <strong><Counter value={100} />+</strong>
                        <span>{t("volunteers")}</span>
                    </div>
                    <div className={styles.statistic}>
                        <strong><Counter value={15} />+</strong>
                        <span>{t("years")}</span>
                    </div>
                </div>
            </div>
        </section>
    );
}