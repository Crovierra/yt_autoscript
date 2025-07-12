import './global.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from './components/Navbar'
import Home from './pages/Home.jsx'
import AboutUs from './pages/AboutUs'
import Instruction from './pages/Instruction'
import Login from './pages/Login.jsx'
import Register from "./pages/Register.jsx"
import NotFound from './pages/NotFound'
import Subscription from './pages/Subscription'
import TranscriptSuccess from "./pages/TranscriptSuccess"
import PaymentSuccess from './pages/PaymentSuccess'
import PaymentCancel from './pages/PaymentCancel'


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about_us" element={<AboutUs />}/>
        <Route path="/instruction" element={<Instruction />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/transcript_success" element={<TranscriptSuccess />} />
        <Route path="/success" element={<PaymentSuccess />} />
        <Route path="/cancel" element={<PaymentCancel />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
