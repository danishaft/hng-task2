import styles from "./Box.module.scss"
function Box() {
  return (
    <div className={styles.box}>
        <p className={styles.first}><b>Play movie quizes and earn free tickets</b></p>
        <p className={styles.second}>50k people are now playing</p>
        <span>
            Start playing
        </span>
    </div>
  )
}

export default Box