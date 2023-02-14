import { cardData } from "@/interface";
import Image from "next/image";

const LinkCard = ({ title, href, image }: cardData) => {
  return (
    <a
      href={href}
      className="flex items-center p-1 w-full rounded-md hover:scale-105 transition-all bg-gray-100 border mb-3 max-w-3xl"
    >
      <div className="flex w-full text-center">
        <div className="w-10 h-10">
          <Image
            className="rounded-full"
            src={image}
            width={40}
            height={40}
            alt={title}
          />
        </div>
        <h2 className="flex justify-center items-center font-semibold w-full text-gray-700 -ml-10">
          {title}
        </h2>
      </div>
    </a>
  );
};
export default LinkCard;
