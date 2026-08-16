import Routing from "./routing/Routing";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

function App() {

    return (

        <div className="app">

            <BrowserRouter>

                <Routing />

            </BrowserRouter>

        </div>

    );

}

export default App;