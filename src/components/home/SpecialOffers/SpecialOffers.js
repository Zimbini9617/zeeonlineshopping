import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  spfOne,
  spfTwo,
  spfThree,
  spfFour,
} from "../../../assets/images/index";

const SpecialOffers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Special Offers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1101"
          img={spfOne}
          productName="Long Coat"
          price="450.00"
          color="Beige"
          badge={true}
          des="Color:	Beige
          Style:	Casual
          Pattern Type:	Plain
          Type:	Other
          Neckline:	Collar
          Details:	Pocket, Button, Button Front
          Sleeve Length:	Long Sleeve
          Sleeve Type:	Drop Shoulder
          Length:	Knee Length
          Placket:	Single Breasted
          Fit Type:	Regular Fit
          Fabric:	Non-Stretch
          Material:	Knitted Fabric
          Composition:	100% Polyester
          Care Instructions:	Machine wash or professional dry clean
          Temperature:	Spring/Fall (18-25℃/63-77℉)
          Pockets:	Yes
          Body:	Unlined
          Sheer:	No"
        />
        <Product
          _id="1102"
          img={spfTwo}
          productName="Coat"
          price="320.00"
          color="Black"
          badge={true}
          des="Style:	Casual
          Color:	Black
          Pattern Type:	Plain
          Details:	Double Button, Knot
          Type:	Regular
          Neckline:	Waterfall
          Sleeve Length:	Long Sleeve
          Sleeve Type:	Regular Sleeve
          Length:	Short
          Placket:	Double Breasted
          Fit Type:	Regular Fit
          Fabric:	Non-Stretch
          Material:	Fabric
          Composition:	100% Polyester
          Care Instructions:	Machine wash or professional dry clean
          Temperature:	Late Fall (10-17℃/50-63℉)
          Pockets:	No
          Body:	Unlined
          Belt:	Yes
          Sheer:	No"
        />
        <Product
          _id="1103"
          img={spfThree}
          productName="Long Coat"
          price="800.00"
          color="Beige"
          badge={true}
          des="Color:	Beige
          Style:	Casual
          Pattern Type:	Plain
          Type:	Other
          Neckline:	Collar
          Details:	Pocket, Button, Button Front
          Sleeve Length:	Long Sleeve
          Sleeve Type:	Drop Shoulder
          Length:	Knee Length
          Placket:	Single Breasted
          Fit Type:	Regular Fit
          Fabric:	Non-Stretch
          Material:	Knitted Fabric
          Composition:	100% Polyester
          Care Instructions:	Machine wash or professional dry clean
          Temperature:	Spring/Fall (18-25℃/63-77℉)
          Pockets:	Yes
          Body:	Unlined
          Sheer:	No"
        />
        <Product
          _id="1104"
          img={spfFour}
          productName="Folral Skirt"
          price="220.00"
          color="Foral"
          badge={true}
          des="Color:	Black
          Style:	Boho
          Pattern Type:	Ditsy Floral
          Details:	Split Thigh
          Waist Line:	High Waist
          Length:	Midi
          Fit Type:	Skinny
          Type:	Slit
          Fabric:	Non-Stretch
          Material:	Woven Fabric
          Composition:	100% Polyester
          Care Instructions:	Machine wash, do not dry clean
          Sheer:	No"
        />
      </div>
    </div>
  );
};

export default SpecialOffers;
