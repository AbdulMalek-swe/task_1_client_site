 
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import axios from '../../../utils/axios';
import { toast } from 'react-toastify';
import Link from 'next/link';
import Moment from 'react-moment';
import { useCookies } from 'react-cookie';
import { getProduct } from '@/hooks/productFetch';
import { useSelector } from 'react-redux';
import { deleteProduct } from '@/hooks/deleteProduct';
const ShowProduct = () => {
  const [cookie] = useCookies(["token"])
  const token = cookie["token"];
 
     const product = useSelector(state=>state.reducer.product.products )
    
     useEffect(()=>{
       getProduct();
     },[])
  
  function filterDate(dateString) {
    const today = new Date();
    const productAddedDate = new Date(dateString);
    
    if (productAddedDate.toDateString() === today.toDateString()) {
      return <>
      Today
     <Moment format=" HH:mm" >{dateString}</Moment>
      </>;  
    } else {
      return <Moment format="MMM D, YYYY">{dateString}</Moment>;
    }
  }
  function leftProduct(stock, sellCount) {
    let value = Number(stock)-Number(sellCount);
    if (value<10) {
      return <span className='text-red-700'>{value}Left</span>;
    } else if (value>=0&&value<=20) {
      return <span className='text-purple-700'>{value}Left</span>;
    } else {
      return <span className='text-blue-700'>{value}Left</span>;
    }
  }
    return (
        <div>
       <TableContainer component={Paper}> 
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow >
            <TableCell  className='text-gray-500 capitalize'> Name  <ArrowDownwardIcon/>   </TableCell>
            <TableCell align="left"  className='text-gray-500  capitalize'>Product added <ArrowDownwardIcon/> </TableCell>
            <TableCell align="left"  className='text-gray-500 capitalize'>stock <ArrowDownwardIcon/> </TableCell>
            <TableCell align="left"  className='text-gray-500 capitalize'>purchase </TableCell>
            <TableCell align="left"  className='text-gray-500 capitalize'>selling  </TableCell>
            <TableCell align="left"  className='text-gray-500 capitalize'>  </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {product?.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left" className='text-gray-500 capitalize py-3'>
                {row.title}
              </TableCell>
              
<TableCell align="left" className='text-gray-500 capitalize py-3'>
  {/* <Moment format="MMM D, YYYY">{row.productAddedDate}</Moment> */}

   {filterDate(row?.productAddedDate)}
  
  </TableCell>
              <TableCell align="left" className='text-gray-500 capitalize py-3 '>
                <span> {row.stock}    </span>
                 
                 <span className='ml-8'>
                   
                   {leftProduct(row?.stock, row?.sellCount)}
                    </span> 
                {/* {sellCount(row?.stock,row?.sellingCount)} */}
                </TableCell>
              <TableCell align="left" className='text-gray-500 capitalize py-3'>{row.purchasePrice}</TableCell>
              <TableCell align="left" className='text-gray-500 capitalize py-3'>{row.sellingPrice}</TableCell>
              <TableCell align="left" className='text-gray-500 capitalize py-3 flex justify-around'> 
              {
                token?<button className='mr-5' onClick={()=>deleteProduct(row._id)}>
                <Image src='/trash-2.svg' width={20} height={100} alt='loading...'/>
                 </button>:<Link href={`/userForm/Login`} className='mr-5'>
                 <Image src='/trash-2.svg' width={20} height={100} alt='loading...'/>
                </Link>
              }
                {
                  token ? <Link href={`/product/${row._id}`}>
                  <Image src='/edit-2.svg' width={20} height={100} alt='loading...'/>
                  </Link>: <Link href="/userForm/Login">
                    <Image src='/edit-2.svg' width={20} height={100} alt='loading...'/>
                </Link>
                }
                
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table> 
    </TableContainer>
        </div>
    );
};

export default ShowProduct;