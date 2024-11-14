// check video description for the assests and constants file

import { FaSearch, FaCalendarAlt, FaCar } from "react-icons/fa";

// import car01 from "../assets/car01.png";
// import car02 from "../assets/car02.png";
// import car03 from "../assets/car03.png";
import ch33 from "/image/33.png";
///////////////////////////
import user01 from "../assets/user01.png";
import user02 from "../assets/user02.png";
import user03 from "../assets/user03.png";
import user04 from "../assets/user04.png";

export const intro = {
  title: "Welcome to EV SERVICE",
  description:
    " Your ultimate destination for finding the perfect service. Explore our wide range and drive your favorite car today..",
};

export const menuItems = [
  { name: "Blog", href: "#blog" },
  { name: "Services", href: "#services" },
  { name: "FAQs", href: "#faqs" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
  { name: "Team", href: "#team" },
  { name: "Catalog", href: "/catalog" },
];

export const carsInfo = [
  {
    name: "Charger",
    // purpose: "selling",
    image: ch33,
  },
  {
    name: "Charger",
    // purpose: "buying",
    image: ch33,
  },
  {
    name: "Charger",
    // purpose: "renting",
    image: ch33,
  },
];

export const reviews = [
  {
    name: "Emily Clark",
    role: "Car Enthusiast",
    avatar: user01,
    quote:
      "Great selection of accessories and chargers for electric cars. The delivery was prompt, and the items arrived in perfect condition.",
    rating: 4.9,
    totalReviews: 45,
  },
  {
    name: "Michael Brown",
    role: "Professional Racer",
    avatar: user02,
    quote:
      "The site offers a wide range of accessories at the best prices. I loved their quick order processing and excellent customer service.",
    rating: 5.0,
    totalReviews: 60,
  },
  {
    name: "Samantha Green",
    role: "Mechanic",
    avatar: user03,
    quote:
      "My experience with this site was smooth from start to finish. They have a diverse selection of high-quality accessories and reliable delivery service.",
    rating: 4.7,
    totalReviews: 30,
  },
  {
    name: "James Wilson",
    role: "SUV Lover",
    avatar: user04,
    quote:
      "I bought a home charger for my electric car from this site, and everything was perfect from order to delivery. The customer service was also very helpful.",
    rating: 4.8,
    totalReviews: 38,
  },
  {
    name: "Linda Johnson",
    role: "Family Driver",
    avatar: user03,
    quote:
      "The best site for buying electric car accessories. They have everything I need at reasonable prices, and the online shopping experience was easy and fast.",
    rating: 4.9,
    totalReviews: 52,
  },
  {
    name: "Robert Davis",
    role: "Classic Car Collector",
    avatar: user02,
    quote:
      "The products are top-notch, and the website is user-friendly. I found exactly what I needed for my car, and the checkout process was a breeze.",
    rating: 5.0,
    totalReviews: 40,
  },
];

export const steps = [
  {
    icon: FaSearch,
    bgFrom: "from-blue-500",
    bgTo: "to-purple-500",
    title: "Browse Inventory",
    description: "Welcome to Our Electric Vehicle Collection.",
  },
  {
    icon: FaCalendarAlt,
    bgFrom: "from-green-500",
    bgTo: "to-teal-500",
    title: "Discover Our Premium Electric Car Accessories",
    description:
      "Explore our wide range of accessories designed to enhance your electric vehicle experience.",
  },
  {
    icon: FaCar,
    bgFrom: "from-red-500",
    bgTo: "to-pink-500",
    title: "Finalize Your Purchase",
    description: "Complete the paperwork and drive away in your new car!",
  },
];

export const footer = {
  title: "EV SERVICE",
  slogan: "See the Road Ahead",
  description:
    " EV SERVICE offers the best selection of electric vehicle accessories to help you find everything you need, we have what you need.",
};

// Car - Favicon
// https://img.icons8.com/?size=100&id=kfRfIRUL7jMk&format=png&color=000000

{
  // Wave Svg - later we will use it
  /* <div className="absolute inset-x-0 bottom-0 z-0">
      <svg
        className="block w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill={`${darkMode ? "#334155" : "white"}`}
          fillOpacity="1"
          d="M0,224L40,240C80,256,160,288,240,293.3C320,299,400,277,480,261.3C560,245,640,235,720,240C800,245,880,267,960,277.3C1040,288,1120,288,1200,261.3C1280,235,1360,181,1400,154.7L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>
    </div> */
}

// scroll bar
/* ::-webkit-scrollbar {
  @apply w-2;
}

::-webkit-scrollbar-track {
  @apply bg-gray-200 dark:bg-gray-700;
}

::-webkit-scrollbar-thumb {
  @apply bg-slate-600 dark:bg-slate-400 rounded-full;
}

::-webkit-scrollbar-thumb:hover {
  @apply bg-slate-700 dark:bg-slate-500;
} */
