/* eslint-disable react/prop-types */
import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
        };

        this.onInputSearchEventHandler = this.onInputSearchEventHandler.bind(this);
    }

    onInputSearchEventHandler(event) {
        this.setState(() => ({
            title: event.target.value,
        }));
        const { search } = this.props;
        search(this.state);
    }

    render() {
        return (
            <input
              type="text"
              id="search"
              placeholder="Cari catatan kamu...."
              onKeyUp={this.onInputSearchEventHandler}
            />
        );
    }
}

export default Search;
