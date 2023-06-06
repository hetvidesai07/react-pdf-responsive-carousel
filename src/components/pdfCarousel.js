import * as React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import PdfViewerFile from "./pdfViewer";

export default function PdfCarousel() {
  return (
    <div className="App">
      <Carousel
        infiniteLoop={true}
        transitionTime={1000}
      >
        <PdfViewerFile></PdfViewerFile>
        <PdfViewerFile></PdfViewerFile>
        <PdfViewerFile></PdfViewerFile>
        <PdfViewerFile></PdfViewerFile>
      </Carousel>
    </div>
  );
}
