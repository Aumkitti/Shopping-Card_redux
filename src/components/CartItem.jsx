import React from 'react'
import { useDispatch } from 'react-redux';
import { addQuantity, removeQuantity } from '../Redux/products/actions';
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../Redux/carts/actions';
import { IoMdClose } from "react-icons/io";

const CartItem = ({product}) => {
    const {id, name, imageURL, quantity, category, price, productId} = product;
    const dispatch = useDispatch()
    const handleRemoveFromCart = () => {
        dispatch(removeFromCart(id));
        dispatch(addQuantity(productId, quantity,));
        
    }
    if(quantity === 0) {
            handleRemoveFromCart();
        }

    const handleAddQuantity = () => {
        dispatch(increaseQuantity(id))
        dispatch(removeQuantity(productId))
    }

    const handleDecreaseQuantity = () => {
        dispatch(decreaseQuantity(id))
        dispatch(addQuantity(productId, 1))
    }
  return (
    <div>
        <div className="rounded-lg">
            <div className="justify-between mb-6 rounded-lg bg-white p-5 shadow-md sm:flex sm:justify-start">
                <img src={imageURL} 
                alt={product} 
                className="w-full h-28 rounded sm:w-40" />
                <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                    <div className="mt-5 sm:mt-0">
                        <h3 className="text-lg font-bold text-gray-900">
                            {name}
                        </h3>
                        <p className="mt-1 text-sm text-gray-700">
                            Price:{price}฿
                        </p>
                        <p className="mt-1 text-sm text-gray-700">
                            Category:{category}
                        </p>
                    </div>
                </div>
                <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                    <div className="flex item-center border-gray-100">
                        <span className="cursor-pointer rounded-l bg-grat-100 py-1 px-3 5 duration-100 hover:bg-black hover:text-white" onClick={handleDecreaseQuantity}>
                            {""}-{""}
                        </span>
                            <input type="number" min='1' value={quantity} className="h-8 w-8 border bg-white text-center text-xs outline-none text-black" />
                        <span className="cursor-pointer rounded-l bg-grat-100 py-1 px-3 5 duration-100 hover:bg-black hover:text-white" onClick={handleAddQuantity}>
                            {""}+{""}
                        </span>
                        <div className="flex-item-center space-x-4">
                            <p className="text-sm text-black">
                                {price * quantity}฿
                            </p>
                            <button className="lws-removeFromCart" onClick={handleRemoveFromCart} >
                        
                            <IoMdClose />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartItem