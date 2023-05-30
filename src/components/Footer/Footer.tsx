import React from 'react'

export const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <div className='text-[12px] md:text-[16px] mx-[48px] lg:mx-[128px] border-t-[1px] py-5 border-[#AEADB1] my-[24px] text-center'>
      <p>©Copyright {year} Joint Prayer Network</p>
    </div>
  )
}
