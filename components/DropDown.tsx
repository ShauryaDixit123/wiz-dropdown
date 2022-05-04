import { useState } from "react";
import { CSSTransition } from "react-transition-group";

export default function DropDownMenu() {
  const [activeMenu, setActiveMenu] = useState("main");

  function DropDownItem(props) {
    return (
      <a
        className="menu-item"
        href="#"
        onClick={() => props.goTo && setActiveMenu(props.goTo)}
      >
        {props.children}
      </a>
    );
  }
  return (
    <div className="dropdown">
      <CSSTransition in={activeMenu === "main"} timeout={500}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <DropDownItem>Hello</DropDownItem>
          <DropDownItem>Hello2</DropDownItem>
          <DropDownItem goTo="moreItems">MoreItems</DropDownItem>
        </div>
      </CSSTransition>
      <CSSTransition
        in={activeMenu === "moreItems"}
        unmountOnExit
        timeout={500}
      >
        <div className="secondry-menu">
          <DropDownItem>Bye</DropDownItem>
          <DropDownItem>fuck u</DropDownItem>
          <DropDownItem goTo="main">Fatti</DropDownItem>
        </div>
      </CSSTransition>
    </div>
  );
}
