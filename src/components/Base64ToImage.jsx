import { useState } from "react";

export default function Base64ToImage({ onPreview }) {
    const [input, setInput] = useState("");

    const handleShow = () => {
        if (!input.trim()) return;

        let src = input.trim();

        // Si viene una etiqueta <img>
        if (src.includes("<img")) {
            const match = src.match(/src=["']([^"']+)["']/);
            if (match) {
                src = match[1];
            }
        }

        // Si es base64 puro
        if (!src.startsWith("data:image")) {
            src = `data:image/png;base64,${src}`;
        }

        onPreview(src);
    };

    return (
        <div className="section-box">
            <h3>Base64 a Imagen</h3>

            <textarea
                placeholder="Pega aquí el Base64, data URL o etiqueta <img>"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />

            <div className="button-row">
                <button
                    className="btn primary"
                    onClick={handleShow}
                    disabled={!input.trim()}
                >
                    Mostrar imagen
                </button>
            </div>
        </div>
    );
}
