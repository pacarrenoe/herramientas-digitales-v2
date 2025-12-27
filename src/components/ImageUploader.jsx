import { useState } from "react";

export default function ImageUploader({ onPreview }) {
    const [base64, setBase64] = useState("");
    const [imgTag, setImgTag] = useState("");

    const handleFile = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();

        reader.onload = () => {
            const dataUrl = reader.result;
            setBase64(dataUrl);

            const imgThymeleaf = `<img th:src="'${dataUrl}'" alt="imagen" />`;
            setImgTag(imgThymeleaf);

            if (onPreview) {
                onPreview(dataUrl);
            }
        };

        reader.readAsDataURL(file);
    };

    const copy = (text) => {
        navigator.clipboard.writeText(text);
    };

    return (
        <>
            {/* Seleccionar imagen */}
            <div className="section-box">
                <h3>Seleccionar imagen</h3>
                <p className="image-helper-text">
                    Podrás visualizar el Base64 y la etiqueta IMG lista para su uso en Thymeleaf.
                </p>

                <input
                    type="file"
                    accept="image/png,image/jpeg,image/jpg,image/webp,image/gif"
                    onChange={handleFile}
                />

                <p className="image-formats">
                    PNG, JPG, JPEG, WEBP, GIF
                </p>


            </div>

            {/* Base64 */}
            {base64 && (
                <div className="section-box">
                    <textarea readOnly value={base64} />
                    <div className="button-row">
                        <button
                            className="btn primary"
                            onClick={() => copy(base64)}
                        >
                            Copiar Base64
                        </button>
                    </div>
                </div>
            )}

            {/* IMG Thymeleaf */}
            {imgTag && (
                <div className="section-box">
                    <textarea readOnly value={imgTag} />
                    <div className="button-row">
                        <button
                            className="btn secondary"
                            onClick={() => copy(imgTag)}
                        >
                            Copiar etiqueta IMG
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
