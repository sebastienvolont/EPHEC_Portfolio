import './App.css';
import {Routes, Route} from "react-router-dom"
import Portfolio from "./components/Portfolio";
import Cv from "./components/Cv";

import '@fortawesome/fontawesome'

function App() {
    return (
        <div className="App container-fluid">
            <Routes>
                <Route path={"/"} element={<Portfolio/>}></Route>
                <Route path={"CV"} element={<Cv/>}></Route>
            </Routes>
        </div>
    );
}

export default App;
