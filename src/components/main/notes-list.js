/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';
import React from 'react';
import NoteItem from './note-item';

function NotesList({
 notes, onDelete, onArchive, onUnarchive,
}) {
  if (notes.length === 0) return false;
  return (
    <>
      <center><h1>{(onUnarchive) ? 'Catatan Arsip' : 'Catatan Aktif'}</h1></center>
      <div className="content">
        {notes.map((note) => (
          <NoteItem
            noteData={note}
            key={note.id}
            onDelete={onDelete}
            onArchive={onArchive}
            onUnarchive={onUnarchive}
          />
        ))}
      </div>
    </>
  );
}

NotesList.propTypes = {
  notes: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func,
  onUnarchive: PropTypes.func,
};

export default NotesList;
