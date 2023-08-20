import axios from "../utils/axios";
import { toast } from "react-toastify";
import { getProduct, getSingleProduct } from "./productFetch";
export const updateProduct = async (Id,values)=>{
    try {
        const res= await axios.patch(`/product/${Id}`,values)
       const {data,status} = res;
       if(status===200){
        toast.success("successfully update data")
        getProduct()
        getSingleProduct()
       }
     } catch (error) {
         toast.error(error.response.data.error)
    }
}