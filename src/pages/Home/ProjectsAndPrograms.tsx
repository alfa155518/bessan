import { FaPeopleCarryBox } from "react-icons/fa6";
import { FiHeart } from "react-icons/fi";
import { GiThreeLeaves } from "react-icons/gi";
import { GrEmptyCircle } from "react-icons/gr";
import SectionName from "@/components/common/SectionName";
import styles from "@/sass/pages/Home/projectsAndPrograms.module.scss";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import { useLanguageStore } from "@/store/languageStore";
import { motion } from "framer-motion";

export default function ProjectsAndPrograms() {
    const { t } = useTranslation("projectsAndProgramsSection");
    const { lang } = useLanguageStore();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    const cards = [
        { icon: <FaPeopleCarryBox />, title: t("card1.title"), desc: t("card1.description") },
        { icon: <FiHeart />, title: t("card2.title"), desc: t("card2.description") },
        { icon: <GrEmptyCircle />, title: t("card3.title"), desc: t("card3.description") },
        { icon: <GiThreeLeaves />, title: t("card4.title"), desc: t("card4.description") },
    ];

    return (
        <section className={styles.projectAndPrograms} dir={lang === "ar" ? "rtl" : "ltr"}>
            <SectionName title={t("title")} description={t("description")} />

            <motion.div
                className={styles.cards}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {cards.map((card, index) => (
                    <motion.div key={index} className={styles.card} variants={itemVariants}>
                        {card.icon}
                        <h3>{card.title}</h3>
                        <p>{card.desc}</p>
                    </motion.div>
                ))}
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
            >
                <Link to="/projects" className={styles.btn}>
                    {t("btn")}
                </Link>
            </motion.div>
        </section >
    );
}