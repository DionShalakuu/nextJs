import { Metadata } from 'next'
import React from 'react'


type Props = {
  params:{
    productId:string
  }
}

export const generateMetadata= async ({params}:Props): Promise<Metadata> =>{
  const title = await new Promise(resolve=>{
    setTimeout(()=> {
    resolve(`Dion ${params.productId}`)
  },1000)
})
  return{
    title:`Product ${title}`
  }
}

const ProductDetails = ({params}:Props) => {
  return (
    <div>ProductDetails : {params.productId}</div>
  )
}

export default ProductDetails