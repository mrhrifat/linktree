import { cardData } from "@/interface";
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
        className="m-3 mt-4"
      />
    </Link>
  );
};
export default SocialCard;
