import { Outlet } from "react-router-dom";
import TopBar from "../../shared/components/TopBar";
import "./MainLayout.css";

export default function MainLayout() {
    return (
        <div className="app-root">
            <TopBar />
            <main className="app-content">
                <Outlet />
            </main>
        </div>
    );
}
