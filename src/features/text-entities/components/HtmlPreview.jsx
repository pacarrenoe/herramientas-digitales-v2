export default function HtmlPreview({ html }) {
    if (!html || !html.trim()) {
        return <div className="html-preview empty">Sin contenido</div>;
    }

    return (
        <div className="html-preview">
            <div
                className="html-preview-content"
                dangerouslySetInnerHTML={{
                    __html: html.replace(/\n/g, "<br/>"),
                }}
            />
        </div>
    );
}
