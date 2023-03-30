import dynamic from "next/dynamic";
//import { PodcastWidget } from "podcast-widget";
//import Jumbovideo from "../components/Jumbovideo";
//import Slider from "../components/Slider";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

import Slider from "../components/Slider";

var statData = {
  modifier: "-",
  number: "3.8",
  type: "Leisure/Other Ticket Variance",
  week: "May 22, 2019",
};

const homeData = {
  recentBlogTitle: "A Deep Dive into Omnichannel Retailing",
  recentBlogLink:
    "https://www2.arccorp.com/articles-trends/the-latest/omnichannel-series-recap/",
  recentBlogImage:
    "https://www2.arccorp.com/globalassets/homepage/redesign/latest/omnichannel-series-recap.jpg",
  popularArticles: [
    {
      date: "Updated Every Monday",
      title: "ARC Provides Updated Air Travel Data During COVID-19",
      link: "https://www2.arccorp.com/articles-trends/the-latest/coronavirus/",
    },
    {
      date: "Jan 12, 2022",
      title: "ARC’s Top Insights from 2021",
      link:
        "https://www2.arccorp.com/articles-trends/the-latest/arc-top-insights-2021/",
    },
    {
      date: "May 1, 2020",
      title: "ARC’s COVID-19 Resources for Airlines and Travel Agencies",
      link:
        "https://www2.arccorp.com/articles-trends/the-latest/arcs-covid-19-resources-for-airlines-and-travel-agencies/",
    },
    {
      date: "Jan 27, 2022",
      title:
        "Top Corporate Equity Index Score Reflects ARC’s Commitment to Diversity, Inclusion",
      link:
        "https://www2.arccorp.com/articles-trends/the-latest/arc-receives-top-corporate-equity-index-score-2022/",
    },
  ],
};

function Index() {
  return (
    <div className="arc-homepage">
      <div style={{ maxWidth: "100%", overflow: "hidden" }}>
        <Slider />
      </div>
    </div>
  );
}

export default Index;
