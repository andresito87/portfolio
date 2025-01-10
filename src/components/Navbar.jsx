import { useState, useEffect, useRef } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { BsDiscord, BsGithub, BsLinkedin } from "react-icons/bs";
import { TbFileCv } from "react-icons/tb";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuRef = useRef(null); // Referencia al contenedor del menú

  // Función para abrir o cerrar el menú
  const menuOpen = () => {
    setIsOpen(!isOpen);
  };

  // Cerrar el menú cuando el clic es fuera del menú
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false); // Cerrar el menú si el clic es fuera
      }
    };

    document.addEventListener("mousedown", handleClickOutside); // Escuchar clics fuera
    return () => {
      document.removeEventListener("mousedown", handleClickOutside); // Limpiar el listener
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        // Punto de quiebre para la versión móvil (ajusta según sea necesario)
        setIsOpen(false); // Cerrar el menú si la pantalla es más ancha que el punto de quiebre
      }
    };

    window.addEventListener("resize", handleResize); // Escuchar cambios en el tamaño de la ventana
    return () => {
      window.removeEventListener("resize", handleResize); // Limpiar el listener cuando el componente se desmonte
    };
  }, []);

  return (
    <nav
      className="fixed top-0 z-10 flex w-full items-center justify-between 
    border-b border-b-gray-700 bg-black/70 px-16 py-6 text-white backdrop-blur-md 
    md:justify-evenly"
    >
      <a
        href="#home"
        className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text
       text-transparent opacity-80 text-3xl font-semibold transition-all duration-300
       hover:opacity-100"
      >
        Andrés
      </a>
      <ul className="hidden md:flex gap-10">
        <a
          href="#home"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
          <li>Home</li>
        </a>
        <a
          href="#tech"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
          <li>Tech</li>
        </a>
        <a
          href="#projects"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
          <li>Projects</li>
        </a>
        <a
          href="#contact"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
          <li>Contact</li>
        </a>
      </ul>
      <ul className="hidden md:flex gap-5">
        <li
          className="cursor-pointer text-xl opacity-70 transition-all duration-300 
        hover:text-blue-500 hover:opacity-100"
        >
          <a href="https://www.linkedin.com/in/andresito87/" target="_blank">
            <BsLinkedin
              title="image logo LinkedIn"
              aria-label="image logo LinkedIn"
            />
          </a>
        </li>
        <li
          className="cursor-pointer text-xl opacity-70 transition-all duration-300 
        hover:text-orange-500 hover:opacity-100"
        >
          <a href="https://github.com/andresito87" target="_blank">
            <BsGithub
              title="image logo github"
              aria-label="image logo github"
            />
          </a>
        </li>
        <li
          className="cursor-pointer text-xl opacity-70 transition-all duration-300 
        hover:text-red-500 hover:opacity-100"
        >
          <a
            href="/assets/Andres_Podadera_CV.pdf"
            download="Andres_Podadera_CV.pdf"
          >
            <TbFileCv
              title="image logo cv file"
              aria-label="image logo cv file"
            />
          </a>
        </li>
        <li
          className="cursor-pointer text-xl opacity-70 transition-all duration-300 
        hover:text-purple-500 hover:opacity-100"
        >
          <a
            href="https://discord.com/users/937298448829530132"
            target="_blank"
          >
            <BsDiscord
              title="image logo discord"
              aria-label="image logo discord"
            />
          </a>
        </li>
      </ul>

      {isOpen ? (
        <BiX className="block md:hidden text-4xl" onClick={menuOpen} />
      ) : (
        <BiMenu className="block md:hidden text-4xl" onClick={menuOpen} />
      )}

      {isOpen && (
        <div
          ref={menuRef}
          className={`fixed right-0 top-[84px] flex h-screen w-1/2 
        flex-col items-start justify-start gap-10 border-l border-gray-800 bg-black/90 p-12`}
        >
          <ul className="flex flex-col gap-8">
            <a
              href="#home"
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
            >
              <li>Home</li>
            </a>
            <a
              href="#tech"
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
            >
              <li>Tech</li>
            </a>
            <a
              href="#projects"
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
            >
              <li>Projects</li>
            </a>
            <a
              href="#contact"
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
            >
              <li>Contact</li>
            </a>
          </ul>
          <ul className="flex flex-wrap gap-5">
            <li
              className="cursor-pointer text-xl opacity-70 transition-all duration-300 
        hover:text-blue-500 hover:opacity-100"
            >
              <a
                href="https://www.linkedin.com/in/andresito87/"
                target="_blank"
              >
                <BsLinkedin
                  title="image logo LinkedIn"
                  aria-label="image logo LinkedIn"
                />
              </a>
            </li>
            <li
              className="cursor-pointer text-xl opacity-70 transition-all duration-300 
        hover:text-orange-500 hover:opacity-100"
            >
              <a href="https://github.com/andresito87" target="_blank">
                <BsGithub
                  title="image logo github"
                  aria-label="image logo github"
                />
              </a>
            </li>
            <li
              className="cursor-pointer text-xl opacity-70 transition-all duration-300 
        hover:text-red-500 hover:opacity-100"
            >
              <TbFileCv
                title="image logo cv file"
                aria-label="image logo cv file"
              />
            </li>
            <li
              className="cursor-pointer text-xl opacity-70 transition-all duration-300 
        hover:text-purple-500 hover:opacity-100"
            >
              <a
                href="https://discord.com/users/937298448829530132"
                target="_blank"
              >
                <BsDiscord
                  title="image logo discord"
                  aria-label="image logo discord"
                />
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
