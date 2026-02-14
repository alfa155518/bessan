import { type ReactNode, createContext } from "react";
import { motion } from "framer-motion";
import styles from "../../sass/components/projects/projects.module.scss";
import SectionName from "../common/SectionName";

// --- Context ---
const ProjectsContext = createContext<{ dir: "rtl" | "ltr" } | null>(null);

// --- Root Component ---
interface ProjectsProps {
    children: ReactNode;
    dir?: "rtl" | "ltr";
}

export default function Projects({ children, dir = "ltr" }: ProjectsProps) {
    return (
        <ProjectsContext.Provider value={{ dir }}>
            <section className={styles.projectAndPrograms} dir={dir}>
                {children}
            </section>
        </ProjectsContext.Provider>
    );
}

// --- Sub-components ---

// Header
Projects.Header = function ProjectsHeader({ title, description }: { title: string; description?: string }) {
    return <SectionName title={title} description={description} />;
};

// List (Outer container for cards)
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

Projects.List = function ProjectsList({ children }: { children: ReactNode }) {
    return (
        <motion.div
            className={styles.cards}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            {children}
        </motion.div>
    );
};

// Card
const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

Projects.Card = function ProjectsCard({ children }: { children: ReactNode }) {
    return (
        <motion.div className={styles.card} variants={itemVariants}>
            {children}
        </motion.div>
    );
};

// Icon
Projects.Icon = function ProjectsIcon({ children }: { children: ReactNode }) {
    return <>{children}</>;
};

// Title
Projects.Title = function ProjectsTitle({ children }: { children: ReactNode }) {
    return <h3>{children}</h3>;
};

// Description
Projects.Description = function ProjectsDescription({ children }: { children: ReactNode }) {
    return <p>{children}</p>;
};

// Details Button
Projects.Details = function ProjectsDetails({ label, onClick }: { label: string; onClick?: () => void }) {
    return (
        <button className={styles.detailsBtn} onClick={onClick}>
            {label}
        </button>
    );
};

// Footer Action (e.g., "See More" button)
Projects.Footer = function ProjectsFooter({ children }: { children: ReactNode }) {
    return (
        <motion.div
            className={styles.btnWrapper}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
        >
            {children}
        </motion.div>
    );
};
