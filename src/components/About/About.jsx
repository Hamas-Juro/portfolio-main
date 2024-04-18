import AboutImg from "../../assets/avatar-2.svg";
import "./About.css";
import AboutBox from "./AboutBox";

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section_title">About Me</h2>
      <div className="about_container grid">
        <img src={AboutImg} alt="About" className="section_img"/>
        <div className="about_data grid">
          <div className="about_info">
            <p className="about_description">
              Seasoned web developer based in Canada, proficient in both
              frontend and backend technologies. Specializing in JavaScript and
              TypeScript, with expertise in SQL for robust database management.
              Bringing a blend of creativity and technical prowess to deliver
              seamless web solutions.
            </p>
            <a href="" className="btn">
              Download CV
            </a>
          </div>
          <div className="about_skills">
            <div className="skills_data">
              <div className="skills_title">
                <i className="devicon-javascript-plain colored" />

                <h3 className="skills_name">JAvaScript</h3>
              </div>
              <div className="skills_title">
                <i className="devicon-react-original colored"></i>

                <h3 className="skills_name">React</h3>
              </div>
              <div className="skills_title">
                <i className="devicon-redux-original colored"></i>

                <h3 className="skills_name">Redux</h3>
              </div>
              <div className="skills_title">
                <i className="devicon-nodejs-plain colored"></i>

                <h3 className="skills_name">NodeJs</h3>
              </div>
              <div className="skills_title">
                <i className="devicon-typescript-plain colored"></i>

                <h3 className="skills_name">TypeScript</h3>
              </div>
              <div className="skills_title">
                <i className="devicon-sqldeveloper-plain colored"></i>

                <h3 className="skills_name">SQL</h3>
              </div>
              <div className="skills_title">
                <i className="devicon-prisma-original colored"></i>

                <h3 className="skills_name">Prisma</h3>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      <AboutBox />
    </section>
  );
};

export default About;
