
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

export const projectsList: Project[] = [
  {
    name: "JTMS Driver App",
    client: "Janio",
    company: "Everest.Engineering",
    description: "Janio is an integrated logistics solutions provider based in Southeast Asia, providing international shipping solutions. ",
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
    description: "Description for Estimateone and project details",
    contribution: "How did you contribute to this project",
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
    description: "WoundTech is a leading physician-based provider of wound management services. They provide expert wound care services wherever the patient resides, saving time and eliminating the cost of co-pays and transportation expenses.",
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
    description: "Dimeo wanted to build an app, which can be used to collect the customer sentiment for any service and log a ticket. ",
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
    description: "Leave tracker is an internal application used by EverestEngineering's employees to manage their leaves.",
    contribution: "How did you contribute to this project",
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
    description: "The tutch platform reimagines the role and capability of stores through technology. ",
    contribution: "Worked on creating reports in PowerBI which gives insights into different business. This helps businesses take decisions for the better future.",
    techstack: ["PowerBI"],
    applink: "",
    companyLink: "https://tutch.com.au/",
    from: "",
    to: ""
  }
];