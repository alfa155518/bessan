
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import "@/sass/components/common/freemodeSwiper.scss";

// import required modules
import { Autoplay, FreeMode } from 'swiper/modules';

interface FreemodeSwiperProps {
    data: string[];
}

export default function FreemodeSwiper({ data }: FreemodeSwiperProps) {
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,

                }}
                loop={true}
                modules={[Autoplay, FreeMode]}
                className="freemodeSwiper"
            >
                {data.map((item, index) => (
                    <SwiperSlide key={index}>
                        <img src={item} alt="member" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
