

import React from "react";
import BlogCard from "./BlogCard.jsx";
import img from "../components/Images.js";
import '../App.css';

const content = [
  { image: img.blogImg.contourfarming ,btnText:"Editorial"},
  { title: "Subsistence Farming in India", image: img.blogImg.greenchili ,btnText:"Crops"},
  { title: "Extensive Farming in India", image: img.blogImg.mixedcrop ,btnText:"Editorial"},
  { title: "Precision Farming in India", image: img.blogImg.droneflying,btnText:"Editorial" },
  { title: "Terrace Farming in India", image: img.blogImg.lushgreen ,btnText:"Crops"}
];

const Trending = () => {
  return (
    <div className="container mt-3">
      <div className="row"  >
        
        <div className="col-12 " >
          <h2 className="my-2 d-flex justify-content-between align-items-center  p-0"  style={{borderBottom:"4px solid green"}}>
            <span className="text-white rounded-1 fw-bold fs-5 trendingbtn px-2 py-1" >
              Trending
            </span>
          </h2>
        </div>
     
      </div>

      <div className="row">
        <div className="col-1 d-md-block d-none">
          <img
            src={img.blogImg.riceman}
            alt="ricecrop"
            className="border border-1 border-warning"
          />
        </div>

        <div className="col-md-5 ps-md-4 ps-2 ps-xl-0 ">
          <BlogCard content={content[0]} extraBtn={true}/>
        </div>
        <div className="col-md-5">
          <div className="row pt-sm-2 pt-2 pt-xl-0 pt-md-0">
            <div className="col-6 ">
              <div>
              <BlogCard content={content[1]} style={{fontSize:"10px"}}/>
              </div>
              <div className="pt-2">
                <BlogCard content={content[2]} />
              </div>
            </div>
            <div className="col-6 ">
              <div>
                 <BlogCard content={content[3]} />
              </div>
             
              <div className="pt-2">
                <BlogCard content={content[4]}/>
              </div>
            </div>
          </div>
        </div>

        <div className="col-1 d-md-block d-none">
          <img
            src={img.blogImg.riceman}
            alt="ricecrop"
            className="border border-1 border-warning"
          />
        </div>
      </div>
    </div>
  );
};

export default Trending;

