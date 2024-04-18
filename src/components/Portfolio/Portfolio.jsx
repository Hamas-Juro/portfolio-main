import { useState } from "react"
import { Menu } from "./Menu"
import './portfolio.css'

const Portfolio = () => {
  const [items,setItems]= useState(Menu)
  return (
    <section className="wor container section" id="work">
      <h2 className="section_title">
        Recent Works
      </h2>
      <div className="work_filters">
        <span className="work_items">Everything</span>
        <span className="work_items">FrontEnd</span>
        <span className="work_items">BackEnd</span>
        <span className="work_items">Design</span>
        <span className="work_items">Freelance</span>
      </div>
      <div className="work_container grid">
        {items.map((e)=>{
          const{id,image,title,category}=e;
          return(
            <div className="work_card" key={id}>
              <div className="work_thumbnail">
                <img src={image} alt="" className="work_img" />
                <div className="work_mask"></div>
              </div>
              <span className="work_category">{category}</span>
              <h3 className="work_title">{title}</h3>
              <a href="#" className="work_button">
                <i className="icon-link work_button-icon"></i>
              </a>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio