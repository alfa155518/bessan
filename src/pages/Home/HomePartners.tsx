import { useTranslation } from "react-i18next";
import SectionName from "@/components/common/SectionName";
import partner1 from "@/assets/home/partner-6.webp";
import partner2 from "@/assets/home/partner-2.webp";
import partner3 from "@/assets/home/partner-3.webp";
import partner4 from "@/assets/home/partner-4.webp";
import partner5 from "@/assets/home/partner-5.webp";
import partner6 from "@/assets/home/partner-6.webp";
import partner7 from "@/assets/home/partner-7.webp";
import partner8 from "@/assets/home/partner-8.webp";
import partner9 from "@/assets/home/partner-9.webp";
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
        partner7,
        partner8,
        partner9,
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
