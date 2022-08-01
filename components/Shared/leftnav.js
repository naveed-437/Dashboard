import React from "react";
// import Home from "../../pages";

const Leftnav = () => {
    return (
      <div className="leftnav">
        <div className="container-fluid">
          <div className="d-flex ms-4 ">
            <div className="d-flex mt-4">
              <i class="bi bi-dot text-danger aa mx-2"></i>
              <i class="bi bi-dot text-warning aa mx-2"></i>
              <i class="bi bi-dot text-success aa"></i>
            </div>
          </div>
          <div className="col-sm-9 border ab shadow-lg">
            <div className="mt-5">
              <div>
                <h2 className="text-center text-white mt-4">dappr</h2>
              </div>
              <div className="mt-5">
                <i class="bi bi-chevron-right ac text-primary au"></i>
              </div>
              <div className="mt-4">
                <i class="bi bi-chevron-right text-white av"></i>
                <a class="bi bi-house-door text-white ad" href="/home"></a>
              </div>
              <div className="mt-4">
                <a class="bi bi-people text-white ad" href="/user"></a>
              </div>
              <div className="mt-4">
                <a class="bi bi-hospital text-white ad" href="/hospital"></a>
              </div>
              <div className="mt-4">
                <a class="bi bi-bank2 text-white ad" href="/bank"></a>
              </div>
              <div className="mt-4">
                <a class="bi bi-envelope text-white ad" href="/messages"></a>
              </div>
              <div className="mt-4">
                <i class="bi bi-optical-audio-fill text-white ad"></i>
              </div>

              <div className="mt-4">
                <i class="bi bi-file-earmark-text text-white ad"></i>
              </div>
              <div className="mt-4">
                <i class="bi bi-check2-circle text-white ad"></i>
              </div>
            </div>
            <div className="mt-5 pt-5 mb-5">
              <div className="mt-5 pt-5">
                <i class="bi bi-gear text-white ad"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Leftnav;
