/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/prop-types */
import { func, string } from 'prop-types';
import React, { Component } from 'react';
import { useSearchParams } from 'react-router-dom';

function SearchWrapper({ search }) {
    const [searchParams, setSearchParams] = useSearchParams();
    const titleSearch = searchParams.get('titleSearch');

    function changeSearchParams({ title }) {
        setSearchParams({ titleSearch: title });
    }

    return <Search onSearch={changeSearchParams} search={search} keyword={titleSearch} />;
}

class Search extends Component {
    constructor(props) {
        super(props);

        let { keyword } = props;
        const { search } = props;
        keyword = (keyword !== null) ? keyword : '';

        this.state = {
            title: '' || keyword,
        };
        search(this.state);

        this.onInputSearchEventHandler = this.onInputSearchEventHandler.bind(this);
    }

    onInputSearchEventHandler(event) {
        this.setState(() => ({
            title: event.target.value,
        }));
        const { search, onSearch } = this.props;
        onSearch(this.state);
        search(this.state);
    }

    render() {
        const { title } = this.state;
        return (
            <input
              type="text"
              id="search"
              placeholder="Cari catatan kamu...."
              onKeyUp={this.onInputSearchEventHandler}
              defaultValue={title}
            />
        );
    }
}

Search.propTypes = {
    onSearch: func.isRequired,
    search: func.isRequired,
    keyword: string.isRequired,
};

SearchWrapper.prototype = {
    search: func.isRequired,
};

export default SearchWrapper;
