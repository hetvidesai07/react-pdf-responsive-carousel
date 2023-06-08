import React from 'react';
import ReactViewer from './components/reactPdfViewer/reactViewer';
import ReactSlider from './components/reactSlick/slider';

const App = () => {
  // const pdf= 'https://leverageedu.com/blog/wp-content/uploads/2021/03/Modern-Education.pdf';

  return (
    <div className="app">
      {/* <ReactViewer/> */}
      <ReactSlider/>
    </div>
  );
};

export default App;
