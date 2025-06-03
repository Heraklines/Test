'use client'
import React from 'react'
import { useLegacyGame } from './useLegacyGame'
import { markup } from './markup'

export default function DndPage() {
  useLegacyGame()
  return <div dangerouslySetInnerHTML={{ __html: markup }} />
}
