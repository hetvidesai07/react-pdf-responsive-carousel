import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

const PdfViewerFile = () => {
  const fileUrl = 'https://leverageedu.com/blog/wp-content/uploads/2021/03/Modern-Education.pdf';
  const [currentPage, setCurrentPage] = useState(1);
  const [numPages, setNumPages] = useState(null);
  const [showPdf, setShowPdf] = useState(false)

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

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',  backgroundColor: 'gray' }}>
      <div style={{ width: '150px', height:'250px'}}>
        <Document file={fileUrl} onLoadSuccess={onLoadSuccess} onClick={() => setShowPdf(true)} >
          <Page pageNumber={currentPage} width={150} height={250} />
        </Document>
        { showPdf && (
          <Document file={fileUrl}  >
          <Page pageNumber={currentPage} width={150} height={250} />
        </Document>
        )}
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <button onClick={handlePreviousPage} disabled={currentPage === 1}>
            Previous
          </button>
          <span>Page {currentPage}</span>
          <button onClick={handleNextPage} disabled={currentPage === numPages}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default PdfViewerFile;

// import React from 'react';
// import { Viewer } from '@react-pdf-viewer/core';
// import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

// const PdfViewerFile = ({ pdfUrl }) => {
//   const defaultLayoutPluginInstance = defaultLayoutPlugin();

//   return (
//     <div className="pdf-viewer-container">
//       <Viewer
//         fileUrl={pdfUrl}
//         plugins={[defaultLayoutPluginInstance]}
//       />
//     </div>
//   );
// };

// export default PdfViewerFile;
