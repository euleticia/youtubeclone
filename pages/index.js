import Menu from "../components/MenuComponent/MenuComponent";
import Timeline from "../components/TimelineComponent/TimelineComponent";
import Header from "../components/HeaderComponent/HeaderComponent";
import config from "../config.json";
import { CSSReset } from "../components/CSSReset";

console.log(config.playlists);

function HomePage() {
    return (
        <>
        <CSSReset />
        <div>
            <Menu />
            <Header />
            <Timeline playlists={config.playlists} />
        </div>
        </>
    );
}
export default HomePage;