import React, { Component, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import Link from "next/link";

function shuffleArray(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

var slides = [
  <div
    className="arc-jumbo lazy"
    data-bg={
      "https://www2.arccorp.com/globalassets/homepage/redesign/march-update/jumbotron_retina_datavideo2.jpg"
    }
  >
    <div className="arc-jumbo-inner white text-center">
      <div className="row">
        <div className="col-md-12 col-sm-12">
          {/* Comment out jumbovideo when video is ready */}

          {/*<Jumbovideo />*/}

          {/* This section is for when the video is not ready */}
          {
            <div className="arc-jumbo-video">
              <div className="usa-embed-container mb-4 ">
                <a href="https://www2.arccorp.com/about-us/newsroom/2022-news-releases/average-roundtrip-airfare-for-u.s.-travel-agency-air-ticket-sales-sets-seven-year-high-in-april?utm_source=Jumbo_Carousel">
                  <img
                    className="img-fluid"
                    src="https://www2.arccorp.com/globalassets/homepage/redesign/march-update/data_video_jumbo.png"
                    alt="Average Roundtrip Airfare for U.S. Travel Agency Air Ticket Sales Sets Seven-Year High in April"
                  />
                </a>
              </div>
            </div>
          }

          <h2 className="arc-jumbo-inner-title white mb-1">
            Average Roundtrip Airfare for U.S. Travel Agency Air Ticket Sales
            Sets Seven-Year High in April
          </h2>
          <div className="arc-jumbo-inner-body">
            Month-over-Month Total Sales Remained Flat as Number of Passenger
            Trips Declined{" "}
            <div className="arc-homepage-cta-link arc-jumbo-cta-link d-inline-flex p-0 pl-2">
              <a href="https://www2.arccorp.com/about-us/newsroom/2022-news-releases/average-roundtrip-airfare-for-u.s.-travel-agency-air-ticket-sales-sets-seven-year-high-in-april?utm_source=Jumbo_Carousel">
                Read More
              </a>
            </div>
          </div>
        </div>
        <a
          target="_blank"
          href="https://www.youtube.com/channel/UCWHZsoCDNhjorop892EVETw?sub_confirmation=1"
          className="arc-jumbo-subscribe"
        >
          <img
            src="https://www2.arccorp.com/globalassets/homepage/redesign/march-update/subscribe_jumbo.jpg"
            alt="subscribe_jumbo.jpg"
          />
        </a>
      </div>
    </div>
  </div>,
  <div
    className="arc-jumbo lazy"
    data-bg={
      "https://www2.arccorp.com/globalassets/homepage/redesign/march-update/arc_pay_jumbo.jpg"
    }
  >
    <div className="arc-jumbo-inner white">
      <div className="row">
        <div className="col-lg-7 col-md-12">
          <img
            src="https://www2.arccorp.com/globalassets/homepage/redesign/march-update/arcpay_logo.png"
            style={{ maxWidth: "100px", marginBottom: "15px" }}
          />
          <h2 className="arc-jumbo-inner-title white">
            The Top 5 Payment-Processing Myths
          </h2>
          <div className="arc-jumbo-inner-body">
            ARC Pay is the popular payment-processing service from ARC, but
            there are still some myths out there.
          </div>
          <a
            className="ctaBtn ctaBtn--main p-0"
            target="_blank"
            href="https://www2.arccorp.com/products-participation/products/arc-pay/the-top-5-payment-processing-myths?utm_source=Jumbo_Carousel&amp;utm_campaign=Myth_Busters_5"
          >
            See the list
          </a>
        </div>
      </div>
    </div>
  </div>,
];

function Slider() {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    domLoaded && (
      <Swiper
        navigation={true}
        centeredSlides={true}
        slidesPerView={"1.3"}
        loop={true}
        pagination={{
          clickable: true,
        }}
        spaceBetween={30}
        modules={[Navigation, Pagination]}
        className="arc-jumbo-swiper"
      >
        {shuffleArray(slides).map((data, i) => (
          <SwiperSlide key={i}>{data}</SwiperSlide>
        ))}
      </Swiper>
    )
  );
}

export default Slider;
