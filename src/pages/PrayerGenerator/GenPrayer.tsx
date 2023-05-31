import { useEffect, useState } from 'react'
import { Popup } from '../Homepage/Popup/Popup'

export const GenPrayer = () => {
  const [welcome, setWelcome] = useState(true)
  const [praying, setPraying] = useState(false)
  const [prayPage, setPrayPage] = useState(false)
  const [counting, setCounting] = useState(false)
  const [countdown, setCountdown] = useState(60)
  const [popUp, setPopUp] = useState(false)

  useEffect(() => {
    if (countdown === 0) {
      setPraying(false)
      setPrayPage(false)
      setCounting(false)
      setWelcome(false)
      setPopUp(true)
    }
  }, [countdown])

  useEffect(() => {
    if (popUp) {
      setPraying(false)
      setPrayPage(false)
    }
  }, [popUp])

  useEffect(() => {
    // Start the countdown
    const interval = setInterval(() => {
      if (counting && praying) {
        setCountdown((prevCountdown) => {
          if (prevCountdown === 0 && !praying) {
            clearInterval(interval)
            return 0
          } else if (prevCountdown === 0 && praying) {
            return 60 - 1
          }
          return prevCountdown - 1
        })
      }
    }, 1000)

    // Clean up the interval when the component is unmounted
    return () => {
      clearInterval(interval)
    }
  }, [counting, praying])
  // Format the countdown value to display as MM:SS
  const formatCountdown = (countdown: number) => {
    const minutes = Math.floor(countdown / 60)
    const seconds = countdown % 60
    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}`
  }

  const handlePray = () => {
    setPraying(true)
    setCounting(true)
  }

  return (
    <div>
      {welcome ? (
        <div className='mx-[24px] md:mx-[160px]  lg:mx-[360px] mt-[115px]'>
          <p className='text-center text-[28px] md:text-[36px] lg:text-[56px] font-EuclidMedium lg:leading-[67.2px]'>
            Thank you for deciding to give your
            <span className='text-[#9A4797] px-1'> 1 Minute</span> to pray for
            someone
          </p>
          <button
            onClick={() => {
              setWelcome(false)
              setPrayPage(true)
            }}
            className='w-full cursor-pointer px-[24px] py-[12px] bg-[#9A4797] text-[white] rounded-md my-[42px] font-EuclidMedium shadow-md'
          >
            Proceed
          </button>
        </div>
      ) : (
        ''
      )}
      {prayPage ? (
        <div className='mx-[24px] md:mx-[160px] lg:mx-[460px] mt-[60px]'>
          <p className='text-center text-[56px] font-EuclidMedium leading-[67.2px]'>
            {formatCountdown(countdown)}
          </p>

          <div className=''>
            <p className='text-center text-[#9A4797] mt-[39px]'>
              “Read the prayer request before clicking
              <span className='font-EuclidMedium px-1'>Start Praying</span>”
            </p>
            <p className='h-auto w-full bg-[#FFF6FF] text-[#9A4797] border-[1px] border-[#9A4797] p-6 rounded-md my-4 text-center'>
              Lorem ipsum dolor sit amet consectetur. Facilisi in aliquet
              elementum sapien risus fringilla turpis. Est enim consectetur arcu
              facilisi nunc elit turpis. Massa scelerisque habitasse consectetur
              dolor ut eget non et. Arcu ultrices pellentesque sit mi at.
            </p>
          </div>

          <div className='flex justify-center items-center font-EuclidMedium'>
            <button
              onClick={handlePray}
              className={praying ? 'praying' : 'pray'}
              disabled={praying}
            >
              {praying ? 'Praying...' : 'Start Praying'}
            </button>
          </div>
        </div>
      ) : (
        ''
      )}

      {popUp && countdown === 0 ? (
        <Popup setPopUp={setPopUp} setPrayPage={setPrayPage} />
      ) : (
        ''
      )}
    </div>
  )
}
