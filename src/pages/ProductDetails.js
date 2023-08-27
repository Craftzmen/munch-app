import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Outlet } from 'react-router-dom';
import axios from 'axios';

import { Loader } from '../svgs/Loader';
import { StarSVG } from '../svgs/Star';
import ReserveProduct from '../components/partials/ReserveProduct';
import HeadBack from '../components/partials/HeadBack';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:1337/api/restaurants/${id}`)
      .then((response) => {
        setProduct(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  if(!product) {
    return <Loader className='relative top-1/2 left-1/2 w-6 h-6 text-black animate-spin'/>
  }

  return (
    <div className='m-5 sm:mx-12 md:mx-14 lg:mx-14 lg:mt-10 ' >
      <div className='mb-6 inline-block' >
        <HeadBack/>
      </div>
     { product && (
       <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-5 xl:gap-y-0 product-details-pop' >
        <img src={product.attributes.json.image} alt={product.attributes.name} className='rounded-lg w-full aspect-[16/11] ' />
        <div className='space-y-4 md:px-7' >
            <h2 className='text-lg font-bold' >{product.attributes.name}, {product.attributes.location}</h2>
            <p className='text-sm max-w-sm rounded-lg text-zinc-800 inline-block' >{product.attributes.description}</p>
            <div className="flex items-center gap-x-1.5" >
              <StarSVG className='w-5 h-5 fill-yellow-500 text-yellow-500' />
              <span className="text-zinc-700 text-sm" >{product.attributes.rating} <span className='text-zinc-500' >({product.attributes.reviews})</span></span>
            </div>
            <div>
              <span className='text-lg font-bold' >${product.attributes.budget}</span>&nbsp;
              <span>min</span>
            </div>
        </div>
        <div className='md:col-span-2 xl:col-span-1' >
          <ReserveProduct/>
        </div>
      </div>
     )}
     <Outlet/>
    </div>
  );
};

export default ProductDetails;
