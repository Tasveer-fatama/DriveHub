"use client";

import { IconCircleCheck, IconCircleX } from "@tabler/icons-react";
import { useParams } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "next/navigation";
import useCartContext from "@/context/CartContext";

const ThankYou = () => {
  const hasRun = useRef();

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );
  const { tutorid } = useParams();
  //   const location = useLocation();
  let params = new URLSearchParams(location.search);

  const { cartItems, clearCart } = useCartContext();

  const savePayment = async () => {
    const paymentDetails = await retrievePaymentIntent();
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/order/add`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: currentUser._id,
          items: cartItems,
          paymentDetails: paymentDetails,
          intentId: params.get("payment_intent")
        }),
      }
    );
    console.log(response.status); 
    if (response.status === 200) {
      clearCart();
    }
  };

  const retrievePaymentIntent = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/retrieve-payment-intent`,
      {
        method: "POST",
        body: JSON.stringify({
          paymentIntentId: params.get("payment_intent"),
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response.status);
    const data = await response.json();
    // console.log(data);
    return data;
  };

  useEffect(() => {
    if (!hasRun.current) {
      hasRun.current = true;
      if (params.get("redirect_status") === "succeeded") {
        savePayment();

      }
    }
  }, []);

  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div>
          <div className="flex flex-col items-center space-y-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-green-600 w-28 h-28"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h1 className="text-4xl font-bold">Thank You !</h1>
            <p>
              Thank you for your interest! Check your email for a link to the
              guide.
            </p>
            <a className="inline-flex items-center px-4 py-2 text-white bg-indigo-600 border border-indigo-600 rounded rounded-full hover:bg-indigo-700 focus:outline-none focus:ring">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-3 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
              <button className="text-sm font-medium">Home</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default ThankYou;
