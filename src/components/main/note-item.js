/* eslint-disable no-alert */
/* eslint-disable no-restricted-globals */
/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import { func, object } from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

function NoteItem({
  noteData, onDelete, onArchive, onUnarchive,
}) {
  const {
    createdAt, title, body, id,
  } = noteData;

  function confirmDelete() {
    if (confirm('Yakin hapus data ini ?')) {
      onDelete(id);
    }
  }

  return (
      <div className="card">
        <p>{createdAt}</p>
        <Link to={`/detail/${id}`}>
          <h1>{title}</h1>
        </Link>
        <p>{body}</p>
        <div className="action">
          <button
            type="button"
            className="bg-red"
            onClick={() => { confirmDelete(); }}
          >
            Delete
          </button>
          {onUnarchive ? (
            <button
              type="button"
              className="arsip"
              onClick={() => { onUnarchive(id); }}
            >
              Unarchive
            </button>
          ) : (
            <button
              type="button"
              className="arsip"
              onClick={() => { onArchive(id); }}
            >
              Arsipkan
            </button>
          )}
        </div>
      </div>
  );
}

NoteItem.propTypes = {
  noteData: object.isRequired,
  onDelete: func.isRequired,
  onArchive: func.isRequired,
  onUnarchive: func,
};

export default NoteItem;
