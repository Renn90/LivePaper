import Image from 'next/image'
import React from 'react'

const Loader = () => {
  return (
    <div>
      <Image src="assets/icons/loader.svg" width={32} height={32} alt='loader' className='animate-spin'/>
      <p>Loading...</p>
    </div>
  )
}

export default Loader