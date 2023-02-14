import LinkCard from "@/components/LinkCard";
import SocialCard from "@/components/SocialCard";
import styles from "@/styles";
import { data, metadata as Metadata } from "@/utils/data";
import Image from "next/image";

export const metadata = Metadata;

export default function HomePage() {
  return (
    <>
      <div className={styles.homepageDiv}>
        <Image
          className={styles.homepageImage}
          src={data.avatar}
          alt={data.name}
          width={96}
          height={96}
        />
        <h1 className={styles.homepageH1}>@{data.name}</h1>

        {data.links.map((link) => (
          <LinkCard key={link.href} {...link} />
        ))}

        <div className={styles.homepageFooterDiv}>
          {data.socials.map((social) => (
            <SocialCard key={social.href} {...social} />
          ))}
        </div>
      </div>
    </>
  );
}
