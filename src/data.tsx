
// eslint-disable-next-line
export type Project = {
    // eslint-disable-next-line
    name: string;
    // eslint-disable-next-line
    client: string;
    // eslint-disable-next-line
    company: string;
    // eslint-disable-next-line
    description: string;
    // eslint-disable-next-line
    contribution: string;
    // eslint-disable-next-line
    techstack: string[];
    // eslint-disable-next-line
    applink: string;
    // eslint-disable-next-line
    companyLink: string;
    // eslint-disable-next-line
    from: string;
    // eslint-disable-next-line
    to: string;
}

// eslint-disable-next-line
export type WorkAtCompanyDetails = {
    // eslint-disable-next-line
    company: string;
    // eslint-disable-next-line
    role: string;
    // eslint-disable-next-line
    link: string;
    // eslint-disable-next-line
    learnings: string;
    // eslint-disable-next-line
    from: string;
    // eslint-disable-next-line
    to: string | number;
}

// eslint-disable-next-line
export type Article = {
    // eslint-disable-next-line
    header: string,
    // eslint-disable-next-line
    summary: string,
    // eslint-disable-next-line
    link: string
}

// eslint-disable-next-line
export type OpenSource = {
    // eslint-disable-next-line
    name: string,
    // eslint-disable-next-line
    link: string,
    // eslint-disable-next-line
    stars: number
}

export const projectsList: Project[] = [
  {
    name: "JTMS Driver App",
    client: "Janio",
    company: "Everest.Engineering",
    description: "Janio is an integrated logistics solutions provider based in Southeast Asia, providing international shipping solutions ",
    contribution: "Worked on a Driver app that will be used by drivers to manage shipments like collecting from and dropping off into Janio Hubs also pickup and delivery of shipments.",
    techstack: ["Android", "Kotlin", "Firebase"],
    applink: "",
    companyLink: "http://www.janio.asia/",
    from: "",
    to: ""
  },
  {
    name: "Circles.Life App",
    client: "Circles.Life",
    company: "Everest.Engineering",
    description: "Circles.Life is a highly personalised digital service provider ",
    contribution: "Worked in the entertainment section of the app, where users can view movies and shows around them and give information about different things.",
    techstack: ["Android", "Java", "Kotlin", "Firebase"],
    applink: "",
    companyLink: "https://www.circles.life/sg/",
    from: "",
    to: ""
  },
  {
    name: "EstimateOne",
    client: "EstimateOne",
    company: "Everest.Engineering",
    description: "EstimateOne helps connect the commercial construction industry. Builders, Suppliers and Subbies use this platform to ease their processes",
    contribution: "I worked on supplier stream in this project. Which is a web app providing various statistics to suppliers about different kind of projects across the country. Team responsibility is to show charts based on budgets, area and user specific categories and showing projects specific to those charts",
    techstack: ["ReactJS", "NestJS", "GraphQL"],
    applink: "",
    companyLink: "https://estimateone.com/",
    from: "",
    to: ""
  },
  {
    name: "WoundTech EMR",
    client: "Agnos",
    company: "Everest.Engineering",
    description: "WoundTech is a leading physician-based provider of wound management services. They provide expert wound care services wherever the patient resides, saving time and eliminating the cost of co-pays and transportation expenses",
    contribution: "Worked with team that was responsible to create the clinical module to help clinicians capture patient medical data on the field. Teams responsibility was to develop UI created by the design team to reduce the overall time from 1hours to 15mins to complete the documentation for an encounter.",
    techstack: ["ReactJS", "NestJS", "GraphQL"],
    applink: "",
    companyLink: "https://www.woundtech.net/en-us/home",
    from: "",
    to: ""
  },
  {
    name: "Customer Sentiment App",
    client: "Dimeo",
    company: "Everest.Engineering",
    description: "Dimeo wanted to build an app, which can be used to collect the customer sentiment for any service and log a ticket ",
    contribution: "Worked on creating this app using React Native. I involved in the process from taking requirements to delivering the product.",
    techstack: ["React Native"],
    applink: "",
    companyLink: "https://www.dimeo.com.au/",
    from: "",
    to: ""
  }, 
  {
    name: "Leave Tracker Application",
    client: "Everest.Engineering",
    company: "Everest.Engineering",
    description: "Leave tracker is an internal application used by EverestEngineering's employees to manage their leaves",
    contribution: "I contributed to project by adding instrument tests, adding new features and also involved in the process of automating deployments",
    techstack: ["NodeJS", "Slack APIs"],
    applink: "",
    companyLink: "https://everest.engineering/",
    from: "",
    to: ""
  },
  {
    name: "Tutch Reports",
    client: "Tutch",
    company: "Everest.Engineering",
    description: "The tutch platform reimagines the role and capability of stores through technology ",
    contribution: "Worked on creating reports in PowerBI which gives insights into different business. This helps businesses take decisions for the better future.",
    techstack: ["PowerBI"],
    applink: "",
    companyLink: "https://tutch.com.au/",
    from: "",
    to: ""
  },
  {
    name: "Dhyana",
    client: "Avantari",
    company: "Avantari",
    description: "Dhyana is a companion app with Dhyana Ring to measure Heart rate variability and give insights into Meditation",
    contribution: "Leading development of the app from requirements gathering to deployment. One of the achievements from this project is creating and SDK to read heart rate from a Hardware device using BLE",
    techstack: ["Android", "Kotlin"],
    applink: "https://play.google.com/store/apps/details?id=org.avantari.dhyana&hl=en&gl=US&pli=1",
    companyLink: "https://www.avantari.org/",
    from: "",
    to: ""
  },
  {
    name: "AppStar",
    client: "Avantari",
    company: "Avantari",
    description: "AppStar is an AR platformt to promote movies. Movie characters come into real life into your homes and talk to you :)",
    contribution: "Leading development of the app from requirements gathering to deployment. We used ARCore and implemented functionality for a movie marketing",
    techstack: ["Android", "Kotlin", "ARCore"],
    applink: "",
    companyLink: "https://www.avantari.org/",
    from: "",
    to: ""
  },
  {
    name: "Dhyan Brahma",
    client: "Avantari",
    company: "Avantari",
    description: "Dhyana with Swamiji, is the world's first Quantified Meditation App that monitors the quality of your meditation",
    contribution: "Implemented meditation UI and stats UI with complex designs ",
    techstack: ["Android", "Kotlin"],
    applink: "https://play.google.com/store/apps/details?id=com.avantari.meditation",
    companyLink: "https://www.avantari.org/",
    from: "",
    to: ""
  },
  {
    name: "Divine Darshan",
    client: "Avantari",
    company: "Avantari",
    description: "Personalized Guided meditation app with AR",
    contribution: "Integrated Audio player functionalies to play guruji guided meditation ",
    techstack: ["Android", "Kotlin"],
    applink: "",
    companyLink: "https://www.avantari.org/",
    from: "",
    to: ""
  },
  {
    name: "CM Talks & Hebatkan Negaraku",
    client: "Avantari",
    company: "Avantari",
    description: "Both apps are AR based apps used for political compaigns in Karnataka and Singapore",
    contribution: "Leading and developing the products from requirements to deployment of apps",
    techstack: ["Android", "Kotlin"],
    applink: "",
    companyLink: "https://www.avantari.org/",
    from: "",
    to: ""
  },
  {
    name: "Odisha AR Project",
    client: "Avantari",
    company: "Avantari",
    description: "This is a personal political compaigning app for Orissa political party, Users can take picture with AR avatar of candidate and get physical copy of the picture on the site",
    contribution: "It had AR functionality, wifi direct, Printing an image to Printer. Handling everything from starting to deploying the app to 5000 phones of political party volunteers",
    techstack: ["Android", "Kotlin", "ARCore"],
    applink: "",
    companyLink: "https://www.avantari.org/",
    from: "",
    to: ""
  },
  {
    name: "Scifikids ",
    client: "Innovare IT Solutions",
    company: "Innovare IT Solutions",
    description: "Kids can download the app and see animated characters in real life",
    contribution: "It had AR functionality, my responsibility was to integrate android with unity functionality and implementing the whole functionality of the app except unity part",
    techstack: ["Android", "Java", "ARCore"],
    applink: "",
    companyLink: "https://www.plugxr.com/",
    from: "",
    to: ""
  },
  {
    name: "Islamic Information Center ",
    client: "Innovare IT Solutions",
    company: "Innovare IT Solutions",
    description: "This app contains lots of books Islamic teachings",
    contribution: "I am a single developer on this app. This is my first app. It had complex UIs and lots of data and each book was in almost 7 languages. I implemented everything on my own",
    techstack: ["Android", "Java"],
    applink: "",
    companyLink: "https://www.plugxr.com/",
    from: "",
    to: ""
  },
  
];

