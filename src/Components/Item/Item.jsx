"use client";
import React from "react";
import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <Link key={props.id} className="group" to={`/product/${props.id}`}>
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-slate-200 xl:aspect-h-8 xl:aspect-w-7  shadow-2xl ">
        <img
          src={props.image}
          alt="Product Image"
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
      </div>
      <h3 className="mt-4 text-sm text-white">{props.name}</h3>
      <p className="mt-1 text-lg font-medium text-white">${props.new_price}</p>
    </Link>
  );
};

export default Item;
