export const footerData: { name: string; url: string }[] = [
  { name: "Twitter", url: "https://twitter.com/spacex" },
  { name: "YouTube", url: "https://youtube.com/spacex" },
  { name: "Instagram", url: "https://instagram.com/spacex" },
  { name: "Flickr", url: "https://flickr.com/spacex" },
  { name: "LinkedIn", url: "https://linkedin.com/spacex" },
  {
    name: "Privacy",
    url: "https://www.spacex.com/media/privacy_policy_spacex.pdf",
  },
  { name: "Suppliers", url: "https://www.spacex.com/supplier" },
  { name: "Github", url: "https://github.com/milliorn" },
];

export const indexData: {
  sectionName: string;
  sectionId: string;
  h4: string;
  h2: string;
  url: string;
  span: string;
  buttonId: string;
}[] = [
  {
    sectionName: "section-a",
    sectionId: "section-a",
    h4: "Upcoming Launch",
    h2: "CRS-25 Mission",
    url: "https://www.spacex.com/launches/crs-25/",
    span: "Rewatch",
    buttonId: "arrow-a",
  },
  {
    sectionName: "section-b",
    sectionId: "section-b",
    h4: "Recent Launch",
    h2: "Starlink Mission",
    url: "https://www.spacex.com/launches/sl4-23/",
    span: "Rewatch",
    buttonId: "arrow-b",
  },
  {
    sectionName: "section-c",
    sectionId: "section-c",
    h4: "Recent Launch",
    h2: "SES-22 Mission",
    url: "https://www.spacex.com/launches/ses-22/",
    span: "Rewatch",
    buttonId: "arrow-c",
  },
  {
    sectionName: "section-d",
    sectionId: "section-d",
    h4: "Recent Launch",
    h2: "Globalstar FM15 Mission",
    url: "https://www.spacex.com/launches/globalstar/",
    span: "Rewatch",
    buttonId: "arrow-d",
  },
  {
    sectionName: "section-e",
    sectionId: "section-e",
    h4: "",
    h2: "Startship Update",
    url: "https://www.spacex.com/vehicles/starship/",
    span: "Rewatch",
    buttonId: "arrow-e",
  },
  {
    sectionName: "section-f",
    sectionId: "section-f",
    h4: "",
    h2: "Starship to land nasa astronauts on the moon",
    url: "https://www.youtube.com/watch?v=U5_etd3l41g",
    span: "Rewatch",
    buttonId: "arrow-f",
  },
];

export const menuData: {
  class: string;
  url: string;
  text: string;
  desktop: boolean;
}[] = [
  {
    class: "",
    url: "https://www.spacex.com/mission/",
    text: "Mission",
    desktop: true,
  },
  {
    class: "",
    url: "https://www.spacex.com/launches/",
    text: "Launches",
    desktop: true,
  },
  {
    class: "",
    url: "https://www.spacex.com/careers/",
    text: "Careers",
    desktop: true,
  },
  {
    class: "",
    url: "https://www.spacex.com/updates/",
    text: "Updates",
    desktop: true,
  },
  { class: "", url: "https://shop.spacex.com/", text: "Shop", desktop: true },
  {
    class: "mobile-only",
    url: "https://www.spacex.com/vehicles/falcon-9/",
    text: "Falcon 9",
    desktop: false,
  },
  {
    class: "mobile-only",
    url: "https://www.spacex.com/vehicles/falcon-heavy/",
    text: "Falcon Heavy",
    desktop: false,
  },
  {
    class: "mobile-only",
    url: "https://www.spacex.com/vehicles/dragon/",
    text: "Dragon",
    desktop: false,
  },
  {
    class: "mobile-only",
    url: "https://www.spacex.com/vehicles/starship/",
    text: "Starship",
    desktop: false,
  },
  {
    class: "mobile-only",
    url: "https://www.spacex.com/human-spaceflight/",
    text: "Human Spaceflight",
    desktop: false,
  },
  {
    class: "mobile-only",
    url: "https://www.spacex.com/rideshare/",
    text: "Rideshare",
    desktop: false,
  },
  {
    class: "mobile-only",
    url: "https://www.starlink.com/",
    text: "Starlink",
    desktop: false,
  },
];
