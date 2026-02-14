import styles from "@/sass/pages/NewsAndEvents/news.module.scss";
import { useTranslation } from "react-i18next";
import { useLanguageStore } from "@/store/languageStore";
import Banner from "@/components/common/Banner";
import SectionName from "@/components/common/SectionName";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import news3 from "@/assets/news/news-3.webp";

export default function NewsAndEventsPage() {
    const { t } = useTranslation("news");
    const { lang } = useLanguageStore();

    const featuredPost = {
        id: "featured",
        title: t("featured.item.title"),
        excerpt: t("featured.item.excerpt"),
        date: t("featured.item.date"),
        category: t("featured.item.category"),
        image: news3
    };

    const posts = [
        { id: 1, title: t("posts.item1.title"), excerpt: t("posts.item1.excerpt"), date: t("posts.item1.date"), category: t("posts.item1.category"), image: "https://picsum.photos/seed/news1/600/400" },
        { id: 2, title: t("posts.item2.title"), excerpt: t("posts.item2.excerpt"), date: t("posts.item2.date"), category: t("posts.item2.category"), image: "https://picsum.photos/seed/news2/600/400" },
        { id: 3, title: t("posts.item3.title"), excerpt: t("posts.item3.excerpt"), date: t("posts.item3.date"), category: t("posts.item3.category"), image: "https://picsum.photos/seed/news3/600/400" },
        { id: 4, title: t("posts.item4.title"), excerpt: t("posts.item4.excerpt"), date: t("posts.item4.date"), category: t("posts.item4.category"), image: "https://picsum.photos/seed/news4/600/400" },
    ];

    const announcements = [
        { id: 1, title: t("announcements.item1.title"), date: "2024-02-10" },
        { id: 2, title: t("announcements.item2.title"), date: "2024-02-05" },
    ];

    return (
        <div className={styles.newsPage} dir={lang === "ar" ? "rtl" : "ltr"}>
            <section className={styles.banner}>
                <Banner banner="news" />
            </section>

            <div className={styles.mainContent}>
                <div className={styles.container}>
                    {/* Featured Post */}
                    <motion.section
                        className={styles.featuredSection}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <SectionName title={t("featured.title")} />
                        <div className={styles.featuredCard}>
                            <div className={styles.imageWrapper}>
                                <img src={featuredPost.image} alt={featuredPost.title} />
                                <span className={styles.badge}>{featuredPost.category}</span>
                            </div>
                            <div className={styles.content}>
                                <span className={styles.date}>{featuredPost.date}</span>
                                <h2>{featuredPost.title}</h2>
                                <p>{featuredPost.excerpt}</p>
                                <Link to={`/news/featured`} className={styles.readMoreBtn}>
                                    {t("readMore")}
                                </Link>
                            </div>
                        </div>
                    </motion.section>

                    <div className={styles.contentGrid}>
                        {/* Latest News Grid */}
                        <section className={styles.latestNews}>
                            <SectionName title={t("updates.title")} description={t("updates.description")} />
                            <div className={styles.grid}>
                                {posts.map((post, index) => (
                                    <motion.div
                                        key={post.id}
                                        className={styles.newsCard}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        <div className={styles.cardImage}>
                                            <img src={post.image} alt={post.title} />
                                            <span className={styles.category}>{post.category}</span>
                                        </div>
                                        <div className={styles.cardContent}>
                                            <span className={styles.date}>{post.date}</span>
                                            <h3>{post.title}</h3>
                                            <p>{post.excerpt}</p>
                                            <Link to={`/news/${post.id}`} className={styles.link}>
                                                {t("readMore")}
                                            </Link>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </section>

                        {/* Announcements Section */}
                        <aside className={styles.announcementsSide}>
                            <SectionName title={t("announcements.title")} />
                            <div className={styles.annList}>
                                {announcements.map((item, index) => (
                                    <motion.div
                                        key={item.id}
                                        className={styles.annCard}
                                        initial={{ opacity: 0, x: lang === "ar" ? 30 : -30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        <div className={styles.annDate}>
                                            <span className={styles.day}>{item.date.split("-")[2]}</span>
                                            <span className={styles.month}>{item.date.split("-")[1]}</span>
                                        </div>
                                        <div className={styles.annInfo}>
                                            <h4>{item.title}</h4>
                                            <Link to={`/news/announcement/${item.id}`}>{t("details")}</Link>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </div>
    );
}
