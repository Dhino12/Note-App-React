/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';
import React from 'react';
import NoteContext from '../../context/NoteContext';
import { en, id } from '../../utils/localization';
import NoteItem from './note-item';

function NotesList({
 notes, onDelete, onArchive, onUnarchive,
}) {
  if (notes.length === 0) return false;

  return (
    <NoteContext.Consumer>
      {({ language }) => (
        <div className="note-wrapper">
          <center>
            {(onUnarchive) ? (
              <h1>{ language === 'ID' ? id.archiveActive : en.archiveActive }</h1>
            ) : (
              <h1>{ language === 'ID' ? id.noteActive : en.noteActive }</h1>
            )}
          </center>
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
        </div>
      )}
    </NoteContext.Consumer>
  );
}

NotesList.propTypes = {
  notes: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func,
  onUnarchive: PropTypes.func,
};

export default NotesList;
