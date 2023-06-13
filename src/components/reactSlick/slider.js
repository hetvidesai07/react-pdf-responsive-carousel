import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import "./slider.css";
import PdfViewerFile from "../reactPdf/pdfViewer";

const ReactSlider = () => {
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    lazyLoad: true,
  };

  return (
    <>
      <div className="tag"></div>
      <div className="imgslider">
        <Slider {...settings}>
          <div>
            <PdfViewerFile />
          </div>
          <div>
            <PdfViewerFile />
          </div>
          <div>
            <PdfViewerFile />
          </div>
          <div>
            <PdfViewerFile />
          </div>
          <div>
            <PdfViewerFile />
          </div>
          <div>
            <PdfViewerFile />
          </div>
        </Slider>
      </div>
    </>
  );
};
export default ReactSlider;
