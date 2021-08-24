import React from "react";
import Card from "../components/Card";
import GMTMSportsImage from "../assets/images/GMTMSports.jpeg";
import VMwawareImage from "../assets/images/VMAware.svg";
import BGCSafetyImage from "../assets/images/bgc-safety.png";
import personalWebsiteImage from "../assets/images/personal-website.svg";

const cards = [
  {
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
    name: "National NonProfit Portal",
    content:
      "The National Non-profit portal serves to streamline the process for non-profits \
      to apply for web development or technical support from any Hack4Impact Chapter.",
    link: "https://github.com/GTBitsOfGood/national-npp",
    img: personalWebsiteImage,
    tags: ["NextJS", "ChakraUI"],
  },
  {
    name: "ATL Boys and Girls Club Bus Check-in System",
    content:
      "BGC Safety is a team whose mission is to streamline the bus check in process \
       for aftercare students attending the Boys and Girls Club of Atlanta",
    link: "https://github.com/GTBitsOfGood/bgc-safety",
    img: BGCSafetyImage,
    tags: ["NextJS", "JavaScript"],
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen my-5">
      <div className="project-content ">
        <div className="flex items-center">
          <h2 className="mr-2">Projects</h2>
          <hr className="flex-grow" />
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-2">
          {cards.map((card, i) => {
            return (
              <Card
                name={card.name}
                content={card.content}
                link={card.link}
                img={card.img}
                award={card.award}
                tags={card.tags}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
