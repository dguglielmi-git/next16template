'use client'
import { useState } from 'react'
import { Provider } from 'react-redux'
import { makeStore, AppStore } from '../lib/store'

type Props = Readonly<{
  children: React.ReactNode
}>

export default function StoreProvider({ children }: Props) {
  // Create the store instance once per provider mount.
  // Avoid reading/writing `ref.current` during render (React lint rule).
  const [store] = useState<AppStore>(() => makeStore())

  return <Provider store={store}>{children}</Provider>
}