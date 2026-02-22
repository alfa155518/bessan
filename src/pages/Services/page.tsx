import React from "react";
import styles from "@/sass/pages/Services/services.module.scss";
import { useTranslation } from "react-i18next";
import { useLanguageStore } from "@/store/languageStore";
import Banner from "@/components/common/Banner";
import SectionName from "@/components/common/SectionName";
import { motion } from "framer-motion";
import { FiHeart, FiSmile, FiZap, FiUsers, FiBarChart2, FiCheckCircle } from "react-icons/fi";
import { Link } from "react-router";

interface Service {
    id: number;
    title: string;
    features: string[];
}

interface CaseStep {
    id: number;
    title: string;
}

interface CaseManagement {
    title: string;
    description: string;
    steps: CaseStep[];
}

const iconMap: { [key: number]: React.ReactNode } = {
    1: <FiHeart />,
    2: <FiSmile />,
    3: <FiZap />,
    4: <FiUsers />,
    5: <FiBarChart2 />,
};

export default function ServicesPage() {
    const { t } = useTranslation("services");
    const { lang } = useLanguageStore();

    // Get list of services from translations
    const servicesList = t("list", { returnObjects: true });
    const services = Array.isArray(servicesList) ? (servicesList as Service[]) : [];

    // Get Case Management data
    const caseManagement = t("caseManagement", { returnObjects: true }) as CaseManagement;

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
                                    <ul className={styles.featuresList}>
                                        {service.features.map((feature, fIndex) => (
                                            <li key={fIndex}>{feature}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className={styles.cardFooter}>
                                    <Link to={`/projects`} className={styles.moreLink}>{lang === "ar" ? "تعرف على المزيد" : "Learn More"}</Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {caseManagement && (
                <section className={styles.caseManagement}>
                    <div className={styles.caseContainer}>
                        <motion.div
                            className={styles.caseCard}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <div className={styles.caseHeader}>
                                <h2>{caseManagement.title}</h2>
                                <p>{caseManagement.description}</p>
                            </div>

                            <div className={styles.stepsGrid}>
                                {caseManagement.steps.map((step, index) => (
                                    <motion.div
                                        key={step.id}
                                        className={styles.stepItem}
                                        initial={{ opacity: 0, x: lang === "ar" ? 20 : -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1, duration: 0.5 }}
                                        viewport={{ once: true }}
                                    >
                                        <div className={styles.stepNumber}>
                                            {step.id}
                                        </div>
                                        <h4>{step.title}</h4>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>
            )}
        </div>
    );
}

