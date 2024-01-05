
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// const jsx = <h1>affan</h1>
// const root = document.getElementById('root')
// ReactDOM.render(jsx,root)
import { BrowserRouter  } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
<BrowserRouter>
<App/>
  </BrowserRouter>

    
  // {/* </React.StrictMode>, */}
  
)
