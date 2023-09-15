

function DisplayPortfolio (props) {
    return (
        <>
        <div className="portDiv">
            <h3>{props.title}</h3>
            <img className = "portfolioImg" src={props.image}/>
            <a href={props.deploy}> Link to deploy </a>
            <a href={props.gitHub}> Link to the GitHub</a>
        </div>
        </>
    )
}

export default DisplayPortfolio;