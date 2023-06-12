import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

import "./styles.css";

export default function ReactPdfZoom() {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  const [totalPages, setTotalPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageScale, setPageScale] = useState(1);

  const url =
    "https://leverageedu.com/blog/wp-content/uploads/2021/03/Modern-Education.pdf";

  function onDocumentLoadSuccess({ numPages }) {
    setTotalPages(numPages);
  }

  function handleZoomIn() {
    if (pageScale < 3) {
      setPageScale(pageScale + 0.2);
    }
  }

  function handleZoomOut() {
    if (pageScale > 0.3) {
      setPageScale(pageScale - 0.2);
    }
  }

  function handleNext() {
    if (pageNumber < totalPages) {
      setPageNumber(pageNumber + 1);
    }
  }
  function handlePrevious() {
    if (pageNumber > 0) {
      setPageNumber(pageNumber - 1);
    }
  }
  return (
    <div className="App">
      <div className="page-container">
        <Document file={url} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} scale={pageScale} />
        </Document>
      </div>
      <div className="footer">
        <div className="button-container">
          <button onClick={handleZoomIn} disabled={pageScale >= 3}>
            Zoom +
          </button>
          <button onClick={handleZoomOut} disabled={pageScale <= 0.3}>
            Zoom -
          </button>
        </div>
        <div >
          Page {pageNumber} of {totalPages}
        </div>
        <div >
          <button onClick={handlePrevious} disabled={pageNumber === 1}>
            ‹ Previous
          </button>
          <button onClick={handleNext} disabled={pageNumber === totalPages}>
            Next ›
          </button>
        </div>
      </div>
    </div>
  );
}