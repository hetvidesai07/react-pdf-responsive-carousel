import React from 'react';
import ReactSlider from './components/reactSlick/slider';
import ReactPdfZoom from './components/reactZoomPdf/reactPdf';

const App = () => {
  // const pdf= 'https://leverageedu.com/blog/wp-content/uploads/2021/03/Modern-Education.pdf';

  return (
    <div className="app">
      {/* <ReactSlider/> */}
      <ReactPdfZoom/>
    </div>
  );
};

export default App;
