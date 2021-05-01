import { chakra, Icon, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";
import styles from "./navbar.module.sass";
import { AiOutlineMenu } from "react-icons/ai";

import Button from "../gui/button";
import StoreDropdown from "./StoreDropdown";
import HamburgerDropdown from "./HamburgerDropdown";

var currentPath, updateCurrentPath;

function StoreNavIcons({ amount, href }) {
  return (
    <Link
      onClick={() => {
        updateCurrentPath(href);
      }}
      to={href}
    >
      <Flex justifyContent="center" alignItems="center" mr={10}>
        <chakra.span pos="relative" display="inline-block">
          <Icon
            boxSize={6}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className={styles["basket-button"]}
          >
            <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
          </Icon>
          {amount >= 1 && (
            <chakra.span
              pos="absolute"
              top="-1px"
              right="-1px"
              px={2}
              py={1}
              fontSize="xs"
              fontWeight="bold"
              lineHeight="none"
              color="red.100"
              transform="translate(50%,-50%)"
              bg="red.600"
              rounded="full"
            >
              {amount}
            </chakra.span>
          )}
        </chakra.span>
      </Flex>
    </Link>
  );
}

function NavItem({ href, children }) {
  const isCurrent =
    (href !== "/" && currentPath.startsWith(href)) || currentPath === href;
  const className = isCurrent ? styles["item-selected"] : styles["item"];

  return (
    <Link
      onClick={() => {
        updateCurrentPath(href);
      }}
      to={href}
      className={className}
    >
      <span>{children}</span>
    </Link>
  );
}

function NavItemDropdown({ href, dropdown, children, hamburger }) {
  const isCurrent =
    (href !== "/" && currentPath.startsWith(href)) || currentPath === href;
  const className = hamburger
    ? styles["hamburger-menu"]
    : isCurrent
    ? styles["item-selected"]
    : styles["item"];

  return (
    <Link
      onClick={() => {
        updateCurrentPath(href);
      }}
      to={href}
      className={className}
    >
      <span>{children}</span>
      <div className={styles["dropdown-content"]}>{dropdown}</div>
    </Link>
  );
}

export default function Navbar({ user, environment, basket }) {
  [currentPath, updateCurrentPath] = React.useState(window.location.pathname);

  return (
    <div className={styles["navbar"]}>
      <div className={styles["navbar-content"]}>
        <div className={styles["item-list"]}>
          <NavItemDropdown
            hamburger={true}
            href="#"
            dropdown={<HamburgerDropdown />}
          >
            <AiOutlineMenu size={25} />
          </NavItemDropdown>
          <NavItem href="/">Inicio</NavItem>
          <NavItem href="/community">Comunidad</NavItem>
          <NavItem href="/stats">Estadisticas</NavItem>
          <NavItem href="/punishments">Sanciones</NavItem>
          <NavItemDropdown
            href="/store"
            dropdown={<StoreDropdown environment={environment} />}
          >
            Tienda
          </NavItemDropdown>
        </div>

        <div className={styles["item-list-right"]}>
          <StoreNavIcons amount={basket.getItemCount()} href="/store/basket" />
          <Button
            style={{
              borderRadius: "10px",
              color: "#000",
              background: "rgb(255, 196, 77)",
            }}
          >
            <img
              className={styles["avatar"]}
              src="/assets/steve.jpg"
              alt="Default skin head"
            />
            {user == null ? "No estás logeado" : user.username}
          </Button>
        </div>
      </div>
    </div>
  );
}
