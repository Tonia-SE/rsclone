import React from 'react';
import { backendServer } from '../consts';

const carouselImges: Array<string> = [];
for (let i: number = 1; i < 7; i++) {
  carouselImges.push(`${backendServer}/static/images/slider__${i}.jpg`);
}
export const Slider: React.FC = () => {
  return (
    <section className="slider">
      <div className="carousel slide" id="carouselExampleControls" data-ride="carousel">
        <div className="carousel-inner">
          {carouselImges.map((image) => {
            return (
              <div className="carousel-item" key={image}>
                <img className="d-block w-100" alt="KIGURUMI" src={image} key={image} />
              </div>
            );
          })}
          <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev" key="2">
            <span className="carousel-control-prev-icon" aria-hidden="true" key="3"></span>
            <span className="sr-only" key="4">
              Previous
            </span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next" key="6">
            <span className="carousel-control-next-icon" aria-hidden="true" key="7"></span>
            <span className="sr-only" key="8">
              Next
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

//   <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
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
//   <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
//     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span class="sr-only">Previous</span>
//   </a>
//   <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
//     <span class="carousel-control-next-icon" aria-hidden="true"></span>
//     <span class="sr-only">Next</span>
//   </a>
// </div>
