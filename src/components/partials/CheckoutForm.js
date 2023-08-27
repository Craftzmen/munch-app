import { Checkbox } from "@mui/material";
import { pink } from "@mui/material/colors";
import React, { useState } from "react";

const CheckoutForm = () => {
  const [cardNumber, setCardNumber] = useState("");

  const handleChange = (event) => {
    setCardNumber(
      event.target.value.replace(/[^0-9]/g, "").replace(/(\d{4})-$/, "$1")
    );
  };
  return (
    <div>
      <div className="mt-3 text-sm">
        <span className="text-sm-lg font-semibold text-secondary-500">
          Personal Info
        </span>
        <div className="flex flex-col lg:flex-row gap-4 mt-5">
          <div className="flex flex-col">
            <label htmlFor="first_name" className="text-xs text-zinc-500">
              First Name
            </label>
            <input
              type="text"
              id="first_name"
              placeholder="like. Max"
              className="border border-zinc-300/50 rounded-md placeholder:text-zinc-500/40 placeholder:text-sm-md mt-1 text-zinc-600 w-full lg:w-52 focus:outline-none px-3.5 py-3"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="last_name" className="text-xs text-zinc-500">
              Last Name
            </label>
            <input
              type="text"
              id="last_name"
              placeholder="like. Abraham"
              className="border border-zinc-300/50 rounded-md placeholder:text-zinc-500/40 placeholder:text-sm-md mt-1 text-zinc-600 w-full lg:w-52 focus:outline-none px-3.5 py-3"
            />
          </div>
        </div>
        <div className="mt-5">
          <span className="text-sm-lg font-semibold text-secondary-500">
            Contact Info
          </span>
        </div>
        <div className="space-y-3">
          <div className="flex flex-col mt-5">
            <label htmlFor="phone" className="text-xs text-zinc-500">
              Phone number
            </label>
            <input
              type="tel"
              id="phone"
              placeholder="+00 000 00000 0"
              className="border border-zinc-300/50 rounded-md placeholder:text-zinc-500/40 placeholder:text-sm-md mt-1 text-zinc-600 w-full focus:outline-none px-3.5 py-3"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-xs text-zinc-500">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="user@munch.com"
              className="border border-zinc-300/50 rounded-md placeholder:text-zinc-500/40 placeholder:text-sm-md mt-1 text-zinc-600 w-full focus:outline-none px-3.5 py-3"
            />
          </div>
        </div>
        <div className="mt-4">
          <span className="text-sm-lg font-semibold text-secondary-500">
            Payment Details
          </span>
        </div>
        <div>
          <div className="flex flex-col mt-5">
            <label htmlFor="last_name" className="text-xs text-zinc-500">
              Card Number
            </label>
            <input
              type="text"
              value={cardNumber}
              onChange={handleChange}
              maxLength={16}
              placeholder="XXXX XXXX XXXX XXXX"
              pattern="XXXX XXXX XXXX XXX"
              className="border border-zinc-300/50 rounded-md placeholder:text-zinc-500/40 placeholder:text-sm-md mt-1 text-zinc-600 w-full focus:outline-none px-3.5 py-3"
              title="Credit card number must be 16 digits long"
              onKeyPress={(event) => {
                if (event.key === "-" && event.target.value.length === 15) {
                  event.preventDefault();
                }
              }}
            />
          </div>
          <div className="flex gap-x-4 mt-4">
            <div className="flex flex-col">
              <label htmlFor="last_name" className="text-xs text-zinc-500">
                Exp. year
              </label>
              <input
                type="text"
                id="exp_year"
                maxLength={4}
                placeholder="2025"
                className="border border-zinc-300/50 rounded-md placeholder:text-zinc-500/40 placeholder:text-sm-md mt-1 text-zinc-600 w-full lg:w-52 focus:outline-none px-3.5 py-3"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="last_name" className="text-xs text-zinc-500">
                CVV
              </label>
              <input
                type="text"
                id="cvv"
                placeholder="1234"
                maxLength={4}
                className="border border-zinc-300/50 rounded-md placeholder:text-zinc-500/40 placeholder:text-sm-md mt-1 text-zinc-600 w-full lg:w-52 focus:outline-none px-3.5 py-3"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-x-1 text-sm mt-4 -ml-2">
          <Checkbox
            id="terms-checkbox"
            // checked={checkboxChecked}
            // onChange={handleCheckboxChange}
            sx={{
              color: "rgb(113 113 122 / 0.6)",
              "&.Mui-checked": {
                color: pink[500],
              },
            }}
          />
          <label htmlFor="terms-checkbox" className="text-zinc-500/60">
            Include <span className="text-zinc-700" >3 month</span> membership (Optional)
          </label>
        </div>
        <button type="submit" className="bg-zinc-100 text-zinc-400 py-3 cursor-not-allowed rounded-md w-full mt-6" >
            Reserve
        </button>
      </div>
    </div>
  );
};

export default CheckoutForm;
