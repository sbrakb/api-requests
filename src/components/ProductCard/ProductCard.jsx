import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function ProductCard(props) {
  const DeleteProduct = async () => {
    try {
      await axios.delete(`https://dummyjson.com/products/${props.product.id}`);
      console.log('ürün silindi');
      props.onDelete(props.product);
    } catch (error) {
      console.error('Ürünü silerken bir hata oluştu:', error);
    }
  };

  return (
    <div className='card'>
      <img src={props.product.thumbnail} className='card-img-top' alt='...' />
      <div className='card-body'>
        <h5 className='card-title'>{props.product.title}</h5>
        <p className='card-text'>{props.product.description}</p>
        <Link
          to={'/product-detail/' + props.product.id}
          className='btn btn-primary'
        >
          Details
        </Link>
        <button onClick={DeleteProduct} className='btn btn-danger'>
          Sil
        </button>
      </div>
    </div>
  );
}
