"use client";

import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { getAsset } from './utils';

const LogoCarousel = ({ logos, visibleSlides = 6 }) => {
    return (
        <div className="w-full" >
            <CarouselProvider
                naturalSlideWidth={400}
                naturalSlideHeight={200}
                totalSlides={logos.length}
                infinite={true}
                visibleSlides={visibleSlides}
                currentSlide={3}
                isPlaying={true}
                interval={2000}
            >
                <Slider>
                    {
                        logos.map((l, k) =>
                            <Slide key={k} index={k} >
                                <img className='block max-h-20 w-auto px-4 pt-auto mt-auto' alt="" src={getAsset(l, 100, 200)} />
                            </Slide>
                        )
                    }
                </Slider>
            </CarouselProvider>
        </div>
    );
};

export default LogoCarousel;
