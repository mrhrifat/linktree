export interface cardData {
  title: string;
  href: string;
  image: string;
}

// export interface linksObject {
//   title: string;
//   href: string;
//   image: string;
// }

export interface linksObject extends cardData {}

export interface data {
  name: string;
  avatar: string;
  links: linksObject[];
  socials: linksObject[];
}

export interface metadata {
  title: string;
  charset: string;
  viewport: {
    width: string;
    initialScale: number;
    maximumScale: number;
  };
  description: string;
  keywords: string[];
  icons: object;
}

export interface images {
  className: string;
  image: string;
  width: number;
  height: number;
  alt: string;
}
