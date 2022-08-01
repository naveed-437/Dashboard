import React, { Component } from "react";
import { RiWallet3Line } from "react-icons/ri";
import { BiPieChartAlt } from "react-icons/bi";
import { FiCamera } from "react-icons/fi";
import { AiOutlineCreditCard } from "react-icons/ai";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FiDatabase } from "react-icons/fi";
import { AiOutlineEye } from "react-icons/ai";

const Passbook = (props) => {

  let { icon, amount, text } = props.dat;
   if (icon == "wallet") {
     icon = <RiWallet3Line size={45} />;
   } else if (icon == "chart") {
     icon = <BiPieChartAlt size={45} />;
   } else if (icon == "camera") {
     icon = <FiCamera size={45} />;
   } else if (icon == "card") {
     icon = <AiOutlineCreditCard size={45} />;
   }
  return (
    <div className="col-sm-3">
      <div class="card mt-5 af shadow-lg">
        <div className="container py-3">
          <div className="d-flex justify-content-between">
            <div>
            {icon}
            </div>
            <div>
              <div class="dropdown">
                <button
                  class="btn btn-"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i
                    class="bi bi-three-dots-vertical ar mx-3"
                    style={{ fontSize: "30px" }}
                  ></i>
                </button>
                <ul
                  class="dropdown-menu multi-level"
                  role="menu"
                  aria-labelledby="dropdownMenu"
                >
                  <li>
                    <div className="d-flex align-items-center">
                      <div className="mt-2">
                        <IoMdCheckmarkCircleOutline size={30} />
                      </div>
                      <div>
                        <h6 className="mt-3 ms-2">Make Payment</h6>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center">
                      <div>
                        <FiDatabase size={30} />
                      </div>
                      <div>
                        <h6 className="mt-1 ms-2">View balance details</h6>
                      </div>
                    </div>
                  </li>
                  <li class="divider"></li>
                  <li class="dropdown-submenu">
                    <div className="d-flex align-items-center">
                      <div>
                        <AiOutlineEye size={30} />
                      </div>
                      <div>
                        <h6 className="mt-1 ms-2">View account balance</h6>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
                  <h2 class="card-title mt-3">{ amount}</h2>
                  <h4 className="text-muted mt-3">{text}</h4>
          {/* <h4 className="text-muted">Balance</h4> */}
        </div>
      </div>
      <div class="card as at"></div>
    </div>
  );
};

export default Passbook;
