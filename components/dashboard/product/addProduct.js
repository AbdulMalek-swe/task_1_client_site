// import { Modal, TextField } from "@mui/material";
// import CloseIcon from '@mui/icons-material/Close';
// import { ErrorMessage, Field, Formik } from "formik";
// import dynamic from 'next/dynamic'; // Import dynamic from next/dynamic
// import { useEffect, useRef, useState } from "react";

import { useState } from 'react';
 import { DropzoneArea } from 'react-mui-dropzone';
// // import CloudUploadIcon from '@mui/icons-material/CloudUpload';

// const AddProduct = ({ open, handleClose }) => {
//     const [uploadedFiles, setUploadedFiles] = useState([]);
//     const handleFileChange = (files) => {
//       setUploadedFiles(files);
//     };
//     return (
//         <div>
 
//             <Modal
//                 open={open}
//                 onClose={handleClose}
//                 aria-labelledby="modal-modal-title"
//                 aria-describedby="modal-modal-description"
//             >
//                 <div className="fixed inset-0 flex items-center justify-center z-50  ">  
//                     <div className="bg-white p-6 rounded-lg relative lg:w-1/3 sm:w-1/2 w-11/12 font-arial ">
//                         <div className=" flex justify-between items-center mb-6">
//                             <div className="text-left">
//                                 <h1 className=" font-semibold text-2xl md:text-xl  font-sans text-gray-900 leading-10 capitalize">add product </h1>
//                             </div>
//                             <button
//                                 onClick={handleClose}
//                             >
//                                 <CloseIcon />
//                             </button>
//                         </div>
//                         <div>
//       <h2>Drag and Drop Files Here</h2>
//       <DropzoneArea
//           acceptedFiles={['image/*', 'application/pdf']}
//           filesLimit={5}
//           // Icon={CloudUploadIcon}
//           onChange={handleFileChange}
//           showFileNames
//           className=""
//         />
//       <ul>
//         {uploadedFiles.map((file, index) => (
//           <li key={index}>{file.name}</li>
//         ))}
//       </ul>
//     </div>
                      
//                         <Formik
//                             enableReinitialize
//                             initialValues={{
//                                  title: "",
//                                  description:"",
//                                  stock:"",
//                                  productAddedDate:"" ,
//                                  purchasePrice:1||null,
//                                  sellingPrice:1||null

//                             }}
//                             validate={(values) => {

//                                 const error = {};
                               
//                                 return error;
//                             }}
//                             onSubmit={(values, { resetForm }) => {
//                                 Registerapi(values);
//                             }}
//                         >
//                             {({
//                                 values,
//                                 errors,
//                                 touched,
//                                 handleChange,
//                                 handleBlur,
//                                 handleSubmit,
//                                 isSubmitting,

//                             }) => (
//                                 <form onSubmit={handleSubmit} className='capitalize space-y-2'>
//                                     {/* Product Title fied  */}
//                                     <div className="mb-4  ">
//                                         <label htmlFor=" Product Title" className="block lg:text-base text-sm font-normal text-gray-900 leading-4 capitalize mb-1 mt-5">
//                                             name
                                          
//                                         </label>
//                                         <TextField
//                                             size="small"
//                                             type="text"
//                                             name="title"
//                                             placeholder="Enter your product title"
//                                             onChange={handleChange}
//                                             onBlur={handleBlur}
//                                             id="outlined-multiline-flexible"
//                                             fullWidth

//                                         />
//                                         <ErrorMessage name="title" component="div" className="text-red-500 text-sm mt-1" />
//                                     </div>
//                                     <div className="mb-4  ">
//                                         <label htmlFor=" Product Title" className="block lg:text-base text-sm font-normal text-gray-900 leading-4 capitalize mb-1 mt-5">
//                                                Product description
                                          
