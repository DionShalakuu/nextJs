"use client"
import React from 'react'
import {notFound} from "next/navigation"

function getRandomInt(count:number){
  return Math.floor(Math.random()* count);
}

type ReviewProps = {
    params:{
      productId:string;
      reviewId:string;
    }
}

const ReviewDetail = ({params}:ReviewProps) => {
  const random = getRandomInt(2);
  if(parseInt(params.reviewId)> 1000){
    notFound();
  }
  if(random === 1){
    throw new Error("error loading review")
  }
  return (
    <div>Review {params.productId} for product {params.reviewId}</div>
  )
}




export default ReviewDetail