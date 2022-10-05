import React from 'react';
import '../../../App';
import { API_URL } from '../../../API';
import { useAppContext } from '../../context/appContext';
import { useNavigate } from 'react-router-dom';

const Genres = () => {
  return (
    <div className='Genre'>
      <center>
        <h4>Horror</h4>
        <h4>Drama</h4>
        <h4>Action</h4>
        <h4>Fantasy</h4>
        <h4>Fiction</h4>
        <h4>Classical</h4>
        <h4>Romance</h4>
        <h4>Paranormal</h4>
      </center>
    </div>
  )
}

export default Genres