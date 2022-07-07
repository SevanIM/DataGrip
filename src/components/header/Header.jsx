import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { Container, NavItem, Logo, NavContainer } from "./HeaderStyleld";

const NAV_ITEMS = [
  {
    name: "Մեր մասին",
    path: "about",
  },
  {
    name: "Գաղտնիության քաղաքականություն",
    path: "privacy",
  },
];
const Header = () => {
  const navigate = useNavigate();
  function handlerClick() {
    navigate("/");
  }
  return (
    <Container>
      <Logo as="img" onClick={handlerClick} />
      <NavContainer>
        {NAV_ITEMS.map(({ name, path }) => (
          <NavLink to={path} key={path}>
            <NavItem>{name}</NavItem>
          </NavLink>
        ))}
      </NavContainer>
    </Container>
  );
};

export default Header;
