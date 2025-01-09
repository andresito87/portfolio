import image from "/assets/myPhoto.png";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <div
      id="home"
      className="px-16 flex flex-col min-h-screen w-full items-center justify-center 
      py-32 md:px-32 gap-5"
    >
      <div className="flex items-center justify-center gap-10 text-white">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src={image}
            alt="my photo"
            className="w-[300px] cursor-ponter rounded-full shadow-xl shadow-indigo-900
          transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl
          hover:shadow-indigo-600 md:w-[350px]"
          />
        </motion.div>
      </div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex max-w-[600px] flex-col items-center justify-center 
      gap-3 text-center"
      >
        <h1
          className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text
       text-transparent text-5xl font-light md:text-7xl"
        >
          Andrés Podadera
        </h1>
        <h3
          className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text
       text-transparent text-2xl md:text-3xl"
        >
          Web Developer
        </h3>
        <p className="md:text-base text-pretty text-sm text-gray-400">
          I&apos;m a web developer skilled in React, Angular, and Laravel,
          focused on creating clean, scalable, and maintainable solutions. From
          front-end design to back-end optimizations, I create applications for
          dynamic user experiences.
        </p>
      </motion.div>
    </div>
  );
};

export default Hero;
