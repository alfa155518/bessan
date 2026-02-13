
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import "@/sass/components/common/freemodeSwiper.scss";

import member_1 from "@/assets/about/team-1.webp";
import member_2 from "@/assets/about/team-2.webp";
import member_3 from "@/assets/about/team-3.webp";
import member_4 from "@/assets/about/team-4.webp";

// import required modules
import { Autoplay, FreeMode } from 'swiper/modules';

export default function FreemodeSwiper() {
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
                <SwiperSlide>
                    <img src={member_1} alt="member" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={member_2} alt="member" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={member_3} alt="member" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={member_4} alt="member" />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
