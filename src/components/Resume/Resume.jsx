import Data from "./Data"
import Card from "./Card"
import './resume.css'
const Resume = () => {
  return (
    <section className="container resume section" id="resume">
      <h2 className="section_title">Experience</h2>
      <div className="resume_container grid">
        <div className="timeline grid">
          {Data.map((val,id)=>{
            if(val.category==='education'){
              return (
                <Card key={id} icon={val.icon} title={val.title} year={val.year} description={val.description} />
              )
            }
          })}
        </div>
        <div className="timeline grid">
          {Data.map((val,index)=>{
            if(val.category==='experience'){
              return (
                <Card key={index} icon={val.icon} title={val.title} year={val.year} description={val.description} />
              )
            }
          })}
        </div>
      </div>
    </section>
  )
}

export default Resume