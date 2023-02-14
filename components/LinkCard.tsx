import { cardData } from "@/interface";
import styles from "@/styles";
import Image from "next/image";

const LinkCard = ({ title, href, image }: cardData) => {
  return (
    <a href={href} className={styles.linkcardA}>
      <div className={styles.linkcardDiv}>
        <div className={styles.linkcardDivDiv}>
          <Image
            className={styles.homepageImage}
            src={image}
            width={40}
            height={40}
            alt={title}
          />
        </div>
        <h2 className={styles.linkcardDivH2}>{title}</h2>
      </div>
    </a>
  );
};
export default LinkCard;
