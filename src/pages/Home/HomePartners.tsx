import { useTranslation } from "react-i18next";
import SectionName from "@/components/common/SectionName";
import partner1 from "@/assets/about/team-1.webp";
import partner2 from "@/assets/about/team-2.webp";
import partner3 from "@/assets/about/team-3.webp";
import partner4 from "@/assets/about/team-4.webp";
import partner5 from "@/assets/about/team-1.webp";
import partner6 from "@/assets/about/team-2.webp";
import styles from "@/sass/pages/Home/partners.module.scss";
import FreemodeSwiper from "@/components/common/FreemodeSwiper";



export default function HomePartners() {
    const { t } = useTranslation("home");
    const partners = [
        partner1,
        partner2,
        partner3,
        partner4,
        partner5,
        partner6,
    ];


    return (
        <section className={styles.partners}>
            <div className={styles.container}>
                <SectionName
                    title={t("partners.title")}
                    description={t("partners.description")}
                />
                <FreemodeSwiper data={partners} />
            </div>
        </section>
    );
}
