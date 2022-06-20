import * as React from 'react';
import Play from './page/Play/Play'
import Homepage from './page/Homepage/Homepage'
import Result from './page/Result/Result'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/play' element={<Play/>}/>
        <Route path='/result' element={<Result/>}/>
      </Routes>
    </BrowserRouter>
  )
}
export default App
