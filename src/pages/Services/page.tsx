import React from "react";
import styles from "@/sass/pages/Services/services.module.scss";
import { useTranslation } from "react-i18next";
import { useLanguageStore } from "@/store/languageStore";
import Banner from "@/components/common/Banner";
import SectionName from "@/components/common/SectionName";
import { motion } from "framer-motion";
import { FiCheckCircle, FiHeart, FiActivity, FiUsers, FiHelpCircle, FiBookOpen } from "react-icons/fi";

const iconMap: { [key: number]: React.ReactNode } = {
    1: <FiUsers />,
    2: <FiHeart />,
    3: <FiActivity />,
    4: <FiCheckCircle />,
    5: <FiHelpCircle />,
    6: <FiBookOpen />,
};

export default function ServicesPage() {
    const { t } = useTranslation("services");
    const { lang } = useLanguageStore();

    // Get list of services from translations
    const servicesList = t("list", { returnObjects: true });
    const services = Array.isArray(servicesList) ? servicesList : [];

    return (
        <div className={styles.servicesPage} dir={lang === "ar" ? "rtl" : "ltr"}>
            <section className={styles.banner}>
                <Banner banner="services" />
            </section>

            <section className={styles.content}>
                <div className={styles.container}>
                    <SectionName
                        title={t("section.title")}
                        description={t("section.description")}
                    />

                    <div className={styles.servicesGrid}>
                        {services.map((service, index) => (
                            <motion.div
                                key={service.id}
                                className={styles.serviceCard}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <div className={styles.iconWrapper}>
                                    {iconMap[service.id] || <FiCheckCircle />}
                                </div>
                                <div className={styles.cardInfo}>
                                    <h3>{service.title}</h3>
                                    <p>{service.description}</p>
                                </div>
                                <div className={styles.cardFooter}>
                                    <span className={styles.moreLink}>{lang === "ar" ? "تعرف على المزيد" : "Learn More"}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
