import { Outlet } from "react-router-dom";
import TopBar from "../components/TopBar";
import "../styles/layout.css";

export default function Layout() {
    return (
        <div className="app-root">
            <TopBar />
            <main className="app-content">
                <Outlet />
            </main>
        </div>
    );
}
