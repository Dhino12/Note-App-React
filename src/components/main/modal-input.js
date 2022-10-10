/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-unused-class-component-methods */
/* eslint-disable react/no-unused-state */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';

class ModalInput extends Component {
  #showHideModal = '';

  constructor(props) {
    super(props);

    this.state = {
      id: new Date().valueOf(),
      title: '',
      body: '',
      createdAt: new Date().toISOString(),
      archived: false,
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    if (event.target.value.length - 1 === 50) {
      return;
    }
    this.setState(() => ({
      title: event.target.value,
    }));
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => ({
      body: event.target.value,
    }));
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    const { addNote } = this.props;
    addNote(this.state);
    alert('Data berhasil ditambahkan');

    // reset
    this.setState(() => ({
      title: '',
    }));

    this.setState(() => ({
      body: '',
    }));
  }

  render() {
    const { show, closeModal } = this.props;
    this.#showHideModal = show ? 'd-flex' : 'd-none';
    const { title, body } = this.state;
    const validateTitle = 50 - title.length === 0;

    return (
      <>
        <form
          action=""
          className={`form-input ${this.#showHideModal}`}
          onSubmit={this.onSubmitEventHandler}
        >
          <label className={validateTitle ? 'text-red' : ''}>
            {`${title.length} / 50`}

            {validateTitle && ' [ oopss judul max 50 karakter ]'}
          </label>
          <input
            type="text"
            placeholder="Masukan Judul"
            className={validateTitle ? 'border-red' : ''}
            value={title}
            onChange={this.onTitleChangeEventHandler}
          />
          <textarea
            type="text"
            placeholder="Tuliskan Catatan kamu disini...."
            cols="30"
            rows="10"
            value={body}
            onChange={this.onBodyChangeEventHandler}
          />
          <div className="d-flex justify-content-space-between">
            <button type="submit" className="button-add me-0">
              Submit
            </button>
            <button
              type="button"
              className="button-add me-0"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </form>
        <div className={show ? 'back-dark' : ''} onClick={closeModal} />
      </>
    );
  }
}

export default ModalInput;
