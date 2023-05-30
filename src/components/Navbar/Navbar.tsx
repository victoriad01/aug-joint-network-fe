import { useNavigate } from 'react-router-dom'
import MenuIcon from '../../assets/icon/menu.svg'
import { useState } from 'react'

const Navbar = () => {
  const navigate = useNavigate()
  const [showMobileNav, setShowMobileNav] = useState(false)

  return (
    <div>
      <div className='text- [#18141F] px-[16px] lg:px-[128px] py-[24px] lg:py-[48px] flex justify-between items-center font-EuclidMedium '>
        <div onClick={() => navigate('/')}>
          <p className='cursor-pointer md:text-[18px] lg:text-[24px]'>
            Joint Prayer Network
          </p>
        </div>
        <div className='hidden md:flex justify-between items-center gap-[32px] md:text-[12px] lg:text-[14px] text-[rgba(0.094, 0.078, 0.122, 0.9)]'>
          <p className='cursor-pointer' onClick={() => navigate('/')}>
            Home
          </p>
          <p className='cursor-pointer'>About</p>
          <p className='cursor-pointer'>Missions</p>
          <p
            className='cursor-pointer text-[#9A4797]'
            onClick={() => navigate('/pray')}
          >
            1 Minute Prayer
          </p>
          <p className='cursor-pointer px-[12px] py-[7px] bg-[#9A4797] text-[white] rounded-md'>
            Become an Intercessor
          </p>
        </div>
        <div
          className='flex md:hidden'
          onClick={() => setShowMobileNav(!showMobileNav)}
        >
          <img src={MenuIcon} alt='menu' />
        </div>
      </div>

      {showMobileNav ? (
        <div className='block md:hidden justify-between items-center gap-[32px] text-center md:text-[12px] lg:text-[14px] text-[rgba(0.094, 0.078, 0.122, 0.9)] px-8'>
          <p
            className='cursor-pointer mb-2'
            onClick={() => {
              navigate('/')
              setShowMobileNav(false)
            }}
          >
            Home
          </p>
          <p
            className='cursor-pointer mb-2'
            onClick={() => setShowMobileNav(false)}
          >
            About
          </p>
          <p
            className='cursor-pointer mb-2'
            onClick={() => setShowMobileNav(false)}
          >
            Missions
          </p>
          <p
            className='cursor-pointer text-[#9A4797] mb-2'
            onClick={() => {
              navigate('/pray')
              setShowMobileNav(false)
            }}
          >
            1 Minute Prayer
          </p>
          <p
            className='cursor-pointer px-[12px] py-[7px] bg-[#9A4797] text-[white] rounded-md'
            onClick={() => setShowMobileNav(false)}
          >
            Become an Intercessor
          </p>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default Navbar
