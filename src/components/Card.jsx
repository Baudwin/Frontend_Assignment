import React from 'react'
import { BsStar } from 'react-icons/bs'
import { FaStar } from 'react-icons/fa'


export const Card = ({name, img, bg, rating}) => {

  const fullStars = Math.floor(rating) 
  const emptyStars = (5 - fullStars)


  return (
    // -------Parent container --------
    <div className='rounded-sm shadow-md p-4 flex flex-wrap lg:items-center sm:flex-col gap-6 border'>

    {/* ---image conainer -------- */}
    <div style={{backgroundColor:bg}} className={`flex items-center justify-center flex-1 md:w-1/2`}>
      <img className='lg:h-[103px]' src={img} alt="img" />
    </div>



<div className='flex-1 flex flex-col lg:flex-row md:gap-4 sm:gap-2 md:w-1/2'>

  {/* Casino description  container */}
<div className='flex-1 flex flex-col gap-3 justify-center items-center md:items-start'>

     {/* casino name  */}
      <p className='border-b-2 border-black capitalize text-xl'>{name}</p>


      {/* star ratings  */}
      <div className='flex gap-1'>
         {
        Array(fullStars).fill().map((s,i)=>{
            return <FaStar key={i} size={26} color='orange'/>
        })
      }
          {
        Array(emptyStars).fill().map((s,i)=>{
            return <BsStar key={i} size={26} color='orange'/>
        })
      }
      </div>
      
</div>


{/* bonus   */}
<div className='flex-1 flex flex-col justify-center items-center md:items-start'>
<h4 className='font-bold text-xl'>Bonus</h4>
<div className='md:flex gap-2 text-center'>
 <p className='text-3xl'>Bet £10</p>
<p className='text-3xl'>Get £400</p>   
</div>

</div>   


</div>



{/* cta button  */}
<button className='lg:flex-1 md:w-full bg-[#009129] hover:bg-[#24713a] text-white font-semibold rounded-md capitalize text-lg py-3 md:py-4'>bet now</button>
    
  </div>
  )
}
