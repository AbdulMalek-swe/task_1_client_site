import Image from 'next/image';
import React, { useState } from 'react';
import ShowProduct from './showProduct';
import AddProduct from './addProduct';

const Product = () => {
    const [open, setOpen] =  useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    return (
        <div>
           <div className='flex justify-between items-center'>
               <div >
                <h2 className='capitalize xl:text-xl sm:text-lg xs:text-base'>stock product list</h2>
                <p className='md:text-base text-sm my-1'>Lorem ipsum dolor sit amet consectetur. Risus in nulla faucibus risus.</p>
               </div>
               <div>
                <button className='flex items-center bg-blue-600 px-3 py-2 rounded-lg text-sm text-white font-bold'  onClick={handleOpen}>  
                    <Image src='/add.svg' className='mr-3' width={30} height={30}/>
                   <span> Add Product</span>
                </button>
               </div>
           </div>
           <div className='mt-4'>
            <ShowProduct/>
            <AddProduct open={open} handleClose={handleClose}/>
           </div>
        </div>
    );
};

export default Product;