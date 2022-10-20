/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

function Search({ search }) {
    const [title, setTitle] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    let titleSearch = searchParams.get('titleSearch');

    if (titleSearch === null) titleSearch = '';

    function changeSearchParams(searchNote) {
        setSearchParams({ titleSearch: searchNote });
    }

    function onInputSearchEventHandler(event) {
        setTitle(event.target.value);
        changeSearchParams(title);
        search(title);
    }

    return (
        <input
          type="text"
          id="search"
          placeholder="Cari catatan kamu...."
          onKeyUp={onInputSearchEventHandler}
          defaultValue={title}
        />
    );
}

Search.propTypes = {
    search: PropTypes.func.isRequired,
};

export default Search;
