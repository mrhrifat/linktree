import LinkCard from "@/components/LinkCard";
import SocialCard from "@/components/SocialCard";
import { data, metadata as Metadata } from "@/utils/data";
import Image from "next/image";

export const metadata = Metadata;

export default function HomePage() {
  return (
    <>
      <div className="flex flex-col items-center mx-auto w-full justify-center mt-16 px-8">
        <Image
          className="rounded-full"
          src={data.avatar}
          alt={data.name}
          width={96}
          height={96}
        />
        <h1 className="font-semibold mt-4 mb-8 text-xl">@{data.name}</h1>

        {data.links.map((link) => (
          <LinkCard key={link.href} {...link} />
        ))}

        <div className="flex flex-row">
          {data.socials.map((social) => (
            <SocialCard key={social.href} {...social} />
          ))}
        </div>
      </div>
    </>
  );
}