export const workDetails: WorkAtCompanyDetails[] = [
  {
    company: "Everest.Engineering",
    from: "Mar 2019",
    to: 0,
    role: "Senior Software Engineer",
    link: "https://everest.engineering/",
    learnings: "Joined as Software Engineer and is currently in the role of Senior Software Engineer. I worked with multiple clients and domains since I joined EverestEngineering. Responsibilities includes Developing features as per the client’s requirements, Lead feature development team and coordinate with other teams and Contribute to backend development as needed."
  },
  {
    company: "Avantari",
    from: "Mar 2017",
    to: "Mar 2019",
    role: "Software Engineer",
    link: "https://www.avantari.org/",
    learnings: "I worked on Bluetooth Low Energy based applications, Developed Internal company SDKs which are based on BLE. I worked on ARCore to develop some augmented reality apps, I did make sure the project is updated with the latest trends in Android development in terms of APIs and standards. \"I did make sure to use Kotlin as the primary language in Android development in every project\" is one of my accomplishments. I also developed some internal testing apps by closely working with the hardware team."
  },
  {
    company: "Innovare IT Solutions PvtLtd (Currently PlugXR)",
    from: "Sep 2015",
    to: "Jan 2017",
    role: "Software Engineer",
    link: "https://www.plugxr.com/",
    learnings: "I worked with a team to create complex UIs. I worked closely with the unity team to develop AR applications."
  }
]

export const articlesList: Article[]= [
  {
    header: "Exploring ImageDecoder",
    link: "https://medium.com/nosort/a-class-for-converting-encoded-images-like-png-jpeg-webp-gif-or-heif-into-drawable-or-6a7219319abc",
    summary: ""
  },
  {
    header: "App Startup States and issues",
    link: "https://medium.com/nosort/users-expect-apps-to-be-responsive-and-fast-to-launch-c98238e743c1",
    summary: ""
  },
  {
    header: "Playing Video in ARCore using OpengGL",
    link: "https://medium.com/nosort/playing-video-in-arcore-using-openggl-a81ff62f7a6d",
    summary: ""
  },
  {
    header: "Adding views on top of UnityPlayer in UnityPlayerActivity",
    link: "https://medium.com/nosort/adding-views-on-top-of-unityplayer-in-unityplayeractivity-e76240799c82",
    summary: ""
  }
]