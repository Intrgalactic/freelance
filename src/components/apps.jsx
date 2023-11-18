import AppBox from "./appBox"
import dexLogo from 'src/assets/images/dex-logo.png';
import boostLogo from 'src/assets/images/boost-logo.png';
import bikeLogo from 'src/assets/images/bike-logo.png';
import Carousel from "src/layouts/carousel/carousel";
import { useWindowSize } from "@uidotdev/usehooks";

const Apps = () => {
    const windowSize = useWindowSize();
    const apps = [{
        src: dexLogo,
        link: "/dex",
        name: "Crypto Dex App"
    }, {
        src: boostLogo,
        link: "/boost",
        name: "Boost Music App"
    }, {
        src: bikeLogo,
        link: "/bike",
        name: "Bike Shop App"
    },
    {
        src: dexLogo,
        link: "/dex",
        name: "Crypto X App"
    }, {
        src: boostLogo,
        link: "/boost",
        name: "Boost Music App"
    }, {
        src: bikeLogo,
        link: "/bike",
        name: "Bike Shop App"
    }]
    return (
        <div className="apps" id="apps">
            {windowSize.width < 1024 ?
                <>
                    {apps.map((app, index) => (
                        <AppBox src={app.src} link={app.link} name={app.name} key={index} index={index} />
                    ))}
                </>
                :
                <Carousel items={apps} />
            }
        </div>
    )
}

export default Apps;