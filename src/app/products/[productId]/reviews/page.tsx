import React from 'react'

const ListReviews = ({params}:{
    params:{
        productId:string
    }
}) => {
  return (
    <div>ListReviews for {params.productId}</div>
  )
}

export default ListReviews