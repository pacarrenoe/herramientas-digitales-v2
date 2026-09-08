import { NavLink } from "react-router-dom";
import "./TopBar.css";

const navigation = [
    { to: "/", label: "Inicio", icon: "home" },
    { to: "/lector", label: "Lector PDF", icon: "file" },
    { to: "/comparador", label: "Comparador PDF", icon: "compare" },
    { to: "/conversor", label: "Conversor de imágenes", icon: "image" },
    { to: "/ascii", label: "Conversor ASCII", icon: "terminal" },
];

function NavIcon({ name }) {
    const paths = {
        home: <><path d="m3 11 9-8 9 8"/><path d="M5 10v10h14V10M9 20v-6h6v6"/></>,
        file: <><path d="M6 2h8l4 4v16H6z"/><path d="M14 2v5h5M9 12h6M9 16h6"/></>,
        compare: <><rect x="3" y="3" width="12" height="15" rx="2"/><path d="M9 3v4h4M9 21h10a2 2 0 0 0 2-2V9l-5-5"/></>,
        image: <><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m4 17 5-5 4 4 2-2 5 5"/></>,
        terminal: <><path d="m4 6 6 6-6 6M12 19h8"/></>,
    };

    return <svg viewBox="0 0 24 24" aria-hidden="true">{paths[name]}</svg>;
}

export default function TopBar() {
    return (
        <header className="topbar">
            <NavLink to="/" className="topbar-brand" aria-label="Herramientas digitales, inicio">
                <span className="topbar-logo"><NavIcon name="file" /></span>
                <span>Herramientas digitales</span>
            </NavLink>

            <nav className="topbar-nav" aria-label="Navegación principal">
                {navigation.map((item) => (
                    <NavLink key={item.to} to={item.to} end={item.to === "/"}>
                        <NavIcon name={item.icon} />
                        <span>{item.label}</span>
                    </NavLink>
                ))}
            </nav>
        </header>
    );
}
