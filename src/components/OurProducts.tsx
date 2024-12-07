import React from 'react'
import Image from 'next/image'

const OurProducts = () => {
  return (
    <main>
    <div className='w-full h-[300px] flex justify-center items-center mt-10 mb-10'>
        <div className='w-[80%] h-full'>
            <div>
                <span className='border-l-8 border-red-500 text-red-500 mb-5 px-2'>Our Products</span>
                <h2 className='text-4xl font-bold mt-5'>Explore Our Products</h2>

                

            </div>
            <div className='flex justify-between mt-7'>
                <div>
                <div className='w-[250px] h-[190px] bg-[#F5F5F5] flex justify-center items-center'>
                    <Image src={"/Cart - Copy.png"} alt='gaming' width={150} height={100}/>
                </div>
              
                </div>
                <div>
                <div className='w-[250px] h-[190px] bg-[#F5F5F5] flex justify-center items-center'>
                    <Image src={"/Cam.png"} alt='gaming' width={150} height={100}/>
                </div>
                
                </div>
                <div>
                <div className='w-[250px] h-[190px] bg-[#F5F5F5]  flex justify-center items-center'>
                    <Image src={"/Cart (4).png"} alt='gaming' width={150} height={100}/>
                </div>
              
                </div>
                <div>
                <div className='w-[250px] h-[190px] bg-[#F5F5F5]  flex justify-center items-center'>
                    <Image src={"/Cart With Flat Discount/Cart With Flat Discount/Cart With Flat Discount/Cart With Flat Discount/Cart/Property 25.png"} alt='gaming' width={150} height={100}/>
                </div>
               
                </div>
            </div>
        </div>
      
    </div>

    <div className='w-full h-[300px] flex justify-center items-center mt-10 mb-10'>
        <div className='w-[80%] h-full'>
       
            <div className='flex justify-between mt-7'>
                <div>
                <div className='w-[250px] h-[195px] bg-[#F5F5F5] flex justify-center items-center'>
                    <Image src={"/Cart (1) - Copy.png"} alt='gaming' width={150} height={100}/>
                </div>
              
                </div>
                <div>
                <div className='w-[250px] h-[195px] bg-[#F5F5F5] flex justify-center items-center'>
                    <Image src={"/Cart (2) - Copy.png"} alt='gaming' width={150} height={100}/>
                </div>
                
                </div>
                <div>
                <div className='w-[250px] h-[195px] bg-[#F5F5F5]  flex justify-center items-center'>
                    <Image src={"/Cart (3) - Copy.png"} alt='gaming' width={150} height={100}/>
                </div>
              
                </div>
                <div>
                <div className='w-[250px] h-[195px] bg-[#F5F5F5]  flex justify-center items-center'>
                    <Image src={"/Cart (4) - Copy.png"} alt='gaming' width={150} height={100}/>
                </div>
               
                </div>
            </div>
        </div>
      
    </div>

    <button className='py-2 px-3 bg-red-500 ml-[600px] rounded-md text-white'>View All Products</button>
         
    </main>
  )
}

export default OurProducts