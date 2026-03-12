import React, { useEffect } from "react";
import Statistics from "./Statistics";
import PopularDishes from "./PopularDishes";
import NewDishes from "./NewDishes";
import Advertisement from "./Advertisement";
import ActiveUsers from "./ActiveUsers";
import Events from "./Events";
import "../../../css/home.css"

import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "react";
import { createSelector } from "reselect";
import { setPopularDishes } from "./slice";
import { retrievePopularDishes } from "./selector";
import { Product } from "../../../lib/types/product";

/** REDUX SLICE & SELECTOR */
// @ts-ignore
const actionDispacht = (dispatch: Dispatch) => ({
  setPopularDishes: (data: Product[]) => dispatch(setPopularDishes(data))
});
const popularDishesRetriever = createSelector(  
  retrievePopularDishes,
  (popularDishes) => ({ popularDishes })
)
export default function HomePage() {
  const { setPopularDishes} = actionDispacht(useDispatch());
  // Selector: Store => Data

  useEffect(() => {
    // Backend server data request => Data
    const result: any = [
    {
  _id: {
    $oid: "6981c38e3b42c2f4e59b904f"
  },
  productStatus: "PROCESS",
  productCollection: "DISH",
  productName: "Steak",
  productPrice: 11,
  productLeftCount: 34,
  productSize: "NORMAL",
  productVolume: 1,
  productDescription: "Delicious meal",
  productImages: [
    "uploads/products/8042ac2d-9eb3-41d8-860a-e9054702262e.jpg",
    "uploads/products/b8832ec8-b30c-458d-a7f6-918c48ea1111.jpg",
    "uploads/products/1cbc8eae-b44c-4cf4-aecc-733c2496d8a1.jpg",
    "uploads/products/4988cb07-0ba0-423b-90f1-6822d633cf22.webp"
  ],
  productViews: 0,
  createdAt: {
   $date: "2026-02-03T09:44:46.713Z"
  },
  updatedAt: {
    $date: "2026-02-10T09:45:57.576Z"
  },
  __v: 0
},
{
  _id: {
    $oid: "6981c267990e419b00b392d5"
  },
  productStatus: "PROCESS",
  productCollection: "DISH",
  productName: "Steak",
  productPrice: 14,
  productLeftCount: 34,
  productSize: "LARGE",
  productVolume: 1,
  productDescription: "Delicious meal",
  productImages: [
    "uploads/products/722e2977-48b8-413b-81f7-73de5c4e4d77.jpg",
    "uploads/products/963fdfa9-3223-4031-a906-e72aae3a6a18.jpg",
    "uploads/products/3be28fa7-f81e-4a2b-86a2-ddf8d66202da.jpg",
    "uploads/products/57864ee0-f081-4780-a4f6-6df5b69b2fe4.webp"
  ],
  productViews: 0,
  createdAt: {
    $date: "2026-02-03T09:39:51.426Z"
  },
  updatedAt: {
    $date: "2026-02-10T09:45:48.670Z"
  },
  __v: 0
}
    ]
    // Slice: Data => Store
    // @ts-ignore
    setPopularDishes(result)
  }, [])

  return (
  <div className={"homepage"}>
    <Statistics/>
    <PopularDishes/>
    <NewDishes/>
    <Advertisement/>
    <ActiveUsers/>
    <Events/>
  </div>
  )
}