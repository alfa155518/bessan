import styles from "@/sass/pages/Contact/contact.module.scss";
import { useTranslation } from "react-i18next";
import { useLanguageStore } from "@/store/languageStore";
import Banner from "@/components/common/Banner";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiClock } from "react-icons/fi";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export default function ContactPage() {
    const { t } = useTranslation("contact");
    const { lang } = useLanguageStore();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting }
    } = useForm<ContactFormData>();

    const onSubmit = async (data: ContactFormData) => {
        try {
            console.log("Form Data:", data);
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));
            toast.success(lang === "ar" ? "تم إرسال رسالتك بنجاح!" : "Your message has been sent successfully!");
            reset();
        } catch (error) {
            console.error("Submission Error:", error);
            toast.error(lang === "ar" ? "حدث خطأ ما، يرجى المحاولة مرة أخرى" : "Something went wrong, please try again");
        }
    };

    return (
        <div className={styles.contact} dir={lang === "ar" ? "rtl" : "ltr"}>
            <section className={styles.banner}>
                <Banner banner="contact" />
            </section>

            <section className={styles.content}>
                <div className={styles.container}>
                    <div className={styles.grid}>
                        <motion.div
                            className={styles.infoSide}
                            initial={{ opacity: 0, x: lang === "ar" ? 30 : -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className={styles.title}>{t("info.title")}</h2>
                            <p className={styles.desc}>{t("info.description")}</p>

                            <div className={styles.infoItems}>
                                <div className={styles.item}>
                                    <div className={styles.icon}><FiMapPin size={24} /></div>
                                    <div>
                                        <h3>{t("info.address.label")}</h3>
                                        <p>{t("info.address.value")}</p>
                                    </div>
                                </div>
                                <div className={styles.item}>
                                    <div className={styles.icon}><FiPhone size={24} /></div>
                                    <div>
                                        <h3>{t("info.phone.label")}</h3>
                                        <p>{t("info.phone.value")}</p>
                                    </div>
                                </div>
                                <div className={styles.item}>
                                    <div className={styles.icon}><FiMail size={24} /></div>
                                    <div>
                                        <h3>{t("info.email.label")}</h3>
                                        <p>{t("info.email.value")}</p>
                                    </div>
                                </div>
                                <div className={styles.item}>
                                    <div className={styles.icon}><FiClock size={24} /></div>
                                    <div>
                                        <h3>{t("info.hours.label")}</h3>
                                        <p>{t("info.hours.value")}</p>
                                    </div>
                                </div>
                            </div>

                        </motion.div>

                        <motion.div
                            className={styles.formSide}
                            initial={{ opacity: 0, x: lang === "ar" ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                                <div className={styles.inputGroup}>
                                    <div className={styles.field}>
                                        <label>{t("form.name.label")}</label>
                                        <input
                                            type="text"
                                            placeholder={t("form.name.placeholder")}
                                            {...register("name", { required: t("form.validation.nameRequired") })}
                                            className={errors.name ? styles.inputError : ""}
                                        />
                                        {errors.name && <span className={styles.errorText}>{errors.name.message}</span>}
                                    </div>
                                    <div className={styles.field}>
                                        <label>{t("form.email.label")}</label>
                                        <input
                                            type="email"
                                            placeholder={t("form.email.placeholder")}
                                            {...register("email", {
                                                required: t("form.validation.emailRequired"),
                                                pattern: {
                                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                    message: t("form.validation.emailInvalid")
                                                }
                                            })}
                                            className={errors.email ? styles.inputError : ""}
                                        />
                                        {errors.email && <span className={styles.errorText}>{errors.email.message}</span>}
                                    </div>
                                </div>
                                <div className={styles.field}>
                                    <label>{t("form.subject.label")}</label>
                                    <input
                                        type="text"
                                        placeholder={t("form.subject.placeholder")}
                                        {...register("subject", { required: t("form.validation.subjectRequired") })}
                                        className={errors.subject ? styles.inputError : ""}
                                    />
                                    {errors.subject && <span className={styles.errorText}>{errors.subject.message}</span>}
                                </div>
                                <div className={styles.field}>
                                    <label>{t("form.message.label")}</label>
                                    <textarea
                                        rows={6}
                                        placeholder={t("form.message.placeholder")}
                                        {...register("message", {
                                            required: t("form.validation.messageRequired"),
                                            minLength: { value: 10, message: t("form.validation.messageMinLength") }
                                        })}
                                        className={errors.message ? styles.inputError : ""}
                                    ></textarea>
                                    {errors.message && <span className={styles.errorText}>{errors.message.message}</span>}
                                </div>
                                <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
                                    {isSubmitting ? (lang === "ar" ? "جاري الإرسال..." : "Sending...") : t("form.submit")}
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className={styles.map}>
                <iframe
                    title="location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.5562723724395!2d34.4550!3d31.5167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDMxJzAwLjAiTiAzNMKwMjcnMTguMCJF!5e0!3m2!1sen!2sps!4v1620000000000!5m2!1sen!2sps"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                ></iframe>
            </section>
        </div>
    );
}