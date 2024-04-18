import React, { useContext } from 'react'
import { ShopContext } from '../Context/Shopcontext'
import { useParams } from 'react-router-dom';
import { Breadcrum } from '../Components/Breadcrum/Breadcrum';
import { ProductDisplay } from '../Components/ProductDisplay/ProductDisplay';
import Descriptionbox from '../Components/DescriptionBox/DescriptionBox';
import { RelatedProducts } from '../Components/RelatedProducts/RelatedProducts';

export const Product = () => {
    const{all_product}=useContext(ShopContext);
    const {productId}= useParams();
    const product= all_product.find((item)=>item.id===Number(productId));

  return (
    <div>
        <Breadcrum product = {product}/>
        <ProductDisplay product={product}/>
        <Descriptionbox/>
        <RelatedProducts/>
    </div>
  )
}
