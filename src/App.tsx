import { Route, Routes } from "react-router-dom"
import ScrollToTopButton from "./components/ui/ScrollToTopButton"
import Footer from "./layout/client/Footer"
import Header from "./layout/client/Header"
import Home from "./pages/Home/page"
import About from "./pages/About/page"
import Contact from "./pages/Contact/page"
import NewsAndEvents from "./pages/NewsAndEvents/page"
import ProjectAndPrograms from "./pages/ProjectAndPrograms/page"
import ReportsAndTransparency from "./pages/ReportsAndTransparency/page"


function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/news" element={<NewsAndEvents />} />
        <Route path="/projects" element={<ProjectAndPrograms />} />
        <Route path="/reports" element={<ReportsAndTransparency />} />
      </Routes>
      <Footer />
      <ScrollToTopButton />
    </>
  )
}

export default App
