import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ReactGA from 'react-ga4'

const ScrollToTop = () => {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)

        // Track page view
        ReactGA.send({ hitType: "pageview", page: pathname, title: pathname })
    }, [pathname])

    return null
}

export default ScrollToTop
