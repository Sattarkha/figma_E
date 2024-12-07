import React from 'react'
import Image from 'next/image'

const Features = () => {
  return (
    <main>
    <div className='w-full h-[300px] flex justify-center items-center mt-10 mb-20'>
        <div className='w-[80%] h-full'>
            <div>
                <span className='border-l-8 border-red-500 text-red-500 mb-5 px-2'>Featured</span>
                <div className='flex justify-between'>
                <h2 className='text-4xl font-bold mt-5'>New Arrival</h2>
                    
      
            </div>
             <div className='flex mt-10 gap-5'>
               <div className='w-[570px] h-[800px]'>
                <Image src={"/Frame 684.png"} alt='logi' width={570} height={600}/>
                </div>
                <div className='flex flex-col gap-5 w-[570px] h-[600px]'>
                <div>
                <Image src={"/Frame 685.png"} alt='orat' width={550} height={220}/>
               </div>
               <div className='flex gap-5 w-[540px] h-[250px]'>
                    <Image src={"/Frame 686.png"} width={260} height={200} alt='cell'/>
                    <Image src={"/Frame 687.png"} width={260} height={200} alt='perfume'/>
               </div>
               
                </div>

            </div>
            </div>

    </div>
 </div>

    </main>
    
  )
}

export default Features