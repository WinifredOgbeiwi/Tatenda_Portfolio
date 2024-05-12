import React, { useEffect } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { image, review } from "../data";
import Aos from 'aos';
import 'aos/dist/aos.css';
const Reviews = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
  return (
      <section className="bg-[#fcdcdb] py-20">
      <div className="w-[80%] m-auto mb-10">
        <h2 className=" text-5xl font-bold text-center " data-aos='fade-right'>Client Testimonials</h2>
        <p className="mt-5 mb-6 text-center " data-aos='fade-left'>
          Tatenda's 3D models are turly exceptional. His attention to detail and
          realistic texture make his work stand out from the crowd
        </p>
      </div>

     
          <div className="grid md:grid-cols-2 gap-8" data-aos='fade-up'>
          {review.map(({ id, description, name, img }, index) => (
            <div
              key={id}
              className={`border-[#FA3C3A] border-2 p-14 ${
                index === 1 ? "bg-[#FA3C3A]" : ""
              }`}
            >
              <FaQuoteLeft
                className={`text-[#FA3C3A] text-3xl ${
                  index === 1 ? "text-white" : ""
                }`}
              />
              <p className={`my-8 ${index === 1 ? "text-white" : ""}`}>
                {description}{" "}
              </p>
              <div className=" flex flex-row gap-4 items-center">
                <img
                  src={img}
                  alt="review_img"
                  className=" rounded-full w-16"
                />
                <p className={`${index === 1 ? "text-white" : ""}`}>{name}</p>
              </div>
            </div>
          ))}
        </div>
      
    </section>
  );
};

export default Reviews;
