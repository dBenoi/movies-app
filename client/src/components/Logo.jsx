import React, { Component } from "react";
import styled from "styled-components";

import logo from "./logo.svg";

const Wrapper = styled.a.attrs({
  className: "navbar-brand",
})``;

class Logo extends Component {
  render() {
    return (
      <Wrapper href="localhost:8000">
        <img src={logo} width="50" height="50" alt="Local Host" />
      </Wrapper>
    );
  }
}

export default Logo;
