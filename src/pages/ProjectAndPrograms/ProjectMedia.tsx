import styles from "@/sass/pages/ProjectAndPrograms/media.module.scss";
import { useTranslation } from "react-i18next";
import { useLanguageStore } from "@/store/languageStore";
import SectionName from "@/components/common/SectionName";
import { motion } from "framer-motion";
import media1 from "@/assets/home/news-1.webp";
import media2 from "@/assets/home/news-2.webp";
import media3 from "@/assets/home/news-3.webp";
import media4 from "@/assets/home/news-1.webp";
import media5 from "@/assets/home/news-2.webp";
import media6 from "@/assets/home/news-3.webp";

export default function ProjectMedia() {
    const { t } = useTranslation("projects");
    const { lang } = useLanguageStore();

    const mediaItems = [
        { id: 1, type: "image", src: media1, title: "Project Activity 1" },
        { id: 2, type: "image", src: media2, title: "Success Story" },
        { id: 3, type: "image", src: media3, title: "Community Meeting" },
        { id: 4, type: "image", src: media4, title: "Aid Distribution" },
        { id: 5, type: "image", src: media5, title: "Field Report" },
        { id: 6, type: "image", src: media6, title: "Workshop Session" },
    ];

    return (
        <section className={styles.media} dir={lang === "ar" ? "rtl" : "ltr"}>
            <div className={styles.container}>
                <SectionName title={t("media.title")} description={t("media.description")} />
                <div className={styles.grid}>
                    {mediaItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            className={`${styles.item} ${item.type === "video" ? styles.video : styles.image}`}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <img src={item.src} alt={item.title} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
