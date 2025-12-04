import { bgColorHSL } from '@react/helpers/style'
import { toggleFullScreen } from '@react/actions'
import { useMemo } from 'react'
import styles from '@react/components/FullScreen.module.css'
import { fullScreen, hsl } from '@react/signals'

const FullScreen = () => {
  const className = useMemo(() => {
    const classes = [styles.fullscreen]
    if (fullScreen.value) {
      classes.push(styles.show)
    } else {
      classes.push(styles.hide)
    }
    return classes.join(' ')
  }, [fullScreen])

  return <button
    style={bgColorHSL(hsl.value)}
    className={className}
    onClick={toggleFullScreen}
    aria-label="Toggle Fullscreen"
  ></button>
}

export default FullScreen
