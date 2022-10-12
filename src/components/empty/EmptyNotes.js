/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import React from 'react';

function EmptyNotes({ page }) {
    return (
        <div className="empty">
            <h1>
                Tidak Ditemukan
                { ` ${page}` }
            </h1>
            <p>Silahkan ditambahkan catatan terlebih dahulu</p>
        </div>
    );
}

EmptyNotes.propTypes = {
    page: PropTypes.string.isRequired,
};

export default EmptyNotes;
