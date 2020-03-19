import React from "react";
import { Link } from "gatsby";
import logo from "../img/logo.svg";
import styled from "@emotion/styled";
import HamburgerMenu from "./HamburgerMenu";

const Navbar = () => {
  return (
    <Header>
      <InnerWrapper>
        <Link to="/">
          <Logo src={logo} alt="Tecuity Logo" />
        </Link>
        <AlignRight>
          <HamburgerMenu />
        </AlignRight>
        <Nav>
          <Link to="/">SOS Enterprise</Link>
          <Link to="/rules">Administrative Rules</Link>
          <Link to="/about">About</Link>
          <Link to="/news">News</Link>
          <Link to="/careers">Careers</Link>
          <Link to="/request-demo" className="cta">
            Request a Demo
          </Link>
        </Nav>
      </InnerWrapper>
    </Header>
  );
};
export default Navbar;

const Header = styled("header")({
  height: 70,
  width: "100%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  padding: 20
  // borderBottom: '1px solid rgb(218, 218, 218)'
});

const Logo = styled("img")({
  width: 140
});

const Nav = styled("nav")(
  {
    display: "flex",
    alignItems: "center",
    marginLeft: "auto",
    "& a": {
      margin: "0px 20px",
      textDecoration: "none",
      color: "inherit",
      fontWeight: 400,
      "&:last-child": {
        marginRight: 0
      }
    }
  },
  ({ theme }) => ({
    "& a.cta": {
      background: theme.primary.color,
      color: theme.primary.textOn,
      padding: "6px 10px 5px 10px",
      fontWeight: 500
    },
    [theme.media.max.md]: {
      display: "none"
    }
  })
);

const InnerWrapper = styled("div")({
  display: "flex",
  flexDirection: "row",
  width: "100%",
  maxWidth: 1200
});

const AlignRight = styled("div")(
  {
    marginLeft: "auto",
    display: "none",
    justifyContent: "center",
    alignItems: "center"
  },
  ({ theme }) => ({
    [theme.media.max.md]: {
      display: "flex"
    }
  })
);
