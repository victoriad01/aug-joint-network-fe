import Image1 from '../../assets/image/Rectangle 1.png'
import Image2 from '../../assets/image/Rectangle 2.png'
import Image3 from '../../assets/image/Rectangle 2 (1).png'
import Image4 from '../../assets/image/Rectangle 2 (2).png'
import { useNavigate } from 'react-router-dom'

export const Homepage = () => {
  const navigate = useNavigate()
  return (
    <div className=' font-EuclidMedium w-full mt-[115px]'>
      <div className='text-center mx-[24px] md:mx-[54px] lg:mx-[340px]'>
        <p className='text-[42px] md:text-[61.09px] mb-[24px]'>
          Let Us Pray With You
        </p>
        <p className='text-[14px] md:text-[18px] mb-[28px] text-[#18141F] font-EuclidLight'>
          We are a network of believers running with the instruction in
          <span className='font-EuclidMedium'>1 Timothy 2:1</span> (I exhort
          therefore, that, first of all, supplications, prayers, intercessions,
          and giving of thanks, be made for all men). We would be happy to pray
          with you.
        </p>
        <button className='cursor-pointer px-[24px] py-[12px] bg-[#9A4797] text-[white] rounded-md mb-[74px]'>
          Submit Prayers
        </button>
      </div>
      <div className='lg:mx-[140px] mb-[154px]'>
        <img src={Image1} alt='Praying' className='w-full md:h-[398px]' />
      </div>
      <div className='md:flex justify-between items-center md:px-[40px] lg:px-[140px] mb-[172px]'>
        <div className='mx-[24px] md:mx-0'>
          <p className='text-[28px] md:text-[46px]'>Submit Prayer</p>
          <p className='md:w-9/12 font-EuclidLight'>
            You can submit your prayer request here. Our intercessors will join
            you in prayers
          </p>
          <button className='my-[30px] cursor-pointer px-[24px] py-[12px] bg-[#9A4797] text-[white] rounded-md mb-[74px]'>
            Submit Prayers
          </button>
        </div>
        <div>
          <img src={Image2} alt='Praying' className='w-full h-[408px]' />
        </div>
      </div>
      <div className='md:flex justify-between items-center md:px-[40px] lg:px-[140px] mb-[172px] gap-[200px]'>
        <div className='hidden md:flex'>
          <img src={Image3} alt='Praying' className='w-full h-[408px]' />
        </div>
        <div className='mx-[24px] md:mx-0'>
          <p className='text-[28px] md:text-[46px]'>1 Minute Prayer</p>
          <p className='md:w-9/12 font-EuclidLight'>
            Do you want to take one minute of your time to pray for someone? Do
            it now
          </p>
          <button
            className='my-[30px] cursor-pointer px-[24px] py-[12px] bg-[#9A4797] text-[white] rounded-md mb-[74px]'
            onClick={() => navigate('/pray')}
          >
            Pray For Someone
          </button>
        </div>
      </div>
      <div className='md:flex justify-between items-center md:px-[40px] lg:px-[140px] mb-[172px]'>
        <div className='mx-[24px] md:mx-0'>
          <p className='text-[24px] md:text-[36px]'>Become an Intercessor</p>
          <p className='md:w-9/12 font-EuclidLight'>
            Would you love to join us in praying for people. Either you are
            directly called into the ministry of intercession or not, we believe
            that the mandate of intercession is for every one. We are confident
            that this will be an opportunity to walk with God and work for him
          </p>
          <button className='my-[30px] cursor-pointer px-[24px] py-[12px] bg-[#9A4797] text-[white] rounded-md mb-[74px]'>
            Become an Intercessor
          </button>
        </div>
        <div className=''>
          <img src={Image4} alt='Praying' className='h-[415px] w-[1800px]' />
        </div>
      </div>
      <div className=' text-center md:px-[40px] lg:px-[440px]'>
        <div className='mx-[24px] md:mx-0'>
          <p className='text-[24px] md:text-[36px] mb-[24px]'>
            Share Your Testimonies
          </p>
          <p className=' font-EuclidLight'>
            Did you see the results of prayers submitted? Please share it here.
            We do not claim that it's our prayers that made it happen. We would
            just love to share the joy with you and share it to encourage
            others.
          </p>
          <button className='my-[30px] cursor-pointer px-[24px] py-[12px] bg-[#9A4797] text-[white] rounded-md mb-[74px]'>
            Submit Testimonies
          </button>
        </div>
      </div>
    </div>
  )
}
