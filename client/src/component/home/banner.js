
import Carousal from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';
import { bannerData } from '../../constants/data'
import styled from '@emotion/styled';


const Image = styled('img')({
    width: '100%',
    height: 250
})
const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


const Banner = () => {
    return(
        <Carousal 
        responsive={responsive}
         swipeable={false}
         draggable={false}
         infinite={true}
         autoPlay={true}
         autoPlaySpeed={4000}
        dotListClass="custom-dot-list-style"
         itemClass="carousel-item-padding-40-px"
         containerClass="carousel-container">
         
         {bannerData.map((data,index) =>
         (
            <Image src={data.url} alt='banner-img'/>
        ) )}
        </Carousal>
    )
}

export default Banner
