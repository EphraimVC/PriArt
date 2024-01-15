import Home from "./Pages/Home";
import Gallery from "./Pages/Gallery";
import Base from "./Pages/Base";
import About from "./Pages/About";
import Reservation from "./Pages/Reservation";
import Thanks from "./Pages/Thanks";

import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Base />}>
                <Route index element={<Home />} />
                <Route path="gallery" element={<Gallery />} />
                <Route path="about" element={<About />} />
                <Route path="reservation" element={<Reservation />} />
                <Route path="thanks" element={<Thanks />} />
            </Route>
        </Routes>
    );
}

export default App;

// function Btn({ onClick, children }) {
//     return (
//         <>
//             <button onClick={""}>{children}</button>
//         </>
//     );
// }
// function Picture() {
//     return <></>;
// }
// function Exposition() {
//     return <></>;
// }
