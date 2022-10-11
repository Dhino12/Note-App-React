import React, { Component } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Search from './components/header/Search';
import ArchivePage from './pages/ArchivePage';
import DetailPageWrapper from './pages/DetailPage';
import HomePage from './pages/HomePage';

class NoteApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
      archives: [],
      notesTmp: undefined,
    };

    this.onSearchNoteHandler = this.onSearchNoteHandler.bind(this);
    this.onArchiveNoteHandler = this.onArchiveNoteHandler.bind(this);
    this.onUnarchive = this.onUnarchive.bind(this);
  }

  onSearchNoteHandler({ title }) {
    this.setState({ search: title });
  }

  onArchiveNoteHandler(archive, notes) {
    this.setState((prevState) => ({
      archives: [...prevState.archives, archive],
    }));

    this.setState({ notesTmp: notes });
  }

  onUnarchive(id) {
    let { archives } = this.state;
    const [notes] = archives.filter((archive) => archive.id === id);
    archives = archives.filter((archive) => archive.id !== id);
    notes.archive = false;

    this.setState((prevState) => ({
      notesTmp: [...prevState.notesTmp, notes],
    }));
    this.setState({ archives });
  }

  render() {
    const { archives, search, notesTmp } = this.state;

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
            <Route path="/" element={<HomePage notesTmp={notesTmp} search={search} onArchive={this.onArchiveNoteHandler} />} />
            <Route path="/archive" element={<ArchivePage archives={archives} search={search} onUnarchive={this.onUnarchive} />} />
            <Route path="/detail/:id" element={<DetailPageWrapper />} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
        </main>
        <Footer />
      </>
    );
  }
}

export default NoteApp;
