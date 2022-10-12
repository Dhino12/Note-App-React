// eslint-disable-next-line react/no-unused-class-component-methods
function filtering(datas, id) {
    let results = null;
    const [dataFiltering] = datas.filter((note) => note.id === id);
    results = datas.filter((note) => note.id !== id);

    return [dataFiltering, results];
}

function searchNotes(datas, title) {
    return datas.filter((note) => (
        note.title.toLowerCase().includes(title.toLowerCase())
    ));
}

function deleteNotes(datas, id) {
    return datas.filter((note) => note.id !== id);
}

function unArchive(datas, id) {
    const [notes] = datas.filter((archive) => archive.id === id);
    notes.archived = false;
    const archivesData = datas.filter((archive) => archive.id !== id);

    return [notes, archivesData];
}

export {
    filtering, searchNotes, deleteNotes, unArchive,
};
