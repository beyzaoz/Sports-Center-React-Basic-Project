import logo from "../img/logo.png";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      id="navbar"
      className={`navbar grid grid-cols-12 items-center fixed top-0 w-full z-[1000] transition-all duration-300 ${scrolled ? "scrolled" : ""}`}
    >
      <div
        id="navbarContainer"
        className="col-start-3 col-span-8 flex items-center justify-between relative"
      >
        {/* Logo ve Linkleri bir arada tutan sol grup */}
        <div className="flex items-center gap-12">
          <Logo />
          <Buttons />
        </div>

        {/* Hamburger sadece mobilde sağa yaslı görünecek */}
        <Hamburger />
      </div>
    </div>
  );
}

function Logo() {
  return (
    <div className="flex-shrink-0">
      <img src={logo} alt="logo" className="h-10 w-auto" />
    </div>
  );
}

function Hamburger() {
  useEffect(() => {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.querySelector(".navLinks");

    const handleClick = () => {
      navLinks?.classList.toggle("active");
    };

    hamburger?.addEventListener("click", handleClick);
    return () => hamburger?.removeEventListener("click", handleClick);
  }, []);

  return (
    <div
      className="hamburger lg:hidden font-bold text-4xl text-white cursor-pointer ml-auto"
      id="hamburger"
    >
      ☰
    </div>
  );
}

function Buttons() {
  return (
    /* hidden lg:flex sayesinde masaüstünde logonun yanında, mobilde gizli */
    <div className="navLinks hidden lg:flex items-center gap-6 font-bold text-white text-lg">
      <a
        href="#home"
        className="hover:text-[#F39C12] transition whitespace-nowrap"
      >
        Home
      </a>
      <a
        href="#classes"
        className="hover:text-[#F39C12] transition whitespace-nowrap"
      >
        Classes
      </a>
      <a
        href="#trainers"
        className="hover:text-[#F39C12] transition whitespace-nowrap"
      >
        Trainer
      </a>
      <a
        href="#review"
        className="hover:text-[#F39C12] transition whitespace-nowrap"
      >
        Review
      </a>
      <a
        href="#contact"
        className="hover:text-[#F39C12] transition whitespace-nowrap"
      >
        Contact
      </a>

      {/* Join Us Butonu */}
      <button className="bg-[#F39C12] px-6 py-2 rounded-xl text-white ml-4 hover:scale-105 transition-transform">
        JOIN US
      </button>
    </div>
  );
}
