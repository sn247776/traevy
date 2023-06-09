import getCurrentUser from './actions/getCurrentUser'
import ClientOnly from './components/ClientOnly'
import LoginModal from './components/modals/LoginModal'
import RegisterModal from './components/modals/RegisterModal'
import Navbar from './components/navbar/Navbar'
import ToasterProvider from './components/providers/ToasterProvider'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Traevy',
  description: 'Lets Travel all the world with Traevy',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientOnly>
          <ToasterProvider/>
          <LoginModal/>
          <RegisterModal/>
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        {children}</body>
    </html>
  )
}
