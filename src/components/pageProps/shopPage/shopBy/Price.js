import React from "react";
import NavTitle from "./NavTitle";

const Price = () => {
  const priceList = [
    {
      _id: 950,
      priceOne: 50.00,
      priceTwo: 99.99,
    },
    {
      _id: 951,
      priceOne: 99.99,
      priceTwo: 199.99,
    },
    {
      _id: 952,
      priceOne: 200.00,
      priceTwo: 250.00,
    },
    {
      _id: 953,
      priceOne: 300.00,
      priceTwo: 399.99,
    },
    {
      _id: 954,
      priceOne: 400.0,
      priceTwo: 599.99,
    },
    {
      _id: 955,
      priceOne: 600.0,
      priceTwo: 1000.0,
    },
  ];
  return (
    <div className="cursor-pointer">
      <NavTitle title="Shop by Price" icons={false} />
      <div className="font-titleFont">
        <ul className="flex flex-col gap-4 text-sm lg:text-base text-[#767676]">
          {priceList.map((item) => (
            <li
              key={item._id}
              className="border-b-[1px] border-b-[#F0F0F0] pb-2 flex items-center gap-2 hover:text-primeColor hover:border-gray-400 duration-300"
            >
              R{item.priceOne.toFixed(2)} - R{item.priceTwo.toFixed(2)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Price;
