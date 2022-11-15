import { Box } from '@mui/material'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// components
import Main from './components/main'
import Header from './components/header'
import HooksUseRef from './components/pages-hooks/useRef-hooks'
import HooksUseMemo from './components/pages-hooks/useMemo-hook'
import HooksUseState from './components/pages-hooks/useState-hooks'
import HooksUseEffect from './components/pages-hooks/useEffect-hooks'
import HooksUseLayout from './components/pages-hooks/useLayoutEffect'
import HooksUseCallback from './components/pages-hooks/useCallback-hooks'
import UseContextHook from './components/pages-hooks/useContext-hook'
import Footer from './components/footer'

function App() {
  return (
    <Box width='100%' height='100vh' bgcolor='silver'>
      <Header />
      <Main>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HooksUseState />} />
            <Route path='/useEffectHook' element={<HooksUseEffect />} />
            <Route path='/useRefHook' element={<HooksUseRef />} />
            <Route path='/useCallbackHook' element={<HooksUseCallback />} />
            <Route path='/useLayoutEffectHook' element={<HooksUseLayout />} />
            <Route path='/useMemoHook' element={<HooksUseMemo />} />
            <Route path='/useContextHook' element={<UseContextHook />} />
          </Routes>
        </BrowserRouter>
      </Main>
      <Footer />
    </Box>
  )
}

export default App
