import Image from 'next/image'
import React from 'react'
import loader from '@/public/assets/icons/loader.svg'

const Loader = () => {
  return (
    <div className='h-screen flex justify-center items-center'>
      <Image src={loader} width={32} height={32} alt='loader' className='animate-spin'/>
      <p className='pl-2'>Loading...</p>
    </div>
  )
}

export default Loader
