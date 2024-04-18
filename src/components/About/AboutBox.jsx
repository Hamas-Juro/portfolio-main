
const AboutBox = () => {
  return (
    <div className="about_boxes grid">
        <div className="about_box">
            <i className="about_icon icon-badge"></i>
            <div>
                <h3 className="about_title">3</h3>
                <span className="about_subtitle">Honary Mentions</span>
            </div>
        </div>
        <div className="about_box">
            <i className="about_icon icon-fire"></i>
            <div>
                <h3 className="about_title">Testing</h3>
                <span className="about_subtitle ">Services</span>
            </div>
        </div>
        <div className="about_box">
            <i className="about_icon icon-people"></i>
            <div>
                <h3 className="about_title">10</h3>
                <span className="about_subtitle">Clients</span>
            </div>
        </div>
        <div className="about_box">
            <i className="about_icon"></i>
            <div>
                <h3 className="about_title"></h3>
                <span className="about_subtitle"></span>
            </div>
        </div>
    </div>
  )
}

export default AboutBox