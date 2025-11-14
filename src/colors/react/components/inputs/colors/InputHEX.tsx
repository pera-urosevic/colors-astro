import InputString from '@react/components/inputs/base/InputString'
import { useState, type KeyboardEventHandler } from 'react'
import { hex } from '@react/signals'
import { setHEX } from '@react/actions'

const InputHEX = () => {
  const [input, setInput] = useState(hex.value)

  const onInput = (hexNew: string) => {
    setInput(hexNew)
  }

  const onKeyUp: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') {
      setHEX(input)
    }
  }

  const onBlur = () => {
    setHEX(input)
  }

  return (
    <InputString value={hex.value} title="HEX" maxLength={6} onInput={onInput} onKeyUp={onKeyUp} onBlur={onBlur} />
  )
}

export default InputHEX
