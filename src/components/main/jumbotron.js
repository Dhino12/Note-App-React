/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import PropTypes from 'prop-types';
import { React } from 'react';
import NoteContext from '../../context/NoteContext';
import { en, id } from '../../utils/localization';

function Jumbotron({ showModal }) {
  return (
    <NoteContext.Consumer>
      {({ language }) => (
        <div id="jumbotron">
          <div className="content-jumbotron">
            <h1>{ language === 'ID' ? id.descApp : en.descApp }</h1>
            <div className="addNote">
              <button type="button" onClick={showModal} className="button-add">
                { language === 'ID' ? id.addButton : en.addButton }
              </button>
              <p>
                { language === 'ID' ? id.descAddButton : en.descAddButton }
              </p>
            </div>
          </div>
          <img src="/peep-17.png" alt="" />
        </div>
      )}
    </NoteContext.Consumer>
  );
}

Jumbotron.propTypes = {
  showModal: PropTypes.func.isRequired,
};

export default Jumbotron;
