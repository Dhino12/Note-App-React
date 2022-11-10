/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NotesList from '../components/main/notes-list';
import { filtering, searchNotes } from '../utils/utils';
import EmptyNotes from '../components/empty/EmptyNotes';
import { deleteNote, getArchiveNote, unArchive } from '../data/api';
import { closeLoading, Loading, noData } from '../components/loading/Loading';

class ArchivePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            archives: null,
        };

        this.onDeleteNote = this.onDeleteNote.bind(this);
        this.onUnarchive = this.onUnarchive.bind(this);
    }

    async componentDidMount() {
        Loading();
        const { data } = await getArchiveNote();
        this.setState({ archives: data });
    }

    async onDeleteNote(id) {
        await deleteNote(id);

        const { data } = await getArchiveNote();
        this.setState({ archives: data });
    }

    async onUnarchive(id) {
        await unArchive(id);
        const { archives } = this.state;

        const archivesData = filtering(archives, id);
        this.setState({ archives: archivesData });
    }

    render() {
        const { search } = this.props;
        let { archives } = this.state;
        closeLoading();

        if (archives === null || archives.length === 0) {
            noData('Tidak ada data arsip');
            return (
                <article className="container">
                    <EmptyNotes page="Arsip" />
                </article>
            );
        }

        if (search.length !== 0) {
            archives = searchNotes(archives, search);
        }

        closeLoading();
        return (
            <NotesList
              notes={archives}
              onDelete={this.onDeleteNote}
              onUnarchive={this.onUnarchive}
            />
        );
    }
}

ArchivePage.propTypes = {
    search: PropTypes.string.isRequired,
};

export default ArchivePage;
