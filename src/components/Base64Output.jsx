export default function Base64Output({ base64, preview }) {
    const copy = async () => {
        await navigator.clipboard.writeText(base64);
    };

    return (
        <div className="card">
            <h2>Resultado</h2>

            {preview && (
                <img
                    src={preview}
                    alt="Vista previa"
                    className="image-preview"
                />
            )}

            {base64 && (
                <>
          <textarea
              readOnly
              value={base64}
              rows={6}
          />

                    <button onClick={copy}>
                        Copiar Base64
                    </button>

                    <div className="thymeleaf">
                        <code>
                            {'<img th:src="'}
                            {base64}
                            {'" />'}
                        </code>
                    </div>
                </>
            )}
        </div>
    );
}
