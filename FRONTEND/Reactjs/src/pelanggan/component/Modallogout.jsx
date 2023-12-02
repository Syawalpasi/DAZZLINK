import React from 'react'
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

function Modalkeluar() {
  const navigate = useNavigate ()
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
  <Dropdown.Menu>
                                <Dropdown.Item onClick={() => navigate('/Landinguser')}>Beranda</Dropdown.Item>
                                <Dropdown.Item onClick={() => navigate('/Riwayat')}>Riwayat</Dropdown.Item>
                                <Dropdown.Item onClick={() => navigate('/Profile')}>Profile</Dropdown.Item>
                                <Dropdown.Item onClick={handleShow}>Keluar</Dropdown.Item>
                            </Dropdown.Menu>     
             <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body style={{textAlign: 'center' }}>
          <p><h2>Perhatian!</h2></p>
          <p><h3>Data Anda Belum Tersimpan</h3></p>
          <p>Anda akan otomatis keluar jika meneruskannya </p>
        </Modal.Body>
        <Modal.Footer> 
          
        <Button variant="secondary" onClick={handleClose}>
        <a onClick={() => navigate('/Landing')}   id="button" href="" style={{marginLeft: '-210px',width: '200px' }}>Lanjutkan</a>
          </Button>
          <Button variant="primary" onClick={() => navigate('')} style={{marginRight: '90px' }} >
          <a onClick={handleClose}  id="button" href="" style={{marginLeft: '-20px',width: '200px' , backgroundColor: 'grey'}}>Batal</a>
          </Button>
          <br></br>
          <br></br>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Modalkeluar
