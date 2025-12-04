import styles from '@react/components/Actions.module.css'
import type { Color } from '@lib/types'
import { setPalette, unsetSelected } from '@react/actions'
import { hsl, palette, selected } from '@react/signals'

const Actions = () => {
  const add = (color: Color) => {
    if (!palette.value) return
    if (palette.value.find((c) => c.name === color.name)) {
      alert('Color name already exists')
      return
    }
    const paletteNew = [...palette.value, color]
    setPalette(paletteNew)
  }

  const remove = (color: Color) => {
    if (!palette.value) return
    const paletteNew = palette.value.filter((c) => c !== color)
    setPalette(paletteNew)
  }

  const onSave = async () => {
    const name = prompt('Color Name?')
    if (!name) return
    const colorNew = { name, hsl: hsl.value }
    add(colorNew)
  }

  const onRemove = async () => {
    const cs = selected.value
    if (!cs) return
    const confirmed = confirm(`Are you sure you want to remove color "${cs.name}"?`)
    if (!confirmed) return
    remove(cs)
    unsetSelected()
  }

  return (
    <div className={styles.actions}>
      <button onClick={onSave}>Add</button>
      <button onClick={onRemove} disabled={!selected}>Remove</button>
    </div>
  )
}

export default Actions
