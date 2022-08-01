import React from "react";
import Leftnav from "./leftnav";
import Rightnav from "./rightnav";

function Layouts(props) {
  return (
    <>
      <div className="main-wrap">
        <Leftnav />
        <div className="content-wrap">{props.children}</div>
        <Rightnav />
      </div>
    </>
  );
}

export default Layouts;
