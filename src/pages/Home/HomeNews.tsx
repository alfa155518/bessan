import styles from "@/sass/pages/Home/news.module.scss";
import { useTranslation } from "react-i18next";
import { useLanguageStore } from "@/store/languageStore";
import SectionName from "@/components/common/SectionName";
import { Link } from "react-router-dom";
import news1 from "@/assets/home/news-1.webp";
import news2 from "@/assets/home/news-2.webp";
import news3 from "@/assets/home/news-3.webp";
import NewsCard from "@/components/common/NewsCard";

export default function HomeNews() {
    const { t } = useTranslation("home");
    const { lang } = useLanguageStore();

    const newsItems = [
        { id: 1, title: t("news.item1.title"), date: "2024-02-14", image: news1 },
        { id: 2, title: t("news.item2.title"), date: "2024-02-13", image: news2 },
        { id: 3, title: t("news.item3.title"), date: "2024-02-12", image: news3 },
    ];

    return (
        <section className={styles.news} dir={lang === "ar" ? "rtl" : "ltr"}>
            <div className={styles.container}>
                <SectionName
                    title={t("news.title")}
                    description={t("news.description")}
                />
                <div className={styles.grid}>
                    {newsItems.map((item, index) => (
                        <NewsCard
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            date={item.date}
                            image={item.image}
                            readMoreText={t("news.readMore")}
                            index={index}
                        />
                    ))}
                </div>
                <div className={styles.center}>
                    <Link to="/news" className={styles.btn}>
                        {t("news.viewAll")}
                    </Link>
                </div>
            </div>
        </section>
    );
}
