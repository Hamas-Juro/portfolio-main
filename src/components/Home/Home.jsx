import './home.css'
import Me from "../../assets/avatar-1.svg"
import HeaderSocials from './HeaderSocials'
import ScrollDown from './ScrollDown'
import Shapes from './Shapes'
const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home_img" />
        <h1 className="home_name">Hamas Ahmad Ranjha</h1>
        <span className="home_education">I am a Full stack Web Dev</span>
        <HeaderSocials />
        <a href="#contact" className='btn'> Open for hiring </a>
        <ScrollDown />
      </div>
      <Shapes/>
    </section>
  )
}

export default Home