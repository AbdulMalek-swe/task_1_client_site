import Image from "next/image";

 
const DashboardHeader = () => {
    const data = [
        {
            value:"sales",
            rate:245,
            icon:"/Icon.svg"
        },
        {
            value:"customer",
            rate:12.5,
            icon:"/Icon-1.svg"
        },
        {
            value:"product",
            rate:1.45,
            icon:"/Icon-2.svg"
        },
        {
            value:"revenue",
            rate:88,
            icon:"/Icon-3.svg"
        },
    ]
    return (
        <div className="grid md:grid-cols-3 grid-cols-1 lg:gap-6 gap-4">
            <div className="
            shadow-md">
                <div className="flex justify-between items-end   p-5  ">
                    <div>
                        <h2 className="text-lg md:text-xl">Congratulations Howard 🎉</h2>
                        <p className="xl:text-lg text-sm  ">Best seller of the month</p>
                        <h1 className="lg:text-2xl text-lg my-3 text-blue-600">$42.8k</h1>
                        <button className="text-sm bg-blue-600 px-2 py-1 text-white rounded-md" >view sales</button>
                    </div>
                    <div>
                        <Image src="/3d-cup 1.png" width={50} height={100}/>
                    </div>
                </div>
            </div>
            <div className="md:col-span-2 shadow-md">
            <div className="flex justify-between    p-5 ">
                   <div>
                        <h2 className="text-lg md:text-xl"> Transactions </h2>
                        <p className="xl:text-lg text-sm  ">Total 48.5% Growth 😎 this month</p>
                        
                    </div>
                    <div>
                        <Image src="/MoreVert.svg" width={40} height={100}/>
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-4">
               { data.map(({icon,value,rate},index)=><div className="grid grid-cols-2 items-center p-5 gap-x-3 ">
                  <div>
                 <Image src={icon} width={50} height={100}  className={`${index === 0 ? 'bg-blue-600' : ''} ${index === 1 ? 'bg-lime-600' : ''} ${index === 2 ? 'bg-orange-600' : ''} ${index === 3 ? 'bg-sky-600' : ''}`} />
                    </div>
                   <div className="px-">
                        <h2 className="text-xs lg:text-sm"> {value} </h2>
                        <p className="lg:text-xl  text-base">${rate}k</p>
                    </div>
                </div>)}
                </div>
            </div>
        </div>
    );
};

export default DashboardHeader;