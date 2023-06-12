import React, { useEffect, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const ReactPdfNew = () => {
    const [numPages, setNumPages] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    
    const pdf= 'https://leverageedu.com/blog/wp-content/uploads/2021/03/Modern-Education.pdf';

  const renderPages = () => {
    const pages = [];
    for (let i = 1; i <= numPages; i++) {
      pages.push(
        <div className="ansbox" key={`page-${i}`}>
          <Page/>
        </div>
      );
    }
    return pages;
  };

  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    focusOnSelect: true,
    infinite: false,
    autoplay: true,
    autoplaySpeed: 2000,
    beforeChange: (current, next) => setCurrentPage(next + 1),
  };

  return (
    <div>
      {numPages && (
        <Slider {...settings}>
          <Document file={pdf} renderMode="svg">
            {renderPages()}
          </Document>
        </Slider>
      )}
      <p>Current Page: {currentPage}</p>
    </div>
  );
};

export default ReactPdfNew;
