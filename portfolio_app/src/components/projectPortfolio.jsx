import DisplayPortfolio from "./displayPortfolio";
import projects from "../assets/projects"

function ProjectPortfolio () {
    console.log(projects)
    return (
<section className="content">
        <section id="Portfolio" className="portfolio">
            <h3>Portfolio</h3>
            <p>
                I would love to present to you my resent work, please follow this link <a href="file:///Users/ulianai/bootcamp/w1_horiseon-marketing_agent/index.html">"My resent work"</a> to
             acces my latest website.
            </p>
            {
                projects.map((project, i) => (
                    <DisplayPortfolio title={project.title} image={project.image} deploy={project.deploy} gitHub={project.gitHub}/>
                )
             ) 
           }
        </section>
    </section>
    )
};

export default ProjectPortfolio;