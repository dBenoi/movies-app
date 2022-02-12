import React, { Component } from "react";
import styled from "styled-components";

import Logo from "./Logo";
import Links from "./Links";

const Container = styled.div.attrs({
  className: "container",
})``;

const Nav = styled.nav.attrs({
  className: "navbar navbar-expand-lg bg-dark navbar-dark",
})`
  margin-bottom: 20px;
`;

class Navbar extends Component {
  render() {
    return (
      <Container>
        <Nav>
          <Logo />
          <Links />
        </Nav>
      </Container>
    );
  }
}

export default Navbar;
