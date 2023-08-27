import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { Calender } from '../svgs/Calender'
import { Group } from '../svgs/Group'
import { StarSVG } from "../svgs/Star";
import { ChevronLeft } from "../svgs/ChevronLeft";

import CheckoutHeader from "../components/partials/CheckoutHeader";
import CheckoutForm from "../components/partials/CheckoutForm";

const CheckoutPage = () => {
  const location = useLocation();
  const headBack = useNavigate()
  const { reservation } = location.state;

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const headBackHandler = () => {
    headBack(-1)
  }

  return (
    <div className="w-full h-auto pb-20 bg-zinc-50" >
      <CheckoutHeader className='sticky top-0' />
      <div className='m-8 lg:mb-0 lg:mr-0 inline-block' >
        <div onClick={headBackHandler} className='cursor-pointer hover:opacity-70' >
          <ChevronLeft className='h-10 w-10 bg-white text-zinc-800 rounded-full p-3' />
        </div>
      </div>
      <section className="flex flex-col product-checkout-out lg:flex-row sm:gap-5 sm:m-10 lg:m-0 justify-center" >
        <div>
          <div className="px-5 md:px-8 py-6 pb-16 bg-white sm:rounded-xl" >
            <h2 className="text-zinc-800 text-lg font-semibold" >Checkout Details</h2>
            <div className="w-full h-[1px] bg-zinc-200/60 my-4" ></div>
            <CheckoutForm/>
          </div>
        </div>
        <div className="lg:max-w-[28rem]" >
          <div className="bg-white sm:rounded-xl px-8 py-6" >
            <h2 className="text-zinc-800 text-lg font-semibold" >Rerservation</h2>
            <div className="w-full h-[1px] bg-zinc-200/60 my-4" ></div>
            <div className="flex items-start gap-x-5 mt-5" >
              <img src={reservation.restaurant.image} alt={reservation.restaurant.name} className="w-20 h-20 md:w-24 md:h-24 rounded-md" />
              <div className="text-sm">
                <h1 className="text-base font-medium" >{reservation.restaurant.name}</h1>
                <p className="text-zinc-500" >{reservation.restaurant.description}</p>
                <div className="mt-3 text-xs flex items-center gap-x-1.5" >
                  <StarSVG className='w-4 h-4 text-yellow-500 fill-yellow-500' />
                  <p className="text-zinc-500/80" >{reservation.restaurant.rating} ( {reservation.restaurant.reviews} )</p>
                </div>
              </div>
            </div>
            <div className="mt-6 space-y-3 text-sm py-5 text-zinc-600" >
              <div className="flex justify-between items-center" >
                <div className="flex items-center gap-x-3">
                  <Group className='w-5 h-5' />
                  <h1>No. of Guests</h1>
                </div>
                <p>{reservation.guests}</p>
              </div>
              <div className="flex justify-between items-center" >
                <div className="flex items-center gap-x-3" >
                  <Calender className='w-5 h-5' />
                  <h1>Reservation date</h1>
                </div>
                <p>{formatDate(reservation.date)}</p>
              </div>
            </div>
            <div className="mt-10" >
              <h1 className="text-base font-medium" >Price details</h1>
              <div className="w-full h-[1px] bg-zinc-200/60 my-4" ></div>
              <div className="mt-3 text-zinc-600" >
                <div className="flex justify-between text-sm items-center" >
                  <h1>Subtotal</h1>
                  <span className="font-medium" >${reservation.subTotalCharge}</span>
                </div>
                <div className="flex mt-3 justify-between text-sm items-center" >
                  <h1>Munch service fee</h1>
                  <span className="font-medium" >${reservation.munchFee}</span>
                </div>
                <div className="w-full h-[1px] bg-zinc-200/60 mt-7 my-4" ></div>
                <div className="font-semibold text-lg text-black flex justify-between items-center" >
                  <h1>Total</h1>
                  <span>${reservation.totalCharge}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CheckoutPage;
