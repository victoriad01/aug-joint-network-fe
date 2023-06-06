import { useNavigate } from 'react-router-dom'

interface PopupProps {
  setSubmit: (value: boolean) => void
  setSubmitted: (value: boolean) => void
}

export const Popuprequest = ({ setSubmit, setSubmitted }: PopupProps) => {
  const navigate = useNavigate()

  return (
    <div className='mx-[24px] md:mx-[160px]  lg:mx-[360px] mt-[115px] shadow-lg p-8'>
      <div>
        <p className='text-[18px] md:text-[46px] text-center font-EuclidMedium mb-2 md:mb-[24px] leading-11'>
          Prayer Submitted Successfully
        </p>
        <p className='text-[10px] md:text-[18px] text-center font-Euclidlight'>
          Your prayer request has been directed to the appropriate channel.
        </p>
        <div
          className=' flex justify-center items-center'
          onClick={() => {
            setSubmit(true)
            setSubmitted(false)
          }}
        >
          <button className='my-[16px] md:my-[30px] w-3/4 cursor-pointer px-[6px] py-[12px] bg-[#9A4797] text-[white] rounded-md mb-[2px] font-EuclidMedium shadow-md text-[14px] md:text-[16px]'>
            Submit New Prayer
          </button>
        </div>
        <div
          className=' flex justify-center items-center'
          onClick={() => {
            navigate('/')
          }}
        >
          <button className='my-[8px] md:my-[4px] w-3/4 cursor-pointer px-[24px] py-[12px] border-[1px] border-[#9A4797] text-[#9A4797] bg-[white] rounded-md mb-[34px] font-EuclidMedium shadow-md'>
            Return Home
          </button>
        </div>
      </div>
    </div>
  )
}
