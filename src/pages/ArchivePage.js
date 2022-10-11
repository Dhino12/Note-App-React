/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { string, func, array } from 'prop-types';
import NotesList from '../components/main/notes-list';
import { searchNotes } from '../utils/utils';

class ArchivePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        // eslint-disable-next-line react/prop-types
        const { onUnarchive, search } = this.props;
        let { archives } = this.props;

        if (search.length !== 0) {
            archives = searchNotes(archives, search);
        }

        return (
            <NotesList
              notes={archives}
              onDelete={this.onDeleteNote}
              onUnarchive={onUnarchive}
            />
        );
    }
}

ArchivePage.propTypes = {
    archives: array.isRequired,
    search: string,
    onUnarchive: func.isRequired,
};

export default ArchivePage;