//                                         </label>
//                                         <TextField
//                                             size="small"
//                                             type="text"
//                                             name="description"
//                                             placeholder="Enter your product description"
//                                             onChange={handleChange}
//                                             onBlur={handleBlur}
//                                             id="outlined-multiline-flexible"
//                                             fullWidth
//                                            multiline
//                                            rows={4}
                                           
//                                         />
//                                         <ErrorMessage name="description" component="div" className="text-red-500 text-sm mt-1" />
//                                     </div>
//                                    {/* dropzone area  */}

                               
                                   
//                                     <div className="mb-8">
//                                         <label htmlFor=" Product Title" className="block lg:text-base text-sm font-normal text-gray-900 leading-4 capitalize mb-1 mt-5">
//                                         product Added Date
//                                         </label>
//                                         <TextField
//                                             size="small"
//                                             type="date"
//                                             name="productAddedDate"
//                                             placeholder="Enter your product date"
//                                             onChange={handleChange}
//                                             onBlur={handleBlur}
//                                             id="outlined-multiline-flexible"
//                                             fullWidth

//                                         />
//                                         <ErrorMessage name="productAddedDate" component="div" className="text-red-500 text-sm mt-1" />
//                                     </div>
//                                     <div className="mb-8">
//                                         <label htmlFor=" Product Title" className="block lg:text-base text-sm font-normal text-gray-900 leading-4 capitalize mb-1 mt-5">
//                                        stock
//                                         </label>
//                                         <TextField
//                                             size="small"
//                                             type="number"
//                                             name="productAddedDate"
//                                             placeholder="Enter your product stock"
//                                             onChange={handleChange}
//                                             onBlur={handleBlur}
//                                             id="outlined-multiline-flexible"
//                                             fullWidth

//                                         />
//                                         <ErrorMessage name="stock" component="div" className="text-red-500 text-sm mt-1" />
//                                     </div>
//                                     <div  >
//                                         <label htmlFor=" Product Title" className="block lg:text-base text-sm font-normal text-gray-900 leading-4 capitalize mt-5">
//                                            purchase price
                                           
//                                         </label>
//                                         <TextField
//                                             size="small"
//                                             type="number"
//                                             name="title"
//                                             placeholder="Enter your purchase"
//                                             onChange={handleChange}
//                                             onBlur={handleBlur}
//                                             id="outlined-multiline-flexible"
//                                             fullWidth

//                                         />
//                                         <ErrorMessage name="purchasePrice" component="div" className="text-red-500 text-sm mt-1" />
//                                     </div>
//                                     <div >
//                                         <label htmlFor=" Product Title" className="block lg:text-base text-sm font-normal text-gray-900 leading-4 capitalize mb-1 mt-5">
//                                             selling price
                                            
//                                         </label>
//                                         <TextField
//                                             size="small"
//                                             type="number"
//                                             name="sellingPrice"
//                                             placeholder="Enter your selling price"
//                                             onChange={handleChange}
//                                             onBlur={handleBlur}
//                                             id="outlined-multiline-flexible"
//                                             fullWidth

//                                         />
//                                         <ErrorMessage name="sellingPrice" component="div" className="text-red-500 text-sm mt-1" />
//                                     </div>
//                                    <div className="flex gap-4 py-5">
//                                    <button  className=" text-black py-2 px-4 rounded-md   w-full  font-arial font-bold xl:text-lg text-base capitalize hover:bg-blue-600 "  onClick={handleClose}>
//                                      cancel
//                                     </button>
//                                     <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-black8 w-full  font-arial font-bold xl:text-lg text-base capitalize">
//                                        save
//                                     </button>
//                                    </div>
//                                 </form>
//                             )}
//                         </Formik>
//                     </div>
//                 </div>
//             </Modal>
//         </div>
//     );
// };

// export default AddProduct;

 
const AddProduct = () => {
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const handleFileChange = (files) => {
      setUploadedFiles(files);
    };
    return (
        <div>
            <DropzoneArea/>
        </div>
    );
};

export default AddProduct;