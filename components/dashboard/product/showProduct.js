 
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Image from 'next/image';
 
const rows = [
 {
    name:"abdul karim",
    product_added:"12-1212",
    purchase:"1216ft",
    stock:'availabel',
    selling:"wow"
 },
 {
    name:"abdul karim",
    product_added:"12-1212",
    purchase:"1216ft",
    stock:'availabel',
    selling:"wow"
 },
 {
    name:"abdul karim",
    product_added:"12-1212",
    purchase:"1216ft",
    stock:'availabel',
    selling:"wow"
 }
 
];
const ShowProduct = () => {
     
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
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left" className='text-gray-500 capitalize py-3'>
                {row.name}
              </TableCell>
              <TableCell align="left" className='text-gray-500 capitalize py-3'>{row.product_added}</TableCell>
              <TableCell align="left" className='text-gray-500 capitalize py-3'>{row.stock}</TableCell>
              <TableCell align="left" className='text-gray-500 capitalize py-3'>{row.purchase}</TableCell>
              <TableCell align="left" className='text-gray-500 capitalize py-3'>{row.selling}</TableCell>
              <TableCell align="left" className='text-gray-500 capitalize py-3'> 
                <button className='mr-5'>
                    <Image src='/trash-2.svg' width={20} height={100}/>
                </button>
                <button>
                    <Image src='/edit-2.svg' width={20} height={100}/>
                </button>
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