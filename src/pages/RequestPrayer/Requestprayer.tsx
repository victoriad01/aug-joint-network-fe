import { ChangeEvent, useState } from 'react'
import { Popuprequest } from './Popuprequest/Popuprequest'

const optionData = [
  { id: 1, title: 'Soul Winning (Evangelism)' },
  { id: 2, title: 'Marriage' },
  { id: 3, title: 'Healing' },
  { id: 4, title: 'Finances' },
  { id: 5, title: 'Family' },
  { id: 6, title: 'Business' },
  { id: 6, title: 'Education' },
  { id: 6, title: 'Government' },
  { id: 6, title: 'Others' },
  { id: 6, title: 'Career' },
  { id: 6, title: 'Deliverance' },
]

export const Requestprayer = () => {
  const options = optionData.map((p, i) => p.title)

  const [text, setText] = useState('')
  const [submit, setSubmit] = useState(true)
  const [submitted, setSubmitted] = useState(false)

  const handleTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value)
  }

  const [selectedValue, setSelectedValue] = useState('')

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value)
    console.log(selectedValue)
  }

  return (
    <div>
      {submit ? (
        <div className='mx-[24px] md:mx-[160px]  lg:mx-[360px] my-[115px]'>
          <p className='text-center text-[28px] md:text-[36px] lg:text-[56px] font-EuclidMedium lg:leading-[67.2px]'>
            Submit Prayer Request
          </p>
          <input
            type='text'
            placeholder='Name (optional)'
            className='w-full px-[24px] py-[12px] border-[1px] border-[#9A4797] text-[#9A4797] rounded-md my-[42px] font-EuclidMedium '
          />

          <div className='w-full px-[24px] py-[12px] border-[1px] border-[#9A4797] text-[#9A4797] rounded-md my-[2px] font-EuclidMedium '>
            <select
              className='w-full outline-none bg-white'
              onChange={handleSelectChange}
              value={selectedValue}
            >
              {options.map((n, i) => (
                <option key={n} value={n} className=' bg-white'>
                  {n}
                </option>
              ))}
            </select>
          </div>

          <textarea
            value={text}
            onChange={handleTextChange}
            placeholder='Enter your prayer request here'
            className='h-[150px] w-full px-[24px] py-[12px] border-[1px] border-[#9A4797] text-[#9A4797] rounded-md my-[42px] font-EuclidMedium outline-none text-justify'
          />
          <button
            onClick={() => {
              setSubmit(false)
              setSubmitted(true)
            }}
            className='w-full cursor-pointer px-[24px] py-[12px] bg-[#9A4797] text-[white] rounded-md my-[12px] font-EuclidMedium shadow-md'
            disabled={!text && !selectedValue}
          >
            Submit
          </button>
        </div>
      ) : (
        ''
      )}
      {submitted ? (
        <Popuprequest setSubmit={setSubmit} setSubmitted={setSubmitted} />
      ) : (
        ''
      )}
    </div>
  )
}
