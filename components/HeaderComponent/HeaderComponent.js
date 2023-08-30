import config from "../../config.json";
import { StyleHeader } from "./styles";

function Header() {
    return (
        <StyleHeader>
            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`} />
                <div>
                    <h2>{config.name}</h2>
                    <p>{config.description}</p>
                </div>
            </section>
        </StyleHeader>
    )
}
export default Header;