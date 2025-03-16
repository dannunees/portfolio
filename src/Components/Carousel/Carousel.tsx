import { PropsWithChildren } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const MyCarousel = ({children}: PropsWithChildren) => {
    return (
        <Carousel>
            {children}
        </Carousel>
    )
}

export default MyCarousel;