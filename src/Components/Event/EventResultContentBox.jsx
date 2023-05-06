import React from "react";
import Carousel from "react-multi-carousel";
import EventResultCard from "./EventResultCard";

const EventResultContentBox = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 1,
          partialVisibilityGutter: 40,
          slidesToSlide: 1,
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
          partialVisibilityGutter: 40,
          slidesToSlide: 1,
        },
      };
  return (
    <div className="w-full overflow-y-scroll mb-3">
      <div className="w-full bg-[#EAE9E7] mt-2">
        <Carousel
          responsive={responsive}
          showDots={true}
          containerClass={"h-[300px] bg-white rounded-[20px] pt-3"}
        >
          {[1, 2]?.map((img) => (
            <img
              src="./images/events.jpg"
              alt=""
              className="w-[95%] h-[90%] object-cover rounded-[20px] mx-auto"
            />
          ))}
        </Carousel>
      </div>

      <EventResultCard />

      <EventResultCard />
      <EventResultCard />
    </div>
  );
};

export default EventResultContentBox;
