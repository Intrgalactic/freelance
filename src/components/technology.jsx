import TechnologyTooltip from "./technologyTooltip"

const Technology = ({src,alt,name,description}) => {
    return (
        <span className="technology">
            {name} &nbsp;
            <TechnologyTooltip src={src} name={name} description={description} alt={alt}/>
        </span>
    )
}

export default Technology;