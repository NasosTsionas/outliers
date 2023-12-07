import React from "react"; 
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';


import image1 from '../images-trips/image1.jpeg'
import image2 from '../images-trips/image2.jpeg'
import image3 from '../images-trips/image3.jpeg'

const Tripspage = () => {
    return (
      <>
        <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          <SwiperSlide style={{ backgroundImage: `url(${image3})`,  backgroundSize: "cover"}}>
          <div class="text-block">
            <div className="title" >
              Platanakia, Thessaloniki, Greece
            </div>
            <div className="subtitle" >
              11.11.2023
            </div>
            <div className="text" >
              <p>
                We went on a small hike at PLatanakia by bus, it was very 
                nice and quiet and we had an amazing heart to heart conversation 
                that absolutely made us get closer! Also I got bitten by a nasty
                bug that left a mark for weeks.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ backgroundImage: `url(${image2})`,  backgroundSize: "cover"}}>
        <div class="text-block">
          <div className="title">
            Annecy Lake tour, Annecy, France
          </div>
          <div className="subtitle">
            24.09.2023
          </div>
          <div className="text">
            <p>

                 We biked around the lake of Annecy that had a perimeter of 38km, on a beautiful sunny day.
              We did it in 2 hours and even the bike rental people were amazed! Afterwards we checked the city out.
              I also survived the stress of Annecy traffic!
            </p>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ backgroundImage: `url(${image1})`,  backgroundSize: "cover"}}>
        <div class="text-block">
          <div className="title" >
            Sikia beach, Chalkidiki, Greece
          </div>
          <div className="subtitle" >
            04.07.2023
          </div>
          <div className="text" >
            <p>
              This was our first trip as... a bit more than friends. We went to a camp for a couple
               of days and spent some quite time next to the sea. On morning we even did scuba diving for 
               the first time! Nasos was terrified at the beginning.. I was a natural! A really special trip I would say!
            </p>
          </div>
          </div>
        </SwiperSlide>
        </Swiper>
      </>
    );
  }
 
export default Tripspage;