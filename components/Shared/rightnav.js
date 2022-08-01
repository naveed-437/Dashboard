import React from "react";
const pass2 = require("../../card2.json");
import Card2 from "../header/card2";

const Rightnav = () => {
  const openMenu = (e) => {
    e.preventDefault();
    document.body.classList.toggle("expand-menu");
  };
  return (
    <div className="rightnav">
      <div className="container-fluid">
        <div className="mt-4 aj d-flex align-items-center">
          <i class="bi bi-calendar4-week ms-2"></i>
          <div>
            <a href="#">
              <span className="check-mar">.</span>
            </a>
            <span class="bi bi-bell ms-4 aq"> </span>
          </div>
          <div>
            <a href="#">
              <span className="check-mar">.</span>
            </a>
            <span class="bi bi-chat-square-dots ms-3 aq"> </span>
          </div>
          <div>
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
              class="z rounded-circle ms-4"
              style={{ width: "40px", height: "40px" }}
              alt="Avatar"
            />
          </div>
          <div className="mt-2">
            <i class="bi bi-chevron-down ms-3" onClick={openMenu}></i>
          </div>
        </div>
        <div>
          <div class="card mt-5 ak shadow-lg">
            <div class="card-body">
              <h4 class="card-title">Formation Status</h4>
              <h6>In Progress</h6>
              <div className="pt-3">
                <div class="progress am">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    style={{ width: "75%" }}
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <h5 className="text-center mt-3">Estimated Processing</h5>
                <h6 className="text-center">4-5 bussiness days</h6>
              </div>
              <div className="card bg-primary am mt-4">
                <h4 className="text-center text-white mt-1">View status</h4>
              </div>
            </div>
          </div>
        </div>
        <h5 className="mt-4">Your TO-Do List</h5>
        {pass2.map((data) => (
          <Card2 dat2={data} />
        ))}
        <div className="border ak bg-white ap">
          <div className="d-flex">
            <div>
              <i class="bi bi-dot text-primary ao"></i>
            </div>
            <div>
              <div class="card-body mt-2">
                <h5 class="card-title">Board meeting</h5>
                <h6 class="card-text d-flex">Feb 22 at 6.00 pm</h6>
                <p>
                  You have been invited to attend a meeting of the Board
                  Direction
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rightnav;
