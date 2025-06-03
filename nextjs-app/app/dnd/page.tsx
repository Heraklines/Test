'use client'
import React from 'react'
import { useLegacyGame } from './useLegacyGame'
import Markup from './Markup'

export default function DndPage() {
  const handlers = useLegacyGame()
  return <Markup {...handlers} />
}
