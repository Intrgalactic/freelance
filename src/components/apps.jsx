import AppBox from "./appBox"
import dexLogo from 'src/assets/images/dex-logo.png';
import boostLogo from 'src/assets/images/boost-logo.png';
import bikeLogo from 'src/assets/images/bike-logo.png';

const Apps = () => {
    const apps = [{
        src: dexLogo,
        link:"/dex",
        name: "Crypto Dex App"
    },{
        src: boostLogo,
        link: "/boost",
        name: "Boost Music App"
    },{
        src: bikeLogo,
        link: "/bike",
        name: "Bike Shop App"
    }]
    return (
        <div className="apps">
            {apps.map((app,index) => (
                <AppBox src={app.src} link={app.link} name={app.name} key={index}/>
            ))}
        </div>
    )
}

export default Apps;