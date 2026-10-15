export type Project = {
  image: string;
  title: string;
  subTitle: string;
  description: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    image: "https://github.com/shadcn.png",
    title: "Call Management System",
    subTitle: "CMS",
    description:
      "Call Management System helps you make calls and easily record customer information and call notes in one place.",
    tags: ["React", ".net", "SSMS", "MUI"],
  },
  {
    image: "https://github.com/shadcn.png",
    title: "Foodie-App",
    subTitle: "Pos",
    description: "Order App",
    tags: ["ReactJs", "ExpressJs", "PostgreSql", "MUI"],
  },
  {
    image: "/MenuMate.png",
    title: "MenuMate (Frontend)",
    subTitle: "POS + Dashboard",
    description: "",
    tags: ["ReactJs", "TanStackRouter", "Axios", "shadcn"],
  },
  {
    image: "/WeatherApp.png",
    title: "Weather-app",
    subTitle: "Weather checker",
    description: "",
    tags: ["NextJs(AppRouter)", "Axios", "Framer-motion", "shadcn"],
  },
];
