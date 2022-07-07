import React from "react";
import am from "../../assets/ameria_logo.png";

import { Container, Copyright, PoweredBy } from "./FooterStyled";

const Footer = () => (
  <Container>
    <Copyright>A hackaton project made in Gyumri</Copyright>
    <PoweredBy>
      Powered by <img src={am}></img>
    </PoweredBy>
  </Container>
);

export default Footer;
