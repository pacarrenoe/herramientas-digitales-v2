import { NavLink } from "react-router-dom";
import "./HomePage.css";

export default function HomePage() {
    return (
        <section className="home">
            <div className="home-card">
                <h1>Hola! bienvenido a herramientas digitales</h1>

                <p className="home-description">
                    Herramienta técnica para trabajar con documentos y textos
                    codificados en Base64 y entidades HTML.
                    Permite validar visualmente contenido antes de su uso en
                    Thymeleaf, HTML o generación de PDF.
                </p>

                <div className="home-shortcuts">
                    <NavLink to="/lector" className="home-link">
                        <span className="home-link-title">📄 Lector PDF</span>
                        <span className="home-link-desc">
                            Visualiza, compara y descarga PDFs desde Base64.
                        </span>
                    </NavLink>

                    <NavLink to="/conversor" className="home-link">
                        <span className="home-link-title">🖼️ Imagen a Base64</span>
                        <span className="home-link-desc">
                            Convierte imágenes a Base64 y valida etiquetas IMG.
                        </span>
                    </NavLink>

                    <NavLink to="/ascii" className="home-link">
                        <span className="home-link-title">✍ Texto a ASCII</span>
                        <span className="home-link-desc">
                            Convierte texto plano a entidades HTML configurables.
                        </span>
                    </NavLink>
                </div>
            </div>
        </section>
    );
}
