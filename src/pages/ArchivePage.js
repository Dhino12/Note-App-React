/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NotesList from '../components/main/notes-list';
import { deleteNotes, searchNotes, unArchive } from '../utils/utils';
import EmptyNotes from '../components/empty/EmptyNotes';

class ArchivePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            archives: props.archives,
        };

        this.onDeleteNote = this.onDeleteNote.bind(this);
        this.onUnarchive = this.onUnarchive.bind(this);
    }

    onDeleteNote(id) {
        let { archives } = this.props;
        const { onUnarchive } = this.props;

        archives = deleteNotes(archives, id);
        this.setState({ archives });
        onUnarchive(undefined, archives);
    }

    onUnarchive(id) {
        const { archives } = this.state;
        const { onUnarchive } = this.props;

        const [notes, archivesData] = unArchive(archives, id);
        this.setState({ archives: archivesData });

        onUnarchive(notes, archivesData);
    }

    render() {
        const { search } = this.props;
        let { archives } = this.state;

        if (archives.length === 0) {
            return (
                <article className="container">
                    <EmptyNotes page="Arsip" />
                </article>
            );
        }

        if (search.length !== 0) {
            archives = searchNotes(archives, search);
        }

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
    archives: PropTypes.array.isRequired,
    search: PropTypes.string.isRequired,
    onUnarchive: PropTypes.func.isRequired,
};

export default ArchivePage;
