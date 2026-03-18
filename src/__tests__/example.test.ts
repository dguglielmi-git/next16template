import { describe, expect, it } from 'vitest'
import { makeStore } from '@/lib/store'

describe('makeStore', () => {
  it('crea la store sin reducers', () => {
    const store = makeStore()
    expect(store).toBeDefined()
    expect(typeof store.getState).toBe('function')
  })
})

