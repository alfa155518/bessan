
import styles from "@/sass/components/common/sectionName.module.scss";

interface SectionNameProps {
    title: string | boolean;
    description?: string | boolean;
}

export default function SectionName({ title, description = false }: SectionNameProps) {
    return (
        <div className={styles.sectionName}>
            <h2>{
                title
            }</h2>
            <p>
                {
                    description
                }
            </p>
        </div>
    );
}