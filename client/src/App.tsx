import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

// components & pages
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Knowledgebase from "./pages/Knowledgebase"
import Contacts from "./pages/Contacts"
import Forms from "./pages/Forms"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Footer from "./components/Footer"
import NotFound from "./pages/NotFound"

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/knowledgebase" element={<Knowledgebase />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/forms" element={<Forms />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
