let actual = null;
let anterior = null;

export const pdfStore = {
    set(base64) {
        if (actual) anterior = actual;
        actual = normalizar(base64);
    },

    // 🔹 NUEVO: usado por el COMPARADOR
    setComparacion(pdfA, pdfB) {
        anterior = normalizar(pdfA);
        actual = normalizar(pdfB);
    },

    getActual() {
        return actual;
    },

    getAnterior() {
        return anterior;
    },

    clear() {
        actual = null;
        anterior = null;
    }
};

// helper privado
function normalizar(base64) {
    if (!base64) return null;
    return base64.startsWith("data:")
        ? base64
        : `data:application/pdf;base64,${base64}`;
}
