import { cardData } from "@/interface";
import styles from "@/styles";
import Image from "next/image";
import Link from "next/link";

const SocialCard = ({ title, href, image }: cardData) => {
  return (
    <Link href={href}>
      <Image
        src={image}
        width={40}
        height={40}
        alt={title}
        className={styles.socialImage}
      />
    </Link>
  );
};
export default SocialCard;
