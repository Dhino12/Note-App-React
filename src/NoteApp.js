import React, { Component } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import NotFound from './components/empty/NotFound';
import Footer from './components/footer/Footer';
import SearchWrapper from './components/header/Search';
import { getNotes, getUserLogged, putAccessToken } from './data/api';
import ArchivePage from './pages/ArchivePage';
import DetailPage from './pages/DetailPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

class NoteApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
      authedUser: null,
      initializing: false,
      notesTmp: undefined,
    };

    this.onSearchNoteHandler = this.onSearchNoteHandler.bind(this);
    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }

  async componentDidMount() {
    const { data } = await getUserLogged();
    const notes = await getNotes();

    this.setState(() => ({
      authedUser: data,
      initializing: false,
      notesTmp: notes.data,
    }));
  }

  async onLoginSuccess({ accessToken }) {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();

    this.setState(() => ({
        authedUser: data,
    }));
  }

  onLogout() {
    this.setState(() => ({
      authedUser: null,
    }));

    putAccessToken('');
  }

  onSearchNoteHandler({ title }) {
    this.setState({ search: title });
  }

  render() {
    const {
      search, notesTmp, initializing, authedUser,
    } = this.state;

    if (initializing) {
      return null;
    }

    if (authedUser === null) {
      return (
        <>
          <header>
            <h1>Note App</h1>
          </header>
          <main>
            <Routes>
              <Route path="/*" element={<LoginPage loginSuccess={this.onLoginSuccess} />} />
              <Route path="/register" element={<RegisterPage />} />
            </Routes>
          </main>
          <Footer />
        </>
      );
    }

    return (
      <>
        <header>
          <Link to="/">
            <h1>Note App</h1>
          </Link>
          <div className="right">
            <SearchWrapper search={this.onSearchNoteHandler} />
            <button type="button" className="logout" onClick={this.onLogout}> Logout </button>
          </div>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePage notesTmp={notesTmp} search={search} />} />
            <Route path="/archive" element={<ArchivePage search={search} />} />
            <Route path="/detail/:id" element={<DetailPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </>
    );
  }
}

export default NoteApp;
