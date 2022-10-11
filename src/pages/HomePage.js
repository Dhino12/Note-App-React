/* eslint-disable class-methods-use-this */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { BsArchive } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import EmptyNotes from '../components/empty/EmptyNotes';
import Jumbotron from '../components/main/jumbotron';
import ModalInput from '../components/main/modal-input';
import NotesList from '../components/main/notes-list';
import { getData } from '../data/notes';
import { filtering, searchNotes } from '../utils/utils';

class HomePage extends Component {
  constructor(props) {
    super(props);

    const { notesTmp } = this.props;
    this.state = {
      showModal: false,
      archives: [],
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
    let { notes, archives } = this.state;
    notes = notes.filter((note) => note.id !== id);
    this.setState({ notes });
    if (archives.length !== 0) {
      archives = archives.filter((note) => note.id !== id);
      this.setState({ archives });
    }
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
          <EmptyNotes />
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

export default HomePage;
