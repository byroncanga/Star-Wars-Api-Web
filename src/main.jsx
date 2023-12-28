// main.tsx or main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import {NextUIProvider} from '@nextui-org/react'
import Layout from './Layout'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
    <main className="dark text-foreground bg-background">               
      <Layout />
    </main>
    </NextUIProvider>
  </React.StrictMode>,
)