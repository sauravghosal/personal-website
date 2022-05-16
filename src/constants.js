import GMTMUserAnalytics from "./assets/images/gmtm/analytics.webp";
import GMTMBackoffice from "./assets/images/gmtm/backoffice.webp";
import VmawareDashboard from "./assets/images/vmaware/dashboard.png";
import VmawarePods from "./assets/images/vmaware/pods.png";
import VmawareProfile from "./assets/images/vmaware/profile.png";
import VmawareSurvey from "./assets/images/vmaware/survey.png";
import NppMaintenance from "./assets/images/npp/maintenance.png";
import NppTracking from "./assets/images/npp/tracking.png";
import GhosalReLookahead from "./assets/images/ghosalre/lookahead.png";
import GhosalReDelta from "./assets/images/ghosalre/deltas.png";
import GhosalReLogo from "./assets/images/ghosalre/logo.jpeg";
import ImageGallery from "./components/ImageGallery";

export const projects = [
  {
    id: 4,
    name: "GhosalRE Listing Analytics",
    preview: {
      who: "GhosalRE",
      what: `GhosalRE listing analytics is a web application that provides 
      multiple visualizations of cabin occupancy and Airbnb listing data,
      providing Airbnb hosts a means to monitor their cabin's performance in
      comparison to competitors in the area.`,
      how: ["Python Flask", "Vue", "Apache", "AWS EC2", "AWS RDS"],
      when: {
        startDate: new Date("08-10-2021"),
        endDate: new Date(),
      },
      where: "http://ghosalre.com/tinyHouse/delta",
    },
    screens: (
      <ImageGallery
        images={[
          { name: "Occupancy Delta", src: GhosalReDelta },
          { name: "7 Day Occupancy Lookahead", src: GhosalReLookahead },
        ]}
      />
    ),
    img: GhosalReLogo,
  },
  {
    id: 1,
    name: "GMTM Analytics Dashboard ",
    preview: {
      who: "GMTM",
      what: `GMTM is a startup whose mission is to maximize engagement and exposure
      for athletes, organizations, and brands.  I worked closely under the CTO,
      Alex Rudloff, to deliver features that contributed analytics reporting on the site,
      both for customers and site admins. I extended upon the company's internal tools to track
      KPIs, such as sign-ups, transactions, and videos uploaded. I developed
      a customer-facing analytics dashboard for both coaches and athletes to
      track their profile's performance, which was the second-most
      trafficked page on the site once my internship came to a close.`,
      how: ["ReactJS", "NextJS", "TailwindCSS", "ChartJS"],
      when: {
        startDate: new Date("10-01-2020"),
        endDate: new Date("05-01-2021"),
      },
      where: "https://gmtm.com/home",
    },
    screens: (
      <ImageGallery
        images={[
          {
            src: GMTMUserAnalytics,
            name: "Analytics Dashboard for Atheletes and Coaches",
          },
          { src: GMTMBackoffice, name: "Site Admin Analytics Dashboard" },
        ]}
      />
    ),
  },
  {
    id: 2,
    name: "VMAware D&I Hub",
    preview: {
      who: "VMware hackathon",
      what: `VMAware is a new D&I hub where employees can view live data on the company's progress towards
       its D&I goals each quarter, and provide continuous feedback to VMware through sentiment analysis surveys.
       Our team won first place in the hackathon and met with CFO, Zane Rowe, on how to integrate the solution into 
       the company's current D&I initiatives. Log into the site with employee id 397730.`,
      how: ["ReactJS", "NodeJS", "Heroku", "Bootstrap"],
      where: "http://vmaware.herokuapp.com/",
      when: {
        startDate: new Date("08-03-2020"),
        endDate: new Date("08-05-2020"),
      },
    },
    screens: (
      <ImageGallery
        images={[
          {
            src: VmawareDashboard,
            name: "Dashboard",
          },
          { src: VmawarePods, name: "Pod Data" },
          { src: VmawareSurvey, name: "Survey" },
          { src: VmawareProfile, name: "User Profile" },
        ]}
      />
    ),
  },
  {
    id: 3,
    name: "National NonProfit Portal",
    preview: {
      who: "Hack4Impact",
      what: `The National Non-profit portal serves to streamline the process for
      non-profits to apply for web development or technical support from any
      Hack4Impact chapter. As a front-end developer, I helped build out the 
      UI for the non-profit project tracking and maintenance pages using ChakraUI and NextJS.`,
      how: ["NextJS", "ChakraUI"],
      when: {
        startDate: new Date("06-01-2021"),
        endDate: new Date("12-01-2021"),
      },
    },
    screens: (
      <ImageGallery
        images={[
          { name: "Project Maintenance", src: NppMaintenance },
          { name: "Project Tracking", src: NppTracking },
        ]}
      />
    ),
  },
];
