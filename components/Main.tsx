import { useState } from "react";
import DropDownMenu from "./DropDown";

export default function Main() {
  return (
    <MainDropDown name="DropDownhere" icon={"😎"}>
      <DropDownMenu />
    </MainDropDown>
  );
}

function MainDropDown(props) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <li className="text-8xl">
        <a onClick={() => setOpen(!open)} href="#">
          {props.icon}
          {props.name}
        </a>
        {open && props.children}
      </li>
    </div>
  );
}
