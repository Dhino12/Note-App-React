import React, { Component } from 'react';
import NotesList from '../components/main/notes-list';

class ArchivePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        // eslint-disable-next-line react/prop-types
        const { archives, onUnarchive } = this.props;

        return (
            <NotesList
              notes={archives}
              onDelete={this.onDeleteNote}
              onUnarchive={onUnarchive}
            />
        );
    }
}

export default ArchivePage;
