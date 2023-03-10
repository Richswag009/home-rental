import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import testi from "../assets/img/testi.png";
// import quotes from "../assets/img/“.svg";

// import required modules
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";

export default () => {
  return (
    <Swiper
      spaceBetween={50}
      pagination={{ dynamicBullets: true }}
      slidesPerView={1}
      // onSlideChange={() => console.log("slide change")}
      // onSwiper={(swiper) => console.log(swiper)}
      modules={[Pagination]}
      className="py-2 text-left items-start "
    >
      <SwiperSlide>
        <div className="">
          {/* quotes imgage */}
          <p className=" font-normal text-xl text-[#18191f]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            interdum nisl et nunc facilisis, a commodo eros mollis. Nunc vel
            pellentesque est. Curabitur at odio sit amet libero vulputate
            efficitur ac nec justo. Nulla vitae mauris quam. Nulla quam massa,
            faucibus id pretium ac, mattis eu velit. Donec sed risus a lacus
            fringilla finibus.
          </p>
          <div className="flex flex-row my-4 space-x-4 items-center">
            <img src={testi} alt="" />
            <div className="flex flex-col">
              <h2 className="text-orange font-bold text-lg">Harry Wilson</h2>
              <p className="font-normal text-base">Product owner</p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <p className=" font-normal text-xl text-[#18191f]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            interdum nisl et nunc facilisis, a commodo eros mollis. Nunc vel
            pellentesque est. Curabitur at odio sit amet libero vulputate
            efficitur ac nec justo. Nulla vitae mauris quam. Nulla quam massa,
            faucibus id pretium ac, mattis eu velit. Donec sed risus a lacus
            fringilla finibus.
          </p>
          <div className="flex flex-row my-4 space-x-4 items-center">
            <img src={testi} alt="" />
            <div className="flex flex-col">
              <h2 className="text-orange font-bold text-lg">jerry Ade</h2>
              <p className="font-normal text-base">Product owner</p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <p className=" font-normal text-xl text-[#18191f]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            interdum nisl et nunc facilisis, a commodo eros mollis. Nunc vel
            pellentesque est. Curabitur at odio sit amet libero vulputate
            efficitur ac nec justo. Nulla vitae mauris quam. Nulla quam massa,
            faucibus id pretium ac, mattis eu velit. Donec sed risus a lacus
            fringilla finibus.
          </p>
          <div className="flex flex-row my-4 space-x-4 items-center">
            <img src={testi} alt="" />
            <div className="flex flex-col">
              <h2 className="text-orange font-bold text-lg">
                Remi Momoh Wilson
              </h2>
              <p className="font-normal text-base">Product owner</p>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
