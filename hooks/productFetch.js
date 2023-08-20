import store from "@/rtk/store";
import axios from "../utils/axios";
import { toast } from "react-toastify";
import { addProductActions } from "@/rtk/productSlice/productSlice";
export async function getProduct(){
    try {
       const response = await axios.get("/product")
       const {status,data} = response;
     
       if(status===200){
          store.dispatch(addProductActions.addProduct(data?.result))
       }
    } catch (error) {
       toast.error("data not fetching")
    }
  }
 

export async function getSingleProduct(Id){
    try {
        const res= await axios.get(`/product/${Id}`)
        const {data,status} = res;
        if(status===200){
            store.dispatch(addProductActions.addSingleProduct(data?.result))
        }
    } catch (error) {
        toast.error(error.response.data.error)
    }
}   