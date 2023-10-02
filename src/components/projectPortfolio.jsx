import DisplayPortfolio from "./displayPortfolio";
import projects from "../assets/projects"

function ProjectPortfolio () {
    console.log(projects)
    return (
<section className="content">
        <section className="portfolio">
            <h3>Portfolio</h3>
            <p>
               Please take a look at some of my latest projects
            </p>
            <section id="portfolioCards">
            {
                projects.map((project, i) => (
                    <DisplayPortfolio title={project.title} image={project.image} deploy={project.deploy} gitHub={project.gitHub}/>
                )
             ) 
           }
           </section>
        </section>
    </section>
    )
};

export default ProjectPortfolio;