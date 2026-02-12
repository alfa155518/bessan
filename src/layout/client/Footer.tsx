import { motion } from "framer-motion";
import {
    FiMail,
    FiPhone,
    FiMapPin,
    FiFacebook,
    FiTwitter,
    FiInstagram,
    FiYoutube,
    FiArrowLeft,
    FiArrowRight
} from "react-icons/fi";


import styles from "@/sass/layout/client/footer.module.scss";
import Logo from "@/assets/logo.webp";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import { useLanguageStore } from "@/store/languageStore";


export default function Footer() {
    const { t } = useTranslation("footer");
    const { lang: language } = useLanguageStore();
    const year = new Date().getFullYear();

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    const isRtl = language === "ar";

    return (
        <footer className={styles.footer} dir={isRtl ? "rtl" : "ltr"}>
            <div className={styles.container}>
                <motion.div
                    className={styles.grid}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                >
                    {/* Brand Section */}
                    <motion.div className={styles.brand} variants={itemVariants}>
                        <Link to="/" className={styles.logo}>
                            <img src={Logo} alt="Beesan Logo" />
                        </Link>
                        <p className={styles.description}>
                            {t("about.description")}
                        </p>
                        <div className={styles.socials}>
                            <a href="#" className={styles.socialLink} aria-label="Facebook">
                                <FiFacebook />
                            </a>
                            <a href="#" className={styles.socialLink} aria-label="Twitter">
                                <FiTwitter />
                            </a>
                            <a href="#" className={styles.socialLink} aria-label="Instagram">
                                <FiInstagram />
                            </a>
                            <a href="#" className={styles.socialLink} aria-label="Youtube">
                                <FiYoutube />
                            </a>
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div className={styles.section} variants={itemVariants}>
                        <h3 className={styles.title}>{t("quickLinks.title")}</h3>
                        <ul className={styles.links}>
                            <li>
                                <Link to="/">
                                    {isRtl ? <FiArrowLeft /> : <FiArrowRight />}
                                    {t("quickLinks.home")}
                                </Link>
                            </li>
                            <li>
                                <Link to="/about">
                                    {isRtl ? <FiArrowLeft /> : <FiArrowRight />}
                                    {t("quickLinks.aboutUs")}
                                </Link>
                            </li>
                            <li>
                                <Link to="/projects">
                                    {isRtl ? <FiArrowLeft /> : <FiArrowRight />}
                                    {t("quickLinks.projects")}
                                </Link>
                            </li>
                            <li>
                                <Link to="/news">
                                    {isRtl ? <FiArrowLeft /> : <FiArrowRight />}
                                    {t("quickLinks.news")}
                                </Link>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Support Section */}
                    <motion.div className={styles.section} variants={itemVariants}>
                        <h3 className={styles.title}>{t("support.title")}</h3>
                        <ul className={styles.links}>
                            <li>
                                <Link to="/contact">
                                    {isRtl ? <FiArrowLeft /> : <FiArrowRight />}
                                    {t("support.contact")}
                                </Link>
                            </li>
                            <li>
                                <Link to="/donate">
                                    {isRtl ? <FiArrowLeft /> : <FiArrowRight />}
                                    {t("support.donate")}
                                </Link>
                            </li>
                            <li>
                                <Link to="/faq">
                                    {isRtl ? <FiArrowLeft /> : <FiArrowRight />}
                                    {t("support.faq")}
                                </Link>
                            </li>
                            <li>
                                <Link to="/privacy">
                                    {isRtl ? <FiArrowLeft /> : <FiArrowRight />}
                                    {t("support.privacy")}
                                </Link>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Contact & Newsletter */}
                    <motion.div className={styles.newsletter} variants={itemVariants}>
                        <div className={styles.section}>
                            <h3 className={styles.title}>{t("contact.title")}</h3>
                            <div className={styles.contactInfo}>
                                <div className={styles.infoItem}>
                                    <FiMapPin className={styles.icon} />
                                    <span>{t("contact.address")}</span>
                                </div>
                                <div className={styles.infoItem}>
                                    <FiPhone className={styles.icon} />
                                    <span>{t("contact.phone")}</span>
                                </div>
                                <div className={styles.infoItem}>
                                    <FiMail className={styles.icon} />
                                    <a href={`mailto:${t("contact.email")}`}>{t("contact.email")}</a>
                                </div>
                            </div>
                        </div>


                    </motion.div>
                </motion.div>

                {/* Bottom Bar */}
                <motion.div
                    className={styles.bottomBar}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    <p className={styles.copyright}>
                        {t("copyright").replace("{year}", year.toString())}
                    </p>
                    <div className={styles.bottomLinks}>
                        <Link to="/terms">{t("support.privacy")}</Link>
                        <Link to="/cookies">{isRtl ? "ملفات التعريف" : "Cookies Settings"}</Link>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}