import Banner from "@/components/common/Banner";
import styles from "@/sass/pages/About/about.module.scss";
import visionImage from "@/assets/about/our-vision.webp";
import messageImage from "@/assets/about/our-message.webp";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useLanguageStore } from "@/store/languageStore";
import SectionName from "@/components/common/SectionName";
import { FiHeart } from "react-icons/fi";
import { GiThreeLeaves } from "react-icons/gi";
import { GrEmptyCircle } from "react-icons/gr";
import type { IconType } from "react-icons";
import FreemodeSwiper from "@/components/common/FreemodeSwiper";


interface ValueItemProps {
    image: string;
    title: string;
    highlight: string;
    description: string;
    reverse?: boolean;
}

const ValueItem = ({ image, title, highlight, description, reverse = false }: ValueItemProps) => {
    return (
        <motion.div
            className={`${styles.valueItem} ${reverse ? styles.reverse : ""}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className={styles.imageContainer}>
                <img src={image} className={styles.image} alt={title} />
            </div>
            <div className={styles.info}>
                <h3>{title}</h3>
                <strong>{highlight}</strong>
                <p>{description}</p>
            </div>
        </motion.div>
    );
};

const ValueCard = ({ icon: Icon, title, description, index }: { icon: IconType; title: string; description: string; index: number }) => {
    return (
        <motion.div
            className={styles.card}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
        >
            <div className={styles.iconWrapper}>
                <Icon size={30} />
            </div>
            <h4>{title}</h4>
            <p>{description}</p>
        </motion.div>
    );
};

export default function AboutPage() {
    const { lang } = useLanguageStore();
    const { t } = useTranslation("about");

    const valuesData = [
        {
            icon: FiHeart,
            title: t("values.humanity.title"),
            description: t("values.humanity.description"),
        },
        {
            icon: GiThreeLeaves,
            title: t("values.sustainability.title"),
            description: t("values.sustainability.description"),
        },
        {
            icon: GrEmptyCircle,
            title: t("values.transparency.title"),
            description: t("values.transparency.description"),
        },
    ];

    return (
        <div className={styles.about} dir={lang === "ar" ? "rtl" : "ltr"}>
            <section className={styles.banner}>
                <Banner banner="about" />
            </section>

            {/* vision and message */}
            <section className={styles.vision_and_message}>
                <div className={styles.container}>
                    <ValueItem
                        image={visionImage}
                        title={t("vision.title")}
                        highlight={t("vision.highlight")}
                        description={t("vision.description")}
                    />

                    <ValueItem
                        image={messageImage}
                        title={t("message.title")}
                        highlight={t("message.highlight")}
                        description={t("message.description")}
                        reverse
                    />
                </div>
            </section>

            {/* values */}
            <section className={styles.values}>
                <div className={styles.container}>
                    <SectionName title={t("values.title")} />
                    <div className={styles.cards}>
                        {valuesData.map((item, index) => (
                            <ValueCard
                                key={index}
                                index={index}
                                icon={item.icon}
                                title={item.title}
                                description={item.description}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className={styles.team}>
                <div className={styles.container}>
                    <SectionName title={t("team.title")} />
                    <div className={styles.members}>
                        <FreemodeSwiper />
                    </div>
                </div>
            </section>
        </div>
    );
}
