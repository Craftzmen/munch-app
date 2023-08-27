import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import { DatePicker } from "antd";
import { pink } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";

import { Loader } from "../../svgs/Loader";
import { Warning } from "../../svgs/Warning";
import { PersonPlus } from "../../svgs/PersonPlus";
import { PersonMinus } from "../../svgs/PersonMinus";

const ReserveProduct = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [product, setProduct] = useState(null);

  const [guestCount, setGuestCount] = useState(0);
  
  const [selectedDate, setSelectedDate] = useState(null);
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  
  const [buttonEnabled, setButtonEnabled] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:1337/api/restaurants/${id}`)
      .then((response) => {
        setProduct(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  useEffect(() => {
    if (selectedDate && checkboxChecked) {
      setButtonEnabled(true);
    } else {
      setButtonEnabled(false);
    }
  }, [selectedDate, checkboxChecked]);

  if (!product) {
    return (
      <Loader className="relative top-1/2 left-1/2 w-6 h-6 text-black animate-spin" />
    );
  }

  const minGuests = product.attributes.minGuests;
  const maxGuests = product.attributes.maxGuests;
  const munchServiceFee = 12;
  const subTotal = product.attributes.budget + product.attributes.tax
  const totalAmount = product.attributes.budget + product.attributes.tax + munchServiceFee;

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const setGuestIncrementHandler = () => {
    if (guestCount < maxGuests) {
      setGuestCount((prevCount) => prevCount + 1);
    }
  };

  const setGuestDecrementHandler = () => {
    if (guestCount > 0) {
      setGuestCount((prevCount) => prevCount - 1);
    }
  };

  const handleCheckboxChange = (event) => {
    setCheckboxChecked(event.target.checked);
  };

  const handleReservation = () => {
    const reservationData = {
      guests: guestCount,
      date: selectedDate.toString(),
      restaurant: {
        name: product.attributes.name,
        description: product.attributes.description,
        image: product.attributes.json.image,
        location: product.attributes.location,
        rating: product.attributes.rating.toString(),
        reviews: product.attributes.reviews.toString()
      },
      totalCharge: totalAmount,
      subTotalCharge: subTotal,
      munchFee: munchServiceFee
    };

    navigate(`/restaurants/${id}/checkout`, { state: { reservation: reservationData } });
  };

  return (
    <div>
      <div className="border border-zinc-200/60 sm:p-5 md:p-7 rounded-xl">
        <div>
          <h1 className="font-semibold text-lg">Reserve a table</h1>
          <div className="flex gap-x-5 items-start mt-4">
            <div className="bg-zinc-50 py-3 px-5 rounded-t-xl border-b border-zinc-200/60 inline-block">
              <div className="flex items-center gap-x-2">
                <button
                  onClick={setGuestDecrementHandler}
                  className="bg-zinc-200 hover:opacity-60 rounded-full w-10 h-10 flex justify-center items-center"
                >
                  <PersonMinus className="w-6 h-5 cursor-pointer" />
                </button>
                <span className="font-semibold w-10 text-center">
                  {guestCount}
                </span>
                <button
                  onClick={setGuestIncrementHandler}
                  className="bg-zinc-200 hover:opacity-60 rounded-full w-10 h-10 flex justify-center items-center"
                >
                  <PersonPlus className="w-6 h-5 cursor-pointer" />
                </button>
              </div>
            </div>
            {guestCount < minGuests ? (
              <div
                className={`flex flex-1 items-center gap-x-3 bg-amber-50 rounded-md max-w-xs p-3 text-amber-600`}
              >
                <Warning className="w-5 h-5" />
                <span className="text-xs">Minimum {minGuests} Guests</span>
              </div>
            ) : guestCount === maxGuests ? (
              <div
                className={`flex flex-1 items-center gap-x-3 bg-amber-50 rounded-md p-3 text-amber-600`}
              >
                <Warning className="w-5 h-5" />
                <span className="text-xs">Maximum {maxGuests} Guests</span>
              </div>
            ) : null}
          </div>
        </div>
        <div className="z-[999] " >
          <DatePicker
            value={selectedDate}
            onChange={handleDateChange}
            placeholder="Choose a reservation date"
            className="w-full rounded-tl-none p-4 text-zinc-700 bg-zinc-50 border-0"
          />
          <div className="flex items-center gap-x-1 text-sm mt-4">
            <Checkbox
              id="terms-checkbox"
              checked={checkboxChecked}
              onChange={handleCheckboxChange}
              sx={{
                color: "rgb(113 113 122 / 0.6)",
                "&.Mui-checked": {
                  color: pink[500],
                },
              }}
            />
            <label htmlFor="terms-checkbox" className="text-zinc-500/60">
              I agree to the restaurant{" "}
              <span className="text-zinc-700">terms & conditions</span>
            </label>
          </div>
          <div className="mt-5">
            <button
            onClick={handleReservation}
              className={`w-full text-center py-3 rounded-lg font-semibold text-sm ${
                buttonEnabled && guestCount >= minGuests
                  ? "bg-pink-500 text-white hover:opacity-70"
                  : "bg-zinc-100 text-zinc-400 cursor-not-allowed"
              } `}
              disabled={!buttonEnabled}
            >
              Reserve
            </button>
          </div>
          <div className="mt-5" >
              <div className="mt-4 space-y-3" >
                <div className="flex justify-between items-start text-sm" >
                  <h1 className="text-zinc-500" >Minimum Budget</h1>
                  <span className="font-medium" >${product.attributes.budget}</span>
                </div>
                <div className="flex justify-between items-start text-sm" >
                  <h1 className="text-zinc-500" >Total tax</h1>
                  <span className="font-medium" >${product.attributes.tax}</span>
                </div>
                <div className="w-full h-[1px] bg-zinc-200/60 my-4" ></div>
                <div>
                  <div className="flex justify-between text-sm items-center" >
                    <h1 className="font-semibold" >Subtotal</h1>
                    <span className="font-medium" >${subTotal}</span>
                  </div>
                </div>
                <div className="flex justify-between items-start text-sm" >
                  <h1 className="text-zinc-500" >Munch service fee</h1>
                  <span className="font-medium" >${munchServiceFee}</span>
                </div>
              </div>
          </div>
          <div className="w-full h-[1px] bg-zinc-200/60 my-4" ></div>
          <div>
            <div className="flex justify-between items-center" >
              <h1 className="font-semibold" >Total</h1>
              <span className="font-medium" >${totalAmount}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReserveProduct;
