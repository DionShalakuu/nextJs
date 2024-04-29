import React from 'react'
import { Metadata } from 'next'

type Props = {
  params:{
    productId:string
  }
}

export const generateMetadata= ({params}:Props): Metadata =>{
  return{
    title:`Product ${params.productId}`
  }
}


const ListReviews = ({params}:Props) => {
  return (
    <div>ListReviews for {params.productId}</div>
  )
}

export default ListReviews