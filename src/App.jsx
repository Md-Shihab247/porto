import Awesome from './components/Awesome'
import Banner from './components/Banner'
import Blog from './components/Blog'
import Footer from './components/Footer'
import GetStart from './components/GetStart'
import Header from './components/Header'
import Layouts from './components/Layouts'
import Navbar from './components/Navbar'
import './index.css'
function App() {

  let subheading = "COOL STYLES"
  let heading = "Layouts Styles & Variants"
  let subheading2 = "MODERN"
  let heading2 = "Mobile Advanced Apps"
  

  return (
    <>
       <Header/>
       <Navbar/>
       <Banner/>
       <Awesome/>
       <Layouts position="true" subheading={subheading} heading={heading} phone="true" parralax="parallax-true"/>
       <Layouts/>
       <Layouts position="true" subheading={subheading2} heading={heading2} phone="false"/>
       <GetStart btn-padding={'btn-padding'}/>
       <Blog/>
       <Footer/>
    </>
  )
}

export default App
