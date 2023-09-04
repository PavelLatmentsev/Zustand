import React from 'react'
import ReactDOM from 'react-dom/client'
import Ulby from './Ulby/Ulby.tsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import MnepomnComponent from "./MichaelNepomn/MNepomn.tsx"
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Ulby />
    <ChakraProvider>
    <MnepomnComponent/>
    </ChakraProvider>
  </React.StrictMode>,
)
