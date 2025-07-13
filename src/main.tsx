import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import SignIn from './sign-in/SignIn.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SignIn />
  </StrictMode>,
)
