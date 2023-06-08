import * as React from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const ReactViewer = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.js">
      <div
        style={{
          height: "750px",
          width: "900px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Viewer
          fileUrl="https://leverageedu.com/blog/wp-content/uploads/2021/03/Modern-Education.pdf"
          plugins={[defaultLayoutPluginInstance]}
        />
      </div>
    </Worker>
  );
};

export default ReactViewer;
