// import bg from "../../assets/download (1).png";

// const Hero = () => {
//   return (
//     <div className="relative h-[800px] overflow-hidden bg-slate-800 dark:bg-slate-500 dark:text-slate-400 md:p-16 p-5 ">
//       <div className="absolute -inset-x-0">
//         <img src={bg} alt="bg-image" />
//       </div>
//     </div>
//   );
// };

// export default Hero;
///////////////
import bg from "../../assets/download (1).png";
import Wave from "./Wave";
import Intro from "./Intro";
const Hero = ({ darkMode }) => {
  return (
    <div className="relative h-[800px] overflow-hidden bg-slate-800 dark:bg-slate-500 dark:text-slate-400 md:p-16 p-5">
      <div className="absolute inset-0 inset-y-3 flex justify-end items-center">
        <img src={bg} alt="bg-image" className="object-cover " />
      </div>
      <Intro />
      {/* SVG wave */}
      <Wave darkMode={darkMode} />
    </div>
  );
};

export default Hero;
