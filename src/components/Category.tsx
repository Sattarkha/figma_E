import React from 'react'
import Image from 'next/image'
import { CiMobile4 } from "react-icons/ci";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { IoWatchOutline } from "react-icons/io5";
import { CiHeadphones } from "react-icons/ci";
import { TbDeviceGamepad } from "react-icons/tb";






const Category = () => {
  return (

    <div className='w-full h-[300px] flex justify-center items-center mt-10 mb-20'>
        <div className='w-[80%] h-full'>
            <div>
                <span className='border-l-8 border-red-500 text-red-500 mb-5 px-2'>Categories</span>
                <div className='flex justify-between'>
                <h2 className='text-4xl font-bold mt-5'>Browse By Category</h2>
                </div>
            </div>
            <div className='flex justify-between mt-7'>
                <div>
                <div className='w-[170px] h-[145px] bg-[#F5F5F5] flex flex-col justify-center items-center'>
                <CiMobile4 className='w-11 h-8' />
                <p className='w-[59px] h-[24px]  font-normal text-[16px] leading-6 pt-3'>Phones</p>

                </div>
                
                </div>
                <div>
                <div className='w-[170px] h-[145px] bg-[#F5F5F5] flex flex-col justify-center items-center'>
                <HiOutlineComputerDesktop className='w-11 h-8' />
                <p className='w-[59px] h-[24px]  font-normal text-[16px] leading-6 pt-3'>Computers</p>

                </div>
                
                </div>
                <div>
                <div className='w-[170px] h-[145px] bg-[#F5F5F5] flex flex-col justify-center items-center'>
                <IoWatchOutline className='w-11 h-8' />
                <p className='w-[59px] h-[24px]  font-normal text-[16px] leading-6 pt-3 '>SmartWatch</p>

                </div>
                
                </div>
                <div>
                <div className='w-[170px] h-[145px] bg-[#F5F5F5] flex flex-col justify-center items-center'>
                <CiHeadphones className='w-11 h-8' />
                <p className='w-[59px] h-[24px]  font-normal text-[16px] leading-6 pt-3'>HeadPhones</p>

                </div>
                
                </div>
                <div>
                <div className='w-[170px] h-[145px] bg-[#F5F5F5] flex flex-col justify-center items-center'>
                <TbDeviceGamepad className='w-11 h-8' />
                <p className='w-[59px] h-[24px]  font-normal text-[16px] leading-6 pt-3 '>Gaming</p>

                </div>
                
                </div>
            </div>
        </div>
      
    </div>
    
  )
}

export default Category