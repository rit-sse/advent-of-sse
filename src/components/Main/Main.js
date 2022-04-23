import { render } from "@testing-library/react";
import Navbar from "../navbar/navbar";
import Body from "../Body/Body";

const Main = () => {
    return(
        <div>
            <Navbar />
            <Body />
        </div>
    );
}

export default Main