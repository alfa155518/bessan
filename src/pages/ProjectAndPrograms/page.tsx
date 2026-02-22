import Banner from "@/components/common/Banner";
import styles from "@/sass/pages/ProjectAndPrograms/projectAndPrograms.module.scss";
import { useLanguageStore } from "@/store/languageStore";
import heroImg from "@/assets/projects/projects-banner.webp";
import { motion } from "framer-motion";
import SectionName from "@/components/common/SectionName";
import { useTranslation } from "react-i18next";
import Counter from "@/components/common/Counter";
import Projects from "@/components/common/Projects";
import { FaBuilding } from "react-icons/fa6";
import { FiHeart, FiShield, FiActivity, FiSmile } from "react-icons/fi";

import ProjectMedia from "./ProjectMedia";

interface ProgramItem {
    id: number;
    title: string;
    description: string;
}

const iconMap: { [key: number]: React.ReactNode } = {
    1: <FaBuilding />,
    2: <FiSmile />,
    3: <FiShield />,
    4: <FiActivity />,
    5: <FiHeart />,
};

export default function ProjectAndPrograms() {
    const { lang } = useLanguageStore();
    const { t: tProjects } = useTranslation("projects");
    const { t: tSection } = useTranslation("projectsAndProgramsSection");

    // Get list of programs from translations
    const programsList = tSection("list", { returnObjects: true });
    const programs = Array.isArray(programsList) ? (programsList as ProgramItem[]) : [];

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
                    {programs.map((program) => (
                        <Projects.Card key={program.id}>
                            <Projects.Icon>{iconMap[program.id] || <FiActivity />}</Projects.Icon>
                            <Projects.Title>{program.title}</Projects.Title>
                            <Projects.Description>{program.description}</Projects.Description>
                            <Projects.Details
                                label={tSection("details")}
                                onClick={() => console.log(`Details for ${program.title}`)}
                            />
                        </Projects.Card>
                    ))}
                </Projects.List>
            </Projects>

            <ProjectMedia />

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

