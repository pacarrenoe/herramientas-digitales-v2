import { useState } from "react";
import { convertTextToEntities } from "../utils/convertText";
import "../styles/text-to-entities.css";
import Modal from "../components/Modal";
import HtmlPreview from "../components/HtmlPreview";

export default function TextToEntities() {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");
    const [showModal, setShowModal] = useState(false);

    const handleConvert = () => {
        setOutput(convertTextToEntities(input));
    };

    const copy = () => {
        navigator.clipboard.writeText(output);
    };

    return (
        <section className="entities-page">
            <h1 className="page-title">Texto con código ASCII</h1>
            <p className="page-subtitle">
                Convierte texto plano a entidades HTML usando un diccionario configurable.
            </p>

            <div className="entities-layout">
                {/* TEXTO ORIGINAL */}
                <div className="entities-box">
                    <h3>Texto original</h3>
                    <textarea
                        placeholder="Pega aquí el texto original…"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />

                    <button
                        className="btn primary"
                        onClick={handleConvert}
                        disabled={!input.trim()}
                    >
                        Convertir
                    </button>
                </div>

                {/* TEXTO CONVERTIDO */}
                <div className="entities-box">
                    <h3>Texto convertido</h3>
                    <textarea
                        readOnly
                        value={output}
                        placeholder="Aquí aparecerá el texto convertido…"
                    />

                    <div className="entities-actions">
                        <button
                            className="btn secondary"
                            onClick={copy}
                            disabled={!output}
                        >
                            Copiar resultado
                        </button>

                        {output && (
                            <button
                                className="btn ghost"
                                onClick={() => setShowModal(true)}
                            >
                                Validar visualización
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {/* MODAL DE VALIDACIÓN */}
            <Modal
                open={showModal}
                title="Vista previa renderizada (HTML real)"
                onClose={() => setShowModal(false)}
            >
                <HtmlPreview html={output} />
            </Modal>
        </section>
    );
}
