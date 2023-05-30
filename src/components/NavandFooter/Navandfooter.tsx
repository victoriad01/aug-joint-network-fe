import { ReactNode } from 'react'
import Navbar from '../Navbar/Navbar'
import { Footer } from '../Footer/Footer'

interface Prop {
  children: ReactNode
}

const Navandfooter = ({ children }: Prop) => {
  return (
    <>
      <div className=''>
        <Navbar />
        <div className='page'>
          <div className=''>{children}</div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Navandfooter
