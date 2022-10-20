/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NoteDetail from '../components/detail/NoteDetail';
import { getDetailNote } from '../data/api';

function DetailPage() {
    const [note, setNote] = useState({});
    const { id } = useParams();

    useEffect(() => {
        async function detailNote() {
            const { data } = await getDetailNote(id);
            setNote(data);
        }

        detailNote();
    }, [id]);

    if (note.title !== undefined) {
        return (
            <NoteDetail {...note} />
        );
    }
}

export default DetailPage;
