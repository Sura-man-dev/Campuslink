import { describe, expect, it } from 'vitest'
import { publicUniversities } from './universities.js'

describe('public university directory', () => {
  it('contains 44 uniquely named entries', () => {
    expect(publicUniversities).toHaveLength(44)
    expect(new Set(publicUniversities.map(({ name }) => name)).size).toBe(44)
  })

  it('uses HTTPS for sourced university marks', () => {
    const logos = publicUniversities.filter(({ logo }) => logo)

    expect(logos).toHaveLength(3)
    expect(logos.every(({ logo }) => logo.startsWith('https://'))).toBe(true)
  })
})
