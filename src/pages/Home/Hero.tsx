import { motion, type Variants } from 'framer-motion';
import styles from '../../sass/pages/Home/hero.module.scss';
import { useLanguageStore } from '@/store/languageStore';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';

export default function Hero() {

    const { t } = useTranslation("hero")
    const { lang } = useLanguageStore()

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    return (
        <section className={styles.hero} dir={lang === "ar" ? "rtl" : "ltr"}>
            <motion.div
                className={styles.container}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.h1 className={styles.title} variants={itemVariants}>
                    {t("title")}
                </motion.h1>

                <motion.h2 className={styles.subtitle} variants={itemVariants}>
                    {t("subtitle")}
                </motion.h2>

                <motion.p className={styles.description} variants={itemVariants}>
                    {t("description")}
                </motion.p>

                <motion.div className={styles.actions} variants={itemVariants}>
                    <Link to="/projects" className={`${styles.btn} ${styles.btnPrimary}`}>
                        {t("buttons.projects")}
                    </Link>
                    <Link to="/contact" className={`${styles.btn} ${styles.btnSecondary}`}>
                        {t("buttons.contact")}
                    </Link>
                </motion.div>
            </motion.div>
        </section>
    );
}
