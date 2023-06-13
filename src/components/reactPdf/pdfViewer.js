import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import ReactPdfZoom from "../reactZoomPdf/reactPdf";
import CommonModal from "../modal";

const PdfViewerFile = () => {
  const fileUrl =
    "https://leverageedu.com/blog/wp-content/uploads/2021/03/Modern-Education.pdf";
  const [currentPage, setCurrentPage] = useState(1);
  const [numPages, setNumPages] = useState(null);
  const [showPdf, setShowPdf] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const onLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const handleClickDocument = (event) => {
    toggleModal();
    event.preventDefault();
  };

  return (
    <>
      <CommonModal
        show={showModal}
        closeHandler={toggleModal}
        size="fullscreen"
      >
        <div className="d-flex align-items-center w-100">
          <ReactPdfZoom />
        </div>
      </CommonModal>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "gray",
        }}
      >
        <div style={{ width: "150px", height: "250px" }}>
          {showPdf ? (
            <ReactPdfZoom />
          ) : (
            <Document
              file={fileUrl}
              onLoadSuccess={onLoadSuccess}
              onClick={handleClickDocument}
            >
              <Page pageNumber={currentPage} width={150} height={250} />
            </Document>
          )}
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <button onClick={handlePreviousPage} disabled={currentPage === 1}>
              Previous
            </button>
            <span>Page {currentPage}</span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === numPages}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PdfViewerFile;

// import { Document, Page, pdfjs } from 'react-pdf';
// import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

// const PdfViewerFile = () => {
//   const fileUrl = 'https://leverageedu.com/blog/wp-content/uploads/2021/03/Modern-Education.pdf';
//   const [currentPage, setCurrentPage] = useState(1);
//   const [numPages, setNumPages] = useState(null);

//   pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

//   const handleNextPage = () => {
//     setCurrentPage((prevPage) => prevPage + 1);
//   };

//   const handlePreviousPage = () => {
//     setCurrentPage((prevPage) => prevPage - 1);
//   };

//   const onLoadSuccess = ({ numPages }) => {
//     setNumPages(numPages);
//   };

//   const handleClickDocument = () => {
//     window.location.href = fileUrl;
//   };

//   return (
//     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'gray' }}>
//       <div style={{ width: '150px', height: '250px' }}>
//         <Document file={fileUrl} onLoadSuccess={onLoadSuccess} onClick={handleClickDocument}>
//           <Page pageNumber={currentPage} width={150} height={250} />
//         </Document>
//         <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//           <button onClick={handlePreviousPage} disabled={currentPage === 1}>
//             Previous
//           </button>
//           <span>Page {currentPage}</span>
//           <button onClick={handleNextPage} disabled={currentPage === numPages}>
//             Next
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PdfViewerFile;
