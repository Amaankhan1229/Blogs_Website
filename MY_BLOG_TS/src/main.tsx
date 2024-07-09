
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './output.css'
import UserProvider from './Shared/library/Providers/UserProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  
    <UserProvider>
      <App />
    </UserProvider>

)
