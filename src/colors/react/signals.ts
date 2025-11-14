import type { HSL } from 'color-convert/conversions'
import type { Color } from '@/colors/lib/types'
import { randomHSL } from '@/colors/lib/color'
import { computed, signal } from '@preact/signals-react'
import convert from 'color-convert'

export const hsl = signal<HSL>(randomHSL())
export const palette = signal<Color[]>([])
export const selected = signal<Color | null>(null)
export const fullScreen = signal<boolean>(false)
export const rgb = computed(() => convert.hsl.rgb(hsl.value))
export const hex = computed(() => convert.hsl.hex(hsl.value))
