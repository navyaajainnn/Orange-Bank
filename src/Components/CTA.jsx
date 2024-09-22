import React from 'react'
import styles from '../styles'
import Button from './Button'

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[50px] m-[150px] box-shadow`}>
    <div className='flex-1 flex flex-col'>
      <h2 className={`text-[45px] font-poppins font-bold text-dimWhite italic`} > Amazed by our services? Be a part of our fantastic community! </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 text-white`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
    </div>

    <div>
      <Button></Button>
    </div>
  </section>
)

export default CTA
