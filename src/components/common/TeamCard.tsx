import styles from "@/sass/components/common/teamCard.module.scss";
import { motion } from "framer-motion";

interface TeamCardProps {
    name: string;
    position: string;
    image: string;
    index?: number;
}

export default function TeamCard({ name, position, image, index = 0 }: TeamCardProps) {
    return (
        <motion.div
            className={styles.teamCard}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
        >
            <div className={styles.img}>
                <img src={image} alt={name} loading="lazy" />
            </div>
            <div className={styles.info}>
                <h3>{name}</h3>
                <p>{position}</p>
            </div>
        </motion.div>
    );
}
