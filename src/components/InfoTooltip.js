import React from 'react';
import PopupWithForm from './PopupWithForm';

function InfoTooltip({ isOpen, onClose, statusImage, statusText }) {
  return (
    <PopupWithForm
      isOpened={isOpen}
      onClose={onClose}
      name="sign-status"
      statusImage={statusImage}
      title={statusText}
    >
    </PopupWithForm>
  );
}

export default InfoTooltip;
