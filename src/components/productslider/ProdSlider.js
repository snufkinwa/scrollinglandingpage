import React from 'react'
import Slider from 'react-slick'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'

import Cap from '../../images/cap.png'
import BigInk from '../../images/biginkbottle.png'
import Inkbot from '../../images/inkbottle.png'
import HOTPINK from '../../images/hotpink.png'
import MINTGREEN from '../../images/mintgreen.png'

function ProdSlider() {
    const NextArrow = ({ onClick }) => {
        return (
          <div className="arrow next" onClick={onClick}>
             <FaArrowRight />
          </div>
        )
      }
    
      const PrevArrow = ({ onClick }) => {
        return (
          <div className="arrow prev" onClick={onClick}>
            <FaArrowLeft />
          </div>
        )
      }
    
      const settings = {
        dots: true,
        infinite: true,
        lazyLoad: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        className: "center",
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
            breakpoint: 1024,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            centerMode:true
            }
            },
            {
              breakpoint: 800,
              settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
              centerMode:true
              }
              },
            {
                breakpoint: 550,
                settings: {
                dots: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                centerMode: true,
                centerPadding: "-5px"
                }
            }
        ]
      }
    
      return (
        <div className="slider">
        <div className="slider-container">
          <Slider {...settings}>
          <div>
          <img src={Inkbot} alt="TEST" />
          </div>
          <div>
            <img src={Cap} alt="TEST" />
          </div>
          <div>
          <img src={BigInk} alt="TEST" />
          </div>
          <div>
            <img src={HOTPINK} alt="TEST" />
          </div>
          <div>
          <img src={MINTGREEN} alt="TEST" />
          </div>

          </Slider>
        </div>
        </div>
      );
    }
export default ProdSlider
