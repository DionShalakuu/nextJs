import React from 'react'

const ReviewDetail = ({params}:{
    params:{
        productId:string;
        reviewId:string;
    }
}) => {
  return (
    <div>Review {params.productId} for product {params.reviewId}</div>
  )
}

export default ReviewDetail