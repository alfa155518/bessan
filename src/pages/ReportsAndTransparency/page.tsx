import styles from "@/sass/pages/ReportsAndTransparency/reports.module.scss";
import { useTranslation } from "react-i18next";
import { useLanguageStore } from "@/store/languageStore";
import Banner from "@/components/common/Banner";
import SectionName from "@/components/common/SectionName";
import { motion, AnimatePresence } from "framer-motion";
import { FiFileText, FiDownload, FiBarChart2, FiDollarSign, FiCalendar } from "react-icons/fi";
import { useState } from "react";

export default function ReportsAndTransparencyPage() {
    const { t } = useTranslation("reports");
    const { lang } = useLanguageStore();
    const [activeFilter, setActiveFilter] = useState("all");

    const reportTypes = [
        { id: "annual", title: t("types.annual.title"), icon: <FiFileText />, desc: t("types.annual.desc") },
        { id: "financial", title: t("types.financial.title"), icon: <FiDollarSign />, desc: t("types.financial.desc") },
        { id: "performance", title: t("types.performance.title"), icon: <FiBarChart2 />, desc: t("types.performance.desc") },
    ];

    const reports = [
        { id: 1, title: "التقرير السنوي 2023", date: "2023-12-31", period: "annual", size: "2.4 MB", type: "PDF" },
        { id: 2, title: "التقرير المالي - ديسمبر", date: "2023-12-05", period: "monthly", size: "1.2 MB", type: "PDF" },
        { id: 3, title: "تقرير إنجازات اليوم", date: "2024-02-15", period: "daily", size: "0.5 MB", type: "PDF" },
        { id: 4, title: "التقرير المالي للربع الثالث 2023", date: "2023-09-30", period: "monthly", size: "1.8 MB", type: "PDF" },
        { id: 5, title: "تقرير إحصائيات الأداء النصف سنوي", date: "2023-06-30", period: "monthly", size: "3.1 MB", type: "PDF" },
        { id: 6, title: "التقرير السنوي 2022", date: "2022-12-31", period: "annual", size: "2.1 MB", type: "PDF" },
    ];

    const filteredReports = activeFilter === "all"
        ? reports
        : reports.filter(report => report.period === activeFilter);

    const filters = [
        { id: "all", label: t("download.filter.all") },
        { id: "annual", label: t("download.filter.annual") },
        { id: "monthly", label: t("download.filter.monthly") },
        { id: "daily", label: t("download.filter.daily") },
    ];

    return (
        <div className={styles.reportsPage} dir={lang === "ar" ? "rtl" : "ltr"}>
            <section className={styles.banner}>
                <Banner banner="reports" />
            </section>

            <section className={styles.types}>
                <div className={styles.container}>
                    <div className={styles.typeGrid}>
                        {reportTypes.map((type, index) => (
                            <motion.div
                                key={type.id}
                                className={styles.typeCard}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className={styles.icon}>{type.icon}</div>
                                <h3>{type.title}</h3>
                                <p>{type.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.downloadList}>
                <div className={styles.container}>
                    <SectionName title={t("download.title")} description={t("download.description")} />

                    <div className={styles.filterTabs}>
                        {filters.map((filter) => (
                            <button
                                key={filter.id}
                                className={`${styles.filterBtn} ${activeFilter === filter.id ? styles.active : ""}`}
                                onClick={() => setActiveFilter(filter.id)}
                            >
                                {filter.label}
                            </button>
                        ))}
                    </div>

                    <motion.div layout className={styles.reportGrid}>
                        <AnimatePresence mode="popLayout">
                            {filteredReports.map((report) => (
                                <motion.div
                                    key={report.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                    className={styles.reportCard}
                                >
                                    <div className={styles.cardHeader}>
                                        <div className={styles.fileIcon}>
                                            <FiFileText size={30} />
                                        </div>
                                        <span className={styles.fileType}>{report.type}</span>
                                    </div>
                                    <div className={styles.cardBody}>
                                        <h4>{report.title}</h4>
                                        <div className={styles.meta}>
                                            <span>
                                                <FiCalendar size={18} /> {report.date}
                                            </span>
                                            <span>{report.size}</span>
                                        </div>
                                    </div>
                                    <button className={styles.downloadBtn}>
                                        <FiDownload /> {t("download.btn")}
                                    </button>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}