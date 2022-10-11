/* eslint-disable react/prop-types */

import { string } from 'prop-types';

/* eslint-disable react/react-in-jsx-scope */
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
    page: string.isRequired,
};

export default EmptyNotes;
