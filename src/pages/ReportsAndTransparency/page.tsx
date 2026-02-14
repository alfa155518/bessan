import styles from "@/sass/pages/ReportsAndTransparency/reports.module.scss";
import { useTranslation } from "react-i18next";
import { useLanguageStore } from "@/store/languageStore";
import Banner from "@/components/common/Banner";
import SectionName from "@/components/common/SectionName";
import { motion } from "framer-motion";
import { FiFileText, FiDownload, FiBarChart2, FiDollarSign } from "react-icons/fi";

export default function ReportsAndTransparencyPage() {
    const { t } = useTranslation("reports");
    const { lang } = useLanguageStore();

    const reportTypes = [
        { id: "annual", title: t("types.annual.title"), icon: <FiFileText />, desc: t("types.annual.desc") },
        { id: "financial", title: t("types.financial.title"), icon: <FiDollarSign />, desc: t("types.financial.desc") },
        { id: "performance", title: t("types.performance.title"), icon: <FiBarChart2 />, desc: t("types.performance.desc") },
    ];

    const reports = [
        { id: 1, title: "التقرير السنوي 2023", year: "2023", size: "2.4 MB", type: "PDF" },
        { id: 2, title: "التقرير المالي للربع الثالث 2023", year: "2023", size: "1.8 MB", type: "PDF" },
        { id: 3, title: "تقرير إحصائيات الأداء النصف سنوي", year: "2023", size: "3.1 MB", type: "PDF" },
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
                    <div className={styles.table}>
                        {reports.map((report) => (
                            <div key={report.id} className={styles.reportRow}>
                                <div className={styles.reportInfo}>
                                    <FiFileText className={styles.fileIcon} />
                                    <div>
                                        <h4>{report.title}</h4>
                                        <span>{report.type} • {report.size} • {report.year}</span>
                                    </div>
                                </div>
                                <button className={styles.downloadBtn}>
                                    <FiDownload /> {t("download.btn")}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}