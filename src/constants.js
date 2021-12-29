import GMTMSportsImage from "./assets/images/GMTMSports.jpeg";
import VMwawareImage from "./assets/images/VMAware.svg";
import BGCSafetyImage from "./assets/images/bgc-safety.png";
import personalWebsiteImage from "./assets/images/personal-website.svg";

export const projects = [
  {
    id: 1,
    name: "GMTM Analytics Dashboard ",
    content:
      "GMTM is a startup whose mission is to maximize engagement and exposure for athletes, \
        organizations, and brands. My analytics UI dashboard brought to the company a new way \
        for coaches and athletes to track the effectiveness of their profiles. ",
    img: GMTMSportsImage,
    link: "https://gmtm.com/home",
    tags: ["ReactJS", "NextJS", "TailwindCSS", "ChartJS"],
  },
  {
    id: 2,

    name: "VMAware D&I Hub",
    content:
      "VMAware is a new D&I hub where employees can view live data on the company's progress \
        towards its D&I goals each quarter, and provide continuous feedback to VMware through \
        sentiment analysis surveys.",
    img: VMwawareImage,
    award: true,
    link: "https://github.com/j-alicia-long/SunShine",
    tags: ["ReactJS", "NodeJS", "Heroku", "Bootstrap"],
  },
  {
    id: 3,
    name: "National NonProfit Portal",
    content:
      "The National Non-profit portal serves to streamline the process for non-profits \
        to apply for web development or technical support from any Hack4Impact Chapter.",
    link: "https://github.com/GTBitsOfGood/national-npp",
    img: personalWebsiteImage,
    tags: ["NextJS", "ChakraUI"],
  },
  {
    id: 4,
    name: "ATL Boys and Girls Club Bus Check-in System",
    content:
      "BGC Safety is a team whose mission is to streamline the bus check in process \
         for aftercare students attending the Boys and Girls Club of Atlanta",
    link: "https://github.com/GTBitsOfGood/bgc-safety",
    img: BGCSafetyImage,
    tags: ["NextJS", "JavaScript"],
  },
];
