import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import foto_1 from "../../../../../public/gallery/1.png";
import foto_2 from "../../../../../public/gallery/2.png";
import foto_3 from "../../../../../public/gallery/3.png";
import foto_4 from "../../../../../public/gallery/4.png";
import foto_5 from "../../../../../public/gallery/5.png";
import foto_6 from "../../../../../public/gallery/6.png";
import foto_7 from "../../../../../public/gallery/7.png";
import foto_8 from "../../../../../public/gallery/8.png";
import foto_9 from "../../../../../public/gallery/9.png";

import './SwiperStyles.css';

const Photos = () => {
  return (
    <section id="Photos" className="bg-teal w-full h-fit pb-20 -mb-40 mt-40">
      <div className="wrapper">
        <div className="flex justify-center">
          <h1 className="text-center bg-white border-2 border-teal -mt-10 py-6 px-10 rounded-full text-teal w-fit  text-4xl font-bold">
            Photos
          </h1>
        </div>
      </div>
      <div className="wrapper mt-10">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
          autoplay={{ delay: 5000 }}
        >
          <SwiperSlide>
            <div className="relative">
              <img src={foto_1} alt="1" />
              <div className="absolute bottom-0 left-4 w-full bg-teal text-white pt-1">
                SEAMEO RECFON's Open House
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img src={foto_2} alt="2" />
              <div className="absolute bottom-0 left-4 w-full bg-teal text-white pt-1">
              Intern Project's Mind Map
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img src={foto_3} alt="3" />
              <div className="absolute bottom-0 left-4 w-full bg-teal text-white pt-1">
              Intern Group Photo Session
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img src={foto_4} alt="4" />
              <div className="absolute bottom-0 left-4 w-full bg-teal text-white pt-1">
              Internship Weekly Meeting
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img src={foto_5} alt="5" />
              <div className="absolute bottom-0 left-4 w-full bg-teal text-white pt-1">
              Anthropometry Test on Intern
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img src={foto_6} alt="6" />
              <div className="absolute bottom-0 left-4 w-full bg-teal text-white pt-1">
              Anthropometry Test on Intern
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img src={foto_7} alt="7" />
              <div className="absolute bottom-0 left-4 w-full bg-teal text-white pt-1">
              SEAMEO RECFON’s Staff and Intern on Sport Day
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img src={foto_8} alt="8" />
              <div className="absolute bottom-0 left-4 w-full bg-teal text-white pt-1">
              Fire Warden Training for Emergency
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img src={foto_9} alt="9" />
              <div className="absolute bottom-0 left-4 w-full bg-teal text-white pt-1">
              Sport Day - Badminton
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Photos;
