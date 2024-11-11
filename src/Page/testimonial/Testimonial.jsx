// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./Testimonial.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { clientData } from "../../data";

const Testimonial = () => {
  return (
    <main id="testimonial" className="section container">
      <section className="about">
        <h2 className="section__title">
          Clients <span>Review</span>
        </h2>
      </section>
      {/* slider starts here */}

      <div className="t__wraper">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {clientData.map((item, index) => {
            return (
              <SwiperSlide key={index} className="swiper-slide">
                <div className="testimonial">
                  <img src={item.img} alt="" />
                  <p>{item.review}</p>
                  <h3>{item.name}</h3>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </main>
  );
};

export default Testimonial;
