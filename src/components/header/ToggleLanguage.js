import React from 'react';
import NoteContext from '../../context/NoteContext';

function ToggleLanguage() {
    return (
        <NoteContext.Consumer>
            {({ language, toggleLanguage }) => (
                    <button type="button" className="toggle-language" onClick={toggleLanguage}>
                        {' '}
                        { language === 'ID' ? (
                            'EN'
                        ) : (
                            'ID'
                        ) }
                        {' '}
                    </button>
                )}
        </NoteContext.Consumer>
    );
}

export default ToggleLanguage;
