import React from "react";
import "./testimonial.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
const data = [
  {
    id: 1,
    avatar: AVTR1,
    name: "Ernest Achiever",
    review: "Eclipse - Figma dashboard UI kit for data design web apps",
  },
  {
    id: 2,
    avatar: AVTR2,
    name: "Ernest Achiever",
    review: "Eclipse - Figma dashboard UI kit for data design web apps",
  },
  {
    id: 3,
    avatar: AVTR3,
    name: "Ernest Achiever",
    review: "Eclipse - Figma dashboard UI kit for data design web apps",
  },
  {
    id: 4,
    avatar: AVTR4,
    name: "Ernest Achiever",
    review: "Eclipse - Figma dashboard UI kit for data design web apps",
  },
];

const Testimonial = () => {
  return (
    <section id="testimonial">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className=" container testimonial__container"
        spaceBetween={40}
        slidesPerView={1}
        pagination={true}
        modules={[Pagination]}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {data.map(({ id, avatar, name, review }) => {
          return (
            <SwiperSlide key={id} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="Avatar One" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonial;
