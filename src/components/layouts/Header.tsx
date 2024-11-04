import { Button, Drawer, Flex } from "antd";
import { IconMenuClose, IconMenuOpen } from "../common/ShareIcon";
import { useEffect, useState } from "react";
import classNames from "classnames";
import appLogo from "../../assets/logo.svg";
import HeaderMenu from "./HeaderMenu";
import { BREAKPOINTS } from "../../utils/breakpoint";
import "./header.scss";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const screenSize = window.innerWidth;

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

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={classNames(
        "fixed top-0 left-0 right-0 z-[100] app-header flex items-center xl:px-[120px] px-6",
        {
          "app-header--scrolled": isScrolled,
          "py-3": isScrolled,
          "py-6": !isScrolled,
        }
      )}
    >
      <div className="w-[90px] xl:w-[130px]">
        <img src={appLogo} alt="logo" className="w-full" />
      </div>
      {screenSize < BREAKPOINTS.xl ? (
        <>
          <Drawer
            open={isMenuOpen}
            width={"100%"}
            className="app-header__menu-mobile"
            styles={{
              header: {
                display: "none",
              },
            }}
          >
            <Flex justify={"end"}>
              <IconMenuClose
                className="mb-[120px]"
                onClick={() => {
                  setMenuOpen(false);
                }}
              />
            </Flex>
            <HeaderMenu />
          </Drawer>
          <IconMenuOpen
            className="ms-auto"
            onClick={() => {
              setMenuOpen(true);
            }}
          />
        </>
      ) : (
        <>
          <HeaderMenu />
          {!isScrolled ? (
            <Button className="banner-btn--neon w-[160px] h-[44px] text-white">
              Get Reward
            </Button>
          ) : null}
        </>
      )}
    </header>
  );
}

export default Header;
