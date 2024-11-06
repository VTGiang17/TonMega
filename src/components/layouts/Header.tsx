import { Button, Drawer, Flex } from "antd";
import { IconMenuClose, IconMenuOpen } from "../common/ShareIcon";
import { useEffect, useState } from "react";
import classNames from "classnames";
import appLogo from "../../assets/logo.svg";
import HeaderMenu from "./HeaderMenu";
import { BREAKPOINTS } from "../../utils/breakpoint";
import "./header.scss";
import { Link } from "react-router-dom";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [screen, setScreen] = useState(window.innerWidth);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    if (scrollTop > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", () => setScreen(window.innerWidth));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", () => setScreen(window.innerWidth));
    };
  }, []);

  return (
    <header
      className={classNames(
        "fixed top-0 left-0 right-0 z-[100] app-header flex items-center justify-between  px-6 xl:px-[120px]",
        {
          "app-header--scrolled": isScrolled,
          "py-3": isScrolled,
          "py-6": !isScrolled,
        }
      )}
    >
      <Link to={"/"} className="block w-[100px] xl:w-[130px]">
        <img src={appLogo} alt="logo" className="w-full" />
      </Link>
      {screen < BREAKPOINTS.xl ? (
        <>
          <Drawer
            open={isMenuOpen}
            width={"100%"}
            className="app-header__menu-mobile relative"
            styles={{
              header: {
                display: "none",
              },
            }}
          >
            <Flex justify={"end"}>
              <IconMenuClose
                className="mb-[120px] absolute  top-5 right-5 cursor-pointer"
                onClick={() => {
                  setMenuOpen(false);
                }}
              />
            </Flex>
            <HeaderMenu />
            <Button className="banner-btn--neon w-[160px] h-[44px] text-white  ">
              Connect Wallet
            </Button>
          </Drawer>
          <IconMenuOpen
            className="ms-auto cursor-pointer"
            onClick={() => {
              setMenuOpen(true);
            }}
          />
        </>
      ) : (
        <>
          <HeaderMenu />
          <Button className="banner-btn--neon w-[160px] h-[44px] text-white">
            Connect Wallet
          </Button>
        </>
      )}
    </header>
  );
}

export default Header;
