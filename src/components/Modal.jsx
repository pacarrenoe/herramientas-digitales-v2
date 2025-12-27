import "../styles/modal.css";

export default function Modal({ open, title, onClose, children }) {
    if (!open) return null;

    return (
        <div className="modal-backdrop">
            <div className="modal">
                <div className="modal-header">
                    <h3>{title}</h3>
                    <button className="modal-close" onClick={onClose}>
                        ✕
                    </button>
                </div>

                <div className="modal-content">
                    {children}
                </div>

                <div className="modal-footer">
                    <button className="btn secondary" onClick={onClose}>
                        Cerrar
                    </button>
                </div>
            </div>
        </div>
    );
}
