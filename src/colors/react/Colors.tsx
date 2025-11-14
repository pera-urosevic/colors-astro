import { Suspense } from 'react'
import styles from '@react/Colors.module.css'
import Actions from '@react/components/Actions'
import FullScreen from '@react/components/FullScreen'
import Palette from '@react/components/Palette'
import Picker from '@react/components/Picker'
import Loading from '@react/components/Loading'

const App = () => {
  return (
    <div>
      <div className={styles.layout}>
        <Picker />
        <Actions />
        <Suspense fallback={<Loading />}>
          <Palette />
        </Suspense>
      </div>
      <FullScreen />
    </div>
  )
}

export default App
