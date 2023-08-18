import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
 
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { PaginationItem } from '@mui/material';
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10; // Set your total number of pages here

  const updateCurrentPage = (newPage) => {
    if (newPage === 'prev') {
      setCurrentPage(Math.max(currentPage - 1, 1));
    } else if (newPage === 'next') {
      setCurrentPage(Math.min(currentPage + 1, totalPages));
    } else {
      setCurrentPage(newPage);
    }
  };
  const changePage = (newPage) => {
    updateCurrentPage(newPage)
  };
  return (
    <>
      <Head>
        <title>task 1</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <div className="flex items-center justify-center mt-8">
      
    </div>
    </>
  )
}
