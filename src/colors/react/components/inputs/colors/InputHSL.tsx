import { setHSL } from '@react/actions'
import InputNumber from '@react/components/inputs/base/InputNumber'
import { hsl } from '@react/signals'
import type { HSL } from 'color-convert/conversions'

const InputHSL = () => {

  const onHue = (newHue: number) => {
    const newHSL: HSL = [newHue, hsl.value[1], hsl.value[2]]
    setHSL(newHSL)
  }

  const onSaturation = (newSaturation: number) => {
    const newHSL: HSL = [hsl.value[0], newSaturation, hsl.value[2]]
    setHSL(newHSL)
  }

  const onLightness = (newLightness: number) => {
    const newHSL: HSL = [hsl.value[0], hsl.value[1], newLightness]
    setHSL(newHSL)
  }

  return (
    <>
      <InputNumber value={hsl.value[0]} title="Hue" max={360} onInput={onHue} />
      <InputNumber value={hsl.value[1]} title="Saturation" onInput={onSaturation} />
      <InputNumber value={hsl.value[2]} title="Lightness" onInput={onLightness} />
    </>
  )
}

export default InputHSL
