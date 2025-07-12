import { BrowserRouter, Routes, Route } from "react-router-dom"
import { DefaultLayout } from "./layout/DefaultLayout"
import HomePage from "./pages/HomePage"
function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route element={<DefaultLayout />}>
      <Route path="/" element={<HomePage />}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
