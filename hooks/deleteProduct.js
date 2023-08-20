import { toast } from "react-toastify";
import { getProduct } from "./productFetch";
import axios from "../utils/axios";
export const deleteProduct = async (id)=>{
    try {
      const result = await axios.delete(`/product/${id}`);
      toast.success("successfully delete product")
      getProduct()
    } catch (error) {
       toast.error(error?.response?.data?.error)
    }
  }