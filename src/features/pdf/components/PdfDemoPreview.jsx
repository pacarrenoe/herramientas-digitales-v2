import "./PdfDemoPreview.css";

function ToolbarIcon({ children }) {
    return <span className="demo-toolbar-icon" aria-hidden="true">{children}</span>;
}

export default function PdfDemoPreview() {
    return (
        <div className="demo-pdf" aria-label="Vista previa de un documento PDF de ejemplo">
            <div className="demo-pdf-toolbar" aria-hidden="true">
                <div className="demo-toolbar-group">
                    <ToolbarIcon>◧</ToolbarIcon>
                    <ToolbarIcon>⌕</ToolbarIcon>
                    <ToolbarIcon>↑</ToolbarIcon>
                    <ToolbarIcon>↓</ToolbarIcon>
                </div>
                <div className="demo-toolbar-group">
                    <span className="demo-page-number">1</span>
                    <span>/ 3</span>
                </div>
                <span className="demo-toolbar-separator" />
                <div className="demo-toolbar-group">
                    <ToolbarIcon>−</ToolbarIcon>
                    <span>100%</span>
                    <ToolbarIcon>＋</ToolbarIcon>
                </div>
                <div className="demo-toolbar-group demo-toolbar-actions">
                    <ToolbarIcon>⇩</ToolbarIcon>
                    <ToolbarIcon>▣</ToolbarIcon>
                    <ToolbarIcon>⛶</ToolbarIcon>
                </div>
            </div>

            <div className="demo-pdf-canvas">
                <article className="demo-document">
                    <div className="demo-document-copy">
                        <h3>Documento de ejemplo</h3>
                        <span className="demo-title-line" />
                        <h4>Una herramienta para tu productividad</h4>
                        <p>
                            Este es un documento de ejemplo que se muestra en el lector PDF de
                            Herramientas digitales. Puedes visualizar aquí cualquier archivo PDF
                            cargado desde un código Base64 o desde tu equipo.
                        </p>

                        <blockquote>
                            <strong>“</strong>
                            <span>La tecnología hace más simples<br />las tareas complejas.</span>
                        </blockquote>

                        <h4>Características principales</h4>
                        <ul>
                            <li>Visualización rápida y segura</li>
                            <li>Soporte para archivos PDF y Base64</li>
                            <li>Funciona completamente en un navegador</li>
                            <li>Diseño moderno y fácil de usar</li>
                        </ul>
                    </div>

                    <div className="demo-document-art" aria-hidden="true">
                        <svg viewBox="0 0 150 190">
                            <path className="demo-art-blob" d="M31 23C52 5 73 15 91 7c21-9 46 7 52 32 7 27-8 42-3 64 5 26-8 58-33 70-24 12-51 0-65-19-15-20-16-39-27-59C2 72 7 42 31 23Z" />
                            <path className="demo-art-file" d="M46 47h45l25 25v72H46zM91 47v26h25M63 84h23M63 101h36M63 118h36M63 135h25" />
                        </svg>
                    </div>
                </article>
            </div>
        </div>
    );
}
