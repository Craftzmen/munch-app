import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { Switch } from "antd";

import ProductWrapper from "../Helpers/ProductWrapper";
import { StarSVG } from "../svgs/Star";
import ProductCard from "../Helpers/cards/ProductCard";

const ProductList = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [showPricesWithTax, setShowPricesWithTax] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:1337/api/restaurants", {})
      .then((response) => {
        setRestaurants(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <div className="flex justify-center items-center mt-10">
        <div className="flex justify-between items-start p-5 rounded-xl md:w-96 lg:w-[40rem] border border-zinc-200/60 bg-white">
          <div>
            <h1 className="text-sm font-medium">Show prices with tax</h1>
            <span className="text-xs text-zinc-500/70">
              Includes all the tax with minimum budget
            </span>
          </div>
          <Switch
            className='bg-zinc-100'
            checked={showPricesWithTax}
            onChange={(checked) => setShowPricesWithTax(checked)}
          />
        </div>
      </div>
      <div className="mt-10 rounded-3xl" >
        <ProductWrapper className="product-details-pop grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {restaurants.map((restaurant) => {
            const budget = showPricesWithTax
              ? restaurant.attributes.budget + restaurant.attributes.tax
              : restaurant.attributes.budget;

            return (
              <ProductCard
                key={restaurant.id}
                className="p-4 text-sm w-full sm:max-w-sm h-auto"
              >
                <Link to={`/restaurants/${restaurant.id}`}>
                  <img
                    src={restaurant.attributes.json.image}
                    alt={restaurant.attributes.name}
                    loading="lazy"
                    className="rounded-xl w-full aspect-square max-h-64"
                  />
                  <div className="mt-3 flex justify-between items-start">
                    <h2 className="">
                      {restaurant.attributes.name}, {restaurant.attributes.location}
                    </h2>
                    <div className="flex items-center gap-x-1.5">
                      <StarSVG className="w-4 h-4 fill-zinc-800 text-zinc-800" />
                      <span className="text-zinc-500">
                        {restaurant.attributes.rating}
                      </span>
                    </div>
                  </div>
                  <div className="mt-1 space-y-0.5 text-zinc-500/80">
                    <span className="block">
                      {restaurant.attributes.distance} kilometers away
                    </span>
                    <div className="block">
                      <span className="text-black font-medium">${budget}</span>&nbsp;
                      { showPricesWithTax ? (
                        <span>with tax</span>
                      ): (
                        <span>min</span>
                      )}
                    </div>
                  </div>
                </Link>
              </ProductCard>
            );
          })}
        </ProductWrapper>
      </div>
    </div>
  );
};

export default ProductList;
