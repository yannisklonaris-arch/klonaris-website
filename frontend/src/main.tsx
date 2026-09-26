import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import { queryClient } from './lib/queryClient'
const params = new URLSearchParams(window.location.search)
const redirect = params.get('redirect')

if (redirect) {
  window.history.replaceState(
    null,
    '',
    `/klonaris-website${redirect}`
  )
}
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter basename="/klonaris-website">
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
)
