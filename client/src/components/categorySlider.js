import React, { Component } from "react";
import { CategoryCard } from "./categoryCard";


export const CategorySlider = () => {




  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 m-5 ">
      <CategoryCard
        category="Apple Iphone"
        description="Purchase Iphone at best price."
        url="category-iphone"
        image="https://i.ebayimg.com/images/g/3BkAAOSwE4RbdBI6/s-l1200.webp" />

      <CategoryCard
        category="Samsung Phones"
        url="category-samsung"
        description="Purchase Iphone at best price."
        image="https://www.chiptrolls.com/Images/20191204025230.JPG" />

      <CategoryCard
        category="Boat Accessories"
        url="category-boat"
        description="Purchase Boat at best price."
        image="https://5.imimg.com/data5/SELLER/Default/2021/8/FQ/RD/TW/1128084/boat-airdopes-431.jpeg" />

    </div>
  )
}

