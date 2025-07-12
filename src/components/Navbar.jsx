import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const Links = [
    { id: 1, name: "Anasayfa", link: "#anasayfa" },
    { id: 2, name: "Hakkımda", link: "#hakkımda" },
    { id: 3, name: "Beceriler", link: "#becerilerim" },
    { id: 4, name: "Projelerim", link: "#projelerim" },
    { id: 5, name: "İletişim", link: "#iletisim" },

  ];

  return (
    <header
      className="fixed top-0 left-0 w-full z-20 text-black"
      data-aos="fade-up"
      data-aos-delay="400"
    >
      <div className="container mx-auto flex items-center justify-between p-5">
        {/* logo */}
        <a href="#anasayfa" className="text-4xl font-bold text-[#ffa829]">
          Betül D.
        </a>

        {/* mobil menü butonu */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Mobil menüyü aç/kapat"
        >
          {isOpen ? (
            <FiX className="w-8 h-8 text-black" />
          ) : (
            <FiMenu className="w-8 h-8 text-black" />
          )}
        </button>

        {/* desktop menü */}
        <nav className="hidden md:flex items-center space-x-7">
          {Links.map((link) => (
            <a
              key={link.id}
              href={link.link}
              className="hover:text-black text-lg"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>

      {/* mobil menü */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden bg-[#ffa829] absolute top-0 left-0 w-full h-screen flex flex-col items-center justify-center space-y-9`}
      >
        <button
          className="absolute top-5 right-5 text-amber-50"
          onClick={() => setIsOpen(false)}
          aria-label="Mobil menüyü kapat"
        >
          <FiX className="w-8 h-8" />
        </button>

        {Links.map((link) => (
          <a
            key={link.id}
            href={link.link}
            className="hover:text-gray-300 text-lg text-amber-50"
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </a>
        ))}
      </div>
    </header>
  );
};

export default Navbar;
