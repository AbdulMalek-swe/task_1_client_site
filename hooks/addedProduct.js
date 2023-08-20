import axios from "../utils/axios";
import { toast } from "react-toastify";
const { getProduct } = require("./productFetch");
export const ProductAddedapi = async (value)=>{
    try {
        const res = await axios.post(`/product`, value)
        const {status,data} = res;
        if(status===200){
            toast.success("product added successfully")
            getProduct()
        }
      } catch (error) {
          toast.error(error?.response?.data?.error)
      }
}