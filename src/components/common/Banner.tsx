import { useTranslation } from "react-i18next";


export default function Banner({ banner }: { banner: string }) {

    const { t } = useTranslation(banner);
    return (
        <>
            <h2>{t("banner.title")}</h2>
            <p>{t("banner.description")}</p>
        </>
    );
}