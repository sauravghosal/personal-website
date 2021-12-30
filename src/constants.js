import GMTMSportsImage from "./assets/images/gmtm/GMTMSports.jpeg";
import GMTMUserAnalytics from "./assets/images/gmtm/analytics.webp";
import GMTMBackoffice from "./assets/images/gmtm/backoffice.webp";
import VMawareLogo from "./assets/images/vmaware/logo.png";
import VmawareDashboard from "./assets/images/vmaware/dashboard.png";
import VmawarePods from "./assets/images/vmaware/pods.png";
import VmawareProfile from "./assets/images/vmaware/profile.png";
import VmawareSurvey from "./assets/images/vmaware/survey.png";
import NppMaintenance from "./assets/images/npp/maintenance.png";
import NppTracking from "./assets/images/npp/tracking.png";
import NppLogo from "./assets/images/npp/logo.png";
import GhosalReLookahead from "./assets/images/ghosalre/lookahead.png";
import GhosalReDelta from "./assets/images/ghosalre/deltas.png";
import GhosalReLogo from "./assets/images/ghosalre/logo.jpeg";
import ImageGallery from "./components/ImageGallery";

export const projects = [
  {
    id: 1,
    name: "GMTM Analytics Dashboard ",
    preview:
      "I built analytics dashboards for both customers and admins of the GMTM Sports platform.",
    content: (
      <div className="flex flex-col items-start">
        <h5 className="font-bold px-2 py-1 bg-blue-300 my-1 text-white">
          What is GMTM &amp; what did I do?
        </h5>
        <p>
          GMTM is a startup whose mission is to maximize engagement and exposure
          for athletes, organizations, and brands. I worked closely under the
          CTO, <span class="font-semibold">Alex Rudloff</span>, to deliver
          features that contributed analytics reporting on the site, both for
          customers and site admins. I extended upon the company's internal
          tools to track KPIs, such as sign-ups, transactions, and videos
          uploaded. I developed a customer-facing analytics dashboard for both
          coaches and athletes to track the profile's performance, which was the
          second-most trafficked page on the site once my internship was over.
        </p>
      </div>
    ),
    img: GMTMSportsImage,
    link: "https://gmtm.com/home",
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
    tags: ["ReactJS", "NextJS", "TailwindCSS", "ChartJS"],
  },
  {
    id: 2,
    name: "VMAware D&I Hub",
    preview:
      "A hub where VMware employees can check in on the company's progress towards its D&I goals",
    content: (
      <div>
        <p>
          VMAware is a new D&amp;I hub where employees can view live data on the
          company's progress towards its D&amp;I goals each quarter, and provide
          continuous feedback to VMware through sentiment analysis surveys. I
          was a full-stack developer on the hackathon team, primarily working on
          user authentication with JWTs and Node/Express on the backend and
          including Tableau dashboard visualizations in the React Bootstrap
          frontend.{" "}
        </p>
        <p>
          Our team placed first in the VMware intern borathon, and leadership
          was interested in moving forward with our idea, leading us to have
          discussions with highly ranked individuals within VMware, like the
          CFO,
          <span class="font-extrabold"> Zane Rowe</span>, for the following
          months. If you'd like to check our D&amp;I hub out, feel free to use
          employee ID <span class="font-bold">397730</span> to log in.
        </p>
      </div>
    ),
    img: VMawareLogo,
    award: true,
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
    link: "http://vmaware.herokuapp.com/",
    tags: ["ReactJS", "NodeJS", "Heroku", "Bootstrap"],
  },
  {
    id: 3,
    name: "National NonProfit Portal",
    preview:
      "A portal that helps facilitate communication between non-profits and H4I chapters.",
    content: (
      <div>
        <h5 className="font-bold px-2 py-1 bg-blue-300 my-1 inline-block text-white">
          What is H4I?
        </h5>
        <p>
          Hack4Impact is a student-led national organization with chapters at
          many top-tier institutes, including UPenn, Georgia Tech, and UIUC. The
          organization's mission is to empower engineers, designers, activists,
          and humanitarians to create lasting and impactful social change by
          connecting students with non-profit groups.
        </p>
        <h5 className="font-bold px-2 py-1 bg-blue-300 my-1 inline-block text-white">
          What does NPP strive for?
        </h5>
        <p>
          The National Non-profit portal serves to streamline the process for
          non-profits to apply for web development or technical support from any
          Hack4Impact chapter. The prior method of communication included
          long-winded email chains between H4I chapters and non-profits, which
          were largely ineffective. The portal has overhauled the communications
          process, allowing for both non-profit groups and Hack4Impact chapters
          more visibility into each project.
        </p>
        <h5 className="font-bold px-2 py-1 bg-blue-300 my-1 inline-block text-white">
          How did I contribute?
        </h5>
        <p>
          I worked as a front-end developer on the National Non-profit portal
          development team, completing tasks in 2-week sprint cycles with 3-day
          code review stages. My major contributions to the project were the
          non-profit project tracking and maintenance pages.
        </p>
      </div>
    ),
    link: "https://github.com/GTBitsOfGood/national-npp",
    img: NppLogo,
    screens: (
      <ImageGallery
        images={[
          { name: "Project Maintenance", src: NppMaintenance },
          { name: "Project Tracking", src: NppTracking },
        ]}
      />
    ),
    tags: ["NextJS", "ChakraUI"],
  },
  {
    id: 4,
    name: "GhosalRE Cabin Analytics",
    preview: "An analytics tool used to report GhosalRE cabin occupancy.",
    content: (
      <div className="flex flex-col items-start">
        <h5 className="font-bold px-2 py-1 bg-blue-300 my-1 inline-block text-white">
          Motivation
        </h5>{" "}
        <p>
          Ghosal Real Estate (GhosalRE) has been constructing cabins around the
          Sevierville/Pigeon Forge areas in Tennessee. The company is looking to
          expand the number of cabins in the Sevierville area, and construct
          tiny homes communities in various plots of land around the SouthEast
          United States. For this project, my client was Anjan Ghosal, the head
          of GhosalRE, who wanted a website to view visualized data on his
          cabins, which could be further expanded to other aspects of the
          business.
        </p>
        <h5 className="font-bold px-2 py-1 bg-blue-300 my-1 inline-block text-white">
          Execution
        </h5>{" "}
        <p>
          The GhosalRE cabin analytics is a web application that provides
          multiple views to visualize cabin occupancy data. Mr. Ghosal
          contracted a software developer to build a cabin web scraper that
          fetches occupancy data for each of his cabin daily, and I worked on
          ingesting the scraped data into a relational Postgres database through
          AWS lambda functions. I set up an Apache web server on an EC2 instance
          to accept HTTP requests, which is forwarded to a python flask backend
          through mod_wsgi. The client side was written in JavaScript and Vue
          CLI, and followed the atomic design principle to ensure modularized
          components.
        </p>
      </div>
    ),
    screens: (
      <ImageGallery
        images={[
          { name: "Occupancy Delta", src: GhosalReDelta },
          { name: "7 Day Occupancy Lookahead", src: GhosalReLookahead },
        ]}
      />
    ),
    img: GhosalReLogo,
    link: "http://ghosalre.com",
    tags: ["Python Flask", "Vue", "Apache", "AWS EC2", "AWS RDS"],
  },
];
