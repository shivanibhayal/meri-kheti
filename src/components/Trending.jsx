import React from "react";
import riceman from "../assets/images/Trendingimg/riceman.jpeg";
import contourfarming from "../assets/images/Trendingimg/contour-farming.jpg";
import greenchili from "../assets/images/Trendingimg/greenchil.jpeg";
import droneflying from "../assets/images/Trendingimg/droneflying.jpg";
import lushgreen from "../assets/images/Trendingimg/lushgreen.jpg";
import mixedcrop from "../assets/images/Trendingimg/mixedcrop.jpeg";

const Trending = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <button className=" text-white border-0 rounded p-2 fw-bold fs-5 trendingbtn">
              Trending
            </button>
            <hr className="custom-hr" />
          </div>
        </div>
        <div className="row">
          <div className="col-1">
            <img
              src={riceman}
              alt="ricecrop"
              className=" border border-1 border-warning"
            />
          </div>
          <div className="col-5">
            <img
              src={contourfarming}
              alt="contourfarming"
              className="contourfarmingimg border border-1 border-warning"
            />
          </div>
          <div className="col-5">
            <div className="row">
              <div className="col-6">
                <div>
                  <img
                    src={greenchili}
                    alt="greenchili"
                    className="trendimg border border-1 border-warning"
                  />
                </div>
                <div>
                  <img
                    src={mixedcrop}
                    alt=""
                    className="mt-3 trendimg border border-1 border-warning"
                  />
                </div>
              </div>
              <div className="col-6">
                <div>
                  <img
                    src={droneflying}
                    alt=""
                    className="trendimg border border-1 border-warning "
                  />
                </div>
                <div>
                  <img
                    src={lushgreen}
                    alt="lushgreen"
                    className="mt-3 trendimg border border-1 border-warning"
                  />
                </div>
              </div>
            </div>
          </div>
             <div className="col-1">
            <img src={riceman} alt="ricecrop " className=" border border-1 border-warning"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Trending;
