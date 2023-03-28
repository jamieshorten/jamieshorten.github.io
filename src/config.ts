import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://jamieshorten.com/",
  author: "Jamie Shorten",
  desc: "My little place on the internet",
  title: "Jamie Shorten",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: false,
  postPerPage: 3,
};

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/jamieshorten",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/jamieshorten/",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:jamie@jamieshorten.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: false,
  },
  {
    name: "Mastodon",
    href: "https://social.lol/@zephyr",
    linkTitle: `${SITE.title} on Mastodon`,
    active: true,
  },
];
