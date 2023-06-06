import React from 'react';
import PdfViewerFile from './components/pdfViewer';
import PdfCarousel from './components/pdfCarousel';

const App = () => {
  // const pdf= 'https://leverageedu.com/blog/wp-content/uploads/2021/03/Modern-Education.pdf'; // Replace with the URL of your PDF

  return (
    <div className="app">
      {/* <PdfViewerFile /> */}
      <PdfCarousel/>
    </div>
  );
};

export default App;
