import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  bestSellerOne,
  bestSellerTwo,
  bestSellerThree,
  bestSellerFour,
} from "../../../assets/images/index";

const BestSellers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Our Bestsellers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1011"
          img={bestSellerOne}
          productName="Denim Jeans"
          price="200.00"
          color="Blue and Light Blue"
          badge={true}
          des="Color:	Blue/Light blue
          Pattern Type:	Plain
          Details:	Pocket, Button Front
          Type:	Skinny
          Temperature:	Late Fall (10-17℃/50-63℉)
          Closure Type:	Button Fly
          Waist Line:	High Waist
          Length:	Long
          Fit Type:	Skinny
          Fabric:	Medium Stretch
          Material:	Denim
          Composition:	65% Cotton, 23% Polyester, 10% Viscose, 2% Elastane
          Care Instructions:	Machine wash, do not dry clean
          Sheer:	No"
        />
        <Product
          _id="1012"
          img={bestSellerTwo}
          productName="Ladies Hand/Shoulder Bag"
          price="220.00"
          color="White and Blue"
          badge={false}
          des="Portable,Business Casual Fashion,Trendy 1pc Simple Style Women's Handbag Shopping Bag Fashion Canvas Tote Bag For Teen Girls Women College Students,Teacher,White-collar Workers,Rookies & White-collar Workers Perfect for Office,Work ,Business,Commute,Outdoors, Travel, Outings,Teacher's Day,Shopping,Office,teacher gifts,vacation,Perfect for Work,Holiday,Back to School"
        />
        <Product
          _id="1013"
          img={bestSellerThree}
          productName="Knitted Round Neck Sweater"
          price="289.99"
          color="Navy and Gray"
          badge={true}
          des="Color:	Navy and Gray
          Style:	Casual
          Details:	Rib-Knit
          Type:	Pullovers
          Neckline:	Round Neck
          Sleeve Length:	Long Sleeve
          Sleeve Type:	Drop Shoulder
          Length:	Crop
          Fit Type:	Regular Fit
          Fabric:	Medium Stretch
          Material:	Worsted
          Composition:	100% Acrylic
          Care Instructions:	Hand wash or professional dry clean
          Temperature:	Spring/Fall (18-25℃/63-77℉)
          Sheer:	No"
        />
        <Product
          _id="1014"
          img={bestSellerFour}
          productName="Dress"
          price="250.00"
          color="Black"
          badge={false}
          des="Color:	Black
          Style:	Party
          Pattern Type:	Plain
          Details:	Asymmetrical, Contrast Lace, Zipper
          Type:	A Line
          Neckline:	V neck
          Sleeve Length:	Cap Sleeve
          Sleeve Type:	Regular Sleeve
          Waist Line:	High Waist
          Hem Shaped:	Asymmetrical
          Length:	Long
          Fit Type:	Regular Fit
          Fabric:	Slight Stretch
          Material:	Fabric
          Composition:	90% Polyamide, 10% Elastane
          Care Instructions:	Hand wash,do not dry clean
          Body:	Lined
          Sheer:	No"
        />
      </div>
    </div>
  );
};

export default BestSellers;
