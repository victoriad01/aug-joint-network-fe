import { ChangeEvent, useState } from 'react'
import { Popuprequest } from './Popuprequest/Popuprequest'
import { APICall } from '../../MakeAPICall'

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
  let id = 'user_id ' + Math.random()
  const options = optionData.map((p, i) => p.title)

  const [name, setName] = useState('')
  const [text, setText] = useState('')
  const [selectedOption, setSelectedOption] = useState(
    'Soul Winning (Evangelism)'
  )

  const [isError, setIsError] = useState(false)

  const data = { name, category: selectedOption, d_request: text, user_id: id }

  const handleSubmit = async () => {
    const { response, e } = await APICall(data, '/request/submit', 'post')
    if (response) {
      setSubmit(false)
      setSubmitted(true)
    } else {
      console.log(e)

      setIsError(true)
      setInterval(() => {
        setIsError(false)
      }, 3000)
    }
  }

  const [submit, setSubmit] = useState(true)
  const [submitted, setSubmitted] = useState(false)

  const handleTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value)
  }

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value)
  }

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
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
            onChange={handleNameChange}
            className='w-full px-[24px] py-[12px] border-[1px] border-[#9A4797] text-[#9A4797] rounded-md my-[42px] font-EuclidMedium '
          />

          <div className='w-full px-[24px] py-[12px] border-[1px] border-[#9A4797] text-[#9A4797] rounded-md my-[2px] font-EuclidMedium '>
            <select
              className='w-full outline-none bg-white'
              onChange={handleSelectChange}
              value={selectedOption}
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
            className='h-[150px] w-full px-[24px] py-[12px] border-[1px] border-[#9A4797] text-[#9A4797] rounded-md my-[42px] font-EuclidMedium outline-none text-left'
          />

          {isError ? (
            <p className='text[10px] text-[red] text-justify'>
              Something went wrong! Ensure you filled the required field and
              choose a category.
            </p>
          ) : (
            ''
          )}
          <button
            onClick={handleSubmit}
            className='w-full cursor-pointer px-[24px] py-[12px] bg-[#9A4797] text-[white] rounded-md my-[12px] font-EuclidMedium shadow-md'
            disabled={!text && !selectedOption && isError}
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
