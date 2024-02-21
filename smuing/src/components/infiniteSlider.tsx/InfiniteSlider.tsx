import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

import PROJECTS_DATA from '../../constants/PROJECTS_DATA'
import InfiniteSliderCard from '../infiniteslidercard/InfiniteSliderCard'

const InfiniteSlider: React.FC = () => {
  const settings = {
    arrows: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 700,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <div className="w-[70%] mx-0 my-auto mt-12">
      <Slider {...settings}>
        {PROJECTS_DATA.map(({ id, img, year, description, name, member }) => (
          <div key={id} className="slick-slide">
            <div className="mx-4">
              <InfiniteSliderCard id={id} img={img} year={year} description={description} name={name} member={member} />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default InfiniteSlider
