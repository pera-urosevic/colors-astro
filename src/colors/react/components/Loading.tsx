import styles from '@react/components/Loading.module.css'

const Loading = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loader}></div>
    </div>
  )
}

export default Loading
