import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrum from '../../components/Breadcrum/Breadcrum';
import ProductDisplay from '../../components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../../components/DescriptionBox/DescriptionBox';
import RelatedProduct from '../../components/RelatedProduct/RelatedProduct';

const Product = () => {
  const {all_product}=useContext(ShopContext);
  const {productId}=useParams();
  const product=all_product.find((item)=>item.id===Number(productId));
  return (
    <div>
     <Breadcrum product={product}/>
     <ProductDisplay product={product}/>
     <DescriptionBox/>
     <RelatedProduct/>
     </div> 
  )
}

export default Product
