import Logo from "./assets/images/Tatenda_logo.png";
import Person from "./assets/images/person-icon.png";
import Person2 from "./assets/images/person2.png";
import Project1 from "./assets/images/project1.png"
import Project2 from "./assets/images/project2.png";
import Project3 from "./assets/images/project3.png";
import Project4 from "./assets/images/project4.png";
import Project5 from "./assets/images/project5.png";
import Project6 from "./assets/images/project6.png";
import Project7 from "./assets/images/project7.png";
import Project8 from "./assets/images/project8.png";
import Project9 from "./assets/images/project9.png";
import Project10 from "./assets/images/project10.png";
import Review_Img1 from "./assets/images/review-img.webp"

const image = {
  Logo,
  Person,
  Person2,
  Project1,
  Project2,
  Project3,
  Project4,
  Project5,
  Project6,
  Project7,
  Project8,
  Project9,
  Project10,
  Review_Img1
};
const navbar = [
  {
    id: 1,
    title: "Home",
    link: "#",
  },
  {
    id: 2,
    title: "About",
    link: "#about",
  },
  {
    id: 3,
    title: "Projects",
    link: "#projects",
  },
];
const experience = [
  {
    id: 1,
    date: "2022 - Present Freelance",
    title: "Freelance Projects",
    description:
      "Collabprated with clients to create customised 3D models that meet their specific needs",
  },
  {
    id: 2,
    date: "2022 - 2023 Software Tester",
    title: "Testronic Labs Poland",
    description:
      "Tested video games to reveal visual defects in order to improve the game visually",
  },
  {
    id: 3,
    date: "2023 - Present Software Tester",
    title: "Lionbridge Poland",
    description:
      "Tested video games to reveal functional and visual defects in order to improve the game visually",
  },
];
const partner = [
  {
    id: 1,
    title: "3D Modeling",
    description:
      "Specializing in 3D modeling, I am able to create realistic and detailed models that accurately reflect your product or concept.",
  },
  {
    id: 2,
    title: "Texturing",
    description:
      "My expertise in texturing enables me to create photorealistic textures and materials that enhance the overall look and feel of the 3D model.",
  },
  {
    id: 3,
    title: "Software Proficiency",
    description:
      "Proficient in industry-standard software like Blender and substance painter, I am able to create high-quality 3D models that are both visually striking and technically sound",
  },
  {
    id: 4,
    title: "Lighting",
    description:
      "With a keen eye for lighting, I am able to create 3D models that have a realistic and natural apperance, enhancing the overall visual experience.",
  },
];
const review = [
  {
    id: 1,
    name: "John Smith",
    img: Review_Img1,
    description:
      "Tatenda's 3D models are truly exceptional. His attention to detail and realistic tectures make his work stand out from the crowd",
  },
  {
    id: 2,
    name: "Ginger Jane",
    img: Review_Img1,
    description:
      "Tatenda's 3D models have transformed our product visuals. His understanding of our brand and attention to detail make him a true partner in our success",
  },
  {
    id: 3,
    name: "Tarissa Kith",
    img: Review_Img1,
    description:
      "Tantenda's 3D models have exceeded our expectations. His expertise in 3D modeling and texturing has taken our product visuals to the next level",
  },
  {
    id: 4,
    name: "June Snow",
    img: Review_Img1,
    description:
      "Tatenda's 3D models are not only visually stunning but also technically sound. His knowledge od industry-standard software and lightning techniques make him an invaluable asset to any project",
  },
];
const pricing = [
  {
    id: 1,
    title: "Basic Package",
    description: "For Small Projects",
    price: "$49.99",
  },
  {
    id: 2,
    title: "Medium Package",
    description: "For Medium Projects",
    price: "$79.99",
  },
  {
    id: 3,
    title: "Expert Package",
    description: "For Big Projects",
    price: "$99.99",
  }
];
 const MOBILE_WINDOW_SIZE = 768;

export {
  navbar,
  image,
  experience,
  partner,
  review,
  pricing,
  MOBILE_WINDOW_SIZE,
};
