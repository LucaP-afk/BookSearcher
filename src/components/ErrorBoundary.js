import React, { Component } from 'react'
import errorImage from './images/errorImage.jpg'

class ErrorBoundary extends Component {

    constructor(props) {
        super(props)

        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className='errorPage'>
                    <img src={errorImage} alt='error'></img>
                </div>
            )
        }
        return this.props.children
    }
}

export default ErrorBoundary