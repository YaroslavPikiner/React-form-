import "./App.css"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import { Header } from "./components/Header"
import { Step1 } from "./components/steps/Step1"
import { Step2 } from "./components/steps/Step2"
import { Step3 } from "./components/steps/Step3"
import { Result } from './components/Result'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Step1 />} />
        <Route path="/step2" element={<Step2 />} />
        <Route path="/step3" element={<Step3 />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </Router>
  )
}

export default App
