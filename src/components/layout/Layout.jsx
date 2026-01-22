import { memo } from 'react'
import Header from './Header'
import Footer from './Footer'
import './Layout.css'

const Layout = memo(function Layout({ children }) {
    return (
        <div className="layout">
            <Header />
            <main className="main-content">
                {children}
            </main>
            <Footer />
        </div>
    )
})

export default Layout
