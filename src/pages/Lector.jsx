import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { pdfStore } from "../store/pdfStore";
import "../styles/lector.css";

export default function Lector() {
    const [value, setValue] = useState("");
    const [preview, setPreview] = useState(null);
    const navigate = useNavigate();

    const tieneContenido = value.trim().length > 0;

    const normalizar = (b64) =>
        b64.startsWith("data:")
            ? b64
            : `data:application/pdf;base64,${b64}`;

    const visualizar = () => {
        const pdf = normalizar(value);
        pdfStore.set(pdf);
        setPreview(pdf);
    };

    const fullscreen = () => {
        pdfStore.set(value);
        navigate("/viewer");
    };

    const comparar = () => {
        pdfStore.set(value);
        navigate("/viewer?mode=compare");
    };

    const descargar = () => {
        const pdf = normalizar(value);
        const a = document.createElement("a");
        a.href = pdf;
        a.download = "documento.pdf";
        a.click();
    };

    return (
        <section className="lector-grid">
            <div className="card input-card">
                <h2>Visualizador de PDF</h2>
                <p>Ingresa el código Base64 para visualizar el documento PDF.</p>

                <textarea
                    rows={8}
                    placeholder="Pega aquí el Base64 del PDF"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />

                <div className="actions">
                    <button
                        className="btn primary"
                        onClick={visualizar}
                        disabled={!tieneContenido}
                    >
                        Visualizar
                    </button>

                    <button
                        className="btn secondary"
                        onClick={fullscreen}
                        disabled={!preview}
                    >
                        Pantalla completa
                    </button>

                    <button
                        className="btn tertiary"
                        onClick={comparar}
                        disabled={!preview || !pdfStore.getAnterior()}
                    >
                        Comparar
                    </button>

                    <button
                        className="btn ghost"
                        onClick={descargar}
                        disabled={!preview}
                    >
                        Descargar
                    </button>
                </div>
            </div>

            <div className="card preview-card">
                <h2>Vista previa</h2>

                {!preview ? (
                    <div className="empty-state">
                        <p>Inserta un Base64 y presiona <strong>Visualizar</strong></p>
                        <span>La vista previa aparecerá aquí</span>
                    </div>
                ) : (
                    <iframe src={preview} title="Vista previa PDF" />
                )}
            </div>
        </section>
    );
}
