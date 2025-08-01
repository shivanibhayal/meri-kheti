
// import contourfarming from "../assets/images/Trendingimg/contour-farming.jpg";
// import img from "../components/Images.js";

const BlogCard = ({ content,extraBtn,btnText,dates }) => {
  return (
    <div className="w-100 position-relative">
      <a href="#">
        <img
          src={content.image}
          alt="blog"
          className="border border-1 border-warning img-fluid w-100"
          
        />
      </a>
      <div className="position-absolute top-0 end-0 mt-2 text-center">
        <a href="#" className="text-decoration-none">
          <span className="bg-success text-white p-1" style={{ fontSize: "10px" }}>
           {content.btnText}
          </span>
        </a>
      </div >
      <div className="position-absolute bottom-0 translate-middle-x start-50 text-center">
        <p className="text-center text-white" style={{ fontSize: "13px", maxWidth:"100%" ,minWidth:"200px",
    lineHeight: "14px",
    marginBottom:"10px"}}>{content.title}</p>

      </div>

       {extraBtn&&<div className="position-absolute bottom-0 start-0 p-2 w-100 ">
        <div className=" position-absolute w-100 translate-middle-x bottom-50 start-50 text-center">
           <p className="text-white" style={{fontSize:"15px"}}>Contour Farming in India</p>
        </div>
        <div className="w-100 text-center d-flex align-items-center p-1 justify-content-between">
        <a href="#" className="text-decoration-none">
          <span className=" text-white px-2 py-1  rounded-1 " style={{ fontSize:"10px", backgroundColor:"#198754" }}>
            EDITORIAL
          </span>
        </a>
        <p className="text-white me-5 " style={{fontSize:"11px"}}>24-Apr-2025</p>
      </div >
      </div>
      }

      {
        dates&&<p>{content.dates}</p>
      }
    </div>
  );
};


export default BlogCard;
