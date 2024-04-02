import { Link } from "react-router-dom";
import DesktopNavbar from "./DesktopNavbar";
import useNavbarHook from "../../hooks/useNavbarHook";
import MobileNavbar from "./MobileNavbar";
import Logo from "../../../public/images/ramlogo.jpeg";

const linkData = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "About",
    url: "/about",
  },
  {
    name: "Community",
    url: "/community",
  },
  {
    name: "Darshan",
    url: "/darshan",
  },
];

const Navbar = () => {
  const { isMenuOpen, isMobile, closeMenu, toggleMenu } = useNavbarHook();

  return (
    <>
      <header className="sticky top-0 z-50 flex max-w-9xl bg-orange-500 text-black font-serif shadow-lg justify-between items-center">
        <div className="w-20 h-22">
          <img
            src={Logo}
            alt=""
          />
        </div>
        {isMobile ? (
          <MobileNavbar
            links={linkData}
            isMenuOpen={isMenuOpen}
            closeMenu={closeMenu}
            toggleMenu={toggleMenu}
          />
        ) : (
          <DesktopNavbar links={linkData} />
        )}
      </header>
    </>
  );
};

export default Navbar;
