import { NavLink } from "react-router-dom";
import "../styles/topbar.css";

export default function TopBar() {
    return (
        <header className="topbar">
            <div className="topbar-title">Herramientas digitales</div>
            <nav className="topbar-nav">
                <NavLink to="/">Inicio</NavLink>
                <NavLink to="/lector">Lector</NavLink>
                <NavLink to="/comparador">Comparador PDF</NavLink>
                <NavLink to="/conversor">Conversor de imagenes</NavLink>
                <NavLink to="/ascii">Conversor ASCII</NavLink>
            </nav>
        </header>
    );
}
