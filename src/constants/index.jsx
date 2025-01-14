import {
  downArrow,
  planBlackIcon,
  planYellowIcon,
  clients01,
  clients02,
  clients03,
  clients04,
  blueQuote,
  WhiteQuote,
  user01,
  user02,
  user03,
  ios,
  windows,
  android,
  facebook,
  twitter,
  linkedin,
  web,
} from "../assets";
import IconButton from "../components/IconButton";
import OutlineButton from "../components/OutlineButton";

export const navLinks = [
  {
    id: 1,
    link: "Products",
    icon: downArrow,
  },
  {
    id: 2,
    link: "Solutions",
    icon: downArrow,
  },
  {
    id: 3,
    link: "Resources",
    icon: downArrow,
  },
  {
    id: 4,
    link: "Pricing",
    icon: downArrow,
  },
];

export const planCards = [
  {
    id: "Free",
    title: "$0",
    headerText: "Capture ideas and find them quickly",
    content: [
      {
        id: 1,
        icon: planBlackIcon,
        text: "Sync unlimited devices",
      },
      {
        id: 2,
        icon: planBlackIcon,
        text: "10 GB monthly uploads",
      },
      {
        id: 3,
        icon: planBlackIcon,
        text: "200 MB max. note size",
      },
      {
        id: 4,
        icon: planBlackIcon,
        text: "Customize Home dashboard and access extra widgets",
      },
      {
        id: 5,
        icon: planBlackIcon,
        text: "Connect primary Google Calendar account",
      },
      {
        id: 6,
        icon: planBlackIcon,
        text: "Add due dates, reminders, and notifications to your tasks",
        Btn: (
          <OutlineButton
            title="Get Started"
            style={"text-[#000] border-2 border-secondary-light bg-white"}
          />
        ),
      },
    ],
  },
  {
    id: "Personal",
    title: "$11.99",
    headerText: "Keep home and family on track",
    content: [
      {
        id: 1,
        icon: planYellowIcon,
        text: "Sync unlimited devices",
      },
      {
        id: 2,
        icon: planYellowIcon,
        text: "10 GB monthly uploads",
      },
      {
        id: 3,
        icon: planYellowIcon,
        text: "200 MB max. note size",
      },
      {
        id: 4,
        icon: planYellowIcon,
        text: "Customize Home dashboard and access extra widgets",
      },
      {
        id: 5,
        icon: planYellowIcon,
        text: "Connect primary Google Calendar account",
      },
      {
        id: 6,
        icon: planYellowIcon,
        text: "Add due dates, reminders, and notifications to your tasks",
        Btn: (
          <OutlineButton
            title="Get Started"
            style={"bg-primary-light text-white"}
          />
        ),
      },
    ],
  },
  {
    id: "Organization",
    title: "$49.99",
    content: [
      {
        id: 1,
        icon: planBlackIcon,
        text: "Sync unlimited devices",
      },
      {
        id: 2,
        icon: planBlackIcon,
        text: "10 GB monthly uploads",
      },
      {
        id: 3,
        icon: planBlackIcon,
        text: "200 MB max. note size",
      },
      {
        id: 4,
        icon: planBlackIcon,
        text: "Customize Home dashboard and access extra widgets",
      },
      {
        id: 5,
        icon: planBlackIcon,
        text: "Connect primary Google Calendar account",
      },
      {
        id: 6,
        icon: planBlackIcon,
        text: "Add due dates, reminders, and notifications to your tasks",
        Btn: (
          <OutlineButton
            title="Get Started"
            style={"text-[#000] border-2 border-secondary-light bg-white"}
          />
        ),
      },
    ],
  },
];

export const clients = [
  {
    id: 1,
    icon: clients01,
  },
  {
    id: 2,
    icon: clients02,
  },
  {
    id: 3,
    icon: clients03,
  },
  {
    id: 4,
    icon: clients04,
  },
];

export const testimonials = [
  {
    id: 1,
    icon: blueQuote,
    title:
      "Whitepate is designed as a collaboration tool for businesses that is a full project management solution.",
    userIcon: user01,
    userText: "Oberon Shaw, MCH",
    userContent: "Head of Talent Acquisition, North America",
  },
  {
    id: 2,
    icon: WhiteQuote,
    title:
      "Whitepate is designed as a collaboration tool for businesses that is a full project management solution.",
    userIcon: user02,
    userText: "Oberon Shaw, MCH",
    userContent: "Head of Talent Acquisition, North America",
  },
  {
    id: 3,
    icon: WhiteQuote,
    title:
      "Whitepate is designed as a collaboration tool for businesses that is a full project management solution.",
    userIcon: user03,
    userText: "Oberon Shaw, MCH",
    userContent: "Head of Talent Acquisition, North America",
  },
];

export const osLinks = [
  {
    id: "ios",
    icon: ios,
  },

  {
    id: "windows",
    icon: windows,
  },

  {
    id: "android",
    icon: android,
  },
];

export const footerLinks = [
  {
    id: "Product",
    title: "Product",
    links: [
      {
        id: 1,
        text: "Overview",
      },
      {
        id: 2,
        text: "Pricing",
      },
      {
        id: 3,
        text: "Customer stories",
      },
    ],
  },

  {
    id: "Resources",
    title: "Resources",
    links: [
      {
        id: 1,
        text: "Blog",
      },
      {
        id: 2,
        text: "Guides & tutorials",
      },
      {
        id: 3,
        text: "Help center",
      },
    ],
  },

  {
    id: "Company",
    title: "Company",
    links: [
      {
        id: 1,
        text: "About us",
      },
      {
        id: 2,
        text: "Careers",
      },
      {
        id: 3,
        text: "Media kit",
      },
    ],
  },
];

export const footerSocialLinks = [
  {
    id: "facebook",
    icon: facebook,
  },
  {
    id: "twitter",
    icon: twitter,
  },
  {
    id: "linkedin",
    icon: linkedin,
  },
];

export const footerCopyRightLinks = [
  {
    id: 1,
    firstIcon: web,
    title: "English",
    secondIcon: downArrow,
  },
  {
    id: 2,
    title: "Terms & privacy",
  },
  {
    id: 3,
    title: "Security",
  },
  {
    id: 4,
    title: "Status",
  },
  {
    id: 5,
    title: "©2021 Whitepace LLC.",
  },
];
