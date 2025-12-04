import { bgColorHSL } from '@react/helpers/style'
import InputHSL from '@react/components/inputs/colors/InputHSL'
import InputRGB from '@react/components/inputs/colors/InputRGB'
import InputHEX from '@react/components/inputs/colors/InputHEX'
import { hsl } from '@react/signals'
import styles from '@react/components/Picker.module.css'
import { toggleFullScreen } from '@react/actions'

const Picker = () => {
  return (
    <div className={styles.picker}>
      <button className={styles.preview} style={bgColorHSL(hsl.value)} onClick={toggleFullScreen}></button>
      <div className={styles.controls}>
        <div className={styles.format}>
          <div className={styles.name}>HSL</div>
          <InputHSL />
        </div>
        <div className={styles.format}>
          <div className={styles.name}>RGB</div>
          <InputRGB />
        </div>
        <div className={styles.format}>
          <div className={styles.name}>HEX</div>
          <InputHEX />
        </div>
      </div>
    </div>
  )
}

export default Picker
