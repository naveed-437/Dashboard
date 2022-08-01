import React, { Component } from "react";

const Card1 = (props) => {
  const { tittle, amount,rate } = props.dat1;
  return (
    <div className="col">
      <div class="s card mt-5 af shadow-lg">
        <div className="container py-3 ai">
          <h4 class="card-title mt-3">{tittle}</h4>
          <div className="d-flex">
            <h4 className="ag text-center">{amount}</h4>
            <div>
              <h5
                className="card text-center ms-5 al text-success"
                style={{ backgroundColor: "#e2fdd9" }}
              >
                {rate}
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Card1;
