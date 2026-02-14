import Banner from "@/components/common/Banner";
import styles from "@/sass/pages/ProjectAndPrograms/projectAndPrograms.module.scss";
import { useLanguageStore } from "@/store/languageStore";
import heroImg from "@/assets/projects/projects-banner.webp";
import { motion } from "framer-motion";
import SectionName from "@/components/common/SectionName";
import { useTranslation } from "react-i18next";
import Counter from "@/components/common/Counter";
import Projects from "@/components/projects/Projects";
import { FaPeopleCarryBox } from "react-icons/fa6";
import { FiHeart } from "react-icons/fi";
import { GrEmptyCircle } from "react-icons/gr";
import { GiThreeLeaves } from "react-icons/gi";

export default function ProjectAndPrograms() {
    const { lang } = useLanguageStore();
    const { t: tProjects } = useTranslation("projects");
    const { t: tSection } = useTranslation("projectsAndProgramsSection");

    const cards = [
        { icon: <FaPeopleCarryBox />, title: tSection("card1.title"), desc: tSection("card1.description") },
        { icon: <FiHeart />, title: tSection("card2.title"), desc: tSection("card2.description") },
        { icon: <GrEmptyCircle />, title: tSection("card3.title"), desc: tSection("card3.description") },
        { icon: <GiThreeLeaves />, title: tSection("card4.title"), desc: tSection("card4.description") },
    ];

    return (
        <div className={styles.project_and_programs} dir={lang === "ar" ? "rtl" : "ltr"}>
            <section className={styles.banner}>
                <Banner banner="projects" />
            </section>
            <section className={styles.hero}>
                <motion.img
                    src={heroImg}
                    alt="hero"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                />
            </section>

            <Projects dir={lang === "ar" ? "rtl" : "ltr"}>
                <Projects.Header title={tSection("title")} description={tSection("description")} />
                <Projects.List>
                    {cards.map((card, index) => (
                        <Projects.Card key={index}>
                            <Projects.Icon>{card.icon}</Projects.Icon>
                            <Projects.Title>{card.title}</Projects.Title>
                            <Projects.Description>{card.desc}</Projects.Description>
                            <Projects.Details
                                label={tSection("details")}
                                onClick={() => console.log(`Details for ${card.title}`)}
                            />
                        </Projects.Card>
                    ))}
                </Projects.List>
            </Projects>

            <section className={styles.influence}>
                <SectionName title={tProjects("influence.title")} />
                <div className={styles.cards}>
                    <div className={styles.statistic}>
                        <strong><Counter value={100} />K+</strong>
                        <span>{tProjects("influence.activeProjects")}</span>
                    </div>
                    <div className={styles.statistic}>
                        <strong><Counter value={200} />+</strong>
                        <span>{tProjects("influence.beneficiaries")}</span>
                    </div>
                    <div className={styles.statistic}>
                        <strong><Counter value={100} />+</strong>
                        <span>{tProjects("influence.volunteers")}</span>
                    </div>
                    <div className={styles.statistic}>
                        <strong><Counter value={15} />+</strong>
                        <span>{tProjects("influence.years")}</span>
                    </div>
                </div>
            </section>
        </div>
    )
}