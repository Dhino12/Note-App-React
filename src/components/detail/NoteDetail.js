/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import React from 'react';

function NoteDetail({
 title, body, createdAt,
}) {
    return (
        <div className="container">
            <article>
                <i>{createdAt}</i>
                <h1>{title}</h1>
                <p>{body}</p>
            </article>
        </div>
    );
}

NoteDetail.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
};

export default NoteDetail;
