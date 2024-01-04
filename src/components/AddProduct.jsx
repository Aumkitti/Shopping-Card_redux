import React from 'react'
import {useForm} from "react-hook-form"
import { useDispatch } from 'react-redux'
import { addProduct } from '../Redux/products/actions'

function AddProduct() {
        const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => {
        dispatch(addProduct(data));
        reset();
      }    
  return (   
    <div className='FormCintainer'>
        <h4 className='formTitle'>AddProduct</h4>
        <form className='space-y-4 text-[#ffffff]'
        onSubmit={handleSubmit(onSubmit)}
        >
            <div className='space-y-2'>
                <label>Product Name</label>
                <input type='text' className='addProductInput'{...register("name", { required: true })} />
                {errors.name && <span>This field is required</span>}
            </div>
            <div className="space-y-2">
            <label>Category</label>
            <select className="addProductInput"
            {...register("category", { required: true })}>
              <option value="">Select a category</option>
              <option value="clothing">Clothing</option>
              <option value="gadgets">Gadgets</option>
              <option value="bags">Bags</option>
            </select>
            {errors.category && <span className="category text-red-600">Category is required</span>}
          </div>
            <div className='space-y-2'>
                <label>ImageURL</label>
                <input type='text' className='addProductInput' {...register("imageURL", { required: true })}/>
                {errors.imageURL && <span>This field is required</span>}
            </div>
            <div className='grid grid-cols-2 gap-8 pd-4'>
                <div className='space-y-2'>
                    <label>price</label>
                    <input type='number' className='addProductInput' {...register("price", { required: true , min: 0 })}/>
                    {errors.price && <span>Please enter a valid Price</span>}
                </div>
                <div className='space-y-2'>
                    <label>quantity</label>
                    <input type='number' className='addProductInput' id='lws-inputQuantity' {...register("quantity", { required: true , min: 0 })}/>
                    {errors.quantity && <span>Please enter a valid quantity</span>}
                   </div> 
            </div>
            <button type='submit' className='submit bg-black text-white' >
                Add Product
            </button>  
        </form>
    </div>
  )
}

export default AddProduct