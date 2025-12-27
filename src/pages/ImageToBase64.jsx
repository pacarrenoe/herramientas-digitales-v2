import { useState } from "react";
import ImageUploader from "../components/ImageUploader";
import Base64ToImage from "../components/Base64ToImage";
import "../styles/image-base64.css";

/* =========================
   Accordion controlado
========================= */
function Accordion({ title, isOpen, onToggle, children }) {
    return (
        <div className="accordion">
            <button
                className="accordion-header"
                onClick={onToggle}
                type="button"
            >
                <span>{title}</span>
                <span className="accordion-icon">{isOpen ? "−" : "+"}</span>
            </button>

            {isOpen && (
                <div className="accordion-content">
                    {children}
                </div>
            )}
        </div>
    );
}

/* =========================
   Página principal
========================= */
export default function ImageToBase64() {
    const [previewSrc, setPreviewSrc] = useState(null);
    const [activeMode, setActiveMode] = useState(null); // "upload" | "view"

    const openUpload = () => {
        setActiveMode("upload");
        setPreviewSrc(null);
    };

    const openView = () => {
        setActiveMode("view");
        setPreviewSrc(null);
    };

    return (
        <section className="image-page">

            <div className="image-layout">
                {/* ================= IZQUIERDA ================= */}
                <div className="image-actions">
                    <Accordion
                        title="1. Convertir imagen a Base64"
                        isOpen={activeMode === "upload"}
                        onToggle={openUpload}
                    >
                        <ImageUploader
                            onPreview={(src) => {
                                setPreviewSrc(src);
                                setActiveMode("upload");
                            }}
                        />
                    </Accordion>

                    <Accordion
                        title="2. Visualizar etiqueta IMG / Base64"
                        isOpen={activeMode === "view"}
                        onToggle={openView}
                    >
                        <Base64ToImage
                            onPreview={(src) => {
                                setPreviewSrc(src);
                                setActiveMode("view");
                            }}
                        />
                    </Accordion>
                </div>

                {/* ================= DERECHA ================= */}
                <div className="image-preview">
                    {previewSrc ? (
                        <img src={previewSrc} alt="Vista previa" />
                    ) : (
                        <div className="empty-preview">
                            {activeMode
                                ? "La vista previa aparecerá aquí"
                                : "Selecciona una opción para comenzar"}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
