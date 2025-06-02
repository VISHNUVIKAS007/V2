import NavLinks from '../Navigation/NavLinks';
import SocialLinks from '../Navigation/SocialLinks';
import { personalData } from '../../data/personal';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-content">
                <div className="sidebar-header">
                    <h1 className="name">{personalData.name}</h1>
                    <h2 className="title">{personalData.title}</h2>
                    <p className="tagline">{personalData.tagline}</p>
                </div>

                <nav className="navigation">
                    <NavLinks />
                </nav>

                <div className="sidebar-footer">
                    <SocialLinks />
                </div>
            </div>
        </div>
    );
};

export default Sidebar;