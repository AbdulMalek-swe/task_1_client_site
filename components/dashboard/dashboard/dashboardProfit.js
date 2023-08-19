import Image from 'next/image';
import { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LabelList } from 'recharts';

const data = [
  {
    name: '2015',
    uv: 400,


  },
  {
    name: '2016',

    pv: 139,
    amt: 221,
  },
  {
    name: '2016',
    uv: 200,
    pv: 980,
    amt: 229,
  },
  {
    name: '2017',
    uv: 278,
    amt: 200,
  },
  {
    name: '2018',
    uv: 189,
    pv: 480,
    amt: 218,
  },
  {
    name: '2019',
    uv: 239,
    pv: 380,
    amt: 250,
  },
  {
    name: '2020',
    uv: 349,
    pv: 430,
    amt: 210,
  },
];
const data1 = [
  {
    value: "total profit",
    rate: 245,
    icon: "/Icon.svg"
  },
  {
    value: "total income",
    rate: 12.5,
    icon: "/Icon-1.svg"
  },
  {
    value: "total expense",
    rate: 1.45,
    icon: "/Icon-2.svg"
  },

]

const data2 = [
  {

    uv: 200,

  },


];

const DashboardProfit = () => {
  return (
    <div className='mt-6'>
      <div className='grid lg:grid-cols-3 grid-cols-1 lg:grid-6 grid-4 gap-4 '>
        <div className='grid md:grid-cols-3 grid-cols-1 col-span-2 shadow-md'>
          <div className='md:col-span-2  '>
            <h2 className="text-lg md:text-xl text-black ml-4 mb-3"> Total Profit</h2>
            <ResponsiveContainer width="100%" height="100%" aspect={2 / 5} maxHeight={400}>
              <BarChart
                barGap={2}
                barCategoryGap={3}
                data={data}
                margin={{
                  top: 20,
                  right: 30,
                  left: 0,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="amt" stackId="a" fill="#1570EF" barSize={10} radius={12} />
                <Bar dataKey="uv" stackId="a" fill="#56CA00" barSize={10} radius={12} />
                <Bar dataKey="pv" stackId="a" fill="#8A8D93" barSize={10} radius={12} style={{ paddingTop: "122px" }} > </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div >
            <div className="flex justify-between    py-5 ">
              <div>
                <h2 className="text-lg md:text-xl"> $482.85k </h2>
                <p className=" text-sm  ">Last month balance $234.40k</p>
              </div>
              <div>
                <Image src="/MoreVert.svg" width={40} height={100} alt='loading'/>
              </div>
            </div>
            <div className=" ">
              {data1.map(({ icon, value, rate }, index) => <div className="flex lg:py-5 py-3">
                <div className='mr-3'>
                  <Image alt='loading' src={icon} width={50} height={100} className={`${index === 0 ? 'bg-blue-600' : ''} ${index === 1 ? 'bg-lime-600' : ''} ${index === 2 ? 'bg-orange-600' : ''} ${index === 3 ? 'bg-sky-600' : ''}`} />
                </div>
                <div className="px-">
                  <h2 className="lg:text-xl  text-base">${rate}k</h2>
                  <p className="text-xs lg:text-sm"> {value} </p>
                </div>
              </div>)}
              <div className='bg-blue-700 rounded-md text-center text-white px-4 py-3 uppercase'>View port</div>
            </div>
          </div>
        </div>
        <div className='shadow-md pb-5'>
          <div className="flex justify-between py-5  ">
            <div>
              <h2 className="text-lg md:text-xl capitalize"> Weekly overview</h2>

            </div>
            <div>
              <Image src="/MoreVert.svg" width={40} height={100} alt='loading...' />
            </div>
          </div>
          <ResponsiveContainer width="100%" height="100%" aspect={2 / 5} maxHeight={250}>
            <BarChart
              barGap={2}
              barCategoryGap={3}
              data={data2}
              margin={{
                top: 20,
                right: 30,
                left: 0,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="uv" stackId="a" fill="#444CE7" barSize={10} radius={12} />

            </BarChart>
          </ResponsiveContainer>
          <div className='flex items-center  gap-4 mb-5'>
            <h1 className='text-2xl text-black'>45%</h1>
            <p className='text-sm text-gray-500'>Your sales performance is 45% 😎 better compared to last month</p>
          </div>
          <div className='bg-blue-700 rounded-md text-center text-white px-4 py-3 uppercase'>details</div>
        </div>
      </div>

    </div>

  );
};

export default DashboardProfit;