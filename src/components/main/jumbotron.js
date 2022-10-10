/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { React } from 'react';

function Jumbotron({ showModal }) {
  return (
    <div id="jumbotron">
      <div className="content-jumbotron">
        <h1>Tuliskan kegiatan yang ingin kamu lakukan, agar tidak lupa</h1>
        <div className="addNote">
          <button type="button" onClick={showModal} className="button-add">
            Add Note
          </button>
          <p>
            Mulai aktivitas dengan -
            <br />
            menambahkan catatan baru
          </p>
        </div>
      </div>
      <img src="/peep-17.png" alt="" />
    </div>
  );
}

export default Jumbotron;
