"use client";
import React, { useContext, useState } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import Item from "../Components/Item/Item";
import Navbar from "../Components/Navbar/Navbar";
const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  const [sortBy, setSortBy] = useState("");

  const sortByName = () => {
    setSortBy("alphabet");
  };

  const sortByCost = () => {
    setSortBy("cost");
  };

  const sortItems = (a, b) => {
    if (sortBy === "alphabet") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "cost") {
      return a.new_price - b.new_price;
    } else {
      return 0;
    }
  };

  const sortedItems = [...all_product].sort(sortItems);

  return (
    <div className="shop-category">
      <Navbar></Navbar>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>
        <div className=" max-w-80 grid gap-4 grid-cols-2">
          <button
            onClick={sortByName}
            className="relative inline-flex h-50 w-50 overflow-hidden rounded-full p-[2px] focus:outline-none hover:opacity-75 my-8 "
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-7 py-3 text-sm font-medium text-white backdrop-blur-3xl">
              Sort A-Z
            </span>
          </button>
          <button
            onClick={sortByCost}
            className="relative inline-flex h-50 w-50 overflow-hidden rounded-full p-[2px] focus:outline-none hover:opacity-75 my-8"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-7 py-3 text-sm font-medium text-white backdrop-blur-3xl">
              Sort low-high cost
            </span>
          </button>
        </div>
        <h1 className=" text-5xl md:text-9xl category-heading bg-gradient-to-r from-neutral-900  via-blue-900  to-neutral-900  inline-block text-transparent bg-clip-text">
          {props.category}s
        </h1>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {sortedItems.map((item, i) => {
            if (props.category === item.category) {
              return (
                <Item
                  key={i}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  new_price={item.new_price}
                  old_price={item.old_price}
                />
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default ShopCategory;
