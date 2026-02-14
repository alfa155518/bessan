import styles from "@/sass/components/common/newsCard.module.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiCalendar, FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { useLanguageStore } from "@/store/languageStore";

interface NewsCardProps {
    id: number | string;
    title: string;
    date: string;
    image: string;
    category?: string;
    readMoreText: string;
    index?: number;
}

export default function NewsCard({ id, title, date, image, category, readMoreText, index = 0 }: NewsCardProps) {
    const { lang } = useLanguageStore();
    const isRtl = lang === "ar";

    return (
        <motion.div
            className={styles.newsCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            dir={lang === "ar" ? "rtl" : "ltr"}
        >
            <div className={styles.imageWrapper}>
                {category && <span className={styles.categoryBadge}>{category}</span>}
                <img src={image} alt={title} loading="lazy" />
            </div>

            <div className={styles.content}>
                <div className={styles.date}>
                    <FiCalendar size={20} />
                    <span>{date}</span>
                </div>

                <h3>{title}</h3>

                <div className={styles.footer}>
                    <Link to={`/news/${id}`} className={styles.readMore}>
                        {readMoreText}
                        {isRtl ? <FiArrowLeft /> : <FiArrowRight />}
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}
