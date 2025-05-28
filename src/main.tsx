import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import './variables.css'
import Home from './Home.tsx'
import ShortHistory from './ShortHistory.tsx'
import Contribute from './Contribute.tsx'

createRoot(document.getElementById('root')!).render(
  // Using React Router to use routing for the website
  // All routes declared below
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />

        {
        /* <Route path="contents">
          <Route index element={<Home />} />
        </Route> */
        
        // <Route path='history' element={<ShortHistory />}/>

        // <Route path='contribute' element={<Contribute />} />

        // <Route path='api-docs' />
        //    <Route index element={<DocsLanding />}/>
        // </Route>

        }
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
