import {
  BiLogoAngular,
  BiLogoDocker,
  BiLogoJava,
  BiLogoPhp,
  BiLogoPostgresql,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from "react-icons/bi";
import { motion } from "framer-motion";
import { FaLaravel } from "react-icons/fa";

const Tech = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      id="tech"
      className="flex min-h-[70vh] w-full flex-col items-center 
      justify-center gap-16 md:gap-32"
    >
      <motion.h1
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        className="text-4xl font-ligth text-white md:text-6xl"
      >
        Technologies
      </motion.h1>
      <div className="flex flex-wrap items-center justify-center gap-10 p-5">
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          className="text-4xl font-ligth text-white md:text-6xl"
        >
          <a href="https://www.typescriptlang.org/" target="_blank">
            <BiLogoTypescript
              className="cursor-pointer text-[80px] text-sky-500 transition-all 
        duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"
            />
          </a>
        </motion.div>
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          className="text-4xl font-ligth text-white md:text-6xl"
        >
          <a
            href="https://docs.oracle.com/en/java/javase/17/docs/api/index.html"
            target="_blank"
          >
            <BiLogoJava
              className="cursor-pointer text-[80px] text-orange-500 transition-all 
        duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"
            />
          </a>
        </motion.div>
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          className="text-4xl font-ligth text-white md:text-6xl"
        >
          <a href="https://www.php.net/" target="_blank">
            <BiLogoPhp
              className="cursor-pointer text-[80px] text-white transition-all 
        duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"
            />
          </a>
        </motion.div>
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          className="text-4xl font-ligth text-white md:text-6xl"
        >
          <a href="https://react.dev/" target="_blank">
            <BiLogoReact
              className="cursor-pointer text-[80px] text-sky-300 transition-all 
        duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"
            />
          </a>
        </motion.div>
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          className="text-4xl font-ligth text-white md:text-6xl"
        >
          <a href="https://angular.dev/" target="_blank">
            <BiLogoAngular
              className="cursor-pointer text-[80px] text-red-600 transition-all 
        duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"
            />
          </a>
        </motion.div>
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          className="text-4xl font-ligth text-white md:text-6xl"
        >
          <a href="https://laravel.com/" target="_blank">
            <FaLaravel
              className="cursor-pointer text-[80px] text-red-400 transition-all 
        duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"
            />
          </a>
        </motion.div>
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          className="text-4xl font-ligth text-white md:text-6xl"
        >
          <a href="https://tailwindcss.com/" target="_blank">
            <BiLogoTailwindCss
              className="cursor-pointer text-[80px] text-green-600 transition-all 
        duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"
            />
          </a>
        </motion.div>
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          className="text-4xl font-ligth text-white md:text-6xl"
        >
          <a href="https://www.docker.com/" target="_blank">
            <BiLogoDocker
              className="cursor-pointer text-[80px] text-blue-500 transition-all 
        duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"
            />
          </a>
        </motion.div>
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          className="text-4xl font-ligth text-white md:text-6xl"
        >
          <a href="https://www.postgresql.org/" target="_blank">
            <BiLogoPostgresql
              className="cursor-pointer text-[80px] text-blue-500 transition-all 
        duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"
            />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Tech;
