import Navbar from './components/navbar/Navbar'
import './globals.css'
import {Nunito} from 'next/font/google'

export const metadata = {
  title: 'Airbnb',
  description: 'This is the clone of Airbnb',
}

const font = Nunito({
  subsets:["latin"]
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar/>
        {children}</body>
    </html>
  )
}
