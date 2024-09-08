import { lookup } from "dns";

export const NAV_LINKS = [

  { href: '/', key: 'home', label: 'Home' },

  { href: '/', key: 'Products', label: 'Products' },
  { href: '/about', key: 'About', label: 'About' },
  { href: '/', key: 'Template UI', label: 'Template UI' },
];

export const products = [
  {
    title: "Technology lookup",
    description: "Find out what websites are built with",
    icon: "🔍",
    links: "/technology-lookup",
  },
  {
    title: "Website alerts",
    description: "Monitor websites for technology changes",
    icon: "🔔",
    links: "/website-alerts",
  },
  {
    title: "Keyword search",
    description: "Find websites by keyword",
    icon: "🔎",
    links: "/keyword-search",
  },
  {
    title: "UI Templates",
    description: "Browse a collection of customizable templates",
    icon: "🎨",
    links: "/ui-templates",
    subProducts: [
      {
        title: "Hospital UI",
        description: "UI templates for hospital management systems",
        links: "/ui-templates/hospital",
      },
      {
        title: "Restaurant UI",
        description: "UI templates for restaurant management",
        links: "/ui-templates/restaurant",
      },
      {
        title: "E-commerce UI",
        description: "UI templates for e-commerce websites",
        links: "/ui-templates/ecommerce",
      }
    ]
  },
  {
    title: "Lead lists",
    description: "Create a list of sites for a technology, keyword, or domain",
    icon: "📑",
    links: "/lead-list",
  },
  {
    title: "Apps",
    description: "Connect this service to the apps you use",
    icon: "📱",
    links: "/apps",
  },
];


export const carouselData = [
  {
    imgSrc: '/pic1.jpeg',
    title: 'Lonely Life at the Baltimore',
    description: 'Shoot with Sony a6000'
  },
  {
    imgSrc: '/pic2.jpg',
    title: 'Sunny Days in California',
    description: 'Shoot with Sony a6000'
  },
  {
    imgSrc: '/pic1.jpeg',
    title: 'Adventures in the Mountains',
    description: 'Shoot with Sony a6000',
  },
  {
    imgSrc: '/img-1.png',
    title: 'Adventures in the Mountains',
    description: 'Shoot with Sony a6000'
  }
];

export const WorkCards = [
  {
    image: "/card/card1.jpg",
    title: "Majestic Creatures of the African Savanna",
    description:
      "Capturing the exquisite patterns and dynamic energy of Africa’s most iconic big cat.",
    tags: ["Wildlife Portraits", "#Nature", "#Mammals", "#2022", "#Forest", "#2023", "#2024"],
  },
  {
    image: "/card/card2.jpg",
    title: "A Temple’s Serene Silhouette",
    tags: ["#Nature", "#Architecture", "#2023", , "#2024"],
  },
  {
    image: "/card/card3.jpg",
    title: "Moments Framed in Portraits",
    tags: ["#Portraits", "#Art", "#2023", "#Architecture"],
  },
];

export const awardsData = [
  {
    image: "/awards/sonnyWorld.jpg",
    year: "2015",
    title: "Sony World Photography Awards",
    description: "Recognized for excellence in wildlife photography, capturing the beauty and majesty of the natural world.",
  },
  {
    image: "/awards/travel.jpg",
    year: "2017",
    title: "Travel Photographer Of The Year",
    description: "Awarded for stunning landscape photography that transports viewers to the heart of remote destinations.",
  },
  {
    image: "/awards/magnum.jpg",
    year: "2022",
    title: "Magnum Photography Awards",
    description: "Honored for innovative portrait photography that showcases unique perspectives and human stories.",
  },
  {
    image: "/awards/international.jpg",
    year: "2023",
    title: "International Photography Awards",
    description: "Celebrated for groundbreaking architectural photography, capturing the interplay of light and structure.",
  },
];
