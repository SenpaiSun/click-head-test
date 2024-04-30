import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '../components/Header/Header'
import { Footer } from '../components/Footer/Footer'
import ReactQueryProvider from '../hooks/reactQueryProvider'
import StoreProvider from '../hooks/storeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CLICKHEAD',
  description: 'CLICKHEAD Marketplace',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ru'>
      <body className={inter.className}>
        <StoreProvider>
          <ReactQueryProvider>
            <Header />
            <main>{children}</main>
            <Footer />
          </ReactQueryProvider>
        </StoreProvider>
      </body>
    </html>
  )
}
