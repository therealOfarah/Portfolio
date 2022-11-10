import Omar from"../Images/Omar.jpg";
import '../styles/About.css'
export default function AboutMe(){
  
  return(
    <>
    <img src={Omar} alt="" style={{width:'50%', height:'50%'}}/>
    <section>
    <div id="mini-bio">
    <p><strong>Omar Farah </strong> </p>
    <p id="career">Software Engineering</p>
    </div>
    <p id="general-bio">
    Hey, my name is Omar Farah, I’m a Software Engineer from Auburn,ME. Welcome to my page which shows all of my work and links to deployments for each project that I have done so far. So follow me on my journey on becoming the best developer I can be.
    </p>
    <a href="/images/Omar Farah Resume.pdf" download><button id="button" className="btn btn-outline-secondary">Download My Resume</button></a>
    </section>
    </>
    
    )
  }