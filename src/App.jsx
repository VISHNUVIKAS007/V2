import { useEffect } from 'react';
import Layout from './components/Layout/Layout';
import './styles/globals.css';

function App() {
    useEffect(() => {
        // Add smooth scrolling behavior
        document.documentElement.style.scrollBehavior = 'smooth';
    }, []);

    return (
        <div className="app">
            <Layout />
        </div>
    );
}

export default App;