import React from "react";
import Slider from "react-slick";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  newArrOne,
  newArrTwo,
  newArrThree,
  newArrFour,
} from "../../../assets/images/index";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";

const NewArrivals = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="w-full pb-16">
      <Heading heading="New Arrivals" />
      <Slider {...settings}>
        <div className="px-2">
          <Product
            _id="100001"
            img={newArrOne}
            productName="Printed T-Shirts"
            price="150.00"
            color="Various Colors"
            badge={true}
            des="Color:	Various Colors
            Style:	Casual
            Pattern Type:	Floral, Figure
            Neckline:	Round Neck
            Sleeve Length:	Short Sleeve
            Sleeve Type:	Regular Sleeve
            Length:	Regular
            Fit Type:	Regular Fit
            Fabric:	Slight Stretch
            Material:	Fabric
            Composition:	60% Cotton, 40% Polyester
            Care Instructions:	Machine wash or professional dry clean
            Sheer:	No"
          />
        </div>
        <div className="px-2">
          <Product
            _id="100002"
            img={newArrTwo}
            productName="Plain T-shirt"
            price="100.00"
            color="Dusty Pink"
            badge={true}
            des="Color:	Dusty Pink
            Style:	Casual
            Pattern Type:	Plain
            Neckline:	Round Neck
            Details:	Pocket
            Sleeve Length:	Short Sleeve
            Sleeve Type:	Regular Sleeve
            Length:	Regular
            Fit Type:	Slim Fit
            Fabric:	Slight Stretch
            Material:	Fabric
            Composition:	95% Polyester, 5% Elastane
            Care Instructions:	Machine wash or professional dry clean
            Sheer:	No"
          />
        </div>
        <div className="px-2">
          <Product
            _id="100003"
            img={newArrThree}
            productName="Plain T-shirt"
            price="80.00"
            color="Mustard"
            badge={true}
            des="Color:	Mustard Yellow
            Style:	Casual
            Pattern Type:	Plain
            Neckline:	Round Neck
            Sleeve Length:	Short Sleeve
            Sleeve Type:	Roll Up Sleeve
            Length:	Regular
            Fit Type:	Regular Fit
            Fabric:	Slight Stretch
            Material:	Fabric
            Composition:	95% Polyester, 5% Elastane
            Care Instructions:	Machine wash or professional dry clean
            Sheer:	No"
          />
        </div>
        <div className="px-2">
          <Product
            _id="100004"
            img={newArrFour}
            productName="Hoodie"
            price="350.00"
            color="Black"
            badge={false}
            des="Color:	Black
            Style:	Casual
            Type:	Pullovers
            Pattern Type:	Plain
            Details:	Drawstring, Pocket
            Neckline:	Hooded
            Sleeve Length:	Long Sleeve
            Sleeve Type:	Regular Sleeve
            Length:	Regular
            Fit Type:	Regular Fit
            Fabric:	Slight Stretch
            Material:	Fabric
            Composition:	100% Polyester
            Care Instructions:	Machine wash or professional dry clean
            Temperature:	Late Fall (10-17℃/50-63℉)
            Sheer:	No"
          />
        </div>
        <div className="px-2">
          <Product
            _id="100005"
            img={newArrTwo}
            productName="Hoodie"
            price="60.00"
            color="Black"
            badge={false}
            des="Color:	Black
            Style:	Casual
            Type:	Pullovers
            Pattern Type:	Plain
            Details:	Drawstring, Pocket
            Neckline:	Hooded
            Sleeve Length:	Long Sleeve
            Sleeve Type:	Regular Sleeve
            Length:	Regular
            Fit Type:	Regular Fit
            Fabric:	Slight Stretch
            Material:	Fabric
            Composition:	100% Polyester
            Care Instructions:	Machine wash or professional dry clean
            Temperature:	Late Fall (10-17℃/50-63℉)
            Sheer:	No"
          />
        </div>
      </Slider>
    </div>
  );
};

export default NewArrivals;
