import React from "react";

import img from "../../components/Images.js";
import BlogCard from "../../components/BlogCard.jsx";
const Latest = () => {
    const fontManage ={
       fontSize: "13px",

    }
  const content = [
    { image: img.blogImg.contourfarming, btnText: "Editorial" },
    {
      title: "Subsistence Farming in India",
      image: img.blogImg.greenchili,
      btnText: "Crops",
      dates: "22-Apr-2025",
    },
    {
      title: "Extensive Farming in India",
      image: img.blogImg.mixedcrop,
      btnText: "Editorial",
      dates: "25-Mar-2025",
    },
    {
      title: "Precision Farming in India",
      image: img.blogImg.droneflying,
      btnText: "Editorial",
      dates: "1-Aug-2025",
    },
    {
      title: "Terrace Farming in India",
      image: img.blogImg.lushgreen,
      btnText: "Crops",
      dates: "2-Aug-2025",
    },
  ];

  const articles = [
    {
      title: "क्या EICHER 557 2WD PRIMA G3 ट्रैक्टर किसानों के लिए एक बजट-अनुकूल विकल्प है?",
      date: "22-Apr-2025",
      image:
        "https://www.merikheti.com/assets/posts/mobile/green-chilli-plants-thriving-under-modern-farming-techniques.jpg",
    },
    {
      title: "क्या EICHER 557 2WD PRIMA G3 ट्रैक्टर किसानों के लिए एक बजट-अनुकूल विकल्प है?",
      date: "17-Apr-2025",
      image:
        "https://www.merikheti.com/assets/posts/mobile/green-chilli-plants-thriving-under-modern-farming-techniques.jpg",
    },
    {
      title: "क्या EICHER 557 2WD PRIMA G3 ट्रैक्टर किसानों के लिए एक बजट-अनुकूल विकल्प है?",
      date: "15-Apr-2025",
      image:
        "https://www.merikheti.com/assets/posts/mobile/green-chilli-plants-thriving-under-modern-farming-techniques.jpg",
    },
    {
      title: "क्या EICHER 557 2WD PRIMA G3 ट्रैक्टर किसानों के लिए एक बजट-अनुकूल विकल्प है?",
      date: "14-Apr-2025",
      image:
        "https://www.merikheti.com/assets/posts/mobile/green-chilli-plants-thriving-under-modern-farming-techniques.jpg",
    },
  ];
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-9 ">
          <h2
            className="my-2 d-flex justify-content-between align-items-center"
            style={{ borderBottom: "4px solid green" }}
          >
            <span className="text-white rounded-1 fw-bold fs-5 trendingbtn px-2 py-1">
              Latest
            </span>
          </h2>
        </div>

        <div className="col-3 ">
          <h2
            className="my-2 d-flex justify-content-between align-items-center"
            style={{ borderBottom: "4px solid green" }}
          >
            <span className="text-white rounded-1 fw-bold fs-5 trendingbtn px-2 py-1">
              Video
            </span>
          </h2>
        </div>
      </div>
      <div className="row">
        <div className="col-9">
          <div className="row ">
            <div className="col-7 " >
              <BlogCard content={content[0]} extraBtn={true} />
            </div>
            <div className="col-5">
              {articles.map((article, index) => (
                <div
                  className="d-flex align-items-center border shadow-sm mb-2 bg-white"
                  key={index}
                >
                  <img
                    src={article.image}
                    alt="thumb"
                    className="me-2"
                    style={{
                      width: "90px",
                      height: "60px",
                      objectFit: "cover",
                    }}
                  />
                  <div>
                
                    <p className="mb-1" style={fontManage}>{article.title}</p>
                    <small className="text-muted fs-7">{article.date}</small>
                  </div>
                </div>
              ))}

              {/* <div className="d-flex m-0 p-0">
                                <div className=''>
                                    <a href="#">
                                    <img src="https://www.merikheti.com/assets/posts/mobile/green-chilli-plants-thriving-under-modern-farming-techniques.jpgobile/green-chilli-plants-thriving-under-modern-farming-techniques.jpg" alt="kheti" width={100} />
                                    </a>
                                </div>
                                <div className=''>
                                    <p className='m-0 p-0'>Subsistence Farming in India</p>
                                    <p className='m-0 p-0'>22-Apr-2025</p>
                                </div>
                            </div> */}
              {/* <div className='d-flex align-items-center '>
                                <img src={content[1].image} alt="" className='border border-warning w-100' />
                                <div dates={true} className=' '>
                                    <p>{content[1].title}</p>
                                    <p>{content[1].dates}</p>
                                </div>
                            </div> */}
            </div>
          </div>
          <div
            className="mt-4"
            style={{ height: "3px", width: "100%", backgroundColor: "green" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Latest;
