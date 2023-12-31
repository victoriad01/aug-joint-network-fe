// interface PopupProps {
//   setPrayPage: boolean

import { useNavigate } from 'react-router-dom'

// }
interface PopupProps {
  setPrayPage: (value: boolean) => void
  setPopUp: (value: boolean) => void
}

export const Popup = ({ setPrayPage, setPopUp }: PopupProps) => {
  const navigate = useNavigate()

  return (
    <div className='mx-[24px] md:mx-[160px]  lg:mx-[360px] mt-[115px] shadow-lg p-8'>
      <div>
        <p className='text-[18px] md:text-[46px] text-center font-EuclidMedium mb-2 md:mb-[24px] leading-11'>
          Thank You For Giving Your 1 Minute in Prayer
        </p>
        <p className='text-[10px] md:text-[18px] text-center font-Euclidlight'>
          Do you want to give another
          <span className='px-[1px] mdpx-2 font-EuclidMedium'>1 Minute</span>?
        </p>
        <div
          className=' flex justify-center items-center'
          onClick={() => {
            setPrayPage(true)
            setPopUp(false)
          }}
        >
          <button className='my-[16px] md:mt-[30px] w-3/4 cursor-pointer px-[24px] py-[12px] bg-[#9A4797] text-[white] rounded-md mb-[2px] font-EuclidMedium shadow-md'>
            Yes
          </button>
        </div>
        <div
          className=' flex justify-center items-center'
          onClick={() => {
            navigate('/')
          }}
        >
          <button className='my-[8px] md:my-[30px] w-3/4 cursor-pointer px-[24px] py-[12px] border-[1px] border-[#9A4797] text-[#9A4797] bg-[white] rounded-md mb-[34px] font-EuclidMedium shadow-md'>
            No
          </button>
        </div>
      </div>
    </div>
  )
}
