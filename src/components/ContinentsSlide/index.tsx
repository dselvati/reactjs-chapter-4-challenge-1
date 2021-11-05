/* eslint-disable jsx-a11y/alt-text */
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';

import { Slide } from "./Slide";
import { api } from "../../services/api";

import "swiper/css/bundle";
// import "swiper/css";
// import "swiper/css/pagination"
// import "swiper/css/navigation"

SwiperCore.use([Autoplay, Pagination, Navigation]);

const pagination = {
  clickable: true,
  // renderBullet: function (index, className) {
  //   return `<span class="${className} ${styles.dots}"> </span>`;
  // }
}

interface ContinentProps {
  id: number;
  title: string;
  subject: string;
  background_image: string;
}

export function ContinentsSlide() {

  const [continents, setContinents] = useState<ContinentProps[]>([])

  useEffect(() => {
    api.get('/continents').then(res => {
      //console.log(res.data)
      setContinents(res.data)
    })
  }, [])

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          "delay": 2500,
          "disableOnInteraction": false
        }}
        pagination={pagination}
        navigation={true}
      >

        {
          continents?.map(continent => (
            <SwiperSlide key={continent.id}>
              <Slide
                id={continent.id}
                title={continent.title}
                subject={continent.subject}
                urlBackgroundImage={continent.background_image}
              />
            </SwiperSlide>
          ))
        }

      </Swiper>
    </>
  )
}