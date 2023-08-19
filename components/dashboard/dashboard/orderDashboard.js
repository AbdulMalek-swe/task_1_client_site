
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Image from 'next/image';
import StarIcon from '@mui/icons-material/Star';
const DashboardOrder = () => {

    const rows = [
        {
            name: "abdul karim",
            price: "12-1212",
            tracking: "1216ft",
            total_order: 'availabel',
            total_amount: "wow"
        },
        {
            name: "abdul karim",
            price: "12-1212",
            tracking: "1216ft",
            total_order: 'availabel',
            total_amount: "wow"
        },
        {
            name: "abdul karim",
            price: "12-1212",
            tracking: "1216ft",
            total_order: 'availabel',
            total_amount: "wow"
        }

    ];
    return (
        <div className='mt-6'>
            <div className='grid md:grid-cols-3 grid-cols-1 md:gap-6 gap-4'>
                <div className='md:col-span-2'>
                    <div className="flex justify-between    py-5 ">
                        <div>
                            <h2 className="text-lg md:text-xl">Recent Orders </h2>

                        </div>
                        <div>
                            <Image src="/MoreVert.svg" width={40} height={100} alt='laodign ...' />
                        </div>
                    </div>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                            <TableHead>
                                <TableRow >
                                    <TableCell className='text-gray-500 capitalize'> tracking no   </TableCell>
                                    <TableCell align="left" className='text-gray-500  capitalize'>name <ArrowDownwardIcon /> </TableCell>
                                    <TableCell align="left" className='text-gray-500 capitalize'>price </TableCell>
                                    <TableCell align="left" className='text-gray-500 capitalize'>total order </TableCell>
                                    <TableCell align="left" className='text-gray-500 capitalize'>total amount <ArrowDownwardIcon /> </TableCell>

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
                                        <TableCell align="left" className='text-gray-500 capitalize py-3'>{row.price}</TableCell>
                                        <TableCell align="left" className='text-gray-500 capitalize py-3'>{row.total_order}</TableCell>
                                        <TableCell align="left" className='text-gray-500 capitalize py-3'>{row.tracking}</TableCell>
                                        <TableCell align="left" className='text-gray-500 capitalize py-3'>{row.total_amount}</TableCell>

                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
                <div>
                    <div className="flex justify-between    py-5 ">
                        <div>
                            <h2 className="text-lg md:text-xl">Top selling Products</h2>
                        </div>
                        <div>
                            <Image alt='loading..' src="/MoreVert.svg" width={40} height={100} />
                        </div>
                    </div>
                   { [1,3].map((index)=><div className="flex items-center lg:py-5 py-3">
                        <div className='mr-3'>
                            <Image alt='loading...' src="/3d-cup 1.png" width={50} height={100} className="object contain" />
                        </div>
                        <div className="px-">
                            <h2 className="lg:text-lg  text-base">MacBook Pro M2</h2>
                            {Array.from({ length: 4 }, (_, index) => (
                                <StarIcon key={index} className='text-orange-400' />
                            ))}
                            <p className="text-base"> $900.00</p>
                        </div>
                    </div>)}
                    <div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardOrder;