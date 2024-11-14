import { intro } from "../../constants";
import { motion } from "framer-motion";
const Intro = () => {
  return (
    <motion.div
      className="relative z-10 mx-auto flex max-w-6xl flex-col items-center justify-center space-y-8 px-6  py-15 text-center md:px-12 "
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <h1 className="mt-20 text-5xl font-bold leading-tight text-white md:text-6xl ">
        {intro.title}
      </h1>
      <p className="text-lg text-gray-200 md:text-xl">{intro.description}</p>
      <button className="transform rounded-s-full bg-green-500 px-6 py-3 font-semibold text-white shadow-lg transition hover:scale-105 hover:bg-green-700">
        Get Started
      </button>
    </motion.div>
  );
};

export default Intro;
