import * as React from 'react'
import * as ReactDom from 'react-dom'
import App from './app'

ReactDom.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
)