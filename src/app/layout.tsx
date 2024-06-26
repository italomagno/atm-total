import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react';
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import { DirectoryProvider } from '@/providers/DirectoryProvider'
import { ModalProvider } from '@/providers/ModalProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ATM-TOTAL DATA',
  description: 'Generated by 3S ITALO',
}
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <ModalProvider>
        <DirectoryProvider>
        <ToastContainer/>
          {children}
          <Analytics />
        </DirectoryProvider>
        </ModalProvider>
      </body>
    </html>
  )
}
