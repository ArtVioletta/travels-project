import React from "react";
import { Context } from "../Context";
// @ts-ignore
import { HashLink } from "react-router-hash-link";
import SupportContainer from "./SupportContainer";
import Logo from "./Logo";

export const Header = () => {
  const { selectedHashLink, setSelectedHasLink } = React.useContext(Context);
  return (
    <div className="header">
      <Logo />
      <nav className={"navigation"}>
        <HashLink
          to="#home"
          className={"nav-element"}
          onClick={() => setSelectedHasLink("home")}
        >
          Home
        </HashLink>
        <HashLink
          to="#directions"
          className={"nav-element"}
          onClick={() => setSelectedHasLink("directions")}
        >
          Directions
        </HashLink>
        <HashLink
          to="#about"
          className={"nav-element"}
          onClick={() => setSelectedHasLink("about")}
        >
          About
        </HashLink>
        <HashLink
          to="#about"
          className={"nav-element"}
          onClick={() => setSelectedHasLink("contacts")}
        >
          Contacts
        </HashLink>
      </nav>
      <SupportContainer />
    </div>
  );
};

export default Header;
