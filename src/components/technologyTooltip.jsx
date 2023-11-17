
const TechnologyTooltip = ({src,alt,name,description}) => {
    return (
        <div className="technology-tooltip">
            <div className="technology-tooltip__heading">
                <img src={src} alt={alt} width="60px" height="60px"/>
                <p>{name}</p>
            </div>
            <p>{description}</p>
        </div>
    )
}

export default TechnologyTooltip;