/* eslint-disable react/prop-types */
import React from 'react';

function NoteDetail({
 id, title, body, createdAt,
}) {
    console.log(id);
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

export default NoteDetail;
