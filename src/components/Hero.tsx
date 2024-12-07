import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple } from '@fortawesome/free-brands-svg-icons';
import React from 'react'
import Image from 'next/image';

const Hero = () => {
  return (
    <div className='w-full h-[255px] flex justify-center mt-8'>
        <div className='flex w-[1120px]  justify-center gap-4 '>
        <ul className='space-y-[5px]'>
            <li>Woman’s Fashion</li>
            <li>Men’s Fashion</li>
            <li>Electronics</li>
            <li>Home & Lifestyle</li>
            <li>Medicine</li>
            <li>Sports & Outdoor</li>
            <li>Baby’s & Toys</li>
            <li>Groceries & Pets</li>
            <li>Health & Beauty</li>
        </ul>
        <div className='w-[1px] h-100 bg-black'></div>
        <div className='w-[80%] h-full bg-black flex justify-between'>
            <div className='ml-8 mt-16 text-white'>
                <div className='flex justify-center items-center'>
                    <span>
                    <FontAwesomeIcon icon={faApple} className='w-[30px]'/>  
                    </span>
                    <span className='ml-4'>IPhone 14 Series</span>
                </div>
                <div className='w-[200px]'>
                    <h1 className='text-3xl font-sans font-bold ml-5'>Up to 10% off Voucher</h1>
                    <button className='font-bold underline underline-offset-8 ml-5 mt-5'>Shop Now</button>
                </div>
            </div>
            <div>
               <Image src={"/hero_endframe__cvklg0xk3w6e_large 2.png"} alt='image' width={350} height={200} className='mt-5'/> 
            </div>
        </div>
        
        </div>
    </div>
  )
}

export default Hero