import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import PdfDemoPreview from "../components/PdfDemoPreview";
import { pdfStore } from "../store/pdfStore";
import "./PdfReaderPage.css";

function Icon({ name, size = 24 }) {
    const paths = {
        upload: <><path d="M12 16V4m0 0L7 9m5-5 5 5"/><path d="M5 15v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4"/></>,
        file: <><path d="M6 2h8l4 4v16H6z"/><path d="M14 2v5h5"/></>,
        link: <><path d="m10 13 4-4"/><path d="M7.5 16.5 5 19a3.5 3.5 0 0 1-5-5l4-4a3.5 3.5 0 0 1 5 0M16.5 7.5 19 5a3.5 3.5 0 0 1 5 5l-4 4a3.5 3.5 0 0 1-5 0"/></>,
        eye: <><path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z"/><circle cx="12" cy="12" r="2.5"/></>,
        eraser: <><path d="m19 14-7-7-9 9 5 5h8zM7 12l7 7"/><path d="M16 21h5"/></>,
        expand: <><path d="M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5"/></>,
        download: <><path d="M12 3v12m0 0 5-5m-5 5-5-5"/><path d="M4 18v3h16v-3"/></>,
        help: <><circle cx="12" cy="12" r="9"/><path d="M9.7 9a2.4 2.4 0 1 1 3.8 2c-1 .7-1.5 1.1-1.5 2.3M12 17h.01"/></>,
        check: <><circle cx="12" cy="12" r="10"/><path d="m8 12 2.5 2.5L16 9"/></>,
        arrow: <path d="m8 5 7 7-7 7" />,
    };

    return (
        <svg className="reader-icon" width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
            {paths[name]}
        </svg>
    );
}

export default function PdfReaderPage() {
    const [value, setValue] = useState("");
    const [preview, setPreview] = useState(null);
    const [inputMode, setInputMode] = useState("base64");
    const fileInputRef = useRef(null);
    const navigate = useNavigate();
    const hasContent = value.trim().length > 0;

    const normalizePdf = (base64) => base64.startsWith("data:")
        ? base64
        : `data:application/pdf;base64,${base64}`;

    const showPreview = () => {
        if (!hasContent) return;
        const pdf = normalizePdf(value.trim());
        pdfStore.set(pdf);
        setPreview(pdf);
    };

    const readFile = (file) => {
        if (!file) return;
        const reader = new FileReader();
        reader.onload = () => {
            const pdf = String(reader.result);
            setValue(pdf);
            pdfStore.set(pdf);
            setPreview(pdf);
        };
        reader.readAsDataURL(file);
    };

    const clear = () => {
        setValue("");
        setPreview(null);
        pdfStore.clear();
        if (fileInputRef.current) fileInputRef.current.value = "";
    };

    const openFullscreen = () => {
        if (!preview) return;
        pdfStore.set(preview);
        navigate("/viewer");
    };

    const download = () => {
        if (!preview) return;
        const link = document.createElement("a");
        link.href = preview;
        link.download = "documento.pdf";
        link.click();
    };

    return (
        <section className="pdf-reader-page">
            <div className="reader-columns">
                <div className="reader-left-column">
                    <article className="reader-card reader-input-card">
                        <header className="reader-card-heading">
                            <span className="reader-heading-icon"><Icon name="upload" size={30} /></span>
                            <div>
                                <h1>Cargar documento</h1>
                                <p>Elige cómo quieres ingresar tu PDF</p>
                            </div>
                        </header>

                        <div className="reader-tabs" role="tablist" aria-label="Forma de cargar el PDF">
                            <button className={inputMode === "base64" ? "active" : ""} onClick={() => setInputMode("base64")} role="tab" aria-selected={inputMode === "base64"}>
                                <Icon name="link" /> Pegar Base64
                            </button>
                            <button className={inputMode === "file" ? "active" : ""} onClick={() => { setInputMode("file"); fileInputRef.current?.click(); }} role="tab" aria-selected={inputMode === "file"}>
                                <Icon name="upload" /> Subir archivo PDF
                            </button>
                        </div>

                        <input ref={fileInputRef} className="reader-file-input" type="file" accept="application/pdf" onChange={(event) => readFile(event.target.files[0])} />

                        <div className="reader-field-label">
                            <label htmlFor="pdf-base64">Código Base64 del PDF</label>
                            <details className="reader-help">
                                <summary><Icon name="help" size={20} /> ¿Cómo obtengo el Base64?</summary>
                                <p>Convierte tu PDF a Base64 o selecciona directamente el archivo desde la pestaña superior.</p>
                            </details>
                        </div>
                        <textarea id="pdf-base64" rows={7} placeholder="Pega aquí el código Base64 de tu PDF..." value={value} onChange={(event) => setValue(event.target.value)} />

                        <div className="reader-actions">
                            <button className="primary" onClick={showPreview} disabled={!hasContent}><Icon name="eye" /> Visualizar</button>
                            <button onClick={clear} disabled={!hasContent && !preview}><Icon name="eraser" /> Limpiar</button>
                            <button onClick={openFullscreen} disabled={!preview}><Icon name="expand" /> Pantalla completa</button>
                            <button onClick={download} disabled={!preview}><Icon name="download" /> Descargar</button>
                        </div>
                    </article>

                    <article className="reader-card reader-guide">
                        <header><h2>¿Cómo funciona?</h2><span>Pasos simples para ver tu PDF</span></header>
                        <div className="reader-steps">
                            <div className="reader-step"><span className="reader-step-number">1</span><Icon name="file" size={31} /><div><strong>Pega o sube</strong><p>Ingresa el Base64 o selecciona un archivo PDF</p></div></div>
                            <Icon name="arrow" size={25} />
                            <div className="reader-step"><span className="reader-step-number">2</span><Icon name="eye" size={31} /><div><strong>Visualiza</strong><p>El documento se mostrará en el visor de la derecha</p></div></div>
                            <Icon name="arrow" size={25} />
                            <div className="reader-step"><span className="reader-step-number">3</span><Icon name="download" size={31} /><div><strong>Descarga</strong><p>Guarda el PDF cuando lo necesites</p></div></div>
                        </div>
                    </article>
                </div>

                <article className="reader-card reader-preview-card">
                
                    {preview ? (
                        <iframe src={preview} title="Vista previa del PDF" />
                    ) : (
                        <PdfDemoPreview />
                    )}
                </article>
            </div>
        </section>
    );
}
