import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const MyCarousel = ({children}: {children: ReactChild}) => {
    return (
        <Carousel>
            {children}
        </Carousel>
    )
}

export default MyCarousel;