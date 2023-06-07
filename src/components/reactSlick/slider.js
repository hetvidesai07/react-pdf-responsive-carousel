import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react'
import './slider.css'
import PdfViewerFile from "../reactPdf/pdfViewer";

const ReactSlider = () => {

	const settings = {
		infinite: true,
		dots: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		lazyLoad: true,

	};
	return (
		<>
			<div className="tag">
				<h1>Image Gallery</h1>
			</div>
			<div className="imgslider">
				<Slider {...settings}>
                    <div>
                        <PdfViewerFile></PdfViewerFile>
                    </div>
                    <div>
                        <PdfViewerFile></PdfViewerFile>
                    </div>
                    <div>
                        <PdfViewerFile></PdfViewerFile>
                    </div>
				</Slider>
			</div>
		</>
	)
}
export default ReactSlider;
