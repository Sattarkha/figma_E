import React from 'react'
import Image from 'next/image'

const Sale = () => {
  return (
    <main>
    <div className='w-full h-[300px] flex justify-center items-center mt-10 mb-10'>
        <div className='w-[80%] h-full'>
            <div>
                <span className='border-l-8 border-red-500 text-red-500 mb-5 px-2'>Todays</span>
                <div className='w-[600px] h-[50px] flex justify-between items-center '>
                <h2 className='text-4xl font-bold mt-5'>Fresh Sales</h2>
                <div className='flex items-center gap-2'>
                <div className='w-[46px] h-[50px] flex flex-col '>
                    <p className='font-medium text-[12px] leading-3'>Days</p>
                    <h1 className='font-bold text-[32px] leading-[30px] py-2'>03</h1>
                </div>
                <p className='text-[#E07575] mt-3 font-extrabold '>:</p>
                <div className='w-[46px] h-[50px] flex flex-col'>
                    <p className='font-medium text-[12px] leading-3'>Hours</p>
                    <h1 className='font-bold text-[32px] leading-[30px] py-2'>23</h1>
                </div>
                <p className='text-[#E07575] mt-3 font-extrabold '>:</p>
                <div className='w-[46px] h-[50px] flex flex-col'>
                    <p className='font-medium text-[12px] leading-3'>Minutes</p>
                    <h1 className='font-bold text-[32px] leading-[30px] py-2'>19</h1>
                </div>
                <p className='text-[#E07575] mt-3 font-extrabold '>:</p>
                <div className='w-[46px] h-[50px] flex flex-col'>
                    <p className='font-medium text-[12px] leading-3'>Seconds</p>
                    <h1 className='font-bold text-[32px] leading-[30px] py-2'>56</h1>
                </div>
                </div>
                </div>

            </div>
            <div className='flex justify-between mt-7'>
                <div>
                <div className='w-[250px] h-[170px] bg-[#F5F5F5] flex justify-center items-center'>
                    <Image src={"/Frame 570.png"} alt='gaming' width={150} height={100}/>
                </div>
                <div className='flex flex-col'>
                    <span className='font-bold pt-3'>Cart With Flat Discount </span>
                    <span className='font-bold'>$120</span>
                </div>
                </div>
                <div>
                <div className='w-[250px] h-[170px] bg-[#F5F5F5] flex justify-center items-center'>
                    <Image src={"/Frame 570 (1).png"} alt='gaming' width={150} height={100}/>
                </div>
                <div className='flex flex-col'>
                    <span className='font-bold pt-3'>AK-900 Wired Keyboard </span>
                    <span className='font-bold'>$960</span>
                </div>
                </div>
                <div>
                <div className='w-[250px] h-[170px] bg-[#F5F5F5]  flex justify-center items-center'>
                    <Image src={"/Frame 570 (2).png"} alt='gaming' width={150} height={100}/>
                </div>
                <div className='flex flex-col'>
                    <span className='font-bold pt-3'>IPS LCD Gaming Monitor </span>
                    <span className='font-bold'>$370</span>
                </div>
                </div>
                <div>
                <div className='w-[250px] h-[170px] bg-[#F5F5F5]  flex justify-center items-center'>
                    <Image src={"/Frame 570 (3).png"} alt='gaming' width={150} height={100}/>
                </div>
                <div className='flex flex-col'>
                    <span className='font-bold pt-3'>S-Series Comfort Chair </span>
                    <span className='font-bold'>$375</span>
                </div>
                </div>
            </div>
        </div>
      
    </div>
    <button className='py-2 px-3 bg-red-500 ml-[600px] rounded-md text-white'>View All Products</button>
         
    </main>
  )
}

export default Sale