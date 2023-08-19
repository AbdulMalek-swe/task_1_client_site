import   { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 400,
   
   
  },
  {
    name: 'Page B',
   
    pv: 139,
    amt: 221,
  },
  {
    name: 'Page C',
    uv: 200,
    pv: 980,
    amt: 229,
  },
  {
    name: 'Page D',
    uv: 278,
   
    amt: 200,
  },
  {
    name: 'Page E',
    uv: 189,
    pv: 480,
    amt: 218,
  },
  {
    name: 'Page F',
    uv: 239,
    pv: 380,
    amt: 250,
  },
  {
    name: 'Page G',
    uv: 349,
    pv: 430,
    amt: 210,
  },
];
const DashboardProfit = () => {
    return (
        <div>
           <div className='grid md:grid-cols-3 grid-cols-1 lg:grid-6 grid-4 '>
              <div className='grid md:grid-cols-3 grid-cols-1 col-span-2'>
              <div className='md:col-span-2'>
              <ResponsiveContainer width="100%" height="100%" aspect={2/3}>
        <BarChart
          width={200}
          height={100}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="amt" stackId="a" fill="#1570EF" barSize={10}  />
          <Bar dataKey="uv" stackId="a" fill="#56CA00" barSize={10}/>
          <Bar dataKey="pv" stackId="a" fill="#8A8D93" barSize={10} />
        </BarChart>
      </ResponsiveContainer>
              </div>
              <div>

              </div>
              </div>
              <div></div>
           </div>
        </div>
    );
};

export default DashboardProfit;