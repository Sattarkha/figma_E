import React from 'react'
import Image from 'next/image'

const Product = () => {
  return (
    <main>
    <div className='w-full h-[300px] flex justify-center items-center mt-10 mb-20'>
        <div className='w-[80%] h-full'>
            <div>
                <span className='border-l-8 border-red-500 text-red-500 mb-5 px-2'>This Month</span>
                <div className='flex justify-between'>
                <h2 className='text-4xl font-bold mt-5'>Best Selling Products</h2>
                <button className='py-3 px-4 bg-red-500 ml-[300px] rounded-md text-white'>View All</button>
                </div>
            </div>
            <div className='flex justify-between mt-7'>
                <div>
                <div className='w-[250px] h-[170px] bg-[#F5F5F5] flex justify-center items-center'>
                    <Image src={"/Cart.png"} alt='gaming' width={150} height={100}/>
                </div>
                <div className='flex flex-col'>
                    <span className='font-bold pt-3'>Cart With Flat Discount </span>
                    <span className='font-bold'>$120</span>
                </div>
                </div>
                <div>
                <div className='w-[250px] h-[170px] bg-[#F5F5F5] flex justify-center items-center'>
                    <Image src={"/Cart (1).png"} alt='gaming' width={150} height={100}/>
                </div>
                <div className='flex flex-col'>
                    <span className='font-bold pt-3'>AK-900 Wired Keyboard </span>
                    <span className='font-bold'>$960</span>
                </div>
                </div>
                <div>
                <div className='w-[250px] h-[170px] bg-[#F5F5F5]  flex justify-center items-center'>
                    <Image src={"/Cart (2).png"} alt='gaming' width={150} height={100}/>
                </div>
                <div className='flex flex-col'>
                    <span className='font-bold pt-3'>IPS LCD Gaming Monitor </span>
                    <span className='font-bold'>$370</span>
                </div>
                </div>
                <div>
                <div className='w-[250px] h-[170px] bg-[#F5F5F5]  flex justify-center items-center'>
                    <Image src={"/Cart (3).png"} alt='gaming' width={150} height={100}/>
                </div>
                <div className='flex flex-col'>
                    <span className='font-bold pt-3'>S-Series Comfort Chair </span>
                    <span className='font-bold'>$375</span>
                </div>
                </div>
            </div>
        </div>
       
      
    </div>
    <div className='mt-[200px] ml-[130px]'>
            <Image src={"/Frame 600.png"} width={1080} height={500} alt='image'/>
         </div>
    </main>
    
  )
}

export default Product