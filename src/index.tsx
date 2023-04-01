import ReactDOM from 'react-dom/client'
import './styles/index.scss'
import App from './components/App/App'
import { storageInit } from './data/data'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
storageInit()
root.render(<App />)
