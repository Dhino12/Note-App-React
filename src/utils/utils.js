// eslint-disable-next-line react/no-unused-class-component-methods
function filtering(datas, id) {
    let results = null;
    const [dataFiltering] = datas.filter((note) => note.id === id);
    results = datas.filter((note) => note.id !== id);

    return [dataFiltering, results];
}

export default filtering;
