/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import { BsArchive } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import EmptyNotes from '../components/empty/EmptyNotes';
import Jumbotron from '../components/main/jumbotron';
import ModalInput from '../components/main/modal-input';
import NotesList from '../components/main/notes-list';
import { getData } from '../data/notes';
import { deleteNotes, filtering, searchNotes } from '../utils/utils';

class HomePage extends Component {
  constructor(props) {
    super(props);

    const { notesTmp } = this.props;
    this.state = {
      showModal: false,
      notes: notesTmp || getData(),
    };

    this.onShowModal = this.onShowModal.bind(this);
    this.onHideModal = this.onHideModal.bind(this);
    this.onDeleteNote = this.onDeleteNote.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onArchiveNoteHandler = this.onArchiveNoteHandler.bind(this);
  }

  onAddNoteHandler({
    title,
    body,
    createdAt,
    archived,
  }) {
    this.setState((prevState) => ({
      notes: [
        ...prevState.notes,
        {
          id: +new Date(),
          title,
          body,
          createdAt,
          archived,
        },
      ],
    }));
  }

  onDeleteNote(id) {
    let { notes } = this.state;
    notes = deleteNotes(notes, id);
    this.setState({ notes });
  }

  onArchiveNoteHandler(id) {
    const { onArchive } = this.props;
    const { notes } = this.state;
    const [dataFiltering, results] = filtering(notes, id);
    dataFiltering.archived = true;

    onArchive(dataFiltering, results);
    this.setState({ notes: results });
  }

  onShowModal() {
    this.setState({ showModal: true });
  }

  onHideModal() {
    this.setState({ showModal: false });
  }

  render() {
    const { showModal } = this.state;
    let { notes } = this.state;
    const { search } = this.props;
    if (search.length !== 0) {
      notes = searchNotes(notes, search);
    }

    return (
      <>
        <ModalInput
          show={showModal}
          closeModal={this.onHideModal}
          addNote={this.onAddNoteHandler}
        />
        <Jumbotron showModal={this.onShowModal} />
        {notes.length === 0 ? (
          <EmptyNotes page="Catatan" />
        ) : (
            <NotesList
              notes={notes}
              onDelete={this.onDeleteNote}
              onArchive={this.onArchiveNoteHandler}
            />
        )}
        <Link to="/archive" className="floatingButton">
            <BsArchive className="archiveButton" />
        </Link>
      </>
    );
  }
}

HomePage.propTypes = {
  notesTmp: PropTypes.array,
  search: PropTypes.string.isRequired,
  onArchive: PropTypes.func.isRequired,
};

export default HomePage;
