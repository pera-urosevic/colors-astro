import type { HSL } from 'color-convert/conversions'
import type { Color } from '@/colors/lib/types'
import { randomHSL } from '@/colors/lib/color'
import { load, save } from '@/colors/lib/storage'
import { hsl, palette, selected, fullScreen } from '@react/signals'
import convert, { type HEX, type RGB } from 'color-convert'

// hsl

export const setHSL = (newHSL: HSL) => {
  hsl.value = newHSL
  selected.value = null
}

export const resetHSL = () => {
  hsl.value = randomHSL()
  selected.value = null
}

// rgb

export const setRGB = (newRGB: RGB) => {
  const newHSL: HSL = convert.rgb.hsl(newRGB)
  setHSL(newHSL)
}

// hex

export const setHEX = (newHEX: HEX) => {
  const newHSL: HSL = convert.hex.hsl(newHEX)
  setHSL(newHSL)
}

// palette

export const restorePalette = new Promise<void>((resolve) => {
  load().then((newPalette) => {
    palette.value = newPalette
    resolve()
  }).catch((err) => {
    console.error(err)
    resolve()
  })
})

export const setPalette = (newPalette: Color[]) => {
  palette.value = newPalette
  save(newPalette)
}

export const swapPaletteColors = (colorName1: string, colorName2: string) => {
  const paletteOld = palette.value
  if (!paletteOld) return
  const colorIndex1 = paletteOld.findIndex((c) => c.name === colorName1)
  const color1 = paletteOld[colorIndex1]
  const colorIndex2 = paletteOld.findIndex((c) => c.name === colorName2)
  const color2 = paletteOld[colorIndex2]
  if (!color1 || !color2) return
  const newPalette = [...paletteOld]
  newPalette[colorIndex1] = color2
  newPalette[colorIndex2] = color1
  palette.value = newPalette
  save(newPalette)
}

// selected

export const setSelected = (colorNew: Color) => {
  if (colorNew === selected.value) {
    selected.value = null
    hsl.value = randomHSL()
  } else {
    selected.value = colorNew
    hsl.value = colorNew.hsl
  }
}

export const unsetSelected = () => {
  selected.value = null
  hsl.value = randomHSL()
}

// full screen

export const toggleFullScreen = async () => {
  const fs = !fullScreen.value
  if (fs) {
    await document.documentElement.requestFullscreen()
  } else {
    await document.exitFullscreen()
  }
  fullScreen.value = fs
}
