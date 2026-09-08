import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../features/home/pages/HomePage";
import ImageConverterPage from "../features/image-converter/pages/ImageConverterPage";
import PdfComparatorPage from "../features/pdf/pages/PdfComparatorPage";
import PdfReaderPage from "../features/pdf/pages/PdfReaderPage";
import PdfViewerPage from "../features/pdf/pages/PdfViewerPage";
import TextToEntitiesPage from "../features/text-entities/pages/TextToEntitiesPage";
import MainLayout from "./layouts/MainLayout";


export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/lector" element={<PdfReaderPage />} />
                    <Route path="/conversor" element={<ImageConverterPage />} />
                    <Route path="/ascii" element={<TextToEntitiesPage />} />
                    <Route path="/comparador" element={<PdfComparatorPage />} />
                    <Route path="/viewer" element={<PdfViewerPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
