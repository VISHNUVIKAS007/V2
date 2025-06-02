import { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import MainContent from './MainContent';

const Layout = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoaded(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`layout-container ${isLoaded ? 'loaded' : ''}`}>
            <aside className="sidebar-wrapper">
                <Sidebar />
            </aside>
            <main className="main-content-wrapper">
                <MainContent />
            </main>
        </div>
    );
};

export default Layout;