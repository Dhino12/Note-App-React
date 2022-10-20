import React from 'react';
import { MdLightMode, MdOutlineDarkMode } from 'react-icons/md';
import NoteContext from '../../context/NoteContext';

function ToggleTheme() {
    return (
        <NoteContext.Consumer>
            {({ theme, toggleTheme }) => (
                    <button type="button" className="dark-mode" onClick={toggleTheme}>
                        {' '}
                        { theme === 'light' ? (
                            <MdLightMode className="icon-outline-dark" />
                        ) : (
                            <MdOutlineDarkMode className="icon-outline-dark" />
                        ) }
                        {' '}
                    </button>
                )}
        </NoteContext.Consumer>
    );
}

export default ToggleTheme;
