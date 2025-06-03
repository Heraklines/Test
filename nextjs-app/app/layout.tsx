import React from 'react'
import './globals.css'
import './dnd/dnd.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'D&D AI Dungeon Master',
  themeColor: '#0a0a0a',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
