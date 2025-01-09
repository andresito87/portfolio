import { BiLink } from "react-icons/bi";
import imageBookNetwork from "/assets/BookSocialNetwork.png";
import imageSurfCamp from "/assets/SurfCamp.png";
import imageFlixx from "/assets/flixx.png";
import imageMediashop from "/assets/mediashop.png";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const projectsData = [
  {
    image: imageMediashop,
    title: "Mediashop Ecommerce",
    description: "Allows to buy products",
    technologies: ["Angular", "Laravel", "MySql"],
    link: "https://github.com/andresito87/mediashop",
  },
  {
    image: imageBookNetwork,
    title: "Book Social Network",
    description: "Allows to share books between partners",
    technologies: ["React", "Java", "SpringBoot", "MySQL"],
    link: "https://github.com/andresito87/book-social-network",
  },
  {
    image: imageSurfCamp,
    title: "Surf Camp Blog",
    description: "Allows to get info about the camp",
    technologies: ["Next.js", "Scrapi", "Sass"],
    link: "https://github.com/andresito87/Surf-Camp-Blog",
  },
  {
    image: imageFlixx,
    title: "FliXX",
    description: "Allows to get info about movies and series",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://stunning-entremet-c3997b.netlify.app/",
  },
];

const ScrollReveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <ScrollReveal>
      <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
        <img
          src={project.image}
          alt=""
          className="w-full rounded-2xl transition-all
       duration-300 hover:scale-105 md:w-[350px]"
        />
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <div className="flex items-center text-xl font-semibold">
              {project.title}
              <a href={project.link} target="_blank">
                <BiLink className="text-2xl ml-4" />
              </a>
            </div>
            <p className="text-gray-400">{project.description}</p>
          </div>
          <div className="flex flex-wrap gap-5">
            {project.technologies.map((tech, index) => (
              <span key={index} className="rounded-lg bg-black p-3">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
};

ScrollReveal.propTypes = {
  children: PropTypes.node.isRequired,
};

const Projects = () => {
  return (
    <div
      id="projects"
      className="min-h-screen w-full flex flex-col
  items-center justify-center gap-16 p-4 md:px-14 md:py-24"
    >
      <ScrollReveal>
        <h1 className="text-4xl font-light text-white md:text-6xl">
          My projects
        </h1>
      </ScrollReveal>

      <div className="flex w-full max-w-[900px] flex-col gap-16 text-white">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
