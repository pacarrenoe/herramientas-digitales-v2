import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Lector from "./pages/Lector";
import LectorV2 from "./pages/LectorV2";
import Viewer from "./pages/Viewer";
import ImageToBase64 from "./pages/ImageToBase64.jsx";
import TextToEntities from "./pages/TextToEntities.jsx";
import PdfCompare from "./pages/PdfComparator.jsx";


export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/lector" element={<Lector />} />
                    <Route path="/lectorV2" element={<LectorV2 />} />
                    <Route path="/conversor" element={<ImageToBase64 />} />
                    <Route path="/ascii" element={<TextToEntities />} />
                    <Route path="/comparador" element={<PdfCompare />} />

                </Route>
                <Route path="/viewer" element={<Viewer />} />
            </Routes>
        </BrowserRouter>
    );
}
