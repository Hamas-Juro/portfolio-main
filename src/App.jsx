
import Home from './components/Home/Home'
import Sidebar from './components/sidebar/Sidebar'
import Portfolio from './components/Portfolio/Portfolio'
import About from './components/About/About'
import Resume from './components/Resume/Resume'
import Services from './components/Services/Services'
import Contact from './components/Contact/Contact'
import Blogs from './components/blogs/Blogs'
import Testmonials from './components/Testmonials/Testmonials'

import './App.css'

function App() {
  

  return (
    <> 
    <Sidebar />
    <main className='main'>
    <Home />
    <About />
    <Services />
    <Resume />
    <Portfolio />
    <Blogs />
    <Testmonials />
    <Contact />
    </main>
    </>
  )
}

export default App
