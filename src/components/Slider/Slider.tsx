import React, { useState } from 'react';
import { backendServer } from '../../consts';
import { Carousel } from 'react-bootstrap'  

const carouselImges: Array<string> = [];
for (let i: number = 1; i < 7; i++) {
  carouselImges.push(`${backendServer}/static/images/slider__${i}.jpg`);
}
export const KigurumiSlider: React.FC = () => { 
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
        <Carousel indicators={false} activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item style={{'maxHeight':"514px"}} key={'1'} interval={3000}>
            <img style={{'maxHeight':"514px"}}  className="d-block w-100"  src={`${backendServer}/static/images/slider__1.jpg`}/>
          </Carousel.Item>
          <Carousel.Item style={{'maxHeight':"514px"}} key={'2'} interval={3000}>
            <img style={{'maxHeight':"514px"}}  className="d-block w-100"  src={`${backendServer}/static/images/slider__2.jpg`}/>
          </Carousel.Item>
          <Carousel.Item style={{'maxHeight':"514px"}} key={'3'} interval={3000}>
            <img style={{'maxHeight':"514px"}}  className="d-block w-100"  src={`${backendServer}/static/images/slider__3.jpg`}/>
          </Carousel.Item>
          <Carousel.Item style={{'maxHeight':"514px"}} key={'4'} interval={3000}>
            <img style={{'maxHeight':"514px"}}  className="d-block w-100"  src={`${backendServer}/static/images/slider__4.jpg`}/>
          </Carousel.Item>
          <Carousel.Item style={{'maxHeight':"514px"}} key={'5'} interval={3000}>
            <img style={{'maxHeight':"514px"}}  className="d-block w-100"  src={`${backendServer}/static/images/slider__5.jpg`}/>
          </Carousel.Item>
          <Carousel.Item style={{'maxHeight':"514px"}} key={'6'} interval={3000}>
            <img style={{'maxHeight':"514px"}}  className="d-block w-100"  src={`${backendServer}/static/images/slider__6.jpg`}/>
          </Carousel.Item>
        </Carousel>
  );
};



    // <section className="slider">
    //     <div className="carousel slide" id="kigurumiCarousel" data-ride="carousel">
    //       <div className="carousel-inner">
    //         {carouselImges.map((image, index) => {
              
    //             return (
    //             <div className="carousel-item" id={index.toString()} key={index.toString()}>
    //               <img className="d-block w-100" alt="KIGURUMI" src={image} key={image} />
    //             </div>
    //             )
              
    //         })}
    //         <a className="carousel-control-prev" href="#kigurumiCarousel" role="button" data-slide="prev" key="2">
    //           <span className="carousel-control-prev-icon" aria-hidden="true" key="3"></span>
    //           <span className="sr-only" key="4">
    //             Previous
    //           </span>
    //         </a>
    //         <a className="carousel-control-next" href="#kigurumiCarousel" role="button" data-slide="next" key="6">
    //           <span className="carousel-control-next-icon" aria-hidden="true" key="7"></span>
    //           <span className="sr-only" key="8">
    //             Next
    //           </span>
    //         </a>
    //       </div>
    //     </div>
    //   </section>


//   <div id="kigurumiCarousel" class="carousel slide" data-ride="carousel">
//   <div class="carousel-inner">
//     <div class="carousel-item active">
//       <img src="..." class="d-block w-100" alt="...">
//     </div>
//     <div class="carousel-item">
//       <img src="..." class="d-block w-100" alt="...">
//     </div>
//     <div class="carousel-item">
//       <img src="..." class="d-block w-100" alt="...">
//     </div>
//   </div>
//   <a class="carousel-control-prev" href="#kigurumiCarousel" role="button" data-slide="prev">
//     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span class="sr-only">Previous</span>
//   </a>
//   <a class="carousel-control-next" href="#kigurumiCarousel" role="button" data-slide="next">
//     <span class="carousel-control-next-icon" aria-hidden="true"></span>
//     <span class="sr-only">Next</span>
//   </a>
// </div>
