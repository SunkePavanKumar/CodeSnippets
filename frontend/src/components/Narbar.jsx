import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);
  const navigator = useNavigate();

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigator("/");
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: "Home", link: "/home" },
    { id: 2, text: "About", link: "/about" },
    { id: 3, text: "My entries", link: "/myentries" },
    { id: 4, text: "All entries", link: "/allentries" },
    { id: 5, text: "Contact", link: "/contact" },
    { id: 6, text: "Logout", link: "#" },
  ];

  return (
    <div className=" bg-black flex justify-between items-center h-24  mx-auto px-4 text-white w-full">
      {/* Logo */}
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">
        Code Snippets
      </h1>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black text-center text-nowrap"
            onClick={item.text === "Logout" ? handleLogout : ""}
          >
            <Link to={item.link}>{item.text} </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
        }
      >
        {/* Mobile Logo */}
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
          Code Snippets
        </h1>

        {/* Mobile Navigation Items */}
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600"
            onClick={item.text === "Logout" ? handleLogout : ""}
          >
            <Link to={item.link}> {item.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
