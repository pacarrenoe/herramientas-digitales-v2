import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { pdfStore } from "../store/pdfStore";
import "../styles/pdf-comparator.css";

export default function PdfComparator() {
    const [pdfA, setPdfA] = useState(null);
    const [pdfB, setPdfB] = useState(null);
    const navigate = useNavigate();

    const leerArchivo = (file, setter) => {
        if (!file) return;

        const reader = new FileReader();
        reader.onload = () => {
            setter(reader.result);
        };
        reader.readAsDataURL(file);
    };

    const visualizarComparacion = () => {
        if (!pdfA || !pdfB) return;

        // 🔥 usamos el nuevo método sin romper el lector
        pdfStore.setComparacion(pdfA, pdfB);
        navigate("/viewer?mode=compare");
    };

    return (
        <section className="pdf-comparator-page">
            <h1 className="page-title">Comparador de PDF</h1>
            <p className="page-subtitle">
                Carga dos documentos PDF y visualízalos lado a lado en pantalla completa.
            </p>

            <div className="pdf-comparator-layout">
                {/* Documento A */}
                <div className="pdf-box">
                    <h3>Documento A</h3>
                    <p>Carga el primer PDF a comparar.</p>
                    <input
                        type="file"
                        accept="application/pdf"
                        onChange={(e) => leerArchivo(e.target.files[0], setPdfA)}
                    />
                </div>

                {/* Documento B */}
                <div className="pdf-box">
                    <h3>Documento B</h3>
                    <p>Carga el segundo PDF a comparar.</p>
                    <input
                        type="file"
                        accept="application/pdf"
                        onChange={(e) => leerArchivo(e.target.files[0], setPdfB)}
                    />
                </div>
            </div>

            <div className="pdf-comparator-actions">
                <button
                    className="btn primary"
                    onClick={visualizarComparacion}
                    disabled={!pdfA || !pdfB}
                >
                    Visualizar comparación
                </button>
            </div>
        </section>
    );
}
