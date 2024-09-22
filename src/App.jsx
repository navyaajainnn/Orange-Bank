import styles from './styles';

import { Navbar,Hero, Stats, Business,Testimonials, Clients, CTA ,Footer } from './Components';

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
        <Navbar></Navbar>
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero></Hero>
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer/> 
        </div>
      </div>
    </div>
  )
}

export default App
