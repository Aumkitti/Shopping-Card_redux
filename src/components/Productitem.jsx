import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../Redux/carts/actions'
import { removeQuantity } from '../Redux/products/actions'

const Productitem = ({product}) => {
    const dispatch = useDispatch();
    const { id, imageURL, name, category, price, quantity } = product;
    const handleAddToCart = () =>{
        dispatch(addToCart(product));
        dispatch(removeQuantity(id));
    }

  return (
    <div className="card md:w-96 bg-base-100 shadow-x1">
        <figure className='relative'>
            <img src={imageURL} alt={name} className="h-80 w-full" />
            <div className="badge badge-secodary absolute top-3 right-3">
                {category}
            </div>
        </figure>
        <div className='card-body'>
            <h2 className='card-title'>{name}</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore nisi totam mollitia quas sint repudiandae animi, sequi ad commodi, nesciunt, pariatur illum odio obcaecati perspiciatis voluptate cupiditate vero vitae beatae.

            </p>
        </div>
        <div className='flex justity-bewteen'>
            <p className='w-full'>Available"{quantity}</p>
            <p className='text-left'>{price}฿</p>
        </div>
        <div className="card-action mt-2">
            <button className='btn btn-sm bg-black text-white' 
            disabled={quantity===0} 
            onClick={handleAddToCart}>
                Buy Now
            </button>
        </div>
    </div>
  )
}

export default Productitem;