/* eslint-disable no-restricted-globals */
/* eslint-disable no-alert */
/* eslint-disable react/prop-types */
import React from 'react';

function NoteItem({
  noteData,
  onDelete,
  onArchive,
  onUnarchive,
}) {
  const {
    createdAt,
    title,
    body,
    id,
  } = noteData;

  function confirmDelete() {
    if (confirm('Yakin hapus data ini ?')) {
      onDelete(id);
    }
  }

  return (
    <div className="card">
      <p>{createdAt}</p>
      <h1>{title}</h1>
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

export default NoteItem;
