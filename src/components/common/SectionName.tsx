import { useTranslation } from "react-i18next";
import styles from "@/sass/components/common/sectionName.module.scss";

export default function SectionName({ sectionName }: { sectionName: string }) {
    const { t } = useTranslation(`${sectionName}`);
    return (
        <div className={styles.sectionName}>
            <h2>{t("title")}</h2>
            <p>{t("description")}</p>
        </div>
    );
}