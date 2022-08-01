import React from "react";
const pass = require("../../passbookentry.json");
const pass1 = require("../../card1.json");
import Passbook from "./passbook";
import Card1 from "./card1";

const Header = () => {
  const openMenu = (e) => {
    e.preventDefault();
    document.body.classList.toggle("expand-menu");
  };
  return (
    <div className="container-fluid">
      <div className="d-flex align-items-center justify-content-between">
        <div className="row ">
          <h1 className="mt-4">Good Morning,James!</h1>
        </div>
        <div className="mt-5 mx-5 ae">
          <i class="bi bi-chevron-left text-black" onClick={openMenu}></i>
          <i class="bi bi-chevron-right"></i>
        </div>
      </div>

      <div className="row">
        {pass.map((data) => (
          <Passbook dat={data} />
        ))}
      </div>
      <div className="row">
        <div className="col-sm-4">
          <div className="row">
            {pass1.map((data) => (
              <Card1 dat1={data} />
            ))}
          </div>
        </div>
        <div className="col-sm-8 mt-5">
          <div>
            <img
              src="/images/L2.png"
              class="img-fluid af shadow-lg"
              style={{ height: "42vh", width: "100%" }}
              alt="..."
            ></img>
          </div>
        </div>
      </div>
      <div className="row cc">
        <div className="mt-4">
          <h4>Recent Emails</h4>
        </div>
        <table class="table table-responsive">
          <tbody>
            <tr>
              <th scope="row">
                <div className="mx-4">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
                    class="z rounded-circle"
                    style={{ width: "60px", height: "60px" }}
                    alt="Avatar"
                  />
                </div>
              </th>
              <td>
                <h5 className="mt-3">Hannan Morgan</h5>
              </td>
              <td>
                <h5 className="mt-3">Meeting Scheduled</h5>
              </td>
              <td>
                <h5 className="mt-3">1:24 pm</h5>
              </td>
            </tr>
            <tr className="shadow-lg" style={{ backgroundColor: "#ffffff" }}>
              <th scope="row">
                <div className="mx-4">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                    class="z rounded-circle"
                    style={{ width: "60px", height: "60px" }}
                    alt="Avatar"
                  />
                </div>
              </th>
              <td>
                <h5 className="mt-3">Megan Clark</h5>
              </td>
              <td>
                <h5 className="mt-3">Updated on Marketing</h5>
              </td>
              <td>
                <h5 className="mt-3">12:32 pm</h5>
              </td>
            </tr>
            <tr className="shadow-lg">
              <th scope="row">
                <div className="mx-4">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                    class="z rounded-circle"
                    style={{ width: "60px", height: "60px" }}
                    alt="Avatar"
                  />
                </div>
              </th>
              <td>
                <h5 className="mt-3">Brandon Williams</h5>
              </td>
              <td>
                <h5 className="mt-3">Designly 2.0 about lunch</h5>
              </td>
              <td>
                <h5 className="mt-3">Yesterday</h5>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Header;
