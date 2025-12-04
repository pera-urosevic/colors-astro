import { setRGB } from '@react/actions'
import InputNumber from '@react/components/inputs/base/InputNumber'
import { rgb } from '@react/signals'
import type { RGB } from 'color-convert/conversions'

const InputRGB = () => {
  const onRed = (newRed: number) => {
    const newRGB: RGB = [newRed, rgb.value[1], rgb.value[2]]
    setRGB(newRGB)
  }

  const onGreen = (newGreen: number) => {
    const newRGB: RGB = [rgb.value[0], newGreen, rgb.value[2]]
    setRGB(newRGB)
  }

  const onBlue = (newBlue: number) => {
    const newRGB: RGB = [rgb.value[0], rgb.value[1], newBlue]
    setRGB(newRGB)
  }

  return (
    <>
      <InputNumber value={rgb.value[0]} title="Red" max={255} onInput={onRed} />
      <InputNumber value={rgb.value[1]} title="Green" max={255} onInput={onGreen} />
      <InputNumber value={rgb.value[2]} title="Blue" max={255} onInput={onBlue} />
    </>
  )
}

export default InputRGB
