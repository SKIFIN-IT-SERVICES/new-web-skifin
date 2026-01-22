import { Component } from 'react'
import ErrorPage from './ErrorPage'

class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
        this.state = { hasError: false, error: null, errorInfo: null }
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error }
    }

    componentDidCatch(error, errorInfo) {
        this.setState({ errorInfo })
        // Log error to console in development
        console.error('ErrorBoundary caught an error:', error, errorInfo)
    }

    handleRetry = () => {
        this.setState({ hasError: false, error: null, errorInfo: null })
    }

    render() {
        if (this.state.hasError) {
            return (
                <ErrorPage
                    error={this.state.error}
                    onRetry={this.handleRetry}
                />
            )
        }

        return this.props.children
    }
}

export default ErrorBoundary
