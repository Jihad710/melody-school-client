
import "./style.css"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import axios from "axios";
import { Scrollbar } from "swiper";
import { useQuery } from "@tanstack/react-query";


const Banner = () => {


  const { data: instruments = [] } = useQuery({
    queryKey: ["instruments"], queryFn: async () => {
        const res = await axios.get("http://localhost:5000/instruments");
        console.log()
        return res.data;
    }
});

console.log(instruments)



  return (
    <div className="">
            <div className=" ">
                <Swiper
                    scrollbar={{
                        hide: true,
                    }}
                    modules={[Scrollbar]}
                    className="mySwiper "
                >
    {
        instruments.map((instrument, index) =>
            <SwiperSlide key={index}>
                <div className="hero min-h-screen bg-cover bg-center" style={{ backgroundImage: `url("${instruments.image}")` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-xl">
                           
                            
                        </div>
                    </div>
                </div>

            </SwiperSlide>
        )
                    }


                </Swiper>
            </div>
           

        </div>
  );
};

export default Banner;