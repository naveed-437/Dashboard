import React, { Component } from "react";

const Card2 = (props) => {
  const {  tittle,text } = props.dat2;

  return (
    <div className="ms-3">
      <div className="d-flex align-items-center mt-3">
        <div>
          <i class="bi bi-menu-down an text-black"></i>
        </div>
        <div className="mt-4 ms-4">
          <h6>{tittle}</h6>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Card2;
