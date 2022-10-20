// eslint-disable-next-line react/no-unused-class-component-methods
function filtering(datas, id) {
    return datas.filter((note) => note.id !== id);
}

function searchNotes(datas, title) {
    return datas.filter((note) => (
        note.title.toLowerCase().includes(title.toLowerCase())
    ));
}

function deleteNotes(datas, id) {
    return datas.filter((note) => note.id !== id);
}

function unArchiveFilter(datas, id) {
    return datas.filter((archive) => archive.id !== id);
}

export {
    filtering, searchNotes, deleteNotes, unArchiveFilter,
};
