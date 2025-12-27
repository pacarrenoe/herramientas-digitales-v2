import { pdfStore } from "../store/pdfStore";
import { useNavigate, useSearchParams } from "react-router-dom";
import "../styles/viewer.css";

export default function Viewer() {
    const [params] = useSearchParams();
    const navigate = useNavigate();
    const mode = params.get("mode");

    const descargar = () => {
        const a = document.createElement("a");
        a.href = pdfStore.getActual();
        a.download = "documento.pdf";
        a.click();
    };

    return (
        <div className="viewer-root">
            <header className="viewer-toolbar">
                <button onClick={() => navigate("/lector")}>
                    Volver
                </button>
                <button onClick={descargar}>
                    Descargar
                </button>
            </header>

            {mode === "compare" ? (
                <div className="viewer compare">
                    <iframe
                        src={pdfStore.getAnterior()}
                        title="PDF anterior"
                    />
                    <iframe
                        src={pdfStore.getActual()}
                        title="PDF actual"
                    />
                </div>
            ) : (
                <div className="viewer single">
                    <iframe
                        src={pdfStore.getActual()}
                        title="PDF"
                    />
                </div>
            )}
        </div>
    );
}
