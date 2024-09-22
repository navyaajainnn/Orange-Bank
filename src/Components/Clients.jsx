/* eslint-disable no-unused-vars */
import React from 'react'
import { clients } from '../constants'
import styles from '../styles'

const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((client) =>(
        <div key={client.id} className='flex-1 ${styles.flexCenter} ml-[100px] sm:min-w-[162px] min-w-[120px]'>
          <img src={client.logo} alt="client" className='sm:w-[192px] w-[100px] object-contain'></img>
          </div>
      ))}
    </div>
  </section>
)

export default Clients
