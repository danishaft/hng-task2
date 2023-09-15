
import Header from '../Header/Header'
import Banner from '../Banner/Banner'
import styles from "./Hero.module.scss"
function Hero() {
  return (
    <section className={styles.hero__sec}>
        <Header/>
        <Banner/>
    </section>
  )
}

export default Hero