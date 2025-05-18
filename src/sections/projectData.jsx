// src/data/projectData.jsx or src/components/projectData.jsx
import P1 from "../assets/pic5.jpg";
import P2 from "../assets/pic4.jpg";
import P3 from "../assets/pic16.jpg";
import P4 from "../assets/pic3.jpg";
import P5 from "../assets/pic2.jpg";
import P6 from "../assets/pic1.jpg";
import P7 from "../assets/pic6.jpg";
import P8 from "../assets/pic7.jpg";
import P9 from "../assets/pic8.jpg";
import P10 from "../assets/pic9.jpg";
import P11 from "../assets/pic10.jpg";
import P12 from "../assets/pic11.jpg";
import P13 from "../assets/pic12.jpg";
import P14 from "../assets/pic13.jpg";
import P15 from "../assets/pic14.jpg";
import P16 from "../assets/pic15.jpg";
import P17 from "../assets/p1.jpg";
import P18 from "../assets/pic17.jpg";
import P19 from "../assets/pic18.jpg";
import P20 from "../assets/pic19.jpg";

const projectData = [
  {
    title: "E-commerce Site",
    img: P1,
    link: "https://mern-ecommerce-lilac.vercel.app",
    tools: ["MERN Stack", "JWT Auth", "Tailwind CSS"],
    points: [
      "Full-stack E-commerce site with authentication and checkout",
      "Admin dashboard for product and order management"
    ]
  },
  {
    title: "Bulk Mail App",
    img: P2,
    link: "https://bulkmail-frontend-chi.vercel.app",
    tools: ["React", "Node.js", "Nodemailer"],
    points: [
      "Send bulk emails to multiple users at once",
      "Fully responsive UI with backend mail integration"
    ]
  },
  {
    title: "Recipe App",
    img: P3,
    link: "https://recipe-app-livid-three.vercel.app",
    tools: ["React", "Tailwind CSS"],
    points: [
      "Recipe listing and submission platform",
      "Responsive design with smooth user experience"
    ]
  },
  {
    title: "Udemy Clone",
    img: P4,
    link: "https://thenvanathi.github.io/udemy-clone",
    tools: ["HTML", "CSS", "JavaScript"],
    points: [
      "Static Udemy homepage clone",
      "Mobile responsive with clean design"
    ]
  },
  {
    title: "Greenden 🌱",
    img: P5,
    link: "https://thenvanathi.github.io/greenden-tailwind",
    tools: ["HTML", "Tailwind CSS"],
    points: [
      "Plant selling website landing page",
      "Beautiful Tailwind-based layout and design"
    ]
  },
  {
    title: "Registration Form",
    img: P6,
    link: "https://thenvanathi.github.io/registration-form/",
    tools: ["HTML", "CSS"],
    points: [
      "User-friendly registration form design",
      "Validations using pure HTML and CSS"
    ]
  },
  {
    title: "Character Counter",
    img: P7,
    link: "https://thenvanathi.github.io/simple-textarea/",
    tools: ["HTML", "CSS", "JavaScript"],
    points: [
      "Real-time character count for textarea",
      "JavaScript DOM manipulation example"
    ]
  },
  {
    title: "Birthday Gift Card",
    img: P8,
    link: "https://thenvanathi.github.io/gift-card/",
    tools: ["HTML", "CSS"],
    points: [
      "Beautiful birthday greeting card",
      "Pure CSS animations and design"
    ]
  },
  {
    title: "Nostra Ecommerce",
    img: P18,
    link: "https://thenvanathi.github.io/nostra-ecommerce/index.html",
    tools: ["HTML", "CSS", "JavaScript"],
    points: [
      "E-commerce landing page for clothes",
      "Fully responsive with smooth scroll effects"
    ]
  },
  {
    title: "Drum Kit Game",
    img: P13,
    link: "https://thenvanathi.github.io/drum-kit-game/",
    tools: ["HTML", "CSS", "JavaScript"],
    points: [
      "Interactive drum kit sound game",
      "Keyboard event-based sound effects"
    ]
  },
  {
    title: "Fav Student App",
    img: P14,
    link: "https://fav-student-ten.vercel.app/",
    tools: ["React", "Tailwind CSS"],
    points: [
      "Simple app to add favorite student names",
      "React form handling with dynamic UI updates"
    ]
  },
  {
    title: "Fruit App",
    img: P15,
    link: "https://fruitapp-frontend.vercel.app/",
    tools: ["React", "Node.js", "MongoDB"],
    points: [
      "Add fruits dynamically into a database",
      "Full-stack CRUD application"
    ]
  },
  {
    title: "MongoDB CRUD Task",
    img: P16,
    link: "https://mongodb-crud-task.vercel.app/",
    tools: ["React", "MongoDB", "Node.js"],
    points: [
      "Basic MongoDB CRUD task demonstration",
      "Command-line and UI interaction supported"
    ]
  },
  {
    title: "Todo App",
    img: P17,
    link: "https://my-react-app-theta-nine.vercel.app/",
    tools: ["React", "Tailwind CSS"],
    points: [
      "Todo list with add and delete functionalities",
      "State management using React hooks"
    ]
  },
  {
    title: "Weather App",
    img: P20,
    link: "https://weather-app-navy-three-35.vercel.app/",
    tools: ["React", "OpenWeather API", "Tailwind CSS"],
    points: [
      "Fetches real-time weather data by city",
      "Responsive and mobile-friendly design"
    ]
  },
  {
    title: "Joke Generator",
    img: P19,
    link: "https://joke-generator-ochre-rho.vercel.app/",
    tools: ["React", "Joke API"],
    points: [
      "Generates random jokes on button click",
      "Simple API integration with React"
    ]
  },
  {
    title: "Perfumy",
    img: P9,
    link: "https://perfumy-react-iota-gules.vercel.app/",
    tools: ["React", "Tailwind CSS"],
    points: [
      "Perfume product landing page",
      "Single page React app with Tailwind styling"
    ]
  },
  {
    title: "Car Gallery",
    img: P10,
    link: "https://car-gallery-blue.vercel.app/",
    tools: ["React", "Tailwind CSS"],
    points: [
      "Gallery page displaying cars collection",
      "Built with reusable React components"
    ]
  },
  {
    title: "Moving Services",
    img: P11,
    link: "https://thenvanathi.github.io/bootstrap-MoveIt/",
    tools: ["HTML", "Bootstrap"],
    points: [
      "Landing page for moving services",
      "Built with Bootstrap grid and responsive utilities"
    ]
  },
  {
    title: "Counter + RNG App",
    img: P12,
    link: "https://react-app-rouge-eta.vercel.app/",
    tools: ["React", "Tailwind CSS"],
    points: [
      "Generates random numbers and counts with simple UI",
      "Uses React state and components effectively"
    ]
  }
];

export default projectData;
