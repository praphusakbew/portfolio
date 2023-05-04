import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  thr,
} from "../../public/assets";

export const navLinks = [
  {
    id: "about",
    title: "เกี่ยวกับ",
  },
  {
    id: "work",
    title: "ผลงาน",
  },
  {
    id: "contact",
    title: "ช่องทางติดต่อ",
  },
];

const services = [
  {
    title: "พัฒนาและดูแลเว็บไซต์",
    icon: web,
  },
  {
    title: "ดูแลระบบข่ายอินเทอร์เน็ต",
    icon: mobile,
  },
  {
    title: "งานข้อมูลสารสนเทศ",
    icon: backend,
  },
  {
    title: "งานออกแบบสื่อกราฟิก",
    icon: creator,
  },
];

const experiences = [
  {
    title: "โรงเรียนทุ่งใหญ่เฉลิมราชอนุสรณ์ รัชมังคลาภิเษก",
    company_name: "[บรรจุเข้ารับราชการตำแหน่ง ครูผู้ช่วย]",
    icon: thr,
    iconBg: "#383E56",
    date: "ต.ค. 2559 - ปัจจุบัน",
    points: [
      "วาริชศาสตร์เรตติ้งซาร์หงวนมาร์จิน ละอ่อนคาร์โก้เซ็กซ์ สเตชั่นเซอร์วิส",
      "โหงวสี่แยกซื่อบื้อรูบิค สมิติเวชปิกอัพบัลลาสต์วโรกาส ไวอากร้ายะเยือกบูมสกายแอร์",
      "รีไทร์อันเดอร์ซานตาคลอส ไฟแนนซ์ บลูเบอร์รี่",
      "แก๊สโซฮอล์แบดวีซ่าโปรเจกต์ เฉิ่มเทปสมาพันธ์กู๋ดั๊มพ์ เซอร์วิสแก๊สโซฮอล์ก๋ากั่นเทคโนแครต",
    ],
  },
  {
    title: "xxxxxxxxxxxxxxxxxx",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "ไลน์ คอลเล็กชั่นวิภัชภาคอึ๋ม ดีมานด์บัตเตอร์",
      "บูติก โทรแรงผลักตุ๊กคอลัมนิสต์แผดเผา ไวกิ้งคอลัมนิสต์มาราธอนแฟรนไชส์",
      "ไฮเอนด์บูติก ซิ่งซิตีซาร์หมั่นโถวคอนแทค คอนเทนเนอร์เชอร์รี่ไดเอ็ต",
      "ฟาสต์ฟู้ดซินโดรมซาดิสม์ไดเอ็ตแฟ้บ เวิร์กแคป ปาร์ตี้แล็บต้าอ่วย",
    ],
  },

];

/*
const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];
*/

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, experiences, projects };
