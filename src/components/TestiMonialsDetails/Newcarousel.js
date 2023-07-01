import React, { useEffect, useRef } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Newcarousel = () => {
    const owlCarouselRef = useRef(null);

    //   useEffect(() => {
    //     const element = owlCarouselRef.current;
    //     console.log("0", element);
    //     if (element) {
    //         console.log(typeof element?.onInitialized);
    //     //   element.onInitialized = () => {
    //     //     console.log(2);
    //     //     const items = Array.from(element.querySelectorAll('.owl-item'));
    //     //     console.log(items)
    //     //     const centerIndex = Math.floor(items.length / 2);
    //     //     items.forEach((item, index) => {
    //     //       const distance = Math.abs(centerIndex - index);
    //     //       item.style.zIndex = String(items.length - distance);
    //     //       item.classList.remove(
    //     //         'center',
    //     //         'next-to-center',
    //     //         'previous-to-center',
    //     //         'next-to-next-center',
    //     //         'previous-to-previous'
    //     //       );
    //     //       if (distance === 0) {
    //     //         item.classList.add('center');
    //     //       } else if (distance === 1) {
    //     //         item.classList.add('next-to-center');
    //     //       } else if (distance === 2) {
    //     //         item.classList.add('previous-to-center');
    //     //       } else if (distance === 3) {
    //     //         item.classList.add('next-to-next-center');
    //     //       } else if (distance === 4) {
    //     //         item.classList.add('previous-to-previous');
    //     //       }
    //     //     });
    //     //   };
    //     }
    //   }, [owlCarouselRef?.currents]);

    function handleInit() {
        console.log("Initialized");
        const element = owlCarouselRef.current;
        const htmlElement = document.getElementById("owl_my_carousel");
        const items = Array.from(htmlElement.querySelectorAll('.owl-item'));
        console.log(items)
        const centerIndex = Math.floor(items.length / 2);
        items.forEach((item, index) => {
           
            const distance = Math.abs(centerIndex - index);
            console.log(index, distance)
            item.style.zIndex = String(items.length - distance);
            item.classList.remove(
                'center',
                'next-to-center',
                'previous-to-center',
                'next-to-next-center',
                'previous-to-previous'
            );
            if (distance === 0) {
                item.classList.add('center');
            } else if (distance === 1) {
                item.classList.add('next-to-center');
            } else if (distance === 2) {
                item.classList.add('next-to-next-center');
            } else if (distance === 3) {
                item.classList.add('previous-to-center');
            } else if (distance === 4) {
                item.classList.add('previous-to-previous');
            }
        });
    }

    return (
        <OwlCarousel
            id='owl_my_carousel'
            ref={owlCarouselRef}
            items={5}
            margin={10}
            center
            nav
            navText={['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']}
            className="owl-theme"
            onInitialized={handleInit}
        >
            {/* Example carousel items */}
            <div className="item">Item 1</div>
            <div className="item">Item 2</div>
            <div className="item">Item 3</div>
            <div className="item">Item 4</div>
            <div className="item">Item 5</div>
        </OwlCarousel>
    );
};

export default Newcarousel;
