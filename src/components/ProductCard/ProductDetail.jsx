import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function ProductDetail() {
  let { id } = useParams();

  const [productDetail, setProductDetail] = useState(null);

  const getProduct = async () => {
    try {
      let response = await axios.get(`https://dummyjson.com/products/${id}`);
      setProductDetail(response.data);
    } catch (error) {
      console.error('Ürün bulunamadı:', error);
    }
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  return (
    <div className='card'>
      <div className='card-body'>
        {productDetail && (
          <>
            <img src={productDetail.thumbnail} alt='Product Thumbnail' />
            <h1 className='card-title'>{productDetail.title}</h1>
            <h5 className='card-title'>{productDetail.category}</h5>
            <p className='card-text'>{productDetail.description}</p>
            <p className='card-text'>Price: {productDetail.price}$</p>
            <p className='card-text'>Stock: {productDetail.stock}</p>
          </>
        )}
      </div>
    </div>
  );
}
