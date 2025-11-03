import Brand1 from '../assets/brand1.svg'
import Brand2 from '../assets/brand2.svg'
import Brand3 from '../assets/brand3.svg'
import Brand4 from '../assets/brand4.svg'
import Brand5 from '../assets/brand5.svg'

export default function Brands() {
  return (
    <div className='side bg-(--mainColor) flex flex-col md:flex-row justify-between items-center gap-16 py-10'>
           <img src={Brand1} alt="" />
           <img src={Brand2} alt="" />
           <img src={Brand3} alt="" />
           <img src={Brand4} alt="" />
           <img src={Brand5} alt="" />
    </div>
  )
}
