import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { pdfStore } from "../store/pdfStore";
import "../styles/lector.css";

export default function LectorApi() {
    const [jsonBody, setJsonBody] = useState(`{
  "archivo": "DCAEP",
  "data": {}
}`);
    const [preview, setPreview] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const visualizar = async () => {
        try {
            setLoading(true);

            const response = await fetch("http://localhost:8451/api/pdf/v1", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: jsonBody
            });

            const result = await response.json();

            const base64 = result?.data?.retorno?.file;
            if (!base64) {
                alert("La respuesta no contiene un PDF válido");
                return;
            }

            const pdf = base64.startsWith("data:")
                ? base64
                : `data:application/pdf;base64,${base64}`;

            pdfStore.set(pdf);
            setPreview(pdf);
        } catch (e) {
            console.error(e);
            alert("Error al consumir el servicio PDF");
        } finally {
            setLoading(false);
        }
    };

    const fullscreen = () => {
        pdfStore.set(preview);
        navigate("/viewer");
    };

    const descargar = () => {
        const a = document.createElement("a");
        a.href = preview;
        a.download = "documento.pdf";
        a.click();
    };

    return (
        <section className="lector-grid">
            {/* INPUT */}
            <div className="card input-card">
                <h2>Generador de PDF (API)</h2>
                <p>
                    Ingresa el cuerpo JSON. El PDF se generará automáticamente desde el servicio.
                </p>

                <textarea
                    rows={12}
                    value={jsonBody}
                    onChange={(e) => setJsonBody(e.target.value)}
                />

                <div className="actions">
                    <button
                        className="btn primary"
                        onClick={visualizar}
                        disabled={loading}
                    >
                        {loading ? "Generando..." : "Visualizar"}
                    </button>

                    <button
                        className="btn secondary"
                        onClick={fullscreen}
                        disabled={!preview}
                    >
                        Pantalla completa
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

            {/* PREVIEW */}
            <div className="card preview-card">
                {!preview ? (
                    <div className="empty-state">
                        <p>Completa el JSON y presiona <strong>Visualizar</strong></p>
                        <span>El PDF aparecerá aquí</span>
                    </div>
                ) : (
                    <iframe src={preview} title="Vista previa PDF" />
                )}
            </div>
        </section>
    );
}
