import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ErrorBoundary } from './components/ErrorBoundary'
import { GlobalStyles } from './styles/GlobalStyles'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <GlobalStyles />
      <App />
    </ErrorBoundary>
  </StrictMode>,
)

