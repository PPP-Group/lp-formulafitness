import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import ScrollTopButton from './ScrollTopButton'
import FormModalProvider from '@components/ui/FormModalProvider'
import './Layout.css'

export default function Layout() {
  return (
    <FormModalProvider>
      <div className="layout">
        <Header />
        <main className="layout__main">
          <Outlet />
        </main>
        <Footer />
        <ScrollTopButton />
      </div>
    </FormModalProvider>
  )
}
