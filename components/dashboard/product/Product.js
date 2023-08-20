import Image from 'next/image';
import React, { useState } from 'react';
import ShowProduct from './ShowProduct';
import AddProduct from './AddProduct';
import Link from 'next/link';
import { useSelector } from 'react-redux';
const Product = () => {
    const [open, setOpen] =  useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const state = useSelector(state=>state?.reducer.User.UserData)
    return (
        <div>
           <div className='flex justify-between items-center'>
               <div >
                <h2 className='capitalize xl:text-xl sm:text-lg xs:text-base'>stock product list</h2>
                <p className='md:text-base text-sm my-1'>Lorem ipsum dolor sit amet consectetur. Risus in nulla faucibus risus.</p>
               </div>
               <div>
              { state?.email ? <button className='flex items-center bg-blue-600 px-3 py-2 rounded-lg text-sm text-white font-bold'  onClick={handleOpen}>  
                    <Image alt='loading...' src='/add.svg' className='mr-3' width={30} height={30}/>
                   <span> Add Product</span>
                </button>: <Link href="/userForm/Login" className='flex items-center bg-blue-600 px-3 py-2 rounded-lg text-sm text-white font-bold'  onClick={handleOpen}>  
                    <Image alt='loading...' src='/add.svg' className='mr-3' width={30} height={30}/>
                   <span> Add Product</span>
                </Link>
                }
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