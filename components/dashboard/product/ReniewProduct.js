import { TextField } from "@mui/material";
import axios from "../../../utils/axios";
import { ErrorMessage, Formik } from "formik";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getSingleProduct } from "@/hooks/productFetch";
import { updateProduct } from "@/hooks/updateProduct";
 
 const ReniewProduct = () => {
    const router = useRouter();
    const {Id} = router.query;
    useEffect(()=>{
        getSingleProduct(Id)
    },[Id])
    const singleProduct = useSelector(state=>state.reducer.product.singleProduct)
    return ( 
        <div>
            <div className=" ">   
                    <div className=" ">
                        <div className=" flex justify-between items-center mb-3">
                            <div className="text-left">
                                <h1 className=" font-semibold text-2xl md:text-xl  font-sans text-gray-900 leading-10 capitalize">product update</h1>
                            </div>
                            
                        </div>
                        <Formik
                            enableReinitialize
                            initialValues={{
                                 title: singleProduct?.title || "sdfsa" ,
                                 description:singleProduct?.description ||"",
                                 stock:singleProduct?.stock ||null,
                                 purchasePrice:singleProduct?.purchasePrice||null,
                                 sellingPrice:singleProduct?.sellingPrice||null

                            }}
                            validate={(values) => {

                                const error = {};
                               
                                return error;
                            }}
                            onSubmit={(values, { resetForm }) => {
                                updateProduct(Id,values);
                            }}
                        >
                            {({
                                values,
                                errors,
                                touched,
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                isSubmitting,
                            }) => (
                                <form onSubmit={handleSubmit} className='capitalize space-y-2  '>
                                    {/* Product Title fied  */}
                                    <div className="mb-4  ">
                                        <label htmlFor=" Product Title" className="block lg:text-base text-sm font-normal text-gray-900 leading-4 capitalize mb-1 mt-5">
                                            name
                                          
                                        </label>
                                        <TextField
                                            size="small"
                                            type="text"
                                            name="title"
                                            value={values.title}
                                            placeholder="Enter your product title"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            id="outlined-multiline-flexible"
                                            fullWidth

                                        />
                                        <ErrorMessage name="title" component="div" className="text-red-500 text-sm mt-1" />
                                    </div>
                                    <div className="mb-4  ">
                                        <label htmlFor=" Product Title" className="block lg:text-base text-sm font-normal text-gray-900 leading-4 capitalize mb-1 mt-5">
                                               Product description
                                          
                                        </label>
                                        <TextField
                                            size="small"
                                            type="text"
                                            name="description"
                                            value={values.description}
                                            placeholder="Enter your product description"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            id="outlined-multiline-flexible"
                                            fullWidth
                                           multiline
                                           rows={2}
                                           
                                        />
                                        <ErrorMessage name="description" component="div" className="text-red-500 text-sm mt-1" />
                                    </div>
                            
                                    <div className="mb-8">
                                        <label htmlFor=" Product Title" className="block lg:text-base text-sm font-normal text-gray-900 leading-4 capitalize mb-1 mt-5">
                                       stock
                                        </label>
                                        <TextField
                                            size="small"
                                            type="number"
                                            name="stock"
                                            value={values.stock}
                                            placeholder="Enter your product stock"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            id="outlined-multiline-flexible"
                                            fullWidth

                                        />
                                        <ErrorMessage name="stock" component="div" className="text-red-500 text-sm mt-1" />
                                    </div>
                                    <div  >
                                        <label htmlFor=" Product Title" className="block lg:text-base text-sm font-normal text-gray-900 leading-4 capitalize mt-5">
                                           purchase price
                                           
                                        </label>
                                        <TextField
                                            size="small"
                                            type="number"
                                            name="purchasePrice"
                                            value={values.purchasePrice}
                                            placeholder="Enter your purchase"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            id="outlined-multiline-flexible"
                                            fullWidth

                                        />
                                        <ErrorMessage name="purchasePrice" component="div" className="text-red-500 text-sm mt-1" />
                                    </div>
                                    <div >
                                        <label htmlFor=" Product Title" className="block lg:text-base text-sm font-normal text-gray-900 leading-4 capitalize mb-1 mt-5">
                                            selling price
                                            
                                        </label>
                                        <TextField
                                            size="small"
                                            type="number"
                                            name="sellingPrice"
                                            value={values.sellingPrice}
                                            placeholder="Enter your selling price"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            id="outlined-multiline-flexible"
                                            fullWidth

                                        />
                                        <ErrorMessage name="sellingPrice" component="div" className="text-red-500 text-sm mt-1" />
                                    </div>
                                   <div className="flex gap-4 py-5">
                                   
                                    <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-black8 w-full  font-arial font-bold xl:text-lg text-base capitalize">
                                       save
                                    </button>
                                   </div>
                                </form>
                            )}
                        </Formik>
                    </div>
                </div>
        </div>
    );
 };
 
 export default ReniewProduct;