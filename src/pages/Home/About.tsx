import { FiHeart } from "react-icons/fi";
import { GiThreeLeaves } from "react-icons/gi";
import { GrEmptyCircle } from "react-icons/gr";
import styles from "@/sass/pages/Home/about.module.scss";
import aboutImg from "@/assets/home/about.webp";
import { useTranslation } from "react-i18next";
import { useLanguageStore } from "@/store/languageStore";
import { motion } from "framer-motion";
import { Link } from "react-router";

export default function About() {
    const { t } = useTranslation("aboutSection");
    const { lang } = useLanguageStore();

    return (
        <section className={styles.about} dir={lang === "ar" ? "rtl" : "ltr"}>
            <div className={styles.container}>
                <motion.div
                    className={styles.left}
                    initial={{ opacity: 0, x: lang === "ar" ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <img src={aboutImg} alt="about" />
                </motion.div>

                <motion.div
                    className={styles.right}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.h2 >{t("title")}</motion.h2>
                    <motion.p >{t("description")}</motion.p>

                    <motion.div className={styles.stats} >
                        <motion.div className={styles.stat} >
                            <div className={styles.iconWrapper}>
                                <FiHeart />
                            </div>
                            <strong>{t("stats.humanity")}</strong>
                        </motion.div>

                        <motion.div className={styles.stat} >
                            <div className={styles.iconWrapper}>
                                <GiThreeLeaves />
                            </div>
                            <strong>{t("stats.sustainability")}</strong>
                        </motion.div>

                        <motion.div className={styles.stat} >
                            <div className={styles.iconWrapper}>
                                <GrEmptyCircle />
                            </div>
                            <strong>{t("stats.transparency")}</strong>
                        </motion.div>
                    </motion.div>
                    <Link to="/about" className={styles.btn}>
                        {t("buttons.about")}
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}