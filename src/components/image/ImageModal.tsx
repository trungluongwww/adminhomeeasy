import React, { useState } from 'react';
import {  Modal } from '@mui/material';

const fullSize ={
    maxWidth: '100%',
maxHeight: '100%',
width: 'auto',
height: 'auto',
margin: 'auto',
}

const modalContent=  {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height:'100vh',
}

const thumbnail = {
    cursor: 'pointer',
    maxWidth: '100%',
    maxHeight: '140px',
}
const ImageModal = ({ imageUrl }:{imageUrl:string}) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <img
                src={imageUrl}
                alt="Image"
                style={thumbnail}
                onClick={handleOpen}
            />
            <Modal open={open} onClose={handleClose}>
                <div style={modalContent}>
                    <img src={imageUrl} alt="Image" style={fullSize} />
                </div>
            </Modal>
        </div>
    );
};

export default ImageModal;
