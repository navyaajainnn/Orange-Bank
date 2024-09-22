 import styles from '../styles'
import { arrowUp } from '../assets'

const GetStarted = () => {
  return (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
      <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
        <p className='text-white hover:text-[20px] text-center font-sans italic font-bold text-center uppercase'>Get Started </p>
        <img src={arrowUp} className='w-[40px] h-[30px]' alt="Arrow" />
      </div>
      
    </div>
  )
}

export default GetStarted
