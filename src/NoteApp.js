import React, { Component } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import getData from './data/notes';
import Footer from './components/footer/Footer';
import Search from './components/header/Search';
import ArchivePage from './pages/ArchivePage';
import HomePage from './pages/HomePage';

class NoteApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getData(),
      search: [],
      archives: [],
    };

    this.onSearchNoteHandler = this.onSearchNoteHandler.bind(this);
    this.onArchiveNoteHandler = this.onArchiveNoteHandler.bind(this);
    this.onUnarchive = this.onUnarchive.bind(this);
  }

  onSearchNoteHandler({ title }) {
    if (title.length === 0) {
      this.setState({ search: [] });
      return;
    }
    let { search } = this.state;
    const { notes, archives } = this.state;
    search = notes.filter((note) => (
      note.title.toLowerCase().includes(title.toLowerCase())
    ));

    if (archives.length !== 0) {
      search = archives.filter((note) => (
        note.title.toLowerCase().includes(title.toLowerCase())
      ));
    }
    this.setState({ search });
  }

  onArchiveNoteHandler(archive, notes) {
    this.setState((prevState) => ({
      archives: [...prevState.archives, archive],
    }));
    this.setState({ notes });
  }

  onUnarchive(id) {
    let { archives } = this.state;
    const [notes] = archives.filter((archive) => archive.id === id);
    archives = archives.filter((archive) => archive.id !== id);
    notes.archive = false;

    this.setState((prevState) => ({
      notes: [...prevState.notes, notes],
    }));
    this.setState({ archives });
  }

  render() {
    const { archives, notes } = this.state;
    // if (search.length !== 0) {
    //   notes = search;
    // }
    return (
      <>
        <header>
          <Link to="/">
            <h1>Note App</h1>
          </Link>
          <Search search={this.onSearchNoteHandler} />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePage notes={notes} search={notes} onArchive={this.onArchiveNoteHandler} />} />
            <Route path="/archive" element={<ArchivePage archives={archives} onUnarchive={this.onUnarchive} />} />
            <Route path="/detail/:id" />
          </Routes>
        </main>
        <Footer />
      </>
    );
  }
}

export default NoteApp;
