import React from 'react';
import NavigationItems from "../NavigationItems/NavigationItems";

const Toolbar = () => {
    return (
        <header className="Toolbar">
            <div className="Toolbar-logo">
                <div>Logo</div>
            </div>
            <nav>
                <NavigationItems/>
            </nav>
        </header>
    );
};

export default Toolbar;
