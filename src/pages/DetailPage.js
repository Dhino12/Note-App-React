/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prefer-stateless-function */
import { number } from 'prop-types';
import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import NoteDetail from '../components/detail/NoteDetail';
import { getNoteDetail } from '../data/notes';

function DetailPageWrapper() {
    const { id } = useParams();

    return <DetailPage id={Number(id)} />;
}

class DetailPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            note: getNoteDetail(props.id),
        };
    }

    render() {
        const { note } = this.state;
        return (
            <NoteDetail {...note} />
        );
    }
}

DetailPage.propTypes = {
    id: number.isRequired,
};

export default DetailPageWrapper;
